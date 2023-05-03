/* eslint-disable arrow-parens */
/* eslint linebreak-style: ["error", "windows"] */
export const en = () =>{
    document.body.innerHTML = ''
    const container = document.createElement('div');
    container.classList.add('container');
    
    const nightMode = document.createElement('div');
    nightMode.classList.add('night_mode');
    
    const toggleCircle = document.createElement('div');
    toggleCircle.classList.add('toggle_circle');
    nightMode.append(toggleCircle);
    
    
    const keyboardWrapp = document.createElement('div');
    keyboardWrapp.classList.add('keyboard_wrapp');
    
    const keyboardLights = document.createElement('div');
    keyboardLights.classList.add('keyboard_lights');
    
    const keyboardKeys = document.createElement('div');
    keyboardKeys.classList.add('keyboard_keys');

    const description = document.createElement('p');
    description.textContent = 'Клавиатура создана в операционной системе Windows';
    description.classList.add('description');

    const language = document.createElement('p');
    language.textContent = 'Для переключения языка комбинация: левыe ctrl + alt';
    language.classList.add('language');
    
    const row1 = document.createElement('div');
    row1.classList.add('row');
    
    const keys1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
    keys1.forEach(key => {
      const keyElement = document.createElement('div');
      keyElement.classList.add('keys');
      keyElement.textContent = key;
      row1.append(keyElement);
    });
    keyboardKeys.append(row1);
    
    const row2 = document.createElement('div');
    row2.classList.add('row');
    
    const keys2 = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\','Del'];
    keys2.forEach(key => {
        if (key.length >= 3) {
            const keyElement = document.createElement('div');keyElement.classList.add('keys');
            keyElement.textContent = key;
            row2.append(keyElement);
        } else {
            const keyElement = document.createElement('div');keyElement.classList.add('keys');
            keyElement.textContent = key.toLowerCase();
            row2.append(keyElement);
        }
      
    });
    keyboardKeys.append(row2);
    
    const row3 = document.createElement('div');
    row3.classList.add('row');
    
    const keys3 = ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'];
    keys3.forEach(key => {
        if (key.length >= 3) {
      const keyElement = document.createElement('div');
      keyElement.classList.add('keys');
      keyElement.textContent = key;
      row3.append(keyElement);
        } else {
            const keyElement = document.createElement('div');
            keyElement.classList.add('keys');
            keyElement.textContent = key.toLowerCase();
            row3.append(keyElement);
        }
      
    });
    keyboardKeys.append(row3);
    
    
    const row4 = document.createElement('div');
    row4.classList.add('row');
    
    const keys4 = ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'Shift'];
    keys4.forEach(key => {
        if (key.length >= 3) {
            const keyElement = document.createElement('div');
            keyElement.classList.add('keys');
            keyElement.textContent = key;
            row4.append(keyElement);
        }else{
            const keyElement = document.createElement('div');
            keyElement.classList.add('keys');
            keyElement.textContent = key.toLowerCase();
            row4.append(keyElement);
        }
      
    });
    keyboardKeys.append(row4);
    
    const row5 = document.createElement('div');
    row5.classList.add('row');
    
    const keys5 = ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']; keys5.forEach(key => {
      const keyElement = document.createElement('div');
      keyElement.classList.add('keys');
      keyElement.textContent = key;
      row5.append(keyElement);
    });
    keyboardKeys.append(row5);
    
    const textInput = document.createElement('textarea');
    textInput.classList.add('text');
    textInput.setAttribute('type', 'text');
    
    // Добавляем элементы на страницу
    keyboardWrapp.append(keyboardLights);
    keyboardWrapp.append(keyboardKeys);
    container.append(nightMode);
    
    container.append(keyboardWrapp);
    container.append(textInput);
    container.append(description);
    container.append(language);
    document.body.append(container);
    
}