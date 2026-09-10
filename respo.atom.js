// respo.atom.js
// Minimaler Atom-RESPO-Kern

import kraft from "./NC_kraft.js";
import space from "./NC_space.js";
import time from "./NC_time.js";
import vec from "./vec.js";
import coord from "./coord.js";

export const respo_atom = {

    // Atom-Zustand
    atom: {
        pos: coord(0, 0, 0),
        dir: vec(1, 0, 0),
        force: vec(0, 0, 0),
        tick: 0
    },

    // 1. Atom-Puls (Zeit + Bewegung)
    pulse() {
        this.atom.tick = time.tick();

        // Bewegung durch Raum
        this.atom.pos = space.move(this.atom.pos, this.atom.dir);

        return this.atom;
    },

    // 2. Atom-Reaktion (Kraft anwenden)
    react() {
        this.atom.force = kraft.apply(this.atom.dir);

        return this.atom.force;
    },

    // 3. Atom-Balance (Kraft + Raum + Zeit ausgleichen)
    balance() {
        const f = this.atom.force.length();
        const t = this.atom.tick;

        // einfache Balance-Formel
        const bal = f / (t + 1);

        return bal;
    }
};
