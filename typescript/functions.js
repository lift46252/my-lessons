function add(a, b) {
    return a + b;
}
function toUpper(str) {
    return str.toUpperCase();
}
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, "default": a.toString() };
    }
    return { x: a, y: b };
}
console.log("empty", position());
console.log("One Param", position(42));
console.log("Two params", position(42, 15));
