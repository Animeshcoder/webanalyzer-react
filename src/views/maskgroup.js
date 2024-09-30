import React from 'react';
import { Helmet } from 'react-helmet';
import DashboardCard from './DashboardCard';
import ReportCard from './ReportCard';
import './maskgroup.css';
import PieChart from './PieChart';

const Maskgroup = (props) => {
  const data = [5256598, 4000000];
  const cardsData = [
    { title: 'SEO Optimizer', value: 356, percentage: '+11.01%', className: 'maskgroup-dashboardcard1' },
    { title: 'SEO Optimizer', value: 242, percentage: '+11.01%', className: 'maskgroup-dashboardcard4' },
    { title: 'SEO Optimizer', value: 356, percentage: '+11.01%', className: 'maskgroup-dashboardcard5' },
    { title: 'SEO Optimizer', value: 242, percentage: '+11.01%', className: 'maskgroup-dashboardcard6' },
    { title: 'SEO Optimizer', value: 356, percentage: '+11.01%', className: 'maskgroup-dashboardcard7' },
    { title: 'SEO Optimizer', value: 242, percentage: '+11.01%', className: 'maskgroup-dashboardcard8' },
    { title: 'SEO Optimizer', value: 356, percentage: '+11.01%', className: 'maskgroup-dashboardcard9' },
    { title: 'SEO Optimizer', value: 242, percentage: '+11.01%', className: 'maskgroup-dashboardcard10' },
  ];
  const reportsData = [
    { date: '02 Feb 2023', title: 'Report 1', description: "Brainstorming brings team members' diverse experience into play.", className: 'maskgroup-card1' },
    { date: '02 Feb 2023', title: 'Report 2', description: "Brainstorming brings team members' diverse experience into play.", className: 'maskgroup-card2' },
    // Add more report data as needed
  ];

  return (
    <div className="maskgroup-container1">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="maskgroup-maskgroup">
        <div className="maskgroup-dashbaord">
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
                <span>Total Queries</span>
              </span>
            </div>
            <div className="maskgroup-chart">
              <PieChart data={data} />
            </div>
          </div>
          <div className="maskgroup-dashboardcard3">
            <span className="maskgroup-text228">
              <span>Queries by Categories</span>
            </span>
            <div className="maskgroup-frame427318883">
              <span className="maskgroup-text230">SEO Optimizer</span>
              <span className="maskgroup-text232">SEO Optimizer</span>
              <span className="maskgroup-text234">SEO Optimizer</span>
              <span className="maskgroup-text236">SEO Optimizer</span>
              <span className="maskgroup-text238">SEO Optimizer</span>
              <span className="maskgroup-text240">SEO Optimizer</span>
              <span className="maskgroup-text242">SEO Optimizer</span>
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
