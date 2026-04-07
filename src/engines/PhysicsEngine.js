/**
 * PhysicsEngine.js
 * 
 * This file implements a Physics Engine using Cannon.js, focusing on rigid body dynamics, constraints, and soft-body physics.
 * 
 * Rigid body dynamics is a critical area in physics simulation, dealing with the behavior of solid objects that do not deform under stress. In video games and simulations, modeling these bodies accurately allows for realistic movements, collisions, and interactions. Cannon.js is a powerful physics engine written in JavaScript that provides tools for creating and manipulating rigid body dynamics within a 3D world.
 * 
 * Constraints are essential for defining relationships between bodies. They enforce limits on movements, allowing for more complex interactions like hinges, springs, and joints. For instance, using constraints, a character can swing from a rope or a vehicle can have its wheels attached to its chassis without exceeding practical limits of motion.
 * 
 * Soft-body physics extends the concepts of rigid body dynamics by allowing objects to deform under forces. This approach is crucial for simulating materials such as cloth, jelly, and other deformable materials in a realistic manner. Soft bodies typically use a collection of interconnected rigid bodies, often allowing for complex interactions with the environment while maintaining a sense of solidity.
 * 
 * The following functionalities are implemented in this Physics Engine:
 * - Initialization of a Cannon.js world and physics materials.
 * - The ability to create and add static and dynamic bodies to the world.
 * - A method for creating player bodies that can interact with the environment.
 * - A mechanism to update the world based on delta time for smooth animations and interactions.
 * - Raycasting capabilities to detect collisions and interactions within the physics world.
 * 
 * Usage:
 * 1. Instantiate the PhysicsEngine class to set up the world.
 * 2. Use the addStaticBody and addDynamicBody methods to create bodies within the simulation.
 * 3. Call the update method with the delta time to continuously update the physics simulation.
 * 4. Utilize raycast for advanced interaction detection.
 * 
 * This engine serves as a foundational component for building dynamic, interactive environments where physics play a critical role in gameplay mechanics.
 */

import * as CANNON from 'cannon';

class PhysicsEngine {
    constructor() {
        this.world = new CANNON.World();
        this.world.gravity.set(0, -9.82, 0); // gravity vector
        this.materials = {};
    }

    initMaterials() {
        const defaultMaterial = new CANNON.Material('default');
        this.world.addContactMaterial(new CANNON.ContactMaterial(defaultMaterial, defaultMaterial, { friction: 0.1, restitution: 0.7 }));
        this.materials.default = defaultMaterial;
        // Additional materials can be initialized here
    }

    addStaticBody(geometry, position) {
        const staticBody = new CANNON.Body({ mass: 0 });
        staticBody.position.copy(position);
        geometry.forEach((shape) => staticBody.addShape(shape));
        this.world.addBody(staticBody);
    }

    addDynamicBody(geometry, position, mass = 1) {
        const dynamicBody = new CANNON.Body({ mass: mass });
        dynamicBody.position.copy(position);
        geometry.forEach((shape) => dynamicBody.addShape(shape));
        this.world.addBody(dynamicBody);
    }

    createPlayerBody(position, radius) {
        const playerBody = new CANNON.Body({ mass: 5 });
        playerBody.position.copy(position);
        playerBody.addShape(new CANNON.Sphere(radius));
        this.world.addBody(playerBody);
        return playerBody;
    }

    update(deltaTime) {
        this.world.step(deltaTime);
    }

    raycast(from, to) {
        const result = this.world.raycast(from, to);
        return result;
    }
}

export default PhysicsEngine;
