import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownContentProps {
  content: string;
  variant?: "default" | "user";
}

export function MarkdownContent({ content, variant = "default" }: MarkdownContentProps) {
  const isUser = variant === "user";

  return (
    <div
      className={`markdown-content text-[15px] leading-relaxed ${
        isUser ? "text-white" : "text-stone-800"
      }`}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h3: ({ children }) => (
            <h3
              className={`mb-2 mt-4 text-base font-semibold first:mt-0 ${
                isUser ? "text-white" : "text-stone-900"
              }`}
            >
              {children}
            </h3>
          ),
          p: ({ children }) => <p className="mb-3 last:mb-0">{children}</p>,
          strong: ({ children }) => (
            <strong className={`font-semibold ${isUser ? "text-white" : "text-stone-900"}`}>
              {children}
            </strong>
          ),
          ul: ({ children }) => (
            <ul className="mb-3 list-disc space-y-1 pl-5 last:mb-0">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-3 list-decimal space-y-1 pl-5 last:mb-0">{children}</ol>
          ),
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          hr: () => <hr className={`my-4 border-t ${isUser ? "border-white/20" : "border-stone-200"}`} />,
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`underline underline-offset-2 ${
                isUser ? "text-brand-100" : "text-brand-600"
              }`}
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
