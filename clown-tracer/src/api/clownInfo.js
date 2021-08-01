import {RANDOM_NAMES, PERSONALITY} from '../static/constant.js';

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
  console.log('item is: ');
  let i = 0;
  while ( i<number) {
    const randomidx = Math.floor(Math.random() * number);
    const randomName = RANDOM_NAMES[randomidx];

    if (!res.find(ele => (ele.name === randomName))) {
      const item = JSON.parse(JSON.stringify(clownProfile));
      item.name = randomName;
      item.email = randomName.replace(' ', '') + '@gmail.com';
      console.log('item is: ', item);
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

  const res = randomClown(30);

  return res;
}

function getClownsProps() {
  return ['red nose', 'green nose']
}

function getPersonality(personality) {
  if (personality <= PERSONALITY.kind) {
    return PERSONALITY.kind;
  } else if (personality <= PERSONALITY.naughty) {
    return PERSONALITY.naughty;
  } else if (personality <= PERSONALITY.evil) {
    return PERSONALITY.evil;
  } else {
    return PERSONALITY.dangerous;
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
  console.log('what is clown: ', registeredClown);
}

export {
  getClowns,
  getClownsProps,
  registerClown
}
