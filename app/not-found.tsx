export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem"
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "600" }}>
        Page Not Found
      </h1>
      <p style={{ marginTop: "1rem", color: "#666" }}>
        The page you are looking for does not exist.
      </p>
    </div>
  );
}
