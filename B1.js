"use strict";
function parseInput(a) {
    if (typeof a == "string")
        return a;
    if (typeof a == "number")
        return a;
    if (typeof a == "boolean")
        return a;
    if (typeof a == "undefined")
        return a;
    if (a == "null")
        return a;
}
console.log(parseInput(undefined));
