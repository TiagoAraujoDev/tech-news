import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import { Check, Clipboard } from "phosphor-react";

import style from "../../src/styles/slices/CodeBlock.module.scss";

/**
 * @typedef {import("@prismicio/client").Content.CodeBlockSlice} CodeBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CodeBlockSlice>} CodeBlockProps
 * @param { CodeBlockProps }
 */

type CodeBlockSlice = Content.CodeBlockSlice;
type CodeBlockProps = SliceComponentProps<CodeBlockSlice>;

const CodeBlock = ({ slice }: CodeBlockProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const lang = slice.primary.lang as string;

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const handleCopyText = () => {
    navigator.clipboard.writeText(slice.primary.code!);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <section className={style.container}>
      <button onClick={handleCopyText} className={style.clipboardBtn}>
        {isCopied ? (
          <span className={style.textCopied}>
            <Check size={24} color="#04d361" /> copied!
          </span>
        ) : (
          <span className={style.textNotCopied}>
            <Clipboard size={24} color="#fff" /> copy text
          </span>
        )}
      </button>
      <pre className={`hljs ${lang}`}>
        <code>{slice.primary.code}</code>
      </pre>
    </section>
  );
};

export default CodeBlock;
