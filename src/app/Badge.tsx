import { PropsWithChildren } from "react";
import { cn } from "./utils";

export default function Badge({
  children,
  className,
  onClick,
  type,
  ...props
}: React.HTMLProps<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        `inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500 aria-pressed:outline`,
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}