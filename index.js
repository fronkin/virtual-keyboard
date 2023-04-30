import {en} from './en.js';
import {ru} from './ru.js';
en();

// добавляем классы
const capsLockButton = document.querySelector('.row:nth-child(3) .keys:nth-child(1)'); 
capsLockButton.classList.add('caps_lock_key'); 
const enterkButton = document.querySelector('.row:nth-child(3) .keys:nth-child(13)'); 
enterkButton.classList.add('enter_key'); 
const spacekButton = document.querySelector('.row:nth-child(5) .keys:nth-child(4)'); 
spacekButton.classList.add('space_key');
const ctrllButton = document.querySelector('.row:nth-child(5) .keys:nth-child(1)'); 
ctrllButton.classList.add('ctrl_l_key');
const ctrlrButton = document.querySelector('.row:nth-child(5) .keys:nth-child(6)'); 
ctrlrButton.classList.add('ctrl_r_key');

let keys = document.querySelectorAll('.keys');
let spaceKey = document.querySelector('.space_key');
let enterKey = document.querySelector('.enter_key');
let ctrllKey = document.querySelector('.ctrl_l_key');
let ctrlrKey = document.querySelector('.ctrl_r_key');
let shift_left = document.querySelector('.shift_left');
let shift_right = document.querySelector('.shift_right');
let caps_lock_key = document.querySelector('.caps_lock_key');
let toggle_circle = document.querySelector('.toggle_circle');
let night_mode = document.querySelector('.night_mode');
let body = document.querySelector('body');
let text_input = document.querySelector('.text');
let change_color = document.querySelector('.change_light_color');
let colors_input = document.querySelector('.colors_input');
let keyboard_lights = document.querySelector('.keyboard_lights');
let keyboard_wrapp = document.querySelector('.keyboard_wrapp');



for(let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

text_input.addEventListener('keydown', function(e) { // для 4 пробелов tab
    if (e.code === 'Tab') {
       e.preventDefault(); // чтобы не перейти на следующий элемент
       const start = this.selectionStart;
       const end = this.selectionEnd;
       const value = this.value;
       this.value = value.substring(0, start) + '    ' + value.substring(end);
       this.selectionStart = this.selectionEnd = start + 4;
    }
    if(e.code == 'Enter') {
        
        let cursorPos = this.selectionStart;
        let front = (this.value).substring(0, cursorPos);
        let back = (this.value).substring(cursorPos, this.value.length);
        this.value = front + " " + back;
        cursorPos++;
        this.selectionStart = cursorPos;
        this.selectionEnd = cursorPos;
    }
    
 });
 


 
document.addEventListener('keydown', function (event) {    
    if (event.shiftKey) {      
      const keys = document.querySelectorAll('.keys');      
      keys.forEach(key => {
        if (key.textContent.length < 2) {
        key.textContent = key.textContent.toUpperCase();
    } else return
      });
    }
    
  });
  
  document.addEventListener('keyup', function (event) {   
         
    if (!event.shiftKey ) {  

      const keys = document.querySelectorAll('.keys');      
      keys.forEach(key => {
       
        if (key.textContent.length < 2) {
            key.textContent = key.textContent.toLowerCase();
        } else return
        
      });
    }
  });



window.addEventListener('keydown', function(e) {
    
    for(let i = 0; i < keys.length; i++) {        
        if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
            
            
            if (e.key == 'Tab') {
                e.preventDefault(); // чтобы не перейти на следующий элемент               
                keys[i].classList.add('active')                                    
            } else {
                keys[i].classList.add('active')
            }
           
        }   
        if(e.key == 'CapsLock') {
            if(caps_lock_key.classList.contains('active')) {
              caps_lock_key.classList.remove('active');
            } else {
              caps_lock_key.classList.add('active');
              
            }
            break
          }
        
        if(e.code == 'Space') {
        
            spaceKey.classList.add('active')
        }
        if(e.code == 'ControlRight') {
            
                ctrlrKey.classList.add('active')
         }
        if(e.code == 'ControlLeft') {
        
            ctrllKey.classList.add('active')
        }
        // if(e.code == 'Shift') {
           
        //     shift_right.classList.remove('active')
           
        // }
        // if(e.code == 'Shift') {
        //     shift_left.classList.remove('active')
            
        // }
        
        
    }
})

window.addEventListener('keyup', function(e) {   
     
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
            if (e.key == 'Tab') {
                keys[i].classList.remove('active')
                
            } else{
                keys[i].classList.remove('active')
                keys[i].classList.add('remove')
            }
            
        }        
        if(e.code == 'Space') {
            spaceKey.classList.remove('active');
            spaceKey.classList.add('remove');
        }
        if(e.code == 'ControlRight') {
        
            ctrlrKey.classList.remove('active')
            ctrlrKey.classList.remove('remove')
        }
        
        if(e.code == 'ControlLeft') {
        
            ctrllKey.classList.remove('active')
            ctrllKey.classList.remove('remove')
        }        
        // if(e.code == 'Shift') {
        //     shift_right.classList.remove('active')
        //     shift_right.classList.remove('remove')
            
        // }
        // if(e.code == 'Shift') {
        //     shift_left.classList.remove('active')
        //     shift_left.classList.remove('remove')
        //     console.log('1');
            
        // }
        setTimeout(()=> {
            keys[i].classList.remove('remove')
        },200)
    }
})




night_mode.addEventListener('click',function() {
    toggle_circle.classList.toggle('active');
    body.classList.toggle('active');
    night_mode.classList.toggle('active');
    keyboard_wrapp.classList.toggle('active');
    text_input.classList.toggle('active');
    change_color.classList.toggle('active');
    for(let i = 0; i < keys.length; i++) {
        keys[i].classList.toggle('keys_night')
    }
})

colors_input.addEventListener('input',function() {
    for(let i = 0; i < keys.length; i++) {
        keys[i].style.color = colors_input.value
    }
    keyboard_lights.style.background = colors_input.value;
})

// клик мышкой
for(let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', function() {
      
      let key = this.getAttribute('keyname');
      text_input.value += this.getAttribute('keyname').toLowerCase();
      console.log(key.toLowerCase());

    });
  }

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('mousedown', function(e) {
        
        this.classList.add('active');
        // Handle special key functionality
        if (this.getAttribute('keyname') === 'CapsLock') {
            if (caps_lock_key.classList.contains('active')) {
                caps_lock_key.classList.remove('active');
            } else {
                caps_lock_key.classList.add('active');
            }
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
        if (this.classList.contains('shift_left')) {
            shift_right.classList.remove('active');
        }
        if (this.classList.contains('shift_right')) {
            shift_left.classList.remove('active');
        }
    });
    
    keys[i].addEventListener('mouseup', function(e) {
        this.classList.remove('active');
        this.classList.add('remove');
        setTimeout(() => {
            this.classList.remove('remove');
        }, 200);
        // Handle special key functionality
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
        if (this.classList.contains('shift_left')) {
            shift_right.classList.remove('active');
            shift_right.classList.remove('remove');
        }
        if (this.classList.contains('shift_right')) {
            shift_left.classList.remove('active');
            shift_left.classList.remove('remove');
        }
    })
}

