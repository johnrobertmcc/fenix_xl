import cn from "classnames";
import PropTypes from "prop-types";
import { useRef } from "react";
import styles from "./Review.module.css";
import { GOOGLE_REVIEW_LINK, REVIEW_COPY, REVIEW_TITLE } from "./Review.utils";

/**
 * A section used to encourage users to use the Google Drive Review form.
 *
 * @author  johnrobertmcc
 * @since   06/29/2023
 * @version 1.0.0
 * @param   {object}  props            The className destructured as props.
 * @param   {?string} props.className  The optional className passed from parent.
 * @return  {Element}                  The Review component.
 */
export default function Review({ className }) {
  const linkRef = useRef();

  return (
    <section className={cn(styles.reviewsSection, className && className)}>
      <div className={styles.reviewBox} onClick={() => linkRef.current.click()}>
        <h2 className={styles.reviewCTA}>{REVIEW_TITLE}</h2>
        <a
          ref={linkRef}
          href={GOOGLE_REVIEW_LINK}
          target="_blank"
          rel="noreferrer"
          className={styles.screenReaderLink}
        />
        {REVIEW_COPY && <p className={styles.reviewCopy}>{REVIEW_COPY}</p>}
      </div>
    </section>
  );
}
Review.propTypes = {
  className: PropTypes.string,
};
Review.defaultProps = {
  className: null,
};
