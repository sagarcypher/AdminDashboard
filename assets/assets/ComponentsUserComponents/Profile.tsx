import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import './profile.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function LeetCodeProfile() {
  const [profileData, setProfileData] = useState({
    username: 'Admin',
    tagline: 'Admin_Alex',
    location: 'UK',
    github: 'AlexHads',
    interests: 'Administration',
    avatarUrl: 'src/assets/Components/UserComponents/adminnn.webp',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(profileData);

  const toggleEditMode = () => {
    if (isEditing) setProfileData(editData);
    setIsEditing(!isEditing);
  };

  const userChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      { label: 'Total Users', data: [7000, 7200, 7300, 7400, 7500, 7600, 7700, 7800], borderColor: '#2FBFDE', tension: 0.4 },
      { label: 'Active Users', data: [5000, 5200, 5300, 5400, 5500, 5600, 5700, 5800], borderColor: '#5A6ACF', tension: 0.4 },
      { label: 'Inactive Users', data: [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000], borderColor: '#FFCF56', tension: 0.4 },
    ],
  };

  const contentCreatorChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      { label: 'Total Content Creators', data: [1000, 1020, 1050, 1100, 1150, 1200, 1250, 1300], borderColor: '#2FBFDE', tension: 0.4 },
      { label: 'Active Content Creators', data: [800, 820, 850, 900, 950, 1000, 1050, 1100], borderColor: '#5A6ACF', tension: 0.4 },
      { label: 'Inactive Content Creators', data: [200, 200, 200, 200, 200, 200, 200, 200], borderColor: '#FFCF56', tension: 0.4 },
    ],
  };

  const submissionChartData = {
    labels: ['Past 7 Days', 'Past Month', 'Past Year'],
    datasets: [
      { label: 'Submissions', data: [500, 2000, 24000], borderColor: '#2FBFDE', tension: 0.4 },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <img src={profileData.avatarUrl} alt="Profile" />
        </div>
        <div className="profile-info">
          {isEditing ? (
            <>
              <input className="edit-input" type="text" value={editData.username} onChange={(e) => setEditData({ ...editData, username: e.target.value })} />
              <input className="edit-input" type="text" value={editData.tagline} onChange={(e) => setEditData({ ...editData, tagline: e.target.value })} />
              <input className="edit-input" type="text" value={editData.location} onChange={(e) => setEditData({ ...editData, location: e.target.value })} />
              <input className="edit-input" type="text" value={editData.github} onChange={(e) => setEditData({ ...editData, github: e.target.value })} />
              <textarea className="edit-input" value={editData.interests} onChange={(e) => setEditData({ ...editData, interests: e.target.value })} />
            </>
          ) : (
            <>
              <h2>{profileData.username}</h2>
              <p>{profileData.tagline}</p>
              <p>{profileData.location}</p>
              <p><strong>GitHub:</strong> <a href={`https://github.com/${profileData.github}`} target="_blank" rel="noopener noreferrer">{profileData.github}</a></p>
              <p>{profileData.interests}</p>
            </>
          )}
          <button className="edit-button" onClick={toggleEditMode}>{isEditing ? 'Save' : 'Edit Profile'}</button>
        </div>
      </div>

      <div className="charts-container">
        <div className="card user-chart-card">
          <h3>Number of Users</h3>
          <Line data={userChartData} options={lineChartOptions} />
        </div>
        <div className="card creator-chart-card">
          <h3>Number of Content Creators</h3>
          <Line data={contentCreatorChartData} options={lineChartOptions} />
        </div>
        <div className="card submission-chart-card">
          <h3>Number of Submissions</h3>
          <Line data={submissionChartData} options={lineChartOptions} />
        </div>
      </div>
    </div>
  );
}
