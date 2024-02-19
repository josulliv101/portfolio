import { PropsWithChildren } from "react";
import { cn } from "./utils";

export default function Badge({
  children,
  className,
  onClick,
  type,
  ...props
}: React.HTMLProps<HTMLButtonElement>) {
  const Component = onClick ? "button" : "span";
  return (
    <Component
      className={cn(
        `inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-blue-100 dark:opacity-80 text-blue-800 dark:bg-blue-800/30 dark:text-gray-100 dark:border aria-pressed:bg-blue-100/50 dark:aria-pressed:bg-blue-900/90 outline-blue-200 aria-pressed:outline`,
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
}
