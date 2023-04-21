const API_TOKEN = 'lip_l9Ddpmq0nGAFxFwkNVNV'

fetch('https://lichess.org/api/challenge/open', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    variant: 'standard',
    timeControl: { // specify the time control for the game
      type: 'clock',
      limit: 600, // limit in seconds
      increment: 0
    },
    rated: true
  })
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
