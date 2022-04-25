export default function sortLiveBar(array) {
  return array.sort((a, b) => b.health - a.health);
}
