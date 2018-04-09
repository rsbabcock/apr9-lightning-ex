const _1948 = [3.4, 3.8, 4.0, 3.9, 3.5, 3.6, 3.6]
const _1949 = [4.3, 4.7, 5.0, 5.3, 6.1, 6.2, 6.7]
const _1950 = [6.5, 6.4, 6.3, 5.8, 5.5, 5.4, 5.0]
const _1951 = [3.7, 3.4, 3.4, 3.1, 3.0, 3.2, 3.1]
const _1952 = [5.8, 6.4, 6.7, 7.4, 7.4, 7.3, 7.5]

const RainfallDatabase = [_1948, _1949, _1950, _1951, _1952]

// Find out how much total rain has fallen over last 10 years
const allRainfall = RainfallDatabase.reduce(
    // current set is actually _1948 which represents the first array, js knows to use the first item in the array and then cycle through them
  function(currentSet, nextSet) {
    //   concat squishes arrays together - makes all arrays squished together
    return currentSet.concat(nextSet)
  }
).reduce(
    // .reduce is an abstration - complex logic that is user friendly
    // .reduce takes a function as a paramaeter that has 2 arguments, takes each set and adds them together
  function(total, monthlyRainfall) {
    return total + monthlyRainfall
  }
)

console.log(allRainfall)

// objects in data
// Copy this entire code example into a Quokka project
const RainfallDatabase = {
    "1948" : [3.4, 3.8, 4.0, 3.9, 3.5, 3.6, 3.6],
    "1949" : [4.3, 4.7, 5.0, 5.3, 6.1, 6.2, 6.7],
    "1950" : [6.5, 6.4, 6.3, 5.8, 5.5, 5.4, 5.0],
    "1951" : [3.7, 3.4, 3.4, 3.1, 3.0, 3.2, 3.1],
    "1952" : [5.8, 6.4, 6.7, 7.4, 7.4, 7.3, 7.5]
  }
  
  /*
    Don't worry about understanding this code, it is here for
    display purposes only. That said, taking time to *try* to
    understand this code would be encouraged. Talk to the staff.
  */
  yearlyRainData = [].concat
      .apply([], Object.values(RainfallDatabase))
      .reduce((sum, monthlyRainfall) => sum + monthlyRainfall)
  
  console.log(yearlyRainData)