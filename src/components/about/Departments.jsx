
import React, { useState } from 'react';
import './departments.css';

const departmentsData = [
  {
    id: 'marketing',
    title: 'Marketing Department',
    image: '../../../m.jpg',
    description: 'Our  Marketing Department is dedicated to promoting our products and services to a wider audience. We employ innovative strategies Our  Marketing Department is dedicated to promoting our products and services to a wider audience. We employ innovative strategies to create brand awareness and drive customer engagement Our  Marketing Department is dedicated to promoting our products and services to a wider audience. We employ innovative strategies to create brand awareness and drive customer engagement Our  Marketing Department is dedicated to promoting our products and services to a wider audience. We employ innovative strategies to create brand awareness and drive customer engagement to create brand awareness and drive customer engagement.',
    services: ['Social Media Campaigns', 'Content Marketing', 'Market Research'],
  },
  {
    id: 'its',
    title: 'IT Services Department',
    image: '../../../IT.png',
    description: 'The IT Services Department ensures the smooth functioning of our digital infrastructure. We provide comprehensive IT solutions to support the organization\'s operations and security.',
    services: ['Network Management', 'Software Development', 'Cybersecurity'],
  },
  {
    id: 'marketings',
    title: 'Agriculter Department',
    image: '../../../agi.jpg',
    description: 'What are the functions of agricultural marketing? i) Exchange functions; ii) Physical functions; and iii) Facilitative functions. Exchange functions are considered to be the most important of all the functions of agricultural marketing. These mainly include functions related to buying and selling..',

    services: ['Social Media Campaigns', 'Content Marketing', 'Market Research'],
  },
  
  {
    id: 'it',
    title:"Manifacturing Department",
    image: '../../../manif.jpg',
    description: 'Ethiopia To Manufacture Lada Cars For The African Market - Russia Briefing News Ethiopia will launch the production of Russian Lada cars on its territory for the African market, the countries Ambassador to Russia Cham',
    services: ['Network Management', 'Software Development', 'Cybersecurity'],
  }
  // Add more department data as needed
];

const Dmt = () => {
  const [activeDepartment, setActiveDepartment] = useState(departmentsData[0].id);

  const onSelectDepartment = (event) => {
    setActiveDepartment(event.target.value);
  };

  return (
    <div className="a-container">
      <h1 className='d-head'>Departments</h1>
      <div className="department-menu">
        <select value={activeDepartment} onChange={onSelectDepartment}>
          {departmentsData.map(department => (
            <option key={department.id} value={department.id}>
              {department.title}
            </option>
          ))}
        </select>
      </div>
      {departmentsData.map(department => (
        <section key={department.id} className={`department-info ${activeDepartment === department.id ? 'active' : ''}`}>
          <h2>{department.title}</h2>
          <div className="d-content">
            <img src={department.image} alt={`${department.title} Image`} />
            <div className="d-left">
              <div className="d-disc">
                <p>{department.description}</p>
              </div>
              <div className='d-list'>
                <h1>our services</h1>
                <ul>
                  {department.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Dmt;