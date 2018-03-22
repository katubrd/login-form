document.addEventListener("DOMContentLoaded", function(event) {
  let inputForm = document.querySelector('.form__input');

  inputForm.addEventListener('mouseenter', function(){
    let line = document.querySelector('.line');
    line.style.backgroundColor = '#bc68d4';
  });

  inputForm.addEventListener('mouseleave', function(){
    document.querySelector('.line').style.backgroundColor = '#cfcfcf';
  });

  document.querySelector('.form-btn-submit').addEventListener('click', function(){
    let btn = document.querySelector('.form-btn-submit');
    btn.style.animation = 'btnClickAnimation 2s';
  });
});
