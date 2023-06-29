import styles from "./RateTable.module.css";
import { FLAT_RATE_PRICES_RIDGEWOOD } from "./RateTable.utils";

/**
 * A small table used for displaying rates.
 *
 * @author  johnrobertmcc
 * @since   06/27/2023
 * @version 1.0.0
 * @returns  {Element}                 The RateTable component.
 */
export default function RateTable() {
  return (
    <section className={styles.rateSection}>
      <table className={styles.table}>
        <caption className={styles.caption}>
          Flat Rate Pricing <span>(from Ridgewood)</span>
        </caption>
        <thead>
          <tr className={styles.tableLegend}>
            <td className={styles.tableCell}>Airport</td>
            <td className={styles.tableCell}>Price</td>
            <td className={styles.tableCell}>Car</td>
          </tr>
        </thead>
        <tbody className={styles.list}>
          {FLAT_RATE_PRICES_RIDGEWOOD?.map((deal, i) => (
            <tr key={i} className={styles.tableRow}>
              <td className={styles.tableCell}>{deal?.airport}</td>
              <td className={styles.tableCell}>{deal?.price}</td>
              <td className={styles.tableCell}>{deal?.car}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
