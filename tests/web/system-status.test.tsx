import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
// Explicitly add .tsx/.ts so ESM knows exactly what file to load
import { SystemStatus } from "../../src/web/components/system-status.tsx";
import { content } from "../../src/web/lib/content.ts";

describe("SystemStatus Component", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders the loading state initially", () => {
    // Mock fetch to never resolve so we can see the loading state
    global.fetch = vi.fn(() => new Promise(() => {}));
    render(<SystemStatus />);
    expect(screen.getByText(content.systemStatus.title)).toBeDefined();
    expect(screen.getByText(content.systemStatus.loading)).toBeDefined();
  });

  it("renders the success state with data", async () => {
    // Mock a successful fetch response
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ status: "operational", version: "1.0.0" }),
    });

    render(<SystemStatus />);

    // Wait for the mock data to populate
    await waitFor(() => {
      expect(screen.getByText("operational")).toBeDefined();
      expect(screen.getByText(/1\.0\.0/)).toBeDefined();
    });
  });

  it("renders the error state when fetch fails", async () => {
    // Mock a failed fetch response
    global.fetch = vi.fn().mockRejectedValue(new Error("API Down"));

    render(<SystemStatus />);

    await waitFor(() => {
      expect(screen.getByText(content.systemStatus.error)).toBeDefined();
    });
  });
});
