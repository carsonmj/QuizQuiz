import Head from "next/head";

const HeadMeta = ({ title, description, url, image }) => {
  return (
    <Head>
      <title>{title || "Quiz Quiz"}</title>
      <meta
        name="description"
        content={
          description ||
          "Quiz app allows you to solve random quizzes on various topics."
        }
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "Quiz Quiz"} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://quizquiz.vercel.app"} />
      <meta property="og:image" content={image || "https://user-images.githubusercontent.com/54696956/185004797-fb14981a-e7b3-4842-bb66-3b556249672b.png"} />
      <meta property="og:article:author" content="mj" />
    </Head>
  );
};

export default HeadMeta;
