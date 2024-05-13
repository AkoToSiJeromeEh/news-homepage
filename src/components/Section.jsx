import PropTypes from "prop-types";

export const Section = ({
	children,
	style
}) => {
  return (
	<section className={`${style}`}>
		{children}
	</section>
  )
}

Section.propTypes = {
	children: PropTypes.node,
	style : PropTypes.string
};