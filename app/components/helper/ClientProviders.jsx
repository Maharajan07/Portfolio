"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./scroll-to-top";

export default function ClientProviders() {
  return (
    <>
      <ToastContainer />
      <ScrollToTop />
    </>
  );
}
