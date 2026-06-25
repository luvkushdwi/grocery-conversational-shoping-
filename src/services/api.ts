import axios from "axios";
import type { WorkflowApiResponse } from "../types/api";

const API_URL = "/api/jobs";

export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number
  ) {
    super(message);
    this.name = "ApiError";
  }
}

function parseErrorMessage(data: unknown): string {
  if (typeof data === "string") {
    try {
      const parsed = JSON.parse(data) as { message?: string; data?: string };
      return parsed.message ?? parsed.data ?? data;
    } catch {
      return data;
    }
  }

  if (data && typeof data === "object") {
    const record = data as { message?: string; data?: string };
    return record.message ?? record.data ?? "Request failed.";
  }

  return "Request failed.";
}

export async function sendChatMessage(text: string): Promise<WorkflowApiResponse> {
  try {
    const { data } = await axios.post<WorkflowApiResponse>(
      API_URL,
      { text },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!data.data?.success) {
      throw new ApiError(data.message || "Workflow execution failed.");
    }

    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }

    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const message = parseErrorMessage(error.response?.data ?? error.message);
      throw new ApiError(message, status);
    }

    throw new ApiError("Something went wrong. Please try again.");
  }
}
