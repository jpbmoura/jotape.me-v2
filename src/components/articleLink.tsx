interface ArticleLinkProps {
  url: string;
  title: string;
}

const ArticleLink = ({ url, title }: ArticleLinkProps) => {
  return (
    <a href={url} target="_blank">
      {title}
    </a>
  );
};

export default ArticleLink;
