'use strict';

// GSAP presets for camera transitions
const cameraTransitions = {
    fadeIn: () => {
        gsap.fromTo(camera.position, {z: 10}, {z: 0, duration: 1, ease: 'power2.out'});
    },
    slideIn: () => {
        gsap.fromTo(camera.position, {x: -10}, {x: 0, duration: 1, ease: 'power2.out'});
    },
};

// GSAP presets for UI animations
const uiAnimations = {
    pulse: (element) => {
        gsap.fromTo(element, {scale: 1}, {scale: 1.1, duration: 0.5, yoyo: true, repeat: -1, ease: 'power1.inOut'});
    },
    fadeIn: (element) => {
        gsap.fromTo(element, {opacity: 0}, {opacity: 1, duration: 1, ease: 'power2.out'});
    },
};

// GSAP presets for particle effects
const particleEffects = {
    explode: (particles) => {
        particles.forEach(particle => {
            gsap.to(particle, {x: Math.random() * 100 - 50, y: Math.random() * 100 - 50, duration: 1, ease: 'power2.out'});
        });
    },
};

// Smooth easing functions
const easingFunctions = {
    smoothEase: 'power3.inOut',
    customEase: (time) => {
        return time < 0.5 ? 4 * time * time * time : 1 - Math.pow(-2 * time + 2, 3) / 2;
    },
};

// Exporting all presets
export { cameraTransitions, uiAnimations, particleEffects, easingFunctions };