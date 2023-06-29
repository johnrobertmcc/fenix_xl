import PropTypes from "prop-types";
import { createElement } from "react";
import styles from "./Page.module.css";
import { PAGE_MAP } from "./Page.utils";

/**
 * Wrapper component used to specify shared styles between all pages.
 *
 * @author  johnrobertmcc
 * @since   06/26/2023
 * @version 1.0.0
 * @param   {object}  props           The component destructured as props.
 * @param   {string}  props.page The name of the component.
 * @return  {Element}                 The Page component.
 */
export default function Page({ page }) {
  return createElement(PAGE_MAP?.[page], { className: styles.page });
}
Page.propTypes = {
  page: PropTypes.string,
};
Page.defaultProps = {
  page: "Page",
};
