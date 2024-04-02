interface ArticleTextCardProps {
  children: React.ReactNode;
  type: "info" | "warning" | "danger" | "success";
}

const ArticleTextCard = ({ children, type }: ArticleTextCardProps) => {
  switch (type) {
    case "warning":
      return (
        <span className="bg-yellow-100 border-yellow-500 shadow-md text-yellow-900 font-semibold dark:bg-yellow-950 p-4 dark:text-yellow-200 border-t-4 border-l-4 rounded-lg dark:border-yellow-900">
          {children}
        </span>
      );
    case "danger":
      return (
        <span className="bg-red-100 border-red-600 shadow-md text-red-950 font-semibold dark:bg-red-950 p-4 dark:text-red-200 border-t-4 border-l-4 rounded-lg dark:border-red-900">
          {children}
        </span>
      );
    case "success":
      return (
        <span className="bg-emerald-100 border-emerald-600 shadow-md text-emerald-950 font-semibold dark:bg-emerald-950 p-4 dark:text-emerald-200 border-t-4 border-l-4 rounded-lg dark:border-emerald-900">
          {children}
        </span>
      );
    case "info":
      return (
        <span className="bg-blue-100 border-blue-600 shadow-md text-blue-950 font-semibold dark:bg-blue-950 p-4 dark:text-blue-200 border-t-4 border-l-4 rounded-lg dark:border-blue-900">
          {children}
        </span>
      );
    default:
      return <span className={``}>{children}</span>;
  }
};

export default ArticleTextCard;
