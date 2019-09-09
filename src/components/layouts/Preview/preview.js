import React, { useState, useEffect, useCallback}  from "react";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import uniqBy from 'lodash/uniqBy';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import { getImportList } from '../../../utils/helper';
import { getImport } from './helper';

const Preview = props => {
  const {
    generatedCode,
    forms
  } = props;

  const [scope, setScope] = useState({});

  const importsList = useCallback(
    () => {
      getImportList(get(forms, 'tree', []));
    },
    [forms, getImportList],
  );
  console.log('console: importsList', importsList());
  useEffect(() => {
    const importModule = async (el) => {
      if (isEmpty(el)) return;
      await getImport(el.node.componentImport)
        .then(e => ({ default: e }))
        .then(c => setScope({ ...scope, [el.node.title]: c.default }));
    };

    async () => await importsList.sortedDefaultImports.map(el => importModule(el));
  }, [forms]);

  const componentCode = generatedCode.filter(e => e.id === 'component.js_preview');
  //const importsList = getImportList(get(forms, 'tree', []));

  //const getScope = async () => await importsList.sortedDefaultImports.map(el => importModule(el));
  const getUniqueSortedDefaultImportsLength = () => uniqBy(importsList.sortedDefaultImports, 'node[componentImport]').length;
  const shouldShowPreview = () => getUniqueSortedDefaultImportsLength() === Object.keys(scope).length;

  //if (getUniqueSortedDefaultImportsLength() !== Object.keys(scope).length) getScope();
  console.log('console: 111111111111111111111', scope);
  console.log('console: shouldShowPreview', shouldShowPreview());
  console.log('console:  getUniqueSortedDefaultImportsLength()', getUniqueSortedDefaultImportsLength());
  console.log('console: Object.keys(scope).length', Object.keys(scope).length);

  return (
    <div>
      {
        shouldShowPreview() &&
        <LiveProvider code={get(componentCode, '[0].code', '')} scope={scope} >
          <LiveError />
          <LiveEditor />
          <LivePreview />
        </LiveProvider>
        }
    </div>
  );
};

export default Preview;
