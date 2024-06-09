import health from './heroes';
import sortPersons from './matchers';

test('healthy health', () => {
  const result = health({ name: 'Маг', health: 90 });
  expect(result).toBe('healthy');
});
test('healthy wounded', () => {
  const result = health({ name: 'Маг', health: 20 });
  expect(result).toBe('wounded');
});
test('healthy critical', () => {
  const result = health({ name: 'Маг', health: 10 });
  expect(result).toBe('critical');
});

test('sort person', () => {
  const result = sortPersons([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);
  expect(result).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});
