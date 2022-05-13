const fs = require('fs');
const axios = require('axios');

const limit = 1000;
let data = [];

const fetchAvatar = async () => {
  return await axios
    .get('https://dog.ceo/api/breeds/image/random')
    .then((res) => res.data.message);
};

const main = async () => {
  // Create JSON data
  for (let i = 0; i < limit; i++) {
    let randomId = Math.round(Math.random() * limit);
    data[i] = {
      id: i,
      name: 'User ' + randomId,
      avatar: await fetchAvatar(),
      createDate: new Date().getTime(),
    };
  }

  // Write generated JSON data
  fs.writeFile(__dirname + '/employes.json', JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log('employes.json has been created');
  });
};

main()
  .then(() => {
    console.log('JSON data generating...');
  })
  .catch((e) => {
    console.log(e);
  });
