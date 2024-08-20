import React, { useEffect, useState } from 'react';
import './Leaderboard.css';
import axios from 'axios';

const Leaderboard = ({ topK }) => {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        const fetchTopScores = async () => {
            try {
                const response = await axios.get('/api/leaderboard', {
                    params: { topK },
                });
                setScores(response.data);
            } catch (error) {
                console.error('Error fetching leaderboard:', error);
            }
        };

        fetchTopScores();
    }, [topK]);

    return (
        <div className="leaderboard-container">
            <h2 className="leaderboard-title">Top {topK} Scores</h2>
            <ul className="leaderboard-list">
                {scores.map((score, index) => (
                    <li key={index} className="leaderboard-item">
                        <span className="rank">{index + 1}.</span>
                        <span className="name">{score.name}</span>
                        <span className="points">{score.points} pts</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;
