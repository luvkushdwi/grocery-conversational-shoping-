import type { ChatMessage } from "../types/api";
import { assignProductImages } from "../utils/productImages";
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
  const productsWithImages = showProducts
    ? assignProductImages(message.products!)
    : [];

  return (
    <div
      className={`animate-fade-up flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div className={`max-w-[90%] sm:max-w-[75%] ${isUser ? "" : "w-full"}`}>
        {!isUser && (
          <div className="mb-2 flex items-center gap-2">
            <img
              src="/yucart-logo.png"
              alt="Yucart AI"
              className="h-7 w-7 rounded-lg object-contain"
            />
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
                ? "rounded-br-md bg-brand-500 text-white shadow-sm shadow-brand-500/25"
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
              {productsWithImages.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  displayImageUrl={product.displayImageUrl}
                  usingDummyImage={product.usingDummyImage}
                />
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
          <span className="typing-dot h-2 w-2 rounded-full bg-brand-500" />
          <span className="typing-dot h-2 w-2 rounded-full bg-brand-500" />
          <span className="typing-dot h-2 w-2 rounded-full bg-brand-500" />
        </div>
      </div>
    </div>
  );
}
