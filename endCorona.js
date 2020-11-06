//Create a function that takes the number of daily average recovered cases recovers, daily average newCases, current activeCases, and returns the number of days it will take to reach zero cases
const endCorona = (recovers, newCases, activeCases) => {
	return Math.ceil(activeCases / (recovers - newCases));
  };