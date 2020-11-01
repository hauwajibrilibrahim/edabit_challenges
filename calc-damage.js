//Create a function that takes damage and speed (attacks per second) and returns the amount of damage after a given time
function damage(damage, speed, time) {
	if (damage < 0 || speed < 0) return "invalid";
	return damage * speed * {second:1, minute:60, hour:3600}[time];
}