export const onOpen = () => {
  const menu = SpreadsheetApp.getUi()
    .createMenu('My Sample React Project')
    .addItem('Open Sidebar', 'openSidebar');

  menu.addToUi();
};

export const openSidebar = () => {
  const html = HtmlService.createHtmlOutputFromFile('test-sidebar');
  SpreadsheetApp.getUi().showSidebar(html);
};
