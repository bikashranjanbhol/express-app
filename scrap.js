async function fetchData(url) {
  return fetch(url);
}

const data = await fetchData('https://amazon.in');

console.log('Data', data);
