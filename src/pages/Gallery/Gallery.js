import cn from "classnames";
import ContactUs from "components/ContactUs/ContactUs";
import TextSection from "components/layout/TextSection/TextSection";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./Gallery.module.css";
import {
  GALLERY_HEADING,
  GALLERY_MAX_RANGE,
  MAX_PICS,
  PAGINATION,
} from "./Gallery.utils";

/**
 * A gallery used to serve images of Fenix XL.
 *
 * @author  johnrobertmcc
 * @since   06/30/2023
 * @version 1.0.0
 * @param   {object}  props           The component destructured as props.
 * @param   {?string} props.className The optional ClassName from parent.
 * @return  {Element}                 The Gallery className.
 */
export default function Gallery({ className }) {
  const [offSet, setOffSet] = useState(0);

  function handleNext() {
    setOffSet((prev) => (prev += 12));
    window.scrollTo(0, 0);
  }

  function handlePrev() {
    setOffSet((prev) => (prev -= 12));
    window.scrollTo(0, 0);
  }
  return (
    <section className={cn(styles.galleryPage, className && className)}>
      <TextSection {...GALLERY_HEADING} className={styles.galleryHeading} />
      <ul className={styles.galleryList}>
        {Array.from({ length: GALLERY_MAX_RANGE }).map((_, i) => {
          const base = i + offSet;
          if (base >= MAX_PICS) {
            return null;
          }
          return (
            <li key={i} className={styles.imageWrapper}>
              <GalleryImage
                src={`assets/gallery/gallery_image_${base + 1}.webp`}
              />
            </li>
          );
        })}
      </ul>
      <div className={styles.buttonWrapper}>
        <button
          className={cn(styles.button, styles.previous)}
          disabled={offSet === 0}
          aria-label="Previous Page"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className={cn(styles.button, styles.next)}
          disabled={offSet + PAGINATION > MAX_PICS}
          aria-label="Next Page"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      <ContactUs />
    </section>
  );
}
Gallery.propTypes = {
  className: PropTypes.string,
};
Gallery.defaultProps = {
  className: null,
};

function GalleryImage({ src }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    if (src) {
      setImgSrc(src);
      setIsLoaded(false);
    } else {
      setImgSrc(null);
      setIsLoaded(false);
    }
  }, [src]);

  return (
    <>
      <img
        src={imgSrc}
        alt=""
        className={cn({
          [styles.notLoaded]: !isLoaded,
          [styles.loadedImage]: isLoaded,
        })}
        onLoad={() => setIsLoaded(true)}
        onError={(e) => console.error(e)}
      />
      <Loader className={cn({ [styles.loadComplete]: isLoaded })} />
    </>
  );
}

function Loader({ className }) {
  return (
    <div className={cn(styles.loadingWrapper, className && className)}>
      <div className={styles.loading}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
