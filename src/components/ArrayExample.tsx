export default function ArrayExample() {
  const codeString = `// 配列の型注釈
const numbers: number[] = [1, 2, 3];
const names: string[] = ["Alice", "Bob"];`;

  return (
    <div id="arrays" style={{ marginBottom: "40px" }}>
      <h2>配列の型注釈</h2>
      <pre>{codeString}</pre>
      <p>配列の要素の型を明示することで、型安全な操作ができます。</p>
    </div>
  );
}