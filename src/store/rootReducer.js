import { combineReducers } from 'redux';
import themeSlices from './slices/themeSlices';
import criticalityGroupMasterSlice from './slices/criticalityGroupMasterSlice';

const rootReducer = combineReducers({
    theme: themeSlices,
    criticalityGroupMaster: criticalityGroupMasterSlice
});

export default rootReducer;