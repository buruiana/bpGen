import { connect } from "react-redux";
import ExportFilesView from './exportFilesView';
import { exportProjectFiles } from '../../../services/backEndService/actions';
import {
    addModal,
} from '../../../services/modalService/actions';

const mapStateToProps = state => {
    return {
        projectSettings: state.projectSettingsReducer.projectSettings,
        aceTabs: state.aceTabsReducer.aceTabs,
        code: state.codeGenerationReducer.code,
        modals: state.modalsReducer.modals,
        exported: state.backEndReducer.exported,
    }
};

const mapDispatchToProps = {
    exportProjectFiles,
    addModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExportFilesView);