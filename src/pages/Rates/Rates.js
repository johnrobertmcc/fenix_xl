import cn from "classnames";
import ContactUs from "components/ContactUs/ContactUs";
import PropTypes from "prop-types";
import styles from "./Rates.module.css";

/**
 * Page used to display Fenix's basic rates.
 *
 * @author  johnrobertmcc
 * @since   06/26/2023
 * @version 1.0.0
 * @param   {object}  props           The component destructured as props.
 * @param   {?string} props.className The name of the className derived from Pages.
 * @returns  {Element}                 The Rates component.
 */
export default function Rates({ className }) {
  return (
    <article className={cn(styles.ratesPage, className && className)}>
      <section className={styles.ratesSectionTop}>
        <h1 className={styles.heading}>Rates</h1>
        <p className={styles.copy}>
          Driver price list approved by New York City Taxi and limousine
          Commision.
        </p>
        <p className={styles.copy}>
          Fenix XL Car & Limo Service Corp. is like a facility agency that
          provides car service transportation through the phone and mobile App
          software.
        </p>
        <p className={styles.copy}>
          Driver and car provide their own insurance, law, city rules, state,
          TLC.
        </p>
      </section>
      <section className={styles.specialRatesSection}>
        <figure className={styles.figure}>
          <figcaption className={styles.figCaption}>Special prices</figcaption>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Regular car local call:
              <span className={styles.highlighted}> $8</span>.
            </li>
            <li className={styles.listItem}>
              Deliveries: <span className={styles.highlighted}>$5</span>{" "}
              additional to the regular price.
            </li>
            <li className={styles.listItem}>
              Extra package delivery (driver options).
            </li>
            <li className={styles.listItem}>
              Waiting time: the first 10 minutes of waiting time without charge.
              After 10 minutes, $5 additional rate per each 10 additional
              minutes.
            </li>
          </ul>
        </figure>
        <figure>
          <figcaption className={styles.figCaption}>
            Rent Price Per Hour
          </figcaption>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Inside the area: <span className={styles.highlighted}>$40</span>{" "}
              minivan, <span className={styles.highlighted}>$50</span> SUV.
            </li>
            <li className={styles.listItem}>
              Outside the area: <span className={styles.highlighted}>$55</span>{" "}
              minivan, <span className={styles.highlighted}>$65</span> SUV.
            </li>
            <li className={styles.listItem}>
              Minivan local call:<span className={styles.highlighted}>$12</span>{" "}
              extra.
            </li>
            <li className={styles.listItem}>
              Charge for minivans 50% additional, cargo agreement between the
              driver and the customer.
            </li>
          </ul>
        </figure>
        <figure>
          <figcaption className={styles.figCaption}>Airport Fees</figcaption>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Newark: <span className={styles.highlighted}>$100</span> minivan
              toll included, <span className={styles.highlighted}>$150</span>{" "}
              SUV toll included.
            </li>
            <li className={styles.listItem}>
              J.F.K.: <span className={styles.highlighted}>$35</span> minivan,{" "}
              <span className={styles.highlighted}>$48-$53</span> SUV.
            </li>
            <li className={styles.listItem}>
              La Guardia: <span className={styles.highlighted}>$30</span>{" "}
              minivan, <span className={styles.highlighted}>$45</span> SUV
              (extra stops within the same route
              <span className={styles.highlighted}> $3.00</span>).
            </li>
          </ul>
        </figure>
        <hr className={styles.divider} />
        <p className={cn(styles.copy, styles.disclaimer)}>
          We deal between customer and driver price list*. Extra stops
          out-of-route, deliveries, package luggage, waiting time, tolls,
          pick-ups, parking fees, and special services (such as use of driver’s
          cell phone, etc.) are prices in addition to the regular price in
          agreement between customer and the driver.
        </p>
        <p className={cn(styles.copy, styles.sub)}>
          *price list is in TLC records.
        </p>
        <hr className={styles.divider} />
        <ContactUs />
      </section>
    </article>
  );
}
Rates.propTypes = {
  className: PropTypes.string,
};
Rates.defaultProps = {
  className: null,
};
