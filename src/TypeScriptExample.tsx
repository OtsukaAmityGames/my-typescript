const codeString = `// 変数宣言と型注釈
let age: number = 25;
const name: string = "Alice";

// 関数定義
function greet(person: string): string {
  return "Hello, " + person;
}`;

export default function TypeScriptExample() {
  const codeString = `// TypeScript の基本
let message: string = "Hello, TypeScript!";`;

  return (
    <div id="basic" style={{ marginBottom: "40px" }}>
      <h2>TypeScript 基本例</h2>
      <pre>{codeString}</pre>
      <p>TypeScript は型を付けることで安全にコードを書けます。</p>
    </div>
  );
}