export const siteData = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PAGES_DATA':
      return {
        ...state,
        pages: action.pages
      };
    default:
      return state;
  }
};
