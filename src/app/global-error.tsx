"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="tr">
      <body
        style={{
          margin: 0,
          background: "#000",
          color: "#f5f5f7",
          fontFamily: "system-ui, sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
        }}
      >
        <div>
          <h1 style={{ fontSize: "6rem", fontWeight: 700, color: "#2997ff", margin: 0 }}>
            500
          </h1>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Bir Hata Oluştu
          </h2>
          <p style={{ color: "#86868b", marginBottom: "2rem", maxWidth: 400 }}>
            Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyin.
          </p>
          <button
            onClick={reset}
            style={{
              background: "#2997ff",
              color: "#fff",
              border: "none",
              padding: "12px 24px",
              borderRadius: "999px",
              fontSize: "0.875rem",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Tekrar Dene
          </button>
        </div>
      </body>
    </html>
  );
}
