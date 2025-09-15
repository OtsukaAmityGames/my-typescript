export default function InterfaceExample() {
  const codeString = `interface Person {
  name: string;
  age: number;
}

const alice: Person = { name: "Alice", age: 25 };`;

  return (
    <div id="interfaces" style={{ marginBottom: "40px" }}>
      <h2>インターフェイス</h2>
      <pre>{codeString}</pre>
      <p>インターフェイスでオブジェクトの型を定義できます。</p>
    </div>
  );
}