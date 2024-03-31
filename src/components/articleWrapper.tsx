import { ArrowBigLeft, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ArticleWrapperProps {
  children: React.ReactNode;
}

const ArticleWrapper = ({ children }: ArticleWrapperProps) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-row justify-end pb-4 items-center gap-1">
        <div
          className="flex flex-row cursor-pointer group font-medium hover:text-cyan-600 dark:hover:text-purple-600 transition-colors gap-1 items-center"
          onClick={() => navigate("/blog")}
        >
          <ArrowLeft />
          <span className="group-hover:underline">Voltar</span>
        </div>
      </div>
      <div>{children}</div>
    </>
  );
};

export default ArticleWrapper;
