import { useEffect, useState } from "react";
import { getHighlighter } from "shiki";

import style from "../../src/styles/slices/CodeBlock.module.scss";

interface CodeBlockContainerProps {
  code: string;
  lang: string;
}

export const CodeBlockContainer = ({ code, lang }: CodeBlockContainerProps) => {
  const [hlCode, setHlCode] = useState("");

  useEffect(() => {
    getHighlighter({
      theme: "one-dark-pro",
    }).then((highlighter) => {
      const highlightedCode = highlighter.codeToHtml(code, { lang: lang });
      setHlCode(highlightedCode);
    });
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
