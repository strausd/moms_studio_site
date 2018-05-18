export const addPagesData = data => ({
  type: 'ADD_PAGES_DATA',
  pages: [
    data.allHomePages[0],
    data.allLessonPages[0],
    data.allAboutPages[0],
    data.allContactPages[0]
  ]
});