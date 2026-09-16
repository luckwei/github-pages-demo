document.getElementById('fetch-data').addEventListener('click', async () => {
  const url = new URL('https://randomuser.me/api/1.4/');
  url.searchParams.set('results', document.getElementById('results').value || 1);
  if (document.getElementById('noinfo').checked) url.searchParams.set('noinfo', '');

  const res = await fetch(url);
  const data = await res.json();
  document.getElementById('data').textContent = JSON.stringify(data, null, 2);
});
