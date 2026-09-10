// respo.atom.js
// Atom-RESPO verbindet Atom mit NC-Modulen

import { monopoliter } from "./monopoliter.js";
import { atom_core } from "./atom.core.js";

import kraft from "./NC_kraft.js";
import space from "./NC_space.js";
import time from "./NC_time.js";
import vec from "./vec.js";
import coord from "./coord.js";
import dreieck from "./dreieck.js";

export const respo_atom = {

    pulse() {
        monopoliter.tick = time.tick();
        monopoliter.pos = space.move(monopoliter.pos, monopoliter.dir);
        return monopoliter;
    },

    react() {
        monopoliter.force = kraft.apply(monopoliter.dir, monopoliter.value);
        return monopoliter.force;
    },

    balance() {
        const f = kraft.length(monopoliter.force);
        const t = monopoliter.tick || 1;
        return f / t;
    }
};
