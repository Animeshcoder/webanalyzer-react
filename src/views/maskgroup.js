import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import DashboardCard from './DashboardCard';
import ReportCard from './ReportCard';
import './maskgroup.css';
import PieChart from './PieChart';

const Maskgroup = () => {
  const location = useLocation();
  const { data, feature, sub_feature } = location.state;

  // Debugging: Log the data to see if it's correctly passed
  console.log("Data received:", data);

  // Log keys of data to verify expected structure
  console.log("Data keys:", data ? Object.keys(data) : []);

  // Handle undefined data gracefully
  const pieChartData = data && data.results && data.results.total_score ? [data.results.total_score, 70 - data.results.total_score] : [0, 70];

  const numericalData = data && data.results && data.results.numerical_data ? data.results.numerical_data : {};
  
  console.log("numerical data:", numericalData);

  const cardsData = Object.keys(numericalData).map((key, index) => {
    const card = numericalData[key];
    return {
      title: card.title,
      value: card.value || 0,
      percentage: '',
      className: `maskgroup-dashboardcard${index + 4}`
    };
  });

  

  // Example reportsData (previous reports)
  const reportsData = [
    { date: '02 Feb 2023', title: 'Report 1', description: "Brainstorming brings team members' diverse experience into play.", className: 'maskgroup-card1' },
    { date: '02 Feb 2023', title: 'Report 2', description: "Brainstorming brings team members' diverse experience into play.", className: 'maskgroup-card2' },
  ];



const oneLinerData = data && data.results && data.results.one_liner_data ? data.results.one_liner_data : [];
console.log("One Liner Data:", oneLinerData);

const [hoveredDetail, setHoveredDetail] = useState({ detail: '', position: { top: 0, left: 0 } });

const handleMouseEnter = (event, detail) => {
  console.log("Mouse Enter:", detail);
  const rect = event.target.getBoundingClientRect();
  const newPosition = {
    top: rect.top + window.scrollY + 20,
    left: rect.left + window.scrollX + 20,
  };
  console.log("New Position:", newPosition);
  setHoveredDetail({
    detail,
    position: newPosition
  });
};

const handleMouseLeave = () => {
  console.log("Mouse Leave");
  setHoveredDetail({ detail: '', position: { top: 0, left: 0 } });
};

return (
  <div className="maskgroup-container1">
    <Helmet>
      <title>Web Analyzer Report</title>
    </Helmet>
    <h1>{feature} - {sub_feature}</h1>
    <div className="maskgroup-maskgroup">
      <div className="maskgroup-dashboard">
        {cardsData.map((card, index) => (
          <DashboardCard
            key={index}
            title={card.title}
            value={card.value}
            percentage={card.percentage}
            className={card.className}
          />
        ))}
        <div className="maskgroup-dashboardcard2">
          <div className="maskgroup-container2">
            <span className="maskgroup-text193">
              <span>Report Data</span>
            </span>
          </div>
          <div className="maskgroup-chart">
            <PieChart data={pieChartData} />
          </div>
        </div>
        <div className="maskgroup-dashboardcard3">
          <span className="maskgroup-text228">
            <span>One Liner Information</span>
          </span>
          <div className="maskgroup-frame427318883">
            {oneLinerData.map((line, index) => (
              <span
                key={index}
                className="maskgroup-text230"
                onMouseEnter={(e) => handleMouseEnter(e, line.details)}
                onMouseLeave={handleMouseLeave}
              >
                {line.title} <i className="info-icon">(i)</i>
                {hoveredDetail.detail === line.details && (
                  <div className="hover-details" style={{ top: hoveredDetail.position.top, left: hoveredDetail.position.left }}>
                    <span>{hoveredDetail.detail}</span>
                  </div>
                )}
              </span>
            ))}
          </div>
        </div>
        <div className="maskgroup-block">
          <span className="maskgroup-text244">
            <span>Recent Reports</span>
          </span>
          {reportsData.map((report, index) => (
            <ReportCard
              key={index}
              date={report.date}
              title={report.title}
              description={report.description}
              className={report.className}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);
};

export default Maskgroup;