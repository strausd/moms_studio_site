import React from 'react';


const HomePage = ({ pageData }) => {
  console.log(pageData)
  return (
    <div className="page_content">
      <h1>{pageData.title}</h1>
      <img className="portrait" src={pageData.image.url} alt={pageData.image.fileName}/>
      <div dangerouslySetInnerHTML={{__html: pageData.body}}></div>
    </div>
  );
};


export default HomePage;