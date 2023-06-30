import cn from "classnames";
import AboutUsMini from "components/AboutUsMini/AboutUsMini";
import AppDownload from "components/AppDownload/AppDownload";
import ContactUs from "components/ContactUs/ContactUs";
import Review from "components/Review/Review";
import TextSection from "components/layout/TextSection/TextSection";
import PropTypes from "prop-types";
import styles from "./About.module.css";
import { ABOUT_US_SECTIONS, FENIX_HISTORY } from "./About.utils";

/**
 * The about page that handles the contact information and short history of Fenix.
 *
 * @author  johnrobertmcc
 * @since   06/26/2023
 * @version 1.0.0
 * @param   {object}  props           The component destructured as props.
 * @param   {?string} props.className Optional classname derived from Page.
 * @returns  {Element}                 The About component.
 */
export default function About({ className }) {
  return (
    <article className={cn(styles.aboutUsPage, className && className)}>
      <TextSection {...FENIX_HISTORY} className={styles.history} />
      <ContactUs />
      <Review />
      <AppDownload />
      <AboutUsMini copy={ABOUT_US_SECTIONS} className={styles.aboutUsSection} />
    </article>
  );
}
About.propTypes = {
  className: PropTypes.string,
};
About.defaultProps = {
  className: null,
};
