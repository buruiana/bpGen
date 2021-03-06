import React, { useState, useEffect, useCallback } from "react";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import uniqBy from "lodash/uniqBy";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import { getImportList } from "../../../utils/helper";
import { getImport } from "../../../utils/importModules";

const Preview = props => {
  const { generatedCode, forms } = props;

  const [scope, setScope] = useState({});

  const importsList = getImportList(get(forms, "tree", []));

  const getUniqueSortedDefaultImportsLength = () =>
    uniqBy(importsList.sortedDefaultImports, "node[componentImport]").length;
  const shouldShowPreview = () =>
    getUniqueSortedDefaultImportsLength() === Object.keys(scope).length &&
    Object.keys(scope).length !== 0;

  useEffect(() => {
    if (!shouldShowPreview()) {
      const importModule = async el => {
        if (isEmpty(el)) return;
        if (el.node.componentImport !== '-') {
          await getImport(el.node.componentImport)
            .then(e => ({ default: e }))
            .then(c => {
              if (!scope.hasOwnProperty([el.node.title])) {
                setScope({ ...scope, [el.node.title]: c.default });
              }
            });
        }
      };
      const requestModule = async () => {
        await importsList.sortedDefaultImports.map(el => importModule(el));
      };
      requestModule();
    }
  }, [JSON.stringify(importsList)]);

  const componentCode = generatedCode.filter(
    e => e.id === "component.js_preview"
  );

  return (
    <div>
      {shouldShowPreview() && (
        <LiveProvider code={get(componentCode, "[0].code", "")} scope={scope}>
          {/* <LiveError />
          <LiveEditor /> */}
          <LivePreview />
        </LiveProvider>
      )}
    </div>
  );
};

export default Preview;
