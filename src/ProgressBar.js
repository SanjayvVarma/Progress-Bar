import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);
    const totalTime = 21000;
    const updateDuration = 100;

    const increment = (100 / totalTime) * updateDuration;

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return Math.min(prevProgress + increment, 100);
            });
        }, updateDuration);

        return () => clearInterval(timer);
    }, [increment, updateDuration]);

    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <div
                style={{
                    height: '20px',
                    backgroundColor: progress < 100 ? '#f0f0f0' : 'white',
                    border: '1px solid #ccc',
                    borderRadius: '10px',
                    margin: '0 26rem',
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        width: `${progress}%`,
                        height: '100%',
                        backgroundColor: '#007bff',
                        transition: 'width 0.6s ease-in-out',
                        position: 'absolute',
                        borderRadius: '10px'
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: progress < 57.6 ? 'black' : 'white', 
                        fontWeight: 'bold',
                    }}
                >
                    {Math.round(progress)}%
                </div>
            </div>
            <div style={{
                marginTop: '0.5rem',
                paddingLeft: '48%',
                color: '#000000',
            }}>
                {progress < 100 ? `Loading.......` : 'Complete!'}
            </div>
        </div>
    );
};
export default ProgressBar;


