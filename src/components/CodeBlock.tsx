import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function CodeBlock({ children, title }: { children: string; title?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-4 rounded-lg overflow-hidden border border-code-border">
      {title && (
        <div className="bg-code px-4 py-2 text-xs text-muted-foreground border-b border-code-border flex items-center justify-between">
          <span>{title}</span>
          <button onClick={copy} className="hover:text-primary transition-colors">
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
      )}
      <pre className="code-block !rounded-none !border-0 !my-0">
        <code>{children}</code>
      </pre>
    </div>
  );
}
