import cn from "classnames";
import PropTypes from "prop-types";
import { useRef } from "react";
import styles from "./Article.module.css";

/**
 * Simple function used to display a featured article.
 *
 * @author  johnrobertmcc
 * @since   06/28/2023
 * @version 1.0.0
 * @param   {object}  props           The component destructured as props.
 * @param   {?string} props.className Optional classname passed from parent.
 * @param   {string}  props.link      The link of the article to reference.
 * @param   {string}  props.title     The title of the article to pass.
 * @returns  {Element}                 The Article component.
 */
export default function Article({ className, link, title }) {
  const articleRef = useRef();
  return (
    <li
      className={cn(styles.articleCard, className && className)}
      onClick={() => articleRef.current.click()}
    >
      <a ref={articleRef} target="_blank" rel="noreferrer" href={link}>
        {title}
      </a>
    </li>
  );
}
Article.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
};
Article.defaultProps = {
  className: null,
  link: null,
  title: null,
};
