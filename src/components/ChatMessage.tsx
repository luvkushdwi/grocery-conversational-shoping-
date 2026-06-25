import type { ChatMessage } from "../types/api";
import { MarkdownContent } from "./MarkdownContent";
import { ProductCard } from "./ProductCard";

interface ChatMessageBubbleProps {
  message: ChatMessage;
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export function ChatMessageBubble({ message }: ChatMessageBubbleProps) {
  const isUser = message.role === "user";
  const showProducts = !isUser && message.products && message.products.length > 0;

  return (
    <div
      className={`animate-fade-up flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div className={`max-w-[90%] sm:max-w-[75%] ${isUser ? "" : "w-full"}`}>
        {!isUser && (
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <span className="text-xs font-medium text-stone-500">Yucart AI</span>
            {message.durationMs && (
              <span className="text-[10px] text-stone-400">
                · {(message.durationMs / 1000).toFixed(1)}s
              </span>
            )}
          </div>
        )}

        {message.text && (
          <div
            className={`rounded-2xl px-4 py-3 ${
              isUser
                ? "rounded-br-md bg-brand-600 text-white shadow-sm shadow-brand-600/20"
                : "rounded-bl-md border border-stone-200 bg-white shadow-sm"
            }`}
          >
            <MarkdownContent
              content={message.text}
              variant={isUser ? "user" : "default"}
            />
          </div>
        )}

        <p
          className={`mt-1.5 text-[11px] text-stone-400 ${isUser ? "text-right" : ""}`}
        >
          {formatTime(message.timestamp)}
        </p>

        {showProducts && (
          <div className="mt-4">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-stone-500">
              {message.productSectionTitle ?? "Suggested items from store"}
            </p>
            <div className="flex gap-3 overflow-x-auto pb-2 chat-scroll">
              {message.products!.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function TypingIndicator() {
  return (
    <div className="animate-fade-up flex justify-start">
      <div className="rounded-2xl rounded-bl-md border border-stone-200 bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center gap-1.5">
          <span className="typing-dot h-2 w-2 rounded-full bg-brand-400" />
          <span className="typing-dot h-2 w-2 rounded-full bg-brand-400" />
          <span className="typing-dot h-2 w-2 rounded-full bg-brand-400" />
        </div>
      </div>
    </div>
  );
}
