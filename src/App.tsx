import TableOfContents from "./components/TableOfContents";
import TypeScriptExample from "./TypeScriptExample";
import VariablesExample from "./components/VariablesExample";
import FunctionsExample from "./components/FunctionsExample";
import ArrayExample from "./components/ArrayExample";
import ObjectExample from "./components/ObjectExample";
import InterfaceExample from "./components/InterfaceExample";

export default function App() {
  return (
    <div className="container">
      <h1>TypeScript 成果物用</h1>
      <TableOfContents />
      <TypeScriptExample />
      <VariablesExample />
      <FunctionsExample />
      <ArrayExample />
      <ObjectExample />
      <InterfaceExample />
    </div>
  );
}
