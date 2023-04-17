import React, { useEffect, useState } from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import shiki from "shiki";

import style from "../../src/styles/slices/CodeBlock.module.scss";

/**
 * @typedef {import("@prismicio/client").Content.CodeBlockSlice} CodeBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CodeBlockSlice>} CodeBlockProps
 * @param { CodeBlockProps }
 */

type CodeBlockSlice = Content.CodeBlockSlice;
type CodeBlockProps = SliceComponentProps<CodeBlockSlice>;

const CodeBlock = ({ slice }: CodeBlockProps) => {
  const rawCode = slice.primary.code as string;
  const lang = slice.primary.lang as string;

  const [hlCode, setHlCode] = useState("");

  useEffect(() => {
    shiki
      .getHighlighter({
        theme: "one-dark-pro",
      })
      .then((highlighter) => {
        const highlightedCode = highlighter.codeToHtml(rawCode, { lang });
        setHlCode(highlightedCode)
      })
  }, [hlCode, lang]);

  return (
    <section>
      <div
        className={style.container}
        dangerouslySetInnerHTML={{ __html: hlCode }}
      />
    </section>
  );
};
export default CodeBlock;
