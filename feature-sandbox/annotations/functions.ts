const add = (a: number, b: number): number => {
  return a + b;
}
const sub = (a: number, b: number) => {
  a - b;
}

function divide(a: number, b: number): number {
  return a/b
}

const multiply = function (a: number, b: number): number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message)
}
const throwError = (message: string): never => {
  throw new Error(message)
}
const likelyThrowError = (message: string): void => {
  if (!message){
  throw new Error(message)
}
}

const todaysWeather = {
  date: new Date(), 
  weather: 'sunny'
}
const logWeather = (forecast: {date: Date, weather: string}): void => {
  console.log(forecast.date)
  console.log(forecast.weather)
}

//ES2015
const logWeatherDestructured = ({date, weather}: {date: Date, weather: string}): void => {
console.log(date)
console.log(weather)
}
logWeatherDestructured(todaysWeather)
logWeather(todaysWeather)