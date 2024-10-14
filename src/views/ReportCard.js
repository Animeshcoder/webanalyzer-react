// ReportCard.js
import React from 'react';

const ReportCard = ({ date, title, description, className }) => {
  return (
    <div className={className}>
      <span className="maskgroup-text246 BodyTextInter12Regular">
        <span>{date}</span>
      </span>
      <span className="maskgroup-text248 BodyTextInter16Medium">
        <span>{title}</span>
      </span>
      <span className="maskgroup-text260 BodyTextInter14Regular">
        <span>{description}</span>
      </span>
    </div>
  );
};

export default ReportCard;
