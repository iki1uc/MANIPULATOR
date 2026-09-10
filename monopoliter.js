// monopoliter.js
// Minimaler Atom-Kern

const monopoliter = {
    // Atom-Wert
    value: 1,

    // Atom-Richtung (Standard: +X)
    direction: { x: 1, y: 0, z: 0 },

    // Atom-Position
    pos: { x: 0, y: 0, z: 0 },

    // Atom bewegen
    move() {
        this.pos.x += this.direction.x * this.value;
        this.pos.y += this.direction.y * this.value;
        this.pos.z += this.direction.z * this.value;
        return this.pos;
    },

    // Atom drehen (Spin)
    spin(axis = "x") {
        if (axis === "x") this.direction = { x: 1, y: 0, z: 0 };
        if (axis === "y") this.direction = { x: 0, y: 1, z: 0 };
        if (axis === "z") this.direction = { x: 0, y: 0, z: 1 };
        return this.direction;
    },

    // Atom-Kraft anwenden
    push(target) {
        if (!target.force) target.force = { x: 0, y: 0, z: 0 };
        target.force.x += this.direction.x * this.value;
        target.force.y += this.direction.y * this.value;
        target.force.z += this.direction.z * this.value;
        return target.force;
    }
};

export default monopoliter;
