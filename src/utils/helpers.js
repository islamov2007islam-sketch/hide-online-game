// src/utils/helpers.js

/**
 * Vector3 operations
 */
class Vector3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add(vector) {
        return new Vector3(this.x + vector.x, this.y + vector.y, this.z + vector.z);
    }

    subtract(vector) {
        return new Vector3(this.x - vector.x, this.y - vector.y, this.z - vector.z);
    }

    multiply(scalar) {
        return new Vector3(this.x * scalar, this.y * scalar, this.z * scalar);
    }

    magnitude() {
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
    }

    normalize() {
        const mag = this.magnitude();
        return new Vector3(this.x / mag, this.y / mag, this.z / mag);
    }
}

/**
 * Quaternion conversions and operations
 */
class Quaternion {
    constructor(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }

    static fromEuler(roll, pitch, yaw) {
        const cy = Math.cos(yaw * 0.5);
        const sy = Math.sin(yaw * 0.5);
        const cp = Math.cos(pitch * 0.5);
        const sp = Math.sin(pitch * 0.5);
        const cr = Math.cos(roll * 0.5);
        const sr = Math.sin(roll * 0.5);

        return new Quaternion(
            sr * cp * cy - cr * sp * sy,
            cr * sp * cy + sr * cp * sy,
            cr * cp * sy - sr * sp * cy,
            cr * cp * cy + sr * sp * sy
        );
    }

    static toEuler(q) {
        const { x, y, z, w } = q;
        const pitch = Math.asin(2 * (w * y - x * z));
        const roll = Math.atan2(2 * (w * x + y * z), 1 - 2 * (x ** 2 + y ** 2));
        const yaw = Math.atan2(2 * (w * z + x * y), 1 - 2 * (y ** 2 + z ** 2));
        return { roll, pitch, yaw };
    }
}

/**
 * Distance calculations
 */
function distance(pointA, pointB) {
    return Math.sqrt(
        (pointB.x - pointA.x) ** 2 +
        (pointB.y - pointA.y) ** 2 +
        (pointB.z - pointA.z) ** 2
    );
}

/**
 * Angle calculations
 */
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}

/**
 * Math utilities for game engine
 */
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

function lerp(start, end, t) {
    return start + (end - start) * t;
}

export {
    Vector3,
    Quaternion,
    distance,
    degreesToRadians,
    radiansToDegrees,
    clamp,
    lerp
};
