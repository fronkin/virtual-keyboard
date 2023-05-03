/* eslint linebreak-style: ["error", "windows"] */
// eslint-disable-next-line import/extensions
import language from './language.js';
// eslint-disable-next-line import/extensions
import { shiftingEn, downingEn } from './shifting-en.js';
// eslint-disable-next-line import/extensions
import { shiftingRu, downingRu } from './shifting-ru.js';

let langCode = 'en';
const lang = language[langCode];
lang();

let caps = 'down'; // "down" | "up"
let ctrl = 'down'; // "down" | "up"

let keys;
let spaceKey;
let delKey;
// let enterKey;
let ctrllKey;
let ctrlrKey;
// let shift_left;
// let shift_right;
let capsLockKey;
let toggleCircle;
let nightMode;
let body;
let textInput;
let changeColor;
// let colors_input;
// let keyboard_lights;
let keyboardWrapp;
let arrowUp;
let arrowLeft;
let arrowDown;
let arrowRight;
let winKey;

// фокус на textarea
window.onload = () => {
  textInput.focus();
};
window.onclick = () => {
  textInput.focus();
};

function init() {
  // добавляем классы
  const backspaceButton = document.querySelector(
    '.row:nth-child(1) .keys:nth-child(14)',
  );
  backspaceButton.classList.add('backspace_key');
  const capsLockButton = document.querySelector(
    '.row:nth-child(3) .keys:nth-child(1)',
  );
  capsLockButton.classList.add('caps_lock_key');
  const delButton = document.querySelector(
    '.row:nth-child(2) .keys:nth-child(15)',
  );
  delButton.classList.add('del_key');
  const enterkButton = document.querySelector(
    '.row:nth-child(3) .keys:nth-child(13)',
  );
  enterkButton.classList.add('enter_key');
  const spacekButton = document.querySelector(
    '.row:nth-child(5) .keys:nth-child(4)',
  );
  spacekButton.classList.add('space_key');
  const ctrllButton = document.querySelector(
    '.row:nth-child(5) .keys:nth-child(1)',
  );
  ctrllButton.classList.add('ctrl_l_key');
  const ctrlrButton = document.querySelector(
    '.row:nth-child(5) .keys:nth-child(9)',
  );
  ctrlrButton.classList.add('ctrl_r_key');
  const shiftleftButton = document.querySelector(
    '.row:nth-child(4) .keys:nth-child(1)',
  );
  shiftleftButton.classList.add('shift_left');
  const shiftrightButton = document.querySelector(
    '.row:nth-child(4) .keys:nth-child(13)',
  );
  shiftrightButton.classList.add('shift_right');
  const topButton = document.querySelector(
    '.row:nth-child(4) .keys:nth-child(12)',
  );
  topButton.classList.add('ArrowUp');
  const leftButton = document.querySelector(
    '.row:nth-child(5) .keys:nth-child(6)',
  );
  leftButton.classList.add('ArrowLeft');
  const bottomButton = document.querySelector(
    '.row:nth-child(5) .keys:nth-child(7)',
  );
  bottomButton.classList.add('ArrowDown');
  const rightButton = document.querySelector(
    '.row:nth-child(5) .keys:nth-child(8)',
  );
  rightButton.classList.add('ArrowRight');
  const winButton = document.querySelector(
    '.row:nth-child(5) .keys:nth-child(2)',
  );
  winButton.classList.add('win_key');

  keys = document.querySelectorAll('.keys');
  spaceKey = document.querySelector('.space_key');
  delKey = document.querySelector('.del_key');
  winKey = document.querySelector('.win_key');
  // enterKey = document.querySelector('.enter_key');
  ctrllKey = document.querySelector('.ctrl_l_key');
  ctrlrKey = document.querySelector('.ctrl_r_key');
  // shift_left = document.querySelector('.shift_left');
  // shift_right = document.querySelector('.shift_right');
  capsLockKey = document.querySelector('.caps_lock_key');
  toggleCircle = document.querySelector('.toggle_circle');
  nightMode = document.querySelector('.night_mode');
  body = document.querySelector('body');
  textInput = document.querySelector('.text');
  changeColor = document.querySelector('.change_light_color');
  // colors_input = document.querySelector('.colors_input');
  // keyboard_lights = document.querySelector('.keyboard_lights');
  keyboardWrapp = document.querySelector('.keyboard_wrapp');
  arrowUp = document.querySelector('.ArrowUp');
  arrowLeft = document.querySelector('.ArrowLeft');
  arrowDown = document.querySelector('.ArrowDown');
  arrowRight = document.querySelector('.ArrowRight');

  for (let i = 0; i < keys.length; i += 1) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
  }
}
init();

const keyToDown = () => {
  keys.forEach((key) => {
    if (key.textContent.length < 2) {
      // eslint-disable-next-line no-param-reassign
      key.textContent = key.textContent.toLowerCase();
    }
    if (/\d/.test(key.textContent) || /[^a-zA-Z]/.test(key.textContent)) {
      if (langCode === 'en') {
        // eslint-disable-next-line no-param-reassign
        key.textContent = downingEn(key.textContent);
      } else {
        // eslint-disable-next-line no-param-reassign
        key.textContent = downingRu(key.textContent);
      }
    }
  });
};

const keyToUp = () => {
  keys.forEach((key) => {
    if (key.textContent.length < 2) {
      // eslint-disable-next-line no-param-reassign
      key.textContent = key.textContent.toUpperCase();
    }
    if (/\d/.test(key.textContent) || /[^a-zA-Z]/.test(key.textContent)) {
      if (langCode === 'en') {
        // eslint-disable-next-line no-param-reassign
        key.textContent = shiftingEn(key.textContent);
      } else {
        // eslint-disable-next-line no-param-reassign
        key.textContent = shiftingRu(key.textContent);
      }
    }
  });
};

textInput.addEventListener('keydown', function (e) {
  // для 4 пробелов tab
  if (e.code === 'Tab') {
    e.preventDefault(); // чтобы не перейти на следующий элемент
    const start = this.selectionStart;
    const end = this.selectionEnd;
    const { value } = this;
    this.value = `${value.substring(0, start)}    ${value.substring(end)}`;
    this.selectionEnd = start + 4;
    this.selectionStart = this.selectionEnd;
  }
  if (e.code === 'Enter') {
    let cursorPos = this.selectionStart;
    const front = this.value.substring(0, cursorPos);
    const back = this.value.substring(cursorPos, this.value.length);
    this.value = `${front} ${back}`;
    cursorPos += 1;
    this.selectionStart = cursorPos;
    this.selectionEnd = cursorPos;
  }
});

document.addEventListener('keydown', (event) => {
  if (event.shiftKey && event.key === 'Shift') {
    if (caps === 'up') {
      keyToDown();
    } else {
      keyToUp();
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (!event.shiftKey && event.key === 'Shift') {
    if (caps === 'up') {
      keys.forEach((key) => {
        if (key.textContent.length < 2) {
          // eslint-disable-next-line no-param-reassign
          key.textContent = key.textContent.toUpperCase();
        }
      });
    } else {
      keyToDown();
    }
  }
});

// актив с клавиатуры
window.addEventListener('keydown', (e) => {
  for (let i = 0; i < keys.length; i += 1) {
    if (
      e.key === keys[i].getAttribute('keyname')
      || e.key === keys[i].getAttribute('lowerCaseName')
    ) {
      if (e.key === 'Tab') {
        e.preventDefault(); // чтобы не перейти на следующий элемент
        keys[i].classList.add('active');
      } else {
        keys[i].classList.add('active');
      }
    }
    if (e.key === 'CapsLock') {
      if (capsLockKey.classList.contains('active')) {
        caps = 'down';
        capsLockKey.classList.remove('active');
        keys.forEach((key) => {
          if (key.textContent.length < 2) {
            // eslint-disable-next-line no-param-reassign
            key.textContent = key.textContent.toLowerCase();
          }
        });
      } else {
        caps = 'up';
        capsLockKey.classList.add('active');
        keys.forEach((key) => {
          if (key.textContent.length < 2) {
            // eslint-disable-next-line no-param-reassign
            key.textContent = key.textContent.toUpperCase();
          }
        });
      }
      break;
    }

    if (e.code === 'MetaLeft') {
      winKey.classList.add('active');
    }
    if (e.code === 'AltLeft') {
      e.preventDefault();
    }
    if (e.code === 'Delete') {
      delKey.classList.add('active');
    }
    if (e.code === 'Space') {
      spaceKey.classList.add('active');
    }
    if (e.code === 'ControlRight') {
      ctrlrKey.classList.add('active');
      ctrl = 'up';
    }
    if (e.code === 'ControlLeft') {
      ctrllKey.classList.add('active');
      ctrl = 'up';
    }
    if (e.code === 'ArrowUp') {
      arrowUp.classList.add('active');
    }
    if (e.code === 'ArrowLeft') {
      arrowLeft.classList.add('active');
    }
    if (e.code === 'ArrowDown') {
      arrowDown.classList.add('active');
    }
    if (e.code === 'ArrowRight') {
      arrowRight.classList.add('active');
    }
  }
});

window.addEventListener('keyup', (e) => {
  for (let i = 0; i < keys.length; i += 1) {
    if (
      e.key === keys[i].getAttribute('keyname')
      || e.key === keys[i].getAttribute('lowerCaseName')
    ) {
      if (e.key === 'Tab') {
        keys[i].classList.remove('active');
      } else {
        keys[i].classList.remove('active');
        keys[i].classList.add('remove');
      }
    }
    if (e.code === 'MetaLeft') {
      winKey.classList.remove('active');
      winKey.classList.add('remove');
    }
    if (e.code === 'Delete') {
      delKey.classList.remove('active');
      delKey.classList.add('remove');
    }
    if (e.code === 'Space') {
      spaceKey.classList.remove('active');
      spaceKey.classList.add('remove');
    }
    if (e.code === 'ControlRight') {
      e.preventDefault();
      ctrlrKey.classList.remove('active');
      ctrlrKey.classList.remove('remove');
      ctrl = 'down';
    }

    if (e.code === 'ControlLeft') {
      e.preventDefault();
      ctrllKey.classList.remove('active');
      ctrllKey.classList.remove('remove');
      ctrl = 'down';
    }
    if (e.code === 'ArrowUp') {
      arrowUp.classList.remove('active');
      arrowUp.classList.remove('remove');
    }
    if (e.code === 'ArrowLeft') {
      arrowLeft.classList.remove('active');
      arrowLeft.classList.remove('remove');
    }
    if (e.code === 'ArrowDown') {
      arrowDown.classList.remove('active');
      arrowDown.classList.remove('remove');
    }
    if (e.code === 'ArrowRight') {
      arrowRight.classList.remove('active');
      arrowRight.classList.remove('remove');
    }
    // eslint-disable-next-line no-loop-func
    setTimeout(() => {
      keys[i].classList.remove('remove');
    }, 200);
  }

  if ((e.code === 'AltLeft' && ctrl === 'up') || (e.code === 'AltRight' && ctrl === 'up')) {
    e.preventDefault();
    if (langCode === 'en') {
      langCode = 'ru';
      localStorage.setItem('langCode', langCode);
    } else {
      langCode = 'en';
      localStorage.setItem('langCode', langCode);
    }
    // eslint-disable-next-line no-shadow
    const lang = language[langCode];
    lang();
    init();
    // eslint-disable-next-line no-use-before-define
    click();
  }
});

nightMode.addEventListener('click', () => {
  toggleCircle.classList.toggle('active');
  body.classList.toggle('active');
  nightMode.classList.toggle('active');
  keyboardWrapp.classList.toggle('active');
  textInput.classList.toggle('active');
  changeColor.classList.toggle('active');
  for (let i = 0; i < keys.length; i += 1) {
    keys[i].classList.toggle('keys_night');
  }
});

// фикс раскладки
function click() {
  nightMode.addEventListener('click', () => {
    toggleCircle.classList.toggle('active');
    body.classList.toggle('active');
    nightMode.classList.toggle('active');
    keyboardWrapp.classList.toggle('active');
    textInput.classList.toggle('active');

    for (let i = 0; i < keys.length; i += 1) {
      keys[i].classList.toggle('keys_night');
    }
  });
  for (let i = 0; i < keys.length; i += 1) {
    // eslint-disable-next-line no-loop-func
    keys[i].addEventListener('click', function () {
      const key = this.getAttribute('keyname');

      if (key === '') {
        textInput.value += ' ';
      } else if (key === 'Tab') {
        textInput.value += '    ';
      } else if (key === 'Shift') { /* empty */ } else if (key === 'Backspace') {
        const startPos = textInput.selectionStart;
        textInput.value = textInput.value.slice(0, startPos - 1)
          + textInput.value.slice(textInput.selectionStart);
        textInput.setSelectionRange(startPos - 1, startPos - 1);
      } else if (key === 'Del') {
        const startPos = textInput.selectionStart;
        textInput.value = textInput.value.slice(0, startPos)
          + textInput.value.slice(textInput.selectionStart + 1);
        textInput.setSelectionRange(startPos, startPos);
      } else if (key === 'Enter') {
        textInput.value += '\n';
      } else if (key === 'Caps Lock') { /* empty */ } else if (key === 'Ctrl') { /* empty */ } else if (key === 'Alt') { /* empty */ } else if (key === 'Win') { /* empty */ } else {
        textInput.value += keys[i].textContent;
      }
    });
  }

  // клик мышкой + добавление класса active
  for (let i = 0; i < keys.length; i += 1) {
    // eslint-disable-next-line no-loop-func
    keys[i].addEventListener('mousedown', function () {
      // Обработка специальной ключевой функции
      if (this.getAttribute('keyname') === 'Caps Lock') {
        if (capsLockKey.classList.contains('active')) {
          caps = 'down';
          capsLockKey.classList.remove('active');
          keyToDown();
        } else {
          caps = 'up';
          capsLockKey.classList.add('active');
          keyToUp();
        }
        return;
      }
      if (this.getAttribute('keyname') === 'Space') {
        spaceKey.classList.add('active');
      }
      if (this.getAttribute('keyname') === 'ControlRight') {
        ctrlrKey.classList.add('active');
      }
      if (this.getAttribute('keyname') === 'ControlLeft') {
        ctrllKey.classList.add('active');
      }
      if (this.getAttribute('keyname') === 'Shift') {
        if (caps === 'up') {
          keyToDown();
        } else {
          keyToUp();
        }
      }
      this.classList.add('active');
    });

    // eslint-disable-next-line no-loop-func
    keys[i].addEventListener('mouseup', function () {
      if (this.getAttribute('keyname') === 'Caps Lock') {
        return;
      }
      this.classList.remove('active');
      this.classList.add('remove');

      setTimeout(() => {
        this.classList.remove('remove');
      }, 200);
      // Обработка специальной ключевой функции
      if (this.getAttribute('keyname') === 'Space') {
        spaceKey.classList.remove('active');
        spaceKey.classList.add('remove');
      }
      if (this.getAttribute('keyname') === 'ControlRight') {
        ctrlrKey.classList.remove('active');
        ctrlrKey.classList.remove('remove');
      }
      if (this.getAttribute('keyname') === 'ControlLeft') {
        ctrllKey.classList.remove('active');
        ctrllKey.classList.remove('remove');
      }
      if (this.getAttribute('keyname') === 'Shift') {
        if (caps === 'up') {
          keyToUp();
        } else {
          keyToDown();
        }
      }
    });
  }
}
// клик мышкой
for (let i = 0; i < keys.length; i += 1) {
  // eslint-disable-next-line no-loop-func
  keys[i].addEventListener('click', function () {
    const key = this.getAttribute('keyname');

    if (key === '') {
      textInput.value += ' ';
    } else if (key === 'Tab') {
      textInput.value += '    ';
    } else if (key === 'Shift') { /* empty */ } else if (key === 'Backspace') {
      const startPos = textInput.selectionStart;
      textInput.value = textInput.value.slice(0, startPos - 1)
        + textInput.value.slice(textInput.selectionStart);
      textInput.setSelectionRange(startPos - 1, startPos - 1);
    } else if (key === 'Del') {
      const startPos = textInput.selectionStart;
      textInput.value = textInput.value.slice(0, startPos)
        + textInput.value.slice(textInput.selectionStart + 1);
      textInput.setSelectionRange(startPos, startPos);
    } else if (key === 'Enter') {
      textInput.value += '\n';
    } else if (key === 'Caps Lock') { /* empty */ } else if (key === 'Ctrl') { /* empty */ } else if (key === 'Alt') { /* empty */ } else {
      textInput.value += keys[i].textContent;
    }
  });
}

// клик мышкой + добавление класса active
for (let i = 0; i < keys.length; i += 1) {
  // eslint-disable-next-line no-loop-func
  keys[i].addEventListener('mousedown', function () {
    // Обработка специальной ключевой функции
    if (this.getAttribute('keyname') === 'Caps Lock') {
      if (capsLockKey.classList.contains('active')) {
        caps = 'down';
        capsLockKey.classList.remove('active');
        keys.forEach((key) => {
          if (key.textContent.length < 2) {
            // eslint-disable-next-line no-param-reassign
            key.textContent = key.textContent.toLowerCase();
          }
        });
      } else {
        caps = 'up';
        capsLockKey.classList.add('active');
        keys.forEach((key) => {
          if (key.textContent.length < 2) {
            // eslint-disable-next-line no-param-reassign
            key.textContent = key.textContent.toUpperCase();
          }
        });
      }
      return;
    }
    if (this.getAttribute('keyname') === 'Space') {
      spaceKey.classList.add('active');
    }
    if (this.getAttribute('keyname') === 'ControlRight') {
      ctrlrKey.classList.add('active');
    }
    if (this.getAttribute('keyname') === 'ControlLeft') {
      ctrllKey.classList.add('active');
    }
    if (this.getAttribute('keyname') === 'Shift') {
      if (caps === 'up') {
        keyToDown();
      } else {
        keyToUp();
      }
    }
    this.classList.add('active');
  });

  // eslint-disable-next-line no-loop-func
  keys[i].addEventListener('mouseup', function () {
    if (this.getAttribute('keyname') === 'Caps Lock') {
      return;
    }
    this.classList.remove('active');
    this.classList.add('remove');

    setTimeout(() => {
      this.classList.remove('remove');
    }, 200);
    // Обработка специальной ключевой функции
    if (this.getAttribute('keyname') === 'Space') {
      spaceKey.classList.remove('active');
      spaceKey.classList.add('remove');
    }
    if (this.getAttribute('keyname') === 'ControlRight') {
      ctrlrKey.classList.remove('active');
      ctrlrKey.classList.remove('remove');
    }
    if (this.getAttribute('keyname') === 'ControlLeft') {
      ctrllKey.classList.remove('active');
      ctrllKey.classList.remove('remove');
    }
    if (this.getAttribute('keyname') === 'Shift') {
      if (caps === 'up') {
        keys.forEach((key) => {
          if (key.textContent.length < 2) {
            // eslint-disable-next-line no-param-reassign
            key.textContent = key.textContent.toUpperCase();
          }
        });
      } else {
        keyToDown();
      }
    }
  });
}

// сохранение языка раскладки
const savedLanguage = localStorage.getItem('langCode');
if (savedLanguage === 'ru') {
  langCode = 'ru';
  // eslint-disable-next-line no-shadow
  const lang = language[langCode];
  lang();
  init();
  click();
} else if (savedLanguage === 'en') {
  langCode = 'en';
  // eslint-disable-next-line no-shadow
  const lang = language[langCode];
  lang();
  init();
  click();
}
