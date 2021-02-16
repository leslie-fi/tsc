interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar}g sugar`;
  },
};

const printVehicle = ({
  name,
  year,
  broken,
}: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${name}`);
  console.log(`year: ${year}`);
  console.log(`broken? : ${broken}`);
};

const updatedPrintVehicle = ({ name, year, broken }: Vehicle): void => {
  console.log(`Name: ${name}`);
  console.log(`year: ${year}`);
  console.log(`broken? : ${broken}`);
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};
// updatedPrintVehicle(oldCivic)
printSummary(oldCivic);
printSummary(drink);
