import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ArticleWrapperProps {
  children: React.ReactNode;
  date: string;
}

const ArticleWrapper = ({ children, date }: ArticleWrapperProps) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-row justify-end pb-4 items-center gap-1">
        <div
          className="flex flex-row cursor-pointer group font-medium hover:text-cyan-500 dark:hover:text-purple-500 transition-colors gap-1 items-center"
          onClick={() => navigate("/blog")}
        >
          <ArrowLeft />
          <span className="group-hover:underline">Voltar</span>
        </div>
      </div>
      <div>{children}</div>
      <div className="pt-16 flex justify-end italic text-zinc-500 dark:text-zinc-400 text-sm">
        João Pedro - {date}
      </div>
    </>
  );
};

export default ArticleWrapper;
