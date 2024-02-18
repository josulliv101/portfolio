import Badge from "./Badge";
import { PortfolioState } from "./store";
import { cn } from "./utils";

export default function Card({
  title,
  content,
  tags = [],
  photoUrl,
  className,
  isVisible,
}: PortfolioState["projects"][number]) {
  return (
    <div
      className={cn(
        `bg-white border p-4 rounded-xl shadow-sm flex items-start gap-8 min-h-[240px] dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]`,
        className,
        { ["hidden"]: !isVisible }
      )}
    >
      <div className="relative w-full h-full rounded-t-xl p-0 border rounded-sm max-w-[280px]">
        <img
          className="min-w-[278px] h-full object-cover w-[280px] min-h-[202px]"
          src={photoUrl}
          alt={title}
        />
      </div>
      <div className="flex flex-wrap p-4">
        <div className="p-0 flex flex-col h-full">
          <h3 className="text-lg mb-2 font-semibold text-gray-800 dark:text-white whitespace-pre">
            {title}
          </h3>
          <p className="mt-1 text-gray-500 dark:text-gray-400">{content}</p>
          <div className="mt-5 sm:mt-8 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} className="text-sm gap-x-2 py-2.5 px-6">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
