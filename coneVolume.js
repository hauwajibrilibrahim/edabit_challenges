//Create a function that takes the height and radius of a cone as arguments and returns the volume of the cone rounded to the nearest hundredth
function coneVolume(h, r) {
	const volume = Math.PI * (r**2) * h / 3;
	return Number(volume.toFixed(2));
}