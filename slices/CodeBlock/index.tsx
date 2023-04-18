import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import { Clipboard } from "phosphor-react";

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

  const handleCopyText = () => {
    setCopy(true);
    navigator.clipboard.writeText(slice.primary.code!);
  };

  return (
    <section className={style.container}>
      <button onClick={handleCopyText} className={style.clipboardBtn}>
        {copy ? <span>copied!</span> : <Clipboard size={24} color="#fff" />}
      </button>
      <pre className={`hljs ${lang}`} ref={codeRef}>
        <code>{slice.primary.code}</code>
      </pre>
    </section>
  );
};

export default CodeBlock;
