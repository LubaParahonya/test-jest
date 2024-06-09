export default function sortPersons(persons) {
  return persons.sort((a, b) => (a.health < b.health ? 1 : -1));
}
