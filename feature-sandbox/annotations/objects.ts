const profile = {
  name: 'jane',
  age: 29,
  coords: { lat: 0, lng: 15 },
  setAge(age: number): void {
    this.age = age;
  },
};
const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
