import React from "react";
import AceEditor from "react-ace";
import "brace/mode/jsx";
import "brace/theme/xcode";
import AceTabs from "../AceTabs";
import isEmpty from "lodash/isEmpty";
import { SERVICE, COMPONENT, SMART } from "../../../utils/constants";
//import ExportFilesView from '../ExportFiles';

const Ace = props => {
  const { code, aceTab } = props;

  const onChange = newValue => {
    console.log("change1", newValue);
  };
  const getAceContent = () => {
    if (isEmpty(code)) return "";
    return code.filter(e => e.id === aceTab)[0].code;
  };

  // const getExportBox = (props.projectSettings.projectType === SERVICE)
  //   ? <ExportFilesView />
  //   : null;

  // const getAceStyle =
  //   props.projectSettings.projectType === SERVICE
  //     ? "serviceAce"
  //     : "componentAce";
  return (
    <div>
      {/* {getExportBox} */}
      <div className="paddingTop">
        <div>
          <AceTabs />
        </div>
        
        <AceEditor
          mode="jsx"
          theme="xcode"
          onChange={onChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2
          }}
          fontSize={12}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={getAceContent()}
          height="750px"
        />
      </div>
    </div>
  );
};

export default Ace;
