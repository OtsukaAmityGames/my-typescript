export default function VariablesExample() {
  const codeString = `// 変数宣言
let age: number = 30;
const name: string = "Bob";`;

  return (
    <div id="variables" style={{ marginBottom: "40px" }}>
      <h2>変数と型注釈</h2>
      <pre>{codeString}</pre>
      <p>TypeScript では変数に型を指定でき、型安全性が高まります。</p>
    </div>
  );
}