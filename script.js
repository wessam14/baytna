// Search Button Click
document.querySelector('.search-btn').addEventListener('click', () => {
  const location = document.querySelector('.location-input').value;
  const date = document.querySelector('.date-input').value;
  alert(`Searching for ${location} on ${date}`);
});

// Language Button (Add a dropdown or modal for language selection)
document.querySelector('.language-btn').addEventListener('click', () => {
  alert('Language selector clicked! Add a dropdown/modal here.');
});