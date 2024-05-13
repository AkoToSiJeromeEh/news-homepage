import PropTypes from "prop-types";
import { ArticleWrapper } from "./common";
export const NewestArticle = ({ title, description, index }) => {
  return (
    <ArticleWrapper
      style={` flex flex-col   gap-2 my-5 ${
        index !== 2 ? " border-b-[0.1px] border-dark-grayish-blue  pb-8  " : " "
      } cursor-pointer  `}
    >
      <h2 className=" text-off-white font-bold text-lg hover:text-soft-orange transition-colors">{title}</h2>
      <p className=" text-grayish-blue max-w-[47ch]">{description}</p>
    </ArticleWrapper>
  );
};

NewestArticle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  index: PropTypes.number,
};
