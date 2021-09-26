import React from 'react';
import { serviceList } from './serviceList';
import './services.css';

const Services = () => {
    return (
        <div className="services-conatiner-div">
            <span>Services we offer for Property</span>
            {
                serviceList.map((item) => {
                    return(
                    <div className="service-item-div">
                        <div className="service-icon">
                            <img src={item.url} alt={item.id} width="100%" height="100%" />
                        </div>
                        <p>{item.title}</p>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Services
