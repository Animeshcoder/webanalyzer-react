import React, { useState } from 'react';
import './Webanalyzer.css';
import { useNavigate } from 'react-router-dom';

const DynamicForm = () => {
    const [url, setUrl] = useState('');
    const [firstOption, setFirstOption] = useState('');
    const [secondOptions, setSecondOptions] = useState([]);
    const [secondOption, setSecondOption] = useState('');
    const navigate = useNavigate();
  
    const handleFirstOptionChange = (e) => {
      const selectedOption = e.target.value;
      setFirstOption(selectedOption);
  
      // Update secondOptions based on the firstOption
      switch (selectedOption) {
        case 'User Interface':
          setSecondOptions(['Color Grading', 'Content Style', 'Element Layout']);
          break;
        case 'User Experience':
          setSecondOptions(['WebPage Performance', 'WebPage Quality']);
          break;
        case 'Website Security':
          setSecondOptions(['Security and Policy', 'Threats Mitigation']);
          break;
        case 'SEO':
          setSecondOptions(['Website Ranking', 'SEO Grading', 'Competitor Analysis', 'Keyword Tracking', 'Trend Analysis']);
          break;
        case 'Website Advertisement':
          setSecondOptions(['Ads Recommendation', 'Ads Positioning']);
          break;
        default:
          setSecondOptions([]);
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('URL:', url);
      console.log('First Option:', firstOption);
      console.log('Second Option:', secondOption);
  
      navigate('/report');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>URL:</label>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>
        <div>
          <label>First Option:</label>
          <select value={firstOption} onChange={handleFirstOptionChange} required>
            <option value="">Select an option</option>
            <option value="User Interface">User Interface</option>
            <option value="User Experience">User Experience</option>
            <option value="Website Security">Website Security</option>
            <option value="SEO">SEO</option>
            <option value="Website Advertisement">Website Advertisement</option>
          </select>
        </div>
        {firstOption && (
          <div>
            <label>Second Option:</label>
            <select value={secondOption} onChange={(e) => setSecondOption(e.target.value)} required>
              <option value="">Select an option</option>
              {secondOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
        )}
        <button type="submit">Generate Report</button>
      </form>
    );
  };
  
  export default DynamicForm;