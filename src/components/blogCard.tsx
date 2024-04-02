import { ReactElement } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useNavigate } from "react-router-dom";

interface BlogCardProps {
  title: string;
  content: ReactElement;
  date: string;
  routePath?: string;
}

const BlogCard = ({ title, date, content, routePath }: BlogCardProps) => {
  const navigate = useNavigate();
  return (
    <>
      <Card
        onClick={() => navigate(`/blog/${routePath}`)}
        className="group hover:-translate-y-1 hover:shadow-md transition-all hover:cursor-pointer"
      >
        <CardHeader>
          <CardTitle className="text-xl font-bold group-hover:text-cyan-500 dark:group-hover:text-purple-500 transition-colors">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="w-full h-28 rounded-lg max-h-full">
          {content}
        </CardContent>
        <CardFooter className="text-stone-400 text-sm flex justify-end">
          {date}
        </CardFooter>
      </Card>
    </>
  );
};

export default BlogCard;
