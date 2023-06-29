import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MobileMenu from "./components/MobileMenu";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Page from "./components/layout/Page/";
import { ROUTES } from "./utils/";

/**
 * Layout used to create a modern site for Fenix XL under domain FenixCarNYC.
 *
 * @version 1.0.0
 * @since 1.0.0
 * @author johnrobertmcc
 */
export default function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  /**
   * Function used to toggle the mobile menu.
   */
  function toggle() {
    setMenuIsOpen((prev) => !prev);
  }

  useEffect(() => {
    /**
     * Function used to handle the closing of menu if the window size is above 768 px.
     */
    function closeMenuOnResize() {
      setMenuIsOpen(false);
    }

    /**
     * Function used to subscribe to the event listener 'resize'.
     */
    function checkWindowSize() {
      const width = window?.innerWidth;

      if (width > 767) {
        closeMenuOnResize();
      }
    }

    window.addEventListener("resize", checkWindowSize);
  }, []);

  return (
    <BrowserRouter>
      <Header toggle={toggle} isOpen={menuIsOpen} />
      {menuIsOpen && <MobileMenu setMenuIsOpen={setMenuIsOpen} />}
      <Routes>
        {ROUTES?.map((route, i) => (
          <Route
            path={route?.path}
            element={<Page page={route?.key} key={route?.key} />}
            key={i}
          />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
