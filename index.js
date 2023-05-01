import language from "./language.js";
let langCode = "en"
const lang = language[langCode]
lang()

// добавляем классы
const capsLockButton = document.querySelector('.row:nth-child(3) .keys:nth-child(1)'); 
capsLockButton.classList.add('caps_lock_key'); 
const delButton = document.querySelector('.row:nth-child(2) .keys:nth-child(15)'); 
delButton.classList.add('del_key'); 
const enterkButton = document.querySelector('.row:nth-child(3) .keys:nth-child(13)'); 
enterkButton.classList.add('enter_key'); 
const spacekButton = document.querySelector('.row:nth-child(5) .keys:nth-child(4)'); 
spacekButton.classList.add('space_key');
const ctrllButton = document.querySelector('.row:nth-child(5) .keys:nth-child(1)'); 
ctrllButton.classList.add('ctrl_l_key');
const ctrlrButton = document.querySelector('.row:nth-child(5) .keys:nth-child(9)'); 
ctrlrButton.classList.add('ctrl_r_key');
const shiftleftButton = document.querySelector('.row:nth-child(4) .keys:nth-child(1)'); 
shiftleftButton.classList.add('shift_left');
const shiftrightButton = document.querySelector('.row:nth-child(4) .keys:nth-child(13)'); 
shiftrightButton.classList.add('shift_right');
const topButton = document.querySelector('.row:nth-child(4) .keys:nth-child(12)'); 
topButton.classList.add('top_key');
const leftButton = document.querySelector('.row:nth-child(5) .keys:nth-child(6)'); 
leftButton.classList.add('left_key');
const bottomButton = document.querySelector('.row:nth-child(5) .keys:nth-child(7)'); 
bottomButton.classList.add('bottom_key');
const rightButton = document.querySelector('.row:nth-child(5) .keys:nth-child(8)'); 
rightButton.classList.add('right_key');

let keys = document.querySelectorAll('.keys');
let spaceKey = document.querySelector('.space_key');
let delKey = document.querySelector('.del_key');
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


// актив с клавиатуры
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
          
          if (e.code == 'Delete') {
            delKey.classList.add('active')
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
        if (e.code == 'Delete') {            
            delKey.classList.remove('active');
            delKey.classList.add('remove');
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
      console.log(keys[i].textContent);
      let key = this.getAttribute('keyname');
      console.log(key);
      if (key === '') {
        text_input.value += ' '
      } else if (key === 'Tab'){
        text_input.value += '    '
      } else if (key === 'Shift') {
        
      } else if (key === 'Backspace') {
        
        const startPos = text_input.selectionStart;
        text_input.value = text_input.value.slice(0, startPos - 1) + text_input.value.slice(text_input.selectionStart);
        text_input.setSelectionRange(startPos - 1, startPos - 1);
      } else if (key === 'Del') {
        const startPos = text_input.selectionStart;
            text_input.value = text_input.value.slice(0, startPos) + text_input.value.slice(text_input.selectionStart + 1);
            text_input.setSelectionRange(startPos, startPos);
      } else if (key === 'Enter') {
        text_input.value += '\n';
      } else if (key === 'Caps Lock') {
        
      } else if (key === 'Ctrl') {
        
      } else if (key === 'Alt') {
        
      } else {
        text_input.value += keys[i].textContent;
      }  

    });
  }

 // клик мышкой + добавление класса active  
for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('mousedown', function(e) {  
        
        
        // Обработка специальной ключевой функции
        if (this.getAttribute('keyname') === 'Caps Lock') {            
            // if (caps_lock_key.classList.contains('active')) {
            //     console.log();
            //     caps_lock_key.classList.remove('active');
                
            // } else {
            //     caps_lock_key.classList.add('active');
                
            // }
            if (caps_lock_key.classList.contains('active')) {
                caps_lock_key.classList.remove('active');
                keys.forEach(em=>{
                    if (em.textContent.length === 1) {
                        em.textContent = em.textContent.toLowerCase();
                    }
                });
             } else {
                caps_lock_key.classList.add('active');
                keys.forEach(em=>{
                    if (em.textContent.length === 1) {
                        em.textContent = em.textContent.toUpperCase();
                    }
                });
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
        if (this.getAttribute('keyname') === 'Shift') {
           
           keys[i].classList.forEach(el=>{
                keys.forEach(em=>{                    
                    if (em.textContent.length < 2) {                        
                        em.textContent = em.textContent.toUpperCase();
                    }
                    
                })               
              
           })
        }
        this.classList.add('active');
    });
    
    keys[i].addEventListener('mouseup', function(e) {
        
        this.classList.remove('active');
        this.classList.add('remove');

        setTimeout(() => {
            this.classList.remove('remove');
        }, 200);
        // Обработка специальной ключевой функции
        if (this.getAttribute('keyname') === 'Caps Lock') {
           
        }
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
           
            keys[i].classList.forEach(el=>{
                 keys.forEach(em=>{                    
                    if (em.textContent.length < 2) {
                        em.textContent = em.textContent.toLowerCase();
                        }                     
                 })               
               
            })
         }
        
        
    })
}

