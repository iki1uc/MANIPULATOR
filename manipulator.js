// manipulator.js
// UNI-neutrale Bestimmungsinstanz für respo.atom

import { monopoliter } from "./monopoliter.js";

export const manipulator = {

    // Atom zwingend bestimmen
    forceDir(x, y, z) {
        monopoliter.dir = { x, y, z };
        return monopoliter.dir;
    },

    forceVal(v) {
        monopoliter.val = v;
        return monopoliter.val;
    },

    forcePos(x, y, z) {
        monopoliter.pos = { x, y, z };
        return monopoliter.pos;
    },

    // Abweichung erkennen
    detectDeviation(prev, next) {
        return (
            prev.dir.x !== next.dir.x ||
            prev.dir.y !== next.dir.y ||
            prev.dir.z !== next.dir.z ||
            prev.val !== next.val ||
            prev.pos.x !== next.pos.x ||
            prev.pos.y !== next.pos.y ||
            prev.pos.z !== next.pos.z
        );
    }
};
