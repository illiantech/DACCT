const languageContainer = document.getElementById('languageContainer');

languageContainer.addEventListener('click', (e) => {
  console.log(e.target.dataset.lang);
});
