import React, { useEffect } from "react";

function ScrollToTopOnRefresh() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default ScrollToTopOnRefresh;
