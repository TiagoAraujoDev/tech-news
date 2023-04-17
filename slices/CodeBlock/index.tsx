import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

import { CodeBlockContainer } from "../../src/components/CodeBlockContainer";

/**
 * @typedef {import("@prismicio/client").Content.CodeBlockSlice} CodeBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CodeBlockSlice>} CodeBlockProps
 * @param { CodeBlockProps }
 */

type CodeBlockSlice = Content.CodeBlockSlice;
type CodeBlockProps = SliceComponentProps<CodeBlockSlice>;

const CodeBlock = ({ slice }: CodeBlockProps) => {
  const code = slice.primary.code as string;
  const lang = slice.primary.lang as string;
  return <CodeBlockContainer code={code} lang={lang} />;
  // return (
  //   <div>
  //     <h1 style={{ backgroundColor: "black" }}>{code}</h1>
  //   </div>
  // );
};
export default CodeBlock;
