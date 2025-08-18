function searchData() {
  const input = document.getElementById('searchInput').value.trim();
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '⏳ در حال جستجو...';

  fetch('data.txt')
    .then(response => response.text())
    .then(text => {
      const lines = text.split('\n');
      const matches = lines.filter(line => line.includes(input));
      if (matches.length > 0) {
        resultsDiv.innerHTML = matches.map(line => `<div>📄 ${line}</div>`).join('');
      } else {
        resultsDiv.innerHTML = '❌ موردی یافت نشد.';
      }
    })
    .catch(error => {
      resultsDiv.innerHTML = '⚠️ خطا در بارگذاری اطلاعات.';
      console.error(error);
    });
}