export default function health(heroes) {
  if (heroes.health > 50) {
    return 'healthy';
  }
  if (heroes.health >= 15 && heroes.health <= 50) {
    return 'wounded';
  }

  return 'critical';
}
