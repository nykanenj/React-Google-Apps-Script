export const getActiveRangeA1 = () => {
  return SpreadsheetApp.getActive().getActiveSheet().getActiveRange().getA1Notation();
 }


