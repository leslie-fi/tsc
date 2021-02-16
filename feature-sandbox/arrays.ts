const carMakers: string[] = ['ford', 'toyota', 'fiat'];
const emptyArray: string[] = [];
const dates = [new Date(), new Date()]

// const carsByMake: string[][]
const carsByMake = [
  ['f150'], ['corolla'], ['mini']
]

// help with inference when extracting values
const car = carMakers[0]
const myCar = carMakers.pop()

// prevent incompatible values
carMakers.push(100);

// help with methods like map
carMakers.map((car: string): string => {
  return car.toLocaleUpperCase()
})

// flexible types
const importantDates: (Date | string)[] = [new Date()]
importantDates.push('2020-10-10')
importantDates.push(new Date())
importantDates.push(1)