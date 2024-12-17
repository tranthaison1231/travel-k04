interface TodoFooterProps {
  numberItemLeft: number;
  onCompleted: () => void;
  onFilter: (filter: "all" | "active" | "completed") => void;
  filter: "all" | "active" | "completed";
}

export function TodoFooter({
  numberItemLeft,
  onCompleted,
  onFilter,
  filter,
}: TodoFooterProps) {
  const getFilterClass = (selectFilter: "all" | "active" | "completed") => {
    const addBorder = filter === selectFilter ? "border" : "";
    const className = "p-1 border-pink-500 dark:border-cyan-500";

    return className + " " + addBorder;
  };

  return (
    <footer className="px-[15px] py-[10px] bg-white dark:bg-slate-600 dark:text-white flex justify-between shadow-2xl">
      <div id="counter">{numberItemLeft} item left</div>
      <div className="flex gap-2.5">
        <a
          href="#/"
          className={getFilterClass("all")}
          onClick={() => {
            onFilter("all");
          }}
        >
          All
        </a>
        <a
          href="#/active"
          className={getFilterClass("active")}
          onClick={() => {
            onFilter("active");
          }}
        >
          Active
        </a>
        <a
          href="#/completed"
          className={getFilterClass("completed")}
          onClick={() => {
            onFilter("completed");
          }}
        >
          Completed
        </a>
      </div>
      <button
        className="hover:underline"
        id="clear-completed"
        onClick={onCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
}
