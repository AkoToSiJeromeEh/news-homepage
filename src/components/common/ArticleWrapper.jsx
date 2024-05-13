import PropTypes from "prop-types";

export const ArticleWrapper = ({ children , style}) => {
  return <article className={`${style}`}>{children}</article>;
};

ArticleWrapper.propTypes = {
  children: PropTypes.node,
  style : PropTypes.string
};
