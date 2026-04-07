// Constants for the online game

const MAX_PLAYERS = 16;
const GAME_MODES = ['casual', 'ranked', 'tournament'];
const MAP_SIZES = ['small', 'medium', 'large'];
const PLAYER_SPEED = 10; // units per second
const SEEKER_SPEED = 12; // units per second
const ABILITY_COOLDOWNS = { jump: 5, dash: 15, teleport: 30 }; // in seconds
const NETWORK_TICK_RATE = 60; // ticks per second

// Physics parameters
const GRAVITY = 9.81; // m/s²
const FRICTION = 0.5;
const BOUNCE = 0.8;

export { MAX_PLAYERS, GAME_MODES, MAP_SIZES, PLAYER_SPEED, SEEKER_SPEED, ABILITY_COOLDOWNS, NETWORK_TICK_RATE, GRAVITY, FRICTION, BOUNCE };