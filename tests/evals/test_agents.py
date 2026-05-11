import os

import pytest

# Added extract_routing_queue to explicitly test the AI's routing decisions
from orchestrator import LLMClient, assemble_context, extract_routing_queue, read_file


@pytest.fixture(scope="module")
def client():
    """Provide a single LLMClient instance for the module to use."""
    return LLMClient()


@pytest.mark.eval
def test_strategy_rejects_out_of_scope_ideas(client):
    """EVAL: Strategy agent must ruthlessly kill ideas outside the thesis."""
    system_prompt = read_file(os.path.join("agents", "strategy.xml"))
    system_prompt += assemble_context("Strategy")

    user_prompt = "Let's pivot and build a 3D multiplayer mobile racing game."

    response = client.call("Strategy", system_prompt, user_prompt)

    # HIGH-SIGNAL ASSERTION: The queue must be explicitly empty
    queue = extract_routing_queue(response)
    assert queue == [], f"Expected empty routing queue for rejected idea, got {queue}"
    assert "write_files" not in response, "FAILED: Strategy tried to write a rejected idea."


@pytest.mark.eval
def test_strategy_accepts_valid_b2b_ideas(client):
    """EVAL: Strategy agent must accept and route valid B2B SaaS ideas."""
    system_prompt = read_file(os.path.join("agents", "strategy.xml"))
    system_prompt += assemble_context("Strategy")

    user_prompt = (
        "Users are complaining they can't export their user lists. "
        "Let's add a CSV export button to the admin dashboard."
    )

    response = client.call("Strategy", system_prompt, user_prompt)

    # HIGH-SIGNAL ASSERTION: The queue must explicitly route to Product Spec
    queue = extract_routing_queue(response)
    assert queue and queue[0] == "Product Spec", f"FAIL: Should route to Product Spec, got {queue}"
