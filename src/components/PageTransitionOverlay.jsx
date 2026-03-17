import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PageTransitionOverlay() {
  const { pathname } = useLocation();
  const [transitionKey, setTransitionKey] = useState(0);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setTransitionKey((value) => value + 1);
  }, [pathname]);

  return transitionKey > 0 ? <div key={transitionKey} className="route-transition-overlay" aria-hidden="true" /> : null;
}
