import PropTypes from "prop-types";

export const List = ({ label }) => {
  return (
    <li className=" font-normal hover:text-soft-red transition-colors text-[1rem]  ">
      <a
        href="#"
      >
        {label}
      </a>
    </li>
  );
};
List.propTypes = {
  label: PropTypes.string,
};