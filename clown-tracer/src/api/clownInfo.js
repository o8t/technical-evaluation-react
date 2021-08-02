import {RANDOM_NAMES, PERSONALITY, COLOR, CLOTH } from '../static/constant.js';

const clownSelection = [
  'red nose', 
  'green nose', 
  'purple nose',
  'yellow nose',
  'red hair',
  'green hair',
  'purple hair',
  'yellow hair',
  'dangerous',
  'kind',
];

const clownProfile = {
  id: 1,
  name: 'John Clown',
  email: 'JohnClown@gmail.com',
  image: '../static/img/clownImg.jpg',
  attributes: {
    appearance: {
      nose: 'red',
      hair: 'yellow',
      cloth: 'tradation',
    },
    personality: 'kind',
  },
}

const registeredClown = [];

function randomClown(number) {
  let res = [];
  let i = 0;
  let randomidx = 0;
  let randomName = '';

  while ( i<number) {
    randomidx = Math.floor(Math.random() * number);
    randomName = RANDOM_NAMES[randomidx];

    if (!res.find(ele => (ele.name === randomName))) {
      const item = JSON.parse(JSON.stringify(clownProfile));
      item.name = randomName;
      item.email = randomName.replace(' ', '') + '@gmail.com';

      randomidx = Math.floor(Math.random() * COLOR.length);
      item.attributes.appearance.nose = COLOR[randomidx];

      randomidx = Math.floor(Math.random() * COLOR.length);
      item.attributes.appearance.hair = COLOR[randomidx];

      randomidx = Math.floor(Math.random() * CLOTH.length);
      item.attributes.appearance.cloth = CLOTH[randomidx];
      
      randomidx = Math.floor(Math.random() * Object.keys(PERSONALITY).length);
      item.attributes.personality = Object.keys(PERSONALITY)[randomidx];
      res.push(item);
      i += 1;
    } else {
      continue;
    }
  }

  return res;
}

function getClowns() {
  //api calls here
  //GET 'xxxxx/clowns'
  //return clownProfile instead in this application

  const random = randomClown(10);
  const res = random.concat(registeredClown);
  return res;
}

function getClownsProps() {
  //api calls here
  //GET 'xxxxx/clowns/filter'
  //return clownProfile instead in this application  

  return clownSelection;
}

function getPersonality(personality) {
  if (personality <= PERSONALITY.kind) {
    return Object.keys(PERSONALITY)[0];
  } else if (personality <= PERSONALITY.naughty) {
    return Object.keys(PERSONALITY)[1];
  } else if (personality <= PERSONALITY.evil) {
    return Object.keys(PERSONALITY)[2];
  } else {
    return Object.keys(PERSONALITY)[3];
  }
}

function registerClown(clown) {
  //api calls here
  //POST 'xxxxx/clowns '
  //save in registeredClown instead

  const item = JSON.parse(JSON.stringify(clownProfile));
  item.id = registeredClown.length;
  item.name = clown.first + ' ' + clown.last;
  item.email = clown.email,
  item.attributes.appearance.nose = clown.nose;
  item.attributes.appearance.hair = clown.hair;
  item.attributes.appearance.cloth = clown.cloth;
  
  item.attributes.personality = getPersonality(clown.personality);

  registeredClown.push(item);
}

export {
  getClowns,
  getClownsProps,
  registerClown
}
