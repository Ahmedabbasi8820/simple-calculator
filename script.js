let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let screenValue = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;

        if (buttonText === 'AC') {
            screenValue = "";
            inputBox.value = "";
        }
        else if (buttonText === 'DEL') {
            screenValue = screenValue.slice(0, -1);
            inputBox.value = screenValue;
        }
        else if (buttonText === '=') {
            try {
                inputBox.value = eval(screenValue);
            } catch (error) {
                inputBox.value = "Error";
            }
        }
        else {
            screenValue += buttonText;
            inputBox.value = screenValue;
        }
    });
});
