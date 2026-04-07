/**
 * Menu Component
 * 
 * This component implements the main menu screen for the hide online game, providing players with multiple options to select from. 
 * The main features of this menu include:  
 * 1. Game Mode Selection Cards: 
 *    - Classic: The traditional mode where players can engage in gameplay without any modifications or extra features.
 *    - Team: A game mode that promotes teamwork, where players are grouped into teams, striving to win together. This mode encourages collaboration and strategic thinking.
 *    - Chaos: An exciting mode that introduces randomness into gameplay, making every match unique and unpredictable, providing a thrilling experience for players who enjoy surprises.
 * 
 * 2. Matchmaking Loader: 
 *    - When players are looking for matches, a loading indicator will be displayed to keep them informed. The loader will feature spinner animations, indicating that the game is searching for available opponents. 
 * 
 * 3. Settings Button: 
 *    - Players can access the settings menu by clicking on this button, allowing them to customize their gameplay experience. 
 *    - Settings can include options like sound controls, graphics settings, and gameplay preferences. 
 * 
 * 4. Profile Button: 
 *    - This feature enables players to view and edit their profile. Here, they can view their game statistics, achievements, and possibly customize their characters. 
 *    - Character customization allows players to change their appearance and gear as they progress, giving them a unique identity in this gaming world. 
 * 
 * 5. Achievements: 
 *    - The menu interface will showcase achievements that players have completed throughout their gaming journey. This not only provides a sense of accomplishment but also encourages players to challenge themselves further by completing various tasks and milestones.
 *    - Achievements can range from completing a certain number of games to reaching specific scores, and unlocking hidden challenges.
 * 
 * 6. Server Selection: 
 *    - To ensure optimal gaming performance, players will have the option to select servers based on their geographical location. 
 *    - This feature minimizes latency and provides a smoother gameplay experience for players, helping them connect with others in their region. By selecting the best server, players can enjoy faster connections and avoid potential lag issues. 
 * 
 * The Menu component serves as an essential gateway to the game, making it user-friendly and ensuring that players can get into the action quickly. Future updates may introduce more diverse game modes or additional features, enhancing the overall experience for players.
 */

import React, { useState } from 'react';
import { Spinner } from 'reactstrap';

const Menu = () => {
    const [loading, setLoading] = useState(false);

    const handleGameModeSelect = (mode) => {
        // Handle selection of game mode
        console.log(`Selected game mode: ${mode}`);
    };

    return (
        <div className="menu">
            <h1>Main Menu</h1>
            <div className="game-modes">
                <div className="card" onClick={() => handleGameModeSelect('Classic')}>Classic</div>
                <div className="card" onClick={() => handleGameModeSelect('Team')}>Team</div>
                <div className="card" onClick={() => handleGameModeSelect('Chaos')}>Chaos</div>
            </div>
            {loading && <Spinner animation="border" />}
            <button onClick={() => console.log('Settings clicked')}>Settings</button>
            <button onClick={() => console.log('Profile clicked')}>Profile</button>
        </div>
    );
};

export default Menu;