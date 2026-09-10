// atom.core.js
// Atom-Reaktionsmodul

import { monopoliter } from "./monopoliter.js";

export const atom_core = {

    pulse() {
        // Zeit-Tick simuliert
        monopoliter.tick = (monopoliter.tick || 0) + 1;
        return monopoliter.tick;
    },

    react() {
        // Kraft = Richtung * Wert
        monopoliter.force = {
            x: monopoliter.dir.x * monopoliter.value,
            y: monopoliter.dir.y * monopoliter.value,
            z: monopoliter.dir.z * monopoliter.value
        };
        return monopoliter.force;
    },

    balance() {
        const f = Math.abs(monopoliter.force.x)
                + Math.abs(monopoliter.force.y)
                + Math.abs(monopoliter.force.z);

        const t = monopoliter.tick || 1;

        return f / t;
    }
};
