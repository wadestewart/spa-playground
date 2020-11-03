import React from 'react';

const Dashboard = props => {
    const userName = Object.entries(props.user).map(([key, value]) => {
        console.log(`${key}: ${value}`)
    });

    return (
        <div>
            {userName}
            <h1>Welcome {props.name}!</h1>
        </div>
    )
}

export default Dashboard;
