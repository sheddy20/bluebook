import React from 'react';

export default function Home () {
    const details = {
        name: 'Mike Will',
        location: 'Boston Ma',
        numbers: ['Tesla', 'BMW', 'Lucid', 'Rivian'],
    }
    return (
        <div>
            <h1>Name: {details.name ? details.name : 'Wrong name'}</h1>
            <h2>Location: {details.location ? details.location : 'Wrong location'}</h2>
            <p>{details.numbers.length >= 0 ? 'your car collections' : 'Must be 0'}</p>
            <ol>
                <li>Item One</li>
                <li>Item Two</li>
                <li>Item Three</li>
                <li>Item Four</li>
            </ol>
        </div>
    );
}