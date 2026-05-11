import { content } from "@/lib/content";
import { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface StatusResponse {
  status: string;
  version: string;
}

export function SystemStatus() {
  const [data, setData] = useState<StatusResponse | null>(null);
  const [error, setError] = useState(false);
  const t = content.systemStatus;

  const fetchStatus = useCallback(async () => {
    try {
      const res = await fetch("/api/v1/system/status");
      if (!res.ok) throw new Error("Failed to fetch");
      const json = await res.json();
      setData(json);
      setError(false);
    } catch {
      setError(true);
    }
  }, []);

  useEffect(() => {
    fetchStatus();
  }, [fetchStatus]);

  return (
    <Card className="w-full max-w-md mx-auto mt-8 border-border">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-foreground">{t.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {error ? (
          <p className="text-destructive font-medium">{t.error}</p>
        ) : !data ? (
          <p className="text-muted-foreground">{t.loading}</p>
        ) : (
          <div className="flex flex-col space-y-2">
            <p className="text-foreground">
              {t.statusLabel} <span className="font-semibold text-primary">{data.status}</span>
            </p>
            <p className="text-sm text-muted-foreground">
              {t.versionLabel} {data.version}
            </p>
          </div>
        )}
        <Button onClick={fetchStatus} variant="secondary" className="w-full">
          {t.refreshButton}
        </Button>
      </CardContent>
    </Card>
  );
}
