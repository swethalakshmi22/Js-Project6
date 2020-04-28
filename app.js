
let letterCount = document.getElementById('count');
let button = document.getElementById('getval');

button.addEventListener('click', function(e) {
   let inputBox = document.getElementById('input');
   let inputValue = inputBox.value;
   let inputVal = inputValue.length;
   letterCount.innerHTML = 'The Letter Count is : ' +inputVal;
   inputValue = '';
   e.preventDefault();
});
