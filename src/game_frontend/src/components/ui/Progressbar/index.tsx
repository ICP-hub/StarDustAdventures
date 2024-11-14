import React, { useState } from 'react';
import './index.css';

const ProgressBar: React.FC<ProgressBarProps> = ({ 
    initialProgress = 0.5 
}) => {
    const [progress, setProgress] = useState<number>(initialProgress);

    const handleProgressChange = (newProgress: number): void => {
        setProgress(newProgress);
    };

    return (
        <div className="progress-wrapper">
            <div className="progress-bar ufo-progress-bar">
                <div 
                    className="progress-fill"
                    style={{
                        height: `${progress * 100}%`,
                        backgroundColor: '#EAB308'
                    }}
                />
            </div>
        </div>
    );
};

export default ProgressBar;