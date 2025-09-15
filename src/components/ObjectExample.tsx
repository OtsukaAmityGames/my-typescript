export default function ObjectExample() {
  const codeString = `const person: { name: string; age: number } = {
  name: "Alice",
  age: 25
};`;

  return (
    <div id="objects" style={{ marginBottom: "40px" }}>
      <h2>オブジェクトの型</h2>
      <pre>{codeString}</pre>
      <p>オブジェクトのプロパティにも型を指定できます。</p>
    </div>
  );
}