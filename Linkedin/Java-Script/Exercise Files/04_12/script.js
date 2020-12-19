function giveMeEms(pixels) {
	var baseValue = 16;

	function doTheMath() {
		return pixels/baseValue;
	}

	return doTheMath;
}

var smallSize = giveMeEms(12),
	mediumSize = giveMeEms(18),
	largeSize = giveMeEms(24),
	xLargeSize = giveMeEms(32);
console.log("Small size: ",smallSize());
console.log("medium size: ",mediumSize());
console.log("large size: ",largeSize());
console.log("xLarge size: ",xLargeSize());