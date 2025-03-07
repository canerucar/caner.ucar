import type { careerItems } from "@/lib/utils";

export function CareerCard({ item }: { item: (typeof careerItems)[number] }) {
  return (
    <div className="overflow-hidden rounded-3xl shadow-[rgba(0,_0,_0,_0.15)_0px_20px_40px_-12px] bg-card/20 p-6 ring-2 hover:ring-3 ring-zinc-900/5 dark:ring-zinc-800 transition-all duration-500 hover:ring-zinc-600/20 dark:hover:ring-zinc-700">
      <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
        <span>{item.location}</span>{" "}
        <span>
          {item.from} — {item.to}
        </span>
      </div>
      <div className="mb-3 flex flex-col items-start justify-between gap-2 text-balance text-lg sm:flex-row sm:items-center">
        <div className="font-medium">
          {item.title} <span className="text-muted-foreground">at</span>{" "}
          {item.company.name}
        </div>
      </div>
      <div className="flex flex-col gap-2 text-sm leading-normal sm:gap-3 sm:text-base text-muted-foreground whitespace-pre-line">
        {item.description}
      </div>

      {/* 
      {item.subRoles?.length && (
        <blockquote className="mt-5 text-sm text-muted-foreground border-l-[3px] border-border/70 rounded-l-lg pl-4">
          {item.subRoles.map((role, index) => (
            <div key={`role-${index}`}>
              <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>{role.location}</span>{" "}
                <span>
                  {role.from} — {role.to || "Present"}
                </span>
              </div>
              <div className="mb-3 flex flex-col items-start text-foreground justify-between gap-2 text-balance text-lg sm:flex-row sm:items-center">
                <div className="font-medium">{role.title} </div>
              </div>
              <div className="flex flex-col gap-2 text-sm leading-normal sm:gap-3 sm:text-base text-muted-foreground">
                {role.description}
              </div>
            </div>
          ))}
        </blockquote>
      )}
      */}
    </div>
  );
}
