export const addPagesData = (pages, timestamp=false) => {
  const dataForLocalStorage = {};
  if (timestamp) {
    dataForLocalStorage.dateUpdated = timestamp;
  } else {
    const now = new Date()
    dataForLocalStorage.dateUpdated = now.getTime();
  }
  dataForLocalStorage.pages = pages;
  localStorage.setItem('siteData', JSON.stringify(dataForLocalStorage));

  return {
    type: 'ADD_PAGES_DATA',
    pages
  };
};