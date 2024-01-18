import './timeline.css';
import React, { useState } from 'react';

export default function Timeline(){
    const [activeItem, setActiveItem] = useState(null);
    const handleMouseEnter = (index) => {
        setActiveItem(index);
    };
    
    const handleMouseLeave = () => {
        setActiveItem(null);
    };
    
    return(
        <div className='programContainer'>
            <h1 className="programTitle">Program</h1>
            <div className="wrapper">
                <div className="timeline-area">
                    <div className="line-area">
                        <div className={`single-item ${activeItem === 0 ? 'active' : ''}`}
                        onMouseEnter={() => handleMouseEnter(0)}
                        onMouseLeave={handleMouseLeave}>
                            <span>2000-2006</span>
                            <div className="img-area">
                                <a href="#">
                                    <img src="#" alt="image"/>
                                    <span>envato</span>
                                </a>
                            </div>
                        </div>
                        <div className="single-item active">
                            <span>2000-2006</span>
                            <div className="img-area">
                                <a href="#">
                                    <img src="#" alt="image"/>
                                    <span>envato</span>
                                </a>
                            </div>
                        </div>
                        <div className="single-item active">
                            <span>2000-2006</span>
                            <div className="img-area">
                                <a href="#">
                                    <img src="#" alt="image"/>
                                    <span>envato</span>
                                </a>
                            </div>
                        </div>
                        <div className="single-item active">
                            <span>2000-Present</span>
                            <div className="img-area">
                                <a href="#">
                                    <img src="#" alt="image"/>
                                    <span>envato</span>
                                </a>
                            </div>
                        </div>
            
                    
                    </div>
                </div>
            </div>
        </div>
    )
}