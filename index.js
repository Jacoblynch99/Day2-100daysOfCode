const _ = require("underscore")

console.log("first")

const secondLog = () => {
  console.log("second")
}

_.defer(secondLog) // defer is telling the program to empty the callstack before running the function

const log = (str) => {
  console.log(str)
}

_.delay(log, 1000, "third") // delay works just like setTimout, but can also pass an argument on into the function it is delaying.

_.delay(log, 2000, "fourth")

console.log("fifth")
console.log("sixth")
