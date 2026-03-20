import { useEffect } from "react";

export default function Redirect() {
  useEffect(() => {
    const url = "https://bugha.xyz";
    const ua = navigator.userAgent.toLowerCase();

    const timer = setTimeout(() => {
      if (ua.includes("android")) {
        window.location.href =
          "intent://" +
          url.replace(/^https?:\/\//, "") +
          "#Intent;scheme=https;package=com.android.chrome;end;";
      } else {
        window.location.href = url;
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const openLink = () => {
    window.location.href = "https://bugha.xyz";
  };

  return (
    <div
      style={{
        margin: 0,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        background: "#f5f5f5",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>Redirecting...</h1>
      <p style={{ color: "#666", marginBottom: "30px" }}>
        If nothing happens, tap the button below
      </p>
      <button
        onClick={openLink}
        style={{
          padding: "15px 25px",
          fontSize: "18px",
          border: "none",
          borderRadius: "10px",
          background: "#000",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Open in Browser
      </button>
    </div>
  );
}
