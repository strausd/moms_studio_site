import React from 'react';


const AboutPage = ({ pageData }) => {
  return (
    <div className="page_content">
      <h1>{pageData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageData.body }}></div>
    </div>
  );
};

export default AboutPage;