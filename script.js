let red = document.getElementById('red');
let black = document.getElementById('black');
let orange = document.getElementById('orange');
let productImage = document.getElementsByTagName('img')[0];
let btnColor = document.querySelector('.buy-btn');

red.addEventListener('click', () => {
  productImage.setAttribute('src', 'https://i.postimg.cc/fb9LsZk2/image2.png');
  btnColor.style.backgroundColor = '#E6404D';
});

orange.addEventListener('click', () => {
  productImage.setAttribute('src', 'https://i.postimg.cc/J0P7xzdn/image3.png');
  btnColor.style.backgroundColor = '#FE7427';
});

black.addEventListener('click', () => {
  productImage.setAttribute('src', 'https://i.postimg.cc/m2fSW2Dq/pngwing.png');
  btnColor.style.backgroundColor = 'black';
});
