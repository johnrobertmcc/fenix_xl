import cn from "classnames";
import { AppStore, GooglePlay } from "components/icons";
import PropTypes from "prop-types";
import styles from "./AppDownload.module.css";
import { APP_DOWNLOAD_COPY, APP_DOWNLOAD_HEADING } from "./AppDownload.utils";

/**
 * A section used to highlight the download of the mobile app.
 *
 * @author  johnrobertmcc
 * @since   06/26/2023
 * @version 1.0.0
 * @param   {object}  props           The component destructured as props.
 * @param   {?string} props.className Optional classname derived from Page.
 * @returns  {Element}                The About component.
 */
export default function AppDownload({ className }) {
  return (
    <section className={cn(styles.appDownloadSection, className && className)}>
      <h3 className={styles.downloadHeading}>{APP_DOWNLOAD_HEADING}</h3>
      <p className={styles.downloadCopy}>{APP_DOWNLOAD_COPY}</p>
      <div className="badgeWrapper">
        <AppStore className="appStore" />
        <GooglePlay className="playStore" />
      </div>
    </section>
  );
}
AppDownload.propTypes = {
  className: PropTypes.string,
};
AppDownload.defaultProps = {
  className: null,
};
