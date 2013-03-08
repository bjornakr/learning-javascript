/**
 * This method provides access to rand without having to put it in the global
 * scope.
 * 
 * var styx = closure();
 * styx();
 * -> rand: 0.123, otherRand: 0.456
 * styx();
 * -> rand: 0.123, otherRand: 0.789
 *
 * Also:
 * closure()();
 * -> rand: 0.123, otherRand: 0.456
 * closure()();
 * -> rand: 0.789, otherRand: 0.274
 */
function closure() {
	var rand = Math.random();

	return function () {
		var otherRand = Math.random();
		return ("rand: " + rand + ", otherRand:" + otherRand);
	}
}

console.log("Ready.");
