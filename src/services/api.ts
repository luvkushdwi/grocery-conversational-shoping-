import type { WorkflowApiResponse } from "../types/api";

const API_URL =
  import.meta.env.VITE_API_URL ??
  "https://cpab.cogitx.ai/project/exports/rest-api/6a016bf971e1d54ed336d155/jobs";
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;
const HTTP_METHOD = "POST" as const;

export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function sendChatMessage(text: string): Promise<WorkflowApiResponse> {
  if (!CLIENT_ID || !CLIENT_SECRET) {
    throw new ApiError(
      "Missing API configuration. Check your .env file for VITE_CLIENT_ID and VITE_CLIENT_SECRET."
    );
  }

  const request = new Request(API_URL, {
    method: HTTP_METHOD,
    headers: {
      "Content-Type": "application/json",
      "x-client-id": CLIENT_ID,
      "x-client-secret": CLIENT_SECRET,
    },
    body: JSON.stringify({ text }),
  });

  const response = await fetch(request);

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new ApiError(
      errorText || `Request failed with status ${response.status}`,
      response.status
    );
  }

  const data = (await response.json()) as WorkflowApiResponse;

  if (!data.data?.success) {
    throw new ApiError(data.message || "Workflow execution failed.");
  }

  return data;
}
