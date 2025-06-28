import { useState, useRef, useEffect } from "react";
import { FaCoffee, FaCheck } from "react-icons/fa";

const BuyMeACoffeeWidget = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const upiId = "cchantigadu75-1@okaxis";
  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      {/* Floating Coffee Button */}
      <div
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#BD5FFF",
          color: "#fff",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          cursor: "pointer",
          zIndex: 9999,
        }}
        title="Buy me a coffee"
      >
        <FaCoffee size={20} />
      </div>

      {/* Panel */}
      <div
        ref={panelRef}
        style={{
          position: "fixed",
          bottom: open ? "75px" : "20px",
          right: "20px",
          width: open ? "270px" : "0px",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
          padding: open ? "16px" : "0",
          zIndex: 9998,
          transition: "all 0.3s ease",
          overflow: "hidden",
        }}
      >
        <h4 style={{ color: "#BD5FFF", marginBottom: "8px", fontSize: "16px" }}>
          Support Me ☕
        </h4>
        <p style={{ fontSize: "13px", marginBottom: "10px", color: "#444" }}>
          Like my work? Fuel my next bug fix with a coffee!
        </p>

        {/* QR */}
        <img
          src="/files/upi_qr.jpg"
          alt="Scan to Pay"
          style={{
            width: "100%",
            borderRadius: "6px",
            marginBottom: "10px",
            border: "1px solid #eee",
          }}
        />

        {/* UPI Copy */}
        <div>
          <p style={{ fontWeight: "bold", fontSize: "13px", marginBottom: "4px" }}>UPI ID:</p>
          <div
            onClick={handleCopy}
            style={{
              background: "#f1f1f1",
              padding: "6px 8px",
              borderRadius: "6px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
              fontSize: "13px",
              fontFamily: "monospace",
            }}
            title="Tap to copy"
          >
            {upiId}
            {copied ? (
              <FaCheck style={{ color: "green" }} />
            ) : (
              <span style={{ fontSize: "11px", color: "#777" }}>Copy</span>
            )}
          </div>

          {/* Final note (short & clean) */}
          <p
            style={{
              fontSize: "12px",
              marginTop: "8px",
              color: "#666",
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            Ping me in contact after you <strong>caffeinate</strong> me ☕
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuyMeACoffeeWidget;
