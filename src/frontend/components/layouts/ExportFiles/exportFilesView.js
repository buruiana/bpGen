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

    const renderLinks = () => {
        return (
            <span>
                <a key='allFiles' className='exportFilesLinks' onClick={onClick} id='all'>All Files | </a>
                {aceTabs.map(tab => <a key={tab} className='exportFilesLinks' id={tab} onClick={onClick}>{`${tab} `} | </a>)}
            </span>);
    };

    const prepareObject = tab => {
        return (tab !== 'all')
            ? code.filter(e => e.id === tab)[0]
            : { code, id: 'all' };
    }

    const renderExportStatus = () => {
        return exported
            ? <span className='successExport'><i className="fas fa-cog" style={{ fontSize: '1.75em' }} /></span>
            : null;
    }

    const changeDest = () => addModal(PROJECT_SETTINGS);
    const onClick = event => {
        const data = prepareObject(event.target.id) || {};
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