// Function to append character to the display
function appendCharacter(character) {
    document.getElementById('display').value += character;
  }
  
  // Function to clear the display
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  // Function to delete the last character
  function deleteChar() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  // Function to calculate and show the result
  function calculateResult() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  }
  