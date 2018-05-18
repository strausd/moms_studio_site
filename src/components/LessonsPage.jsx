import React from 'react';


const LessonsPage = ({ pageData }) => {
  return (
    <div className="page_content">
      <h1>{pageData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageData.body }}></div>
      {
        pageData.instruments.length > 0
        &&
        <div>
          <p>{pageData.instrumentsIntro}</p>
          <ul className="fancy-list">
            {pageData.instruments.map(instrument => <li key={instrument.id}>{instrument.instrumentName}</li>)}
          </ul>
        </div>
      }
      {
        pageData.lessonCosts.length > 0
        &&
        <div>
          <p>{pageData.costIntro}</p>
          <ul className="fancy-list">
            {pageData.lessonCosts.map(lesson => <li key={lesson.id}>{lesson.duration} minutes - ${lesson.price}</li>)}
          </ul>
        </div>
      }
    </div>
  );
};

export default LessonsPage;