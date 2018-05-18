import React from 'react';


const LessonsPage = ({ pageData }) => {
  console.log(pageData)
  return (
    <div className="page_content">
      <h1>{pageData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageData.body }}></div>
    </div>
  );
};

export default LessonsPage;