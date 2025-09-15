export default function TableOfContents() {
  return (
    <nav style={{
      border: "2px solid #646cff",
      borderRadius: "10px",
      padding: "20px",
      marginBottom: "30px",
      backgroundColor: "#f0f4ff"
    }}>
      <h2 style={{ textAlign: "center", marginBottom: "15px" }}>目次</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ marginBottom: "10px" }}>
          <a href="#basic" style={{ textDecoration: "none", color: "#333" }}>TypeScript 基本例</a>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <a href="#variables" style={{ textDecoration: "none", color: "#333" }}>変数と型注釈</a>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <a href="#functions" style={{ textDecoration: "none", color: "#333" }}>関数の型</a>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <a href="#arrays" style={{ textDecoration: "none", color: "#333" }}>配列の型</a>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <a href="#objects" style={{ textDecoration: "none", color: "#333" }}>オブジェクトの型</a>
        </li>
        <li>
          <a href="#interfaces" style={{ textDecoration: "none", color: "#333" }}>インターフェイス</a>
        </li>
      </ul>
    </nav>
  );
}
