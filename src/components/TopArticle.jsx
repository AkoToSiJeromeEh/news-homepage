import { ArticleWrapper } from "./common";
import PropTypes from "prop-types";

export const TopArticle = ({ title, description, image, index }) => {
  return (
    <ArticleWrapper style=" flex gap-5  cursor-pointer ">
      <picture>
        <img className=" w-full h-full Mobile:h-auto Mobile:max-w-[6rem] object-cover"  src={image} />
      </picture>
      <div className="font-bold flex flex-col gap-2">
        <h1 className=" text-2xl text-grayish-blue">0{index}</h1>
        <h2 className=" text-lg hover:text-soft-red transition-colors  ">{title}</h2>
        <p className=" font-medium text-dark-grayish-blue max-w-[27ch]">{description}</p>
      </div>
    </ArticleWrapper>
  );
};

TopArticle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  index: PropTypes.number,
};
