import React from 'react'
import { useState } from 'react';



    const people = [
        {
        id: 1,
        name: 'Paul Pogba',
        age:32,
        image: 'https://i.pinimg.com/564x/9e/28/61/9e2861c0c7b068543176ce30376b6496.jpg'
        },
        {
        id: 2,
        name: 'Marcus Rashford',
        age:26,
        image: 'https://i.pinimg.com/564x/84/4a/10/844a105ca05fa71310f76d2a02cedd17.jpg'
        },
        {
        id: 3,
        name: 'Amad Diallo',
        age:22,
        image: 'https://i.pinimg.com/564x/2a/ef/84/2aef84452c6187074c4a9fafb1582502.jpg'
        }
    ];

    function PersonCard({ person, showDetails }) {
        return (
          <div className="person-card">
            <img src={person.image} alt={person.name} />
            {showDetails && (
              <div>
                <h2>{person.name}</h2>
                <p>Age: {person.age}</p>
              </div>
            )}
          </div>
        );
      }

    const StudentCard = () => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
    setShowDetails(prevShowDetails => !prevShowDetails);
    };
return (
    <div>
        <button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      <div className="people-list">
        {people.map(person => (
          <PersonCard key={person.id} person={person} showDetails={showDetails} />
        ))}
      </div>
    </div>
)
}

export default StudentCard;