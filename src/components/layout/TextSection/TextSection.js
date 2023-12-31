import cn from "classnames";
import PropTypes from "prop-types";
import styles from './TextSection.module.css'

/**
 * A reusable section that is given a supplied title and copy as text.
 *
 * @author  johnrobertmcc
 * @since   06/28/2023
 * @version 1.0.0
 * @param   {object}  props           The component destructured as props.
 * @param   {string}  props.title The copy to pass to the h1 heading.
 * @param   {string}  props.copy The copy to pass to the paragraph tag.
 * @param   {?string}  props.className Optional classname passed from parent.
 * @returns  {Element}                 The TextSection component.
 */
export default function TextSection({ title, copy, className }) {
  return (
    <section className={cn(className && className)}>
      <h1 className={styles.heading}>{title}</h1>
      <p className={styles.copy}>{copy}</p>
    </section>
  );
}
TextSection.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  className: PropTypes.string,
};
TextSection.defaultProps = {
  className: null,
};
