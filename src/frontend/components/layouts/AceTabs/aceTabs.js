import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const AceTabs = props => {
  const { currentTemplate, aceTab, aceTabs, setAceTab } = props;

  if (!aceTab) setAceTab(aceTabs[0]);

  const onSelect = data => setAceTab(data);

  const renderTabs = () => {
    return currentTemplate.templateFiles.map(file => {
      return (
        <Tab
          eventKey={file.fileName}
          title={file.fileName}
          key={file.fileName}
        />
      );
    });
  };

  return (
    <div className="tabsList">
      <Tabs
        //defaultActiveKey="index.js"
        id="ace-tabs"
        onSelect={onSelect}
        activeKey={aceTab}
      >
        {renderTabs()}
      </Tabs>
    </div>
  );
};

export default AceTabs;
