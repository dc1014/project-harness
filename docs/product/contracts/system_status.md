# Data Contract: System Status

## API: GET /api/v1/system/status

**Response Payload (200 OK):**
```json
{
  "status": "operational",
  "version": "1.0.0"
}
```
*Note: If the backend is unreachable, the frontend must intercept the 500/network error and display the fallback UI.*