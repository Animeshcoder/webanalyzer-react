import React from 'react';
import { Helmet } from 'react-helmet';
import Footer1 from '../components/footer1';
import './user-dashboard.css';

const UserDashboard = (props) => {
  return (
    <div className="user-dashboard-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="user-dashboard-user-dashboard">
        <span className="user-dashboard-text10">
          <span>Overview</span>
        </span>
        <span className="user-dashboard-text12">
          <span>Loreum Ipusm</span>
        </span>
        <span className="user-dashboard-text14">
          <span>
            Lorem ipsum dolor sit amet.
            <span dangerouslySetInnerHTML={{ __html: ' ' }} />
          </span>
          <br />
          <span>Metus eget integer aliquam</span>
          <br />
          <span></span>
        </span>
        <span className="user-dashboard-text20">
          <span>150</span>
        </span>
        <span className="user-dashboard-text22">
          <span className="user-dashboard-text23">Your Application has</span>
          <span>
            {' '}
            accept
            <span dangerouslySetInnerHTML={{ __html: ' ' }} />
          </span>
          <br />
          <span>3 Companies</span>
        </span>
        <span className="user-dashboard-text27">Loreum Ipusm</span>
        <span className="user-dashboard-text28">
          <span>Loreum Ipusm</span>
        </span>
        <span className="user-dashboard-text30">
          <span>Loreum Ipusm</span>
        </span>
        <span className="user-dashboard-text32">
          <span>Lorem ipsum dolor sit amet.</span>
          <br />
          <span></span>
        </span>
        <span className="user-dashboard-text36">
          <span>56</span>
        </span>
        <span className="user-dashboard-text38">
          <span>Application sent</span>
        </span>
        <div className="user-dashboard-group1"></div>
        <span className="user-dashboard-text40">
          <span>10</span>
        </span>
        <span className="user-dashboard-text42">
          <span>Interview Schedule</span>
        </span>
        <span className="user-dashboard-text44">
          <span>Profile Visited</span>
        </span>
        <span className="user-dashboard-text46">
          <span>Last Activites</span>
        </span>
        <span className="user-dashboard-text48">
          <span className="user-dashboard-text49">Your Application has</span>
          <span>
            {' '}
            accept
            <span dangerouslySetInnerHTML={{ __html: ' ' }} />
          </span>
          <br />
          <span>3 Companies</span>
        </span>
        <span className="user-dashboard-text53">
          <span>UI/UX DESIGNER</span>
        </span>
        <span className="user-dashboard-text55">
          <span>Natayla Herington</span>
        </span>
        <span className="user-dashboard-text57">
          <span className="user-dashboard-text58">Your</span>
          <span>
            {' '}
            accept
            <span dangerouslySetInnerHTML={{ __html: ' ' }} />
          </span>
          <br />
          <span>3 Companies</span>
        </span>
        <span className="user-dashboard-text62">
          <span className="user-dashboard-text63">Your</span>
          <span>
            {' '}
            accept
            <span dangerouslySetInnerHTML={{ __html: ' ' }} />
          </span>
          <br />
          <span>3 Companies</span>
        </span>
      </div>
      <Footer1 />
    </div>
  );
};

export default UserDashboard;
