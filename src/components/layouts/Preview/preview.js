import React from "react";
import get from "lodash/get";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import { getImportList } from '../../../utils/helper';

const Preview = props => {
  const {
    generatedCode,
    forms
  } = props;

  const componentCode = generatedCode.filter(e => e.id === 'component.js_preview');
  const importsList = getImportList(get(forms, 'tree', []));
  let scope = {};



  const Alert = React.lazy(() => import('../../../../node_modules/react-bootstrap/Alert'));
  console.log('console: 111111111111111', Alert);

  // import('lodash/iaEmpty')
  //   .then((moduleA) => {
  //     console.log('console: moduleA', moduleA);
  //   })
  //   .catch(err => {
  //     console.log('console: eeeeeeeee', err);
  //   });


  const handleClick = zzz => {
    console.log('console: uuuuuuuuuuuuuuuuuuuu', );
    import('../../../../node_modules/react-bootstrap/Alert')
      .then((moduleA) => {
        scope = { moduleA };
        console.log('console: moduleA', moduleA, scope);
        return moduleA;
      })
      .catch(err => {
        console.log('console: aaaaaaaaaaaaaa', err);
      });
  };

  importsList.sortedDefaultImports.map(el => {
    let ccc = `import ${el.node.title} from '${el.node.componentImport}'`;
    console.log('console: ccccccccc', ccc);
   // getComponent(el.node.componentImport);
    //const Alert = handleClick(el.node.componentImport)
    console.log('console: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', Alert );
    //scope = { Alert };
    // const Alert = React.lazy(() => import(`${el.node.componentImport}`));
    // console.log('console: OtherComponent', Alert);
    ///let code = new Function(ccc)();
    //scope[el.node.title] = require('${el.node.componentImport}');
    //let aaa = require(`${el.node.componentImport}`);
   // let Alert = require('react');
    //console.log('console: ===============', code);
  });

  console.log('console: importListimportList', importsList);
  console.log('console: ------------', get(componentCode, '[0].code', ''));
  console.log('console: scopescope', scope);


  return (
    <div>
      <LiveProvider code={get(componentCode, '[0].code', '')} scope={scope} >
        <LiveError />
        <LiveEditor />
        <LivePreview />
      </LiveProvider>
    </div>
  );
};

export default Preview;
