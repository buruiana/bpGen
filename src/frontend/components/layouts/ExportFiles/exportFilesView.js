import React from 'react';
import isEmpty from 'lodash/isEmpty';
import {
    COMPONENT,
    SERVICE,
    ACE_TABS,
} from '../../../utils/constants';
import { PROJECT_SETTINGS } from '../../modals/constants';

const ExportFilesView = props => {

    const {
        projectSettings,
        aceTabs,
        addModal,
        code,
        exportProjectFiles,
        exported
    } = props
    console.log('console: ------------------------', props);

    const renderLinks = () => {
        return (
            <span>
                <a key='allFiles' className='exportFilesLinks' onClick={onClick} key='all'>All Files&nbsp;</a>
                {aceTabs.map(tab => <a key={tab} className='exportFilesLinks' id={tab} onClick={onClick}>{`${tab} `} </a>)}
            </span>);
    };

    const prepareObject = tab => {
        console.log('console: tab', tab, code);
        return (tab !== 'all')
            ? code.filter(e => e.id === tab)[0]
            : code;
    }

    const renderExportStatus = () => {
        return exported
            ? <span className='successExport'><i className="fas fa-cog" style={{ fontSize: '1.75em' }} /></span>
            : null;
    }

    const changeDest = () => {
        addModal(PROJECT_SETTINGS);
    }

    const onClick = event => {
        console.log('console: event.target.id', event.target.id);
        const data = prepareObject(event.target.id) || {};
        console.log('console: data', data);
        data['dest'] = projectSettings.projectDestination;

        exportProjectFiles(data);
    };

    const renderView = () => {
        return !projectSettings.projectDestination
            ? <span className='emptyExport'>SET DESTINATION</span>
            : renderLinks();
    };

    return (
        <div className='exportSection'>
            <div className='destinationLabel'>
                <span className='filterComponentsLabel'>DESTINATION</span>:
            <span className='exportDest'> {projectSettings.projectDestination || 'NO DESTINATION'}</span>
                <a className='exportFilesLinks' onClick={changeDest}>( change )</a>
            </div>
            <div>
                {renderView()}
                {renderExportStatus()}
            </div>
        </div>
    );
}

export default ExportFilesView;