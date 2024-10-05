import React from "react";
import { Helmet } from "react-helmet";
import Footer1 from "../components/footer1";
import "./user-dashboard.css";

const UserDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="overview-title">
        <h2>Overview</h2>
        <div className="underline"></div>
      </div>

      <div className="dashboard-content">
        {/* Left Section */}
        <div className="left-section">
          <h3>Lorem Ipsum</h3>
          <div className="tabs">
            <span>Lorem Ipsum</span>
            <span>Lorem Ipsum</span>
            <span>Lorem Ipsum</span>
            <span>Lorem Ipsum</span>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit You've
              sent 56 job applications this month. Keep up the momentum by
              following up on your pending applications and preparing for
              interviews. Don't forget to tailor your resume for each role.
              You've sent 56 job applications this month. Keep up the momentum
              by following up on your pending applications and preparing for
              interviews. Don't forget to tailor your resume for each role.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit You've
              sent 56 job applications this month. Keep up the momentum by
              following up on your pending applications and preparing for
              interviews. Don't forget to tailor your resume for each role.
              You've sent 56 job applications this month. Keep up the momentum
              by following up on your pending applications and preparing for
              interviews. Don't forget to tailor your resume for each role.
              You've sent 56 job applications this month. Keep up the momentum
              by following up on your pending applications and preparing for
              interviews. Don't forget to tailor your resume for each role.
            </p>
          </div>
          <div className="stats">
            <div className="stat-box purple-box">
              <h3>56</h3>
              <p>Application sent</p>
            </div>
            <div className="stat-box">
              <h3>10</h3>
              <p>Interview Schedule</p>
            </div>
            <div className="stat-box">
              <h3>150</h3>
              <p>Profile Visited</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="user-info">
            <div className="avatar-placeholder"></div>
            <h3>Natayla Herington</h3>
            <p>UI/UX Designer</p>
          </div>
          <div className="activities">
            <h4>Last Activities</h4>
            <div className="activity-box">
              <p>Your Application has accepted 3 Companies</p>
            </div>
            <div className="activity-box">
              <p>Your Application has accepted 3 Companies</p>
            </div>
            <div className="activity-box">
              <p>Your Application has accepted 3 Companies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
