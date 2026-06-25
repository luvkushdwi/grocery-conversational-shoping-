interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  disabled?: boolean;
  placeholder?: string;
}

const SUGGESTIONS = [
  "Ingredients to make samosa",
  "What do I need for pasta carbonara?",
  "Healthy breakfast items",
  "Spices for butter chicken",
];

export function ChatInput({
  value,
  onChange,
  onSubmit,
  disabled,
  placeholder = "Ask for recipe ingredients or grocery items…",
}: ChatInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim() && !disabled) onSubmit();
    }
  };

  return (
    <div className="border-t border-stone-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6">
        {!value && !disabled && (
          <div className="mb-3 flex flex-wrap gap-2">
            {SUGGESTIONS.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => onChange(suggestion)}
                className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs text-stone-600 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}

        <div className="flex items-end gap-2 rounded-2xl border border-stone-200 bg-white p-2 shadow-sm focus-within:border-brand-400 focus-within:ring-2 focus-within:ring-brand-100">
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            rows={1}
            placeholder={placeholder}
            className="max-h-32 min-h-[44px] flex-1 resize-none bg-transparent px-3 py-2.5 text-[15px] text-stone-800 placeholder:text-stone-400 focus:outline-none disabled:opacity-50"
          />
          <button
            type="button"
            onClick={onSubmit}
            disabled={disabled || !value.trim()}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white transition hover:bg-brand-700 active:scale-95 disabled:cursor-not-allowed disabled:bg-stone-300"
            aria-label="Send message"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>

        <p className="mt-2 text-center text-[11px] text-stone-400">
          Powered by CogitX workflow · Ask about recipes, ingredients, or groceries
        </p>
      </div>
    </div>
  );
}
