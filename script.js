new WOW().init();

const modalOverlay = document.querySelector('.modal-overlays'),
    modal = document.querySelector('.modal'),
    btn = document.querySelector('.turn'),
    callme = document.querySelector('.callme'),
    body = document.getElementsByTagName('body'),
    input = document.querySelector('.letter'),
    order = document.querySelector('.gets'),
    modals = document.querySelector('.modals'),
    away = document.querySelector('.turns'),
    callMe = document.querySelector('.call-me'),
    price = document.querySelector('.prices'),
    stay = document.querySelector('.stay'),
    btnUp = document.querySelector('#top');

callme.addEventListener('click', (e) =>{
    e.preventDefault();
    modal.style.display = 'block';
    modal.style.zIndex = '10';
    modalOverlay.classList.add('modal-overlay');
    modal.classList.add('animated', 'fadeIn');
    document.body.style.overflow = "hidden";
});
btn.addEventListener('click', (e) =>{
    e.preventDefault();
    modalOverlay.classList.remove('modal-overlay');
    modal.style.display = 'none';
    document.body.style.overflow = "";
});

order.addEventListener('click', (e) =>{
    e.preventDefault();
    modals.style.display = 'block';
    modals.style.zIndex = '10';
    modalOverlay.classList.add('modal-overlay');
    away.style.display = 'block';
    modals.classList.add('animated', 'fadeIn');
    away.classList.add('animated', 'fadeIn');
    document.body.style.overflow = "hidden";
});
away.addEventListener('click', (e) =>{
    e.preventDefault();
    modalOverlay.classList.remove('modal-overlay');
    modals.style.display = 'none';
    away.style.display = 'none';
    away.style.zIndex = '10';
    document.body.style.overflow = "";
});

callMe.addEventListener('click', (e) =>{
    e.preventDefault();
        modal.style.display = 'block';
        modalOverlay.classList.add('modal-overlay');
        document.body.style.overflow = "hidden";
});

modalOverlay.addEventListener('click', () => {
  modals.style.display = 'none';
  away.style.display = 'none';
  modal.style.display = 'none';
  modalOverlay.classList.add('modal-overlays');
  modalOverlay.classList.remove('modal-overlay');
  document.body.style.overflow = "";
});
  
    function goUp() {
    let timeOut;
    let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (top > 0) {
      window.scrollBy(0, -100);
      timeOut = setTimeout('goUp()', 20);
    } else {clearTimeout(timeOut);}     
  }



  window.addEventListener('scroll', (e) => {
    if(document.body.scrollTop > document.documentElement.clientHeight) {
      btnUp.style.opacity = '0';
    } else {
      btnUp.style.opacity = '1';
    }
    e.preventDefault();
  });


const checkInputs = () => {
  const txtInputs = document.querySelectorAll('.letter');

  txtInputs.forEach(input => {
      input.addEventListener('keypress', (e) => {
      if(e.key.match(/[^а-яё 0-9]/ig)){
        e.preventDefault();
      }
    });
  });
};

checkInputs();

const mask = (selector) => {

  let setCursorPosition = (pos, elem) => {
      elem.focus();
      
      if (elem.setSelectionRange) {
          elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
          let range = elem.createTextRange();

          range.collapse(true);
          range.moveEnd('character', pos);
          range.moveStart('character', pos);
          range.select();
      }
  };

  function createMask(event) {
      let matrix = '+7 (___) ___ __ __',
          i = 0,
          def = matrix.replace(/\D/g, ''),
          val = this.value.replace(/\D/g, '');

      if (def.length >= val.length) {
          val = def;
      }

      this.value = matrix.replace(/./g, function(a) {
          return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
      });

      if (event.type === 'blur') {
          if (this.value.length == 2) {
              this.value = '';
          }
      } else {
          setCursorPosition(this.value.length, this);
      }
  }

  let inputs = document.querySelectorAll(selector);

  inputs.forEach(input => {
      input.addEventListener('input', createMask);
      input.addEventListener('focus', createMask);
      input.addEventListener('blur', createMask);
  });
};

mask('.letter');