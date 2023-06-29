import cn from "classnames";
import {
  AppStore,
  Email,
  Facebook,
  FenixXL,
  GooglePlay,
  Instagram,
  Phone,
  WhatsApp,
} from "components/icons";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CONTACT_METHODS, ROUTES } from "utils";
import styles from "./Footer.module.css";

/**
 * The semantic footer to contain the Footer nav elements.
 *
 * @author  johnrobertmcc
 * @since   06/26/2023
 * @version 1.0.0
 * @param   {object}  props           The component destructured as props.
 * @param   {string}  props.component The name of the component.
 * @return  {Element}                 The Footer component.
 */
export default function Footer({ component }) {
  return (
    <footer className={styles.footer}>
      <figure>
        <figcaption>Contact Us</figcaption>
        <ul className={styles.navList}>
          <li className={styles.contactListItem}>
            586 Seneca Ave, Queens, NY 11385
          </li>
          <li className={styles.contactListItem}>
            <Phone />
            <a href={CONTACT_METHODS[0].href} target="_blank" rel="noreferrer">
              {CONTACT_METHODS[0].address}
            </a>
          </li>
          <li className={styles.contactListItem}>
            <Email />
            <a href={CONTACT_METHODS[1].href} target="_blank" rel="noreferrer">
              {CONTACT_METHODS[1].address}
            </a>
          </li>
          <li className={styles.contactListItem}>
            <WhatsApp />
            <a href={CONTACT_METHODS[2].href} target="_blank" rel="noreferrer">
              {CONTACT_METHODS[2].address}
            </a>
          </li>
        </ul>
      </figure>
      <figure>
        <figcaption>More Information</figcaption>
        <ul className={styles.moreInfoList}>
          {ROUTES?.map((route, i) => (
            <li key={i} className={cn(styles.navItem)}>
              <Link to={route?.path}>{route?.title}</Link>
            </li>
          ))}
        </ul>
      </figure>
      <figure>
        <figcaption>Find Us</figcaption>
        <ul className={styles.findUsList}>
          <li>
            <AppStore className={styles.appStore} />
          </li>
          <li>
            <GooglePlay className={styles.playStore} />
          </li>
          <li className={styles.socialWrapper}>
            <Facebook className={styles.facebook} />
            <Instagram className={styles.instagram} />
          </li>
        </ul>
      </figure>

      <section className={styles.legal}>
        <p>{`${new Date().getFullYear()} Fenix XL Car and Limo Corporation`}</p>
        <FenixXL className={styles.imgWrapper} />
      </section>
    </footer>
  );
}
Footer.propTypes = {
  component: PropTypes.string,
};
Footer.defaultProps = {
  component: "Footer",
};
