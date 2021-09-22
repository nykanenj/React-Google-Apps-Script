import * as publicUiFunctions from './ui';
import * as publicSheetFunctions from './sheets';

// Expose public functions by attaching to `global`
global.onOpen = publicUiFunctions.onOpen;
global.openSidebar = publicUiFunctions.openSidebar;
global.getActiveRangeA1 = publicSheetFunctions.getActiveRangeA1;
