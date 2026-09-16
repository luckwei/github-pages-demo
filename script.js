document.getElementById('fetch-data').addEventListener('click', async () => {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();
  document.getElementById('data').textContent = JSON.stringify(data, null, 2);
});
