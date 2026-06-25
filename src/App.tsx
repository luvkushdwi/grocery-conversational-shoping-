import { useCallback, useEffect, useRef, useState } from "react";
import { ChatInput } from "./components/ChatInput";
import { ChatMessageBubble, TypingIndicator } from "./components/ChatMessage";
import { Header } from "./components/Header";
import { ApiError, sendChatMessage } from "./services/api";
import type { ChatMessage, GroceryProduct } from "./types/api";
import {
  extractDurationMs,
  extractMessageFromResponse,
  extractProductsFromResponse,
} from "./utils/parseProducts";

function createId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

const WELCOME_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "assistant",
  text: "Hi! I'm your grocery shopping assistant. Tell me what you'd like to cook — for example, \"Ingredients to make samosa\" — and I'll help you find the right items from our store.",
  timestamp: new Date(),
};

export default function App() {
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cart, setCart] = useState<GroceryProduct[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const cartProductIds = new Set(cart.map((p) => p.id));

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = useCallback(async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMessage: ChatMessage = {
      id: createId(),
      role: "user",
      text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setError(null);
    setIsLoading(true);

    try {
      const response = await sendChatMessage(text);
      const assistantMessage: ChatMessage = {
        id: createId(),
        role: "assistant",
        text: extractMessageFromResponse(response),
        timestamp: new Date(),
        products: extractProductsFromResponse(response),
        durationMs: extractDurationMs(response),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      const message =
        err instanceof ApiError
          ? err.message
          : "Something went wrong. Please try again.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading]);

  const handleAddToCart = (product: GroceryProduct) => {
    setCart((prev) => {
      if (prev.some((p) => p.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-brand-50/50 via-stone-50 to-stone-100">
      <Header cartCount={cart.length} />

      <main className="flex flex-1 flex-col overflow-hidden">
        <div className="chat-scroll flex-1 overflow-y-auto">
          <div className="mx-auto max-w-5xl space-y-6 px-4 py-6 sm:px-6">
            {messages.map((message) => (
              <ChatMessageBubble
                key={message.id}
                message={message}
                cartProductIds={cartProductIds}
                onAddToCart={handleAddToCart}
              />
            ))}

            {isLoading && <TypingIndicator />}

            {error && (
              <div className="animate-fade-up rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <div ref={chatEndRef} />
          </div>
        </div>

        <ChatInput
          value={input}
          onChange={setInput}
          onSubmit={handleSend}
          disabled={isLoading}
        />
      </main>
    </div>
  );
}
