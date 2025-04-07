import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function SentimentAnalyzer() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult('');

    try {
      const response = await fetch('http://localhost:5000/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data.sentiment || 'No result');
      } else {
        setResult('Error analyzing sentiment');
      }
    } catch (error) {
      setResult('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
      <div>
          <Navbar></Navbar>
      <h1>Sentiment Analyzer</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
          rows="5"
          cols="40"
          placeholder="Enter some text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <br />
        <button type="submit" disabled={loading} className='bg-pink-600 p-4'>
          {loading ? 'Analyzing...' : 'Analyze'}
        </button>
      </form>
      <h2>Result:</h2>
      <p>{result || 'Waiting for input...'}</p>
    </div>
  );
}

export default SentimentAnalyzer;
