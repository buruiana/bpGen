import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/jsx';
import 'brace/theme/github';
import AceTabs from '../AceTabs';
import {
  SERVICE,
  COMPONENT,
  SMART,
} from '../../../utils/constants';
//import ExportFilesView from '../ExportFiles';

const Ace = props => {
  const onChange = newValue => {
    console.log('change1', newValue);
  }
  const getAceContent = () => {
   //
  };

  // const getExportBox = (props.projectSettings.projectType === SERVICE)
  //   ? <ExportFilesView />
  //   : null;

  // const getAceStyle = (props.projectSettings.projectType === SERVICE)
  //   ? 'serviceAce'
  //   : 'componentAce';

  return (
    <div className={getAceStyle}>
      {/* {getExportBox} */}
      <div className='paddingTop'>
        <AceTabs />
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
            tabSize: 2,
          }}
          fontSize={12}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={getAceContent()}
          height='750px'
          />
      </div>
    </div>

  );
};

export default Ace;