import React, { useEffect, useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import './App.css';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const fetchFeedbacks = async () => {
    const res = await fetch('http://localhost:5000/api/feedback');
    const data = await res.json();
    setFeedbacks(data);
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <div className="App">
      <h1>Feedback Application</h1>
      <FeedbackForm onFeedbackSubmit={fetchFeedbacks} />
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
}

export default App;
