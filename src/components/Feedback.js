import React, { useEffect, useRef } from "react";
import "../styles/feedback.scss";

const Feedback = () => {
  const widgetRef = useRef(null);

  const widgetId = process.env.REACT_APP_API_ID;
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://featurable.com/assets/bundle.js";
      script.defer = true;
      script.charset = "UTF-8";
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    };

    loadScript();

    if (widgetRef.current) {
      const div = widgetRef.current;
      div.setAttribute("id", `featurable-${widgetId}`);
      div.setAttribute("data-featurable-async", "");
      div.setAttribute("data-location-code", "de");
    }
  }, [widgetId]);

  return (
    <div style={{ maxHeight: "800px" }} className=" section kundenfeedback">
      <h2>Feedback</h2>
      <div ref={widgetRef}></div>
    </div>
  );
};

export default Feedback;
