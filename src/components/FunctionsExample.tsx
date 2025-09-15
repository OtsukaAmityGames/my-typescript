export default function FunctionsExample() {
  const codeString = `// 関数と型
function greet(name: string): string {
  return "Hello, " + name;
}`;

  return (
    <div id="functions" style={{ marginBottom: "40px" }}>
      <h2>関数の型</h2>
      <pre>{codeString}</pre>
      <p>
        TypeScript では関数の引数や返り値に型を付けることで、安全にコードを書けます。
      </p>
    </div>
  );
}