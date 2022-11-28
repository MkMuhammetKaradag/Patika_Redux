import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { marked } from "marked";
import { ENTER_TEXT, TOGGLE_HELP } from "../redux/markdown/markdownSlice";
const Content = () => {
  const markdown = useSelector((s) => s.markdown);
  const dişpatch = useDispatch();
  const showHelp = () => {
    dişpatch(TOGGLE_HELP());
  };

  const parsedText = marked(markdown.textCurrent, { sanitize: true });
  const processedText = { __html: parsedText };
  return (
    <div>
      <div className="main-content">
        <header>
          <h1 className="app-title">Markdown Previewer</h1>
          <div
            onClick={showHelp}
            className={`help-button ${markdown.isShowingHelp && "active"}`}
          >
            <i className="fa fa-question" aria-hidden="true">
              ?
            </i>
          </div>
        </header>

        <div className="text-panels">
          <textarea
            value={markdown.textCurrent}
            onChange={(event) => {
              dişpatch(ENTER_TEXT(event.target.value));
            }}
            className="text-panel-left"
            readOnly={markdown.isShowingHelp}
          ></textarea>
          <div
            dangerouslySetInnerHTML={processedText}
            className="text-panel-right"
          ></div>
        </div>

        <footer>
          <div>Nice</div>
        </footer>
      </div>
    </div>
  );
};

export default Content;
