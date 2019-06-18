import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'

const AceTabs = props => {
  const {projectSettings } = props;
  const onSelect = data => setAceTab(data);

  const renderTabs = () => {
    return projectSettings.templateFiles.map(file => {
      return <Tab eventKey={file} title={file} key={file} />;
    });
  };

  return (
    <div className='tabsList'>
      <Tabs defaultActiveKey='index'
        id="uncontrolled-tab-example"
        onSelect={onSelect}
        activeKey={props.aceTab}>
        {renderTabs()}
      </Tabs>
    </div>
  );
}

export default AceTabs;