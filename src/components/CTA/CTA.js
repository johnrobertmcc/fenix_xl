import { AppStore, GooglePlay } from "components/icons";
import styles from "./CTA.module.css";

/**
 * A component used as a CTA containing the approved background image(s).
 *
 * @author  johnrobertmcc
 * @since   06/26/2023
 * @version 1.0.0
 * @returns  {Element}                 The CTA component.
 */
export default function CTA() {
  return (
    <section className={styles.CTA}>
      <div className={styles.copyWrapper}>
        <h1 className={styles.title}>Fenix XL Car & Limo Corp</h1>
        <p className={styles.copy}>
          As a local business running for <span>11 years</span>, we put the
          safety of our passengers first. Our close-knit family at Fenix ensures
          the friendliest, fastest, and most reliable service nearby. Fenix XL
          Car & Limo Corp is an active member of the community that celebrates
          all the cultures that makeup New York City.
        </p>
        <div className={styles.badgeWrapper}>
          <AppStore className={styles.appStore} />
          <GooglePlay className={styles.playStore} />
        </div>
      </div>
      <div
        className={styles.imageWrapper}
        style={{ backgroundImage: `url("assets/skyline.jpeg")` }}
      >
        <span className={styles.mask} />
      </div>
    </section>
  );
}
