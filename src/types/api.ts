export interface GroceryProduct {
  id: string;
  name: string;
  description: string;
  variant?: string;
  price?: number;
  priceLabel?: string;
  category?: string;
  unit?: string;
  imageUrl?: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  timestamp: Date;
  products?: GroceryProduct[];
  productSectionTitle?: string;
  intent?: string;
  durationMs?: number;
}

export interface WorkflowApiResponse {
  statusCode: number;
  message: string;
  data: {
    ok: boolean;
    success: boolean;
    isCompleted: boolean;
    output: {
      workflow_response?: {
        type: string;
        content: {
          message: string;
          timestamp?: string;
        };
      };
      variables?: {
        message?: string;
        text?: string;
      };
      node_agent?: {
        text?: string;
        _metadata?: AgentMetadata;
      };
      node_agent_2?: {
        text?: string;
        _metadata?: AgentMetadata;
      };
      executionSummary?: {
        durationMs?: number;
      };
    };
  };
}

interface AgentMetadata {
  toolExecutions?: ToolExecution[];
}

interface ToolExecution {
  toolName: string;
  result?: string;
  success?: boolean;
}
