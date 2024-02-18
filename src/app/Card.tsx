import Image from "next/image";
import Badge from "./Badge";
import { PortfolioProject, PortfolioState } from "./store";
import { cn } from "./utils";

const CALL_TO_ACTION_CLASSES =
  "md:max-w-48 md:self-end mt-8 py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:bg-blue-100 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:bg-blue-800/30 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600";

export default function Card({
  title,
  content,
  tags = [],
  photoUrl,
  className,
  isVisible,
  callToAction,
}: PortfolioProject) {
  return (
    <div
      className={cn(
        `bg-white border p-4 rounded-xl shadow-sm flex items-start gap-8 min-h-[240px] dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]`,
        className,
        { ["hidden"]: !isVisible }
      )}
    >
      <div className="relative w-full h-full rounded-t-xl p-0 border rounded-sm max-w-[280px]">
        <Image
          className="min-w-[278px] h-full object-cover w-[280px] min-h-[202px]"
          src={photoUrl}
          alt={title}
          width={278}
          height={202}
        />
      </div>
      <div className="flex flex-wrap px-4 py-2">
        <div className="p-0 flex flex-col h-full">
          <h3 className="text-lg mb-2 font-semibold text-gray-800 dark:text-white whitespace-pre">
            {title}
          </h3>
          <p className="mt-1 text-gray-500 text-lg dark:text-gray-400">
            {content}
          </p>
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
              className={CALL_TO_ACTION_CLASSES}
            >
              {callToAction.label}
            </a>
          )}
          {!callToAction.href && (
            <button
              className={cn(CALL_TO_ACTION_CLASSES, "bg-gray-100")}
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
