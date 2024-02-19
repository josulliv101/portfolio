import Image from "next/image";
import Badge from "./Badge";
import { PortfolioProject, PortfolioState } from "./store";
import { cn } from "./utils";

const CALL_TO_ACTION_CLASSES =
  "md:max-w-64 md:self-end mt-6 py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent hover:bg-blue-500/90 disabled:opacity-60 disabled:pointer-events-none dark:text-blue-500 dark:hover:bg-blue-800/30 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600";

export default function Card({
  title,
  content,
  tags = [],
  photoUrl,
  className,
  isVisible,
  callToAction,
  position,
}: PortfolioProject & { position: number }) {
  return (
    <div
      className={cn(
        `bg-white border p-4 rounded-xl shadow-sm flex flex-col md:flex-row items-start gap-8 min-h-[240px] dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]`,
        className,
        { ["hidden"]: !isVisible }
      )}
    >
      <div className="relative w-full h-full p-0 border rounded-sm md:max-w-[280px]">
        <Image
          className="w-full md:min-w-[278px] h-full object-cover md:w-[280px] md:min-h-[202px]"
          src={photoUrl}
          alt={title}
          width={278}
          height={202}
          priority={position === 0}
        />
      </div>
      <div className="flex flex-wrap px-4 py-2">
        <div className="p-0 flex flex-col h-full">
          <h3 className="text-lg mb-2 font-semibold text-gray-800 dark:text-white whitespace-pre">
            {title}
          </h3>
          <div className="mt-1 text-gray-500 text-lg dark:text-gray-400">
            {Array.isArray(content)
              ? content.map((str, i) => (
                  <p key={i} className="mb-4">
                    {str}
                  </p>
                ))
              : content}
          </div>
          <div className="mt-5 sm:mt-8 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} className=" bg-white border text-gray-900">
                {tag}
              </Badge>
            ))}
          </div>
          {callToAction.href && (
            <a
              target="_blank"
              href={callToAction.href}
              className={cn(
                CALL_TO_ACTION_CLASSES,
                "bg-blue-500 dark:bg-blue-950 text-white dark:text-gray-200 text-center justify-center"
              )}
            >
              {callToAction.label}
            </a>
          )}
          {!callToAction.href && (
            <button
              className={cn(
                CALL_TO_ACTION_CLASSES,
                "text-center justify-center bg-gray-100 dark:bg-gray-700 dark:text-white"
              )}
              disabled={callToAction.disabled}
            >
              {callToAction.label}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
