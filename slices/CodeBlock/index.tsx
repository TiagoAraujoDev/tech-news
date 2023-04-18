import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";

import style from "../../src/styles/slices/CodeBlock.module.scss";

/**
 * @typedef {import("@prismicio/client").Content.CodeBlockSlice} CodeBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CodeBlockSlice>} CodeBlockProps
 * @param { CodeBlockProps }
 */

type CodeBlockSlice = Content.CodeBlockSlice;
type CodeBlockProps = SliceComponentProps<CodeBlockSlice>;

const CodeBlock = ({ slice }: CodeBlockProps) => {
  const [copy, setCopy] = useState(false);
  const codeRef = useRef(null);
  
  const lang = slice.primary.lang as string;

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <section className={style.container}>
      <pre className={`hljs ${lang}` } ref={codeRef}>
        <code>{slice.primary.code}</code>
      </pre>
    </section>
  );
};

export default CodeBlock;
