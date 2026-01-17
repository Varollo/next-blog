import clsx from "clsx";

type Props = {
  children?: React.ReactNode;
};

export function Container({ children }: Props) {
  return (
    <div
      className={clsx(
        "text-slate-900 bg-slate-100",
        "dark:text-slate-100 dark:bg-slate-900",
        "min-h-screen"
      )}
    >
      <div className={clsx("max-w-5xl", "mx-auto", "px-8")}>{children}</div>
    </div>
  );
}
