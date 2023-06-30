import cn from "classnames";
import AboutUsMini from "components/AboutUsMini";
import AppDownload from "components/AppDownload/AppDownload";
import CTA from "components/CTA";
import ContactUs from "components/ContactUs/ContactUs";
import RateTable from "components/RateTable";
import Review from "components/Review/Review";
import PropTypes from "prop-types";
import styles from "./Homepage.module.css";

/**
 * An article used for the homepage containing various sections.
 *
 * @author  johnrobertmcc
 * @since   06/26/2023
 * @version 1.0.0
 * @param   {object}  props           The component destructured as props.
 * @param   {?string}  props.className Global classname passed from Pages.
 * @returns  {Element}                 The Homepage component.
 */
export default function Homepage({ className }) {
  return (
    <article className={cn(styles.homePage, className)}>
      <CTA />
      <section className={styles.sideBySide}>
        <RateTable />
        <ContactUs />
      </section>
      <Review />
      <AppDownload />
      <AboutUsMini />
    </article>
  );
}
Homepage.propTypes = {
  className: PropTypes.string,
};

Homepage.defultProps = {
  className: null,
};
