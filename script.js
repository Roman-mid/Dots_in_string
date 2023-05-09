
const inp = document.querySelector('.input'),
      text = document.querySelector('.task-result'),
      count = document.querySelector('.count'),
      btn = document.querySelector('.btn'),
      menu = document.querySelectorAll('.menu__link'),
      getResult = document.querySelector('.get-result'),

      wraps = document.querySelectorAll('.wrap');
;


let arr = [];
let i = 0;

function getArr(str) {

  const length = arr[0].length + (arr[0].length - 1);
  const checkLehgth = arr.some(string => string.length == length);

  if (checkLehgth) {
    return arr;

  } else {

    let j = 1;
    while (j < arr[i].length) {
      const newStr = str.slice(0, j) + '.' + str.slice(j);
      const checkStr = /\.\./.test(newStr);
      
      if (!arr.includes(newStr) && checkStr == false) {
        arr.push(newStr);
      };
      j++;
    };

    i++;

    if (arr[i]) {
      getArr(arr[i]);
    };
    
  };

  return arr;
};


getResult.addEventListener('click' , () => {

  i = 0;
  const str = inp.value.trim().split(' ').join(''); 

  if(str) {
    arr = [str];
    const getSomeArr = getArr(arr[0]);
    const newStr = getSomeArr.join(' / ');
    text.textContent = newStr;
    count.textContent = `вариантов: ${getSomeArr.length}`;
  }
});

btn.addEventListener('click' , () => {
  arr = [];
  inp.value = '';
  arr[0] = inp.value;
  text.textContent = '';
  count.textContent = 'вариантов: 0';
});


menu.forEach((btn, ind) => {
  btn.addEventListener('click' , function() {
    
    menu.forEach(btn => {
      btn.classList.remove('active')
    });
    wraps.forEach(wrap => {
      wrap.classList.remove('active')
    });
    this.classList.add('active');
    wraps[ind].classList.add('active');
  })
})






