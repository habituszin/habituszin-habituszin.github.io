'use strict'

let database = [
  {
    name: 'Atlantic',
    url: 'img/atlantic.jpg',
    title: 'Neon híredetőtábla',
  },
  {
    name: 'Building',
    url: 'img/building.jpg',
    title: 'Osd dsfjdjf dffoeefmv daokvmlsdm okf sd',
  },
  {
    name: 'Coconut',
    url: 'img/coconut.jpg',
    title: 'WEsd dsf dsaf gdfg rehfsgjkj fdgfhrh ghg fj dgrhhss',
  },
  {
    name: 'Coffe',
    url: 'img/coffe.jpg',
    title: 'Odslafklda flkdagf kdahfkdskl fdklsfruhuifhadk kladsnfm adaf',
  },
  {
    name: 'Cows',
    url: 'img/cows.jpg',
    title: 'Pfpsd dsf fg gfj dfa df dfjiocvj cvdsafkldhasj fkj',
  },
  {
    name: 'Light tower',
    url: 'img/light-tower.jpg',
    title: 'Uadsf dv djvijri dad s fdsjfkdv ',
  },
  {
    name: 'Nature',
    url: 'img/nature.jpg',
    title: 'Gdsaf dfg fsh gf hzjhkhgfh fhgh ghf gfh t hf',
  },
  {
    name: 'Train',
    url: 'img/train.jpg',
    title: 'Mfads dsf fweio dksnc kldsfojdsklmdkln dsafdaf',
  },
];

let choosenPictureId = 0;

let middleImage = document.getElementById('middleImage');
let imgName = document.getElementById('name');
let imgText = document.getElementById('text');
let miniImages = document.getElementById('miniImages');
let leftButton = document.getElementById('leftButton');
let rightButton = document.getElementById('rightButton');

function setImage() {
  middleImage.setAttribute('src', database[choosenPictureId].url);
  imgName.innerHTML = database[choosenPictureId].name;
  imgText.innerHTML = database[choosenPictureId].title;
  for (let i = 0; i < database.length; i++) {
    if (i == choosenPictureId) {
      miniImages.children[i].children[1].setAttribute('style', 'visibility: visible')
    } else {
      miniImages.children[i].children[1].setAttribute('style', 'visibility: hiden')
    } 
  }
};


leftButton.onclick = () => {
  choosenPictureId--;
  if (choosenPictureId < 0) {
    choosenPictureId = database.length - 1;
  }
  middleImage.setAttribute('src', database[choosenPictureId].url);
  setImage();
};

rightButton.onclick = () => {
  choosenPictureId++;
  if (choosenPictureId > database.length - 1) {
    choosenPictureId = 0;
  }
  middleImage.setAttribute('src', database[choosenPictureId].url);
  setImage();
};



function changeImg(num) {
  choosenPictureId = num;
  setImage();
}

for (let i = 0; i < database.length; i++) {
  let div = document.createElement('div');
  let p = document.createElement('p');
  let miniImage = document.createElement('img');
  let triangle = document.createElement('div');
  triangle.setAttribute('class', 'triangle');
  div.setAttribute('class', 'miniDiv')
  p.innerHTML = database[i].name;
  p.setAttribute('class', 'title')
  miniImage.setAttribute('src', database[i].url);
  miniImage.setAttribute('class', 'miniImg');
  miniImage.setAttribute('onclick', `changeImg(${i})`);
  div.appendChild(p);
  div.appendChild(triangle);
  div.appendChild(miniImage);
  miniImages.appendChild(div);
}
setImage();