function Typewriter($wrap) {
    const $type = $wrap.querySelector('.anim-type');
    const textArray = JSON.parse($type.getAttribute('data-text'));
  
    let index = 0;
  
    function typeNextText() {
      const currentText = textArray[index];
      typeIt(currentText, true);
      index = (index + 1) % textArray.length;
    }
  
    function typeIt(string, bool) {
      const text = string.split('');
      text.forEach((letter, i) => {
        setTimeout(() => {
          $type.innerHTML += letter;
          if (bool && i === text.length - 1) delayedDelete();
        }, 100 * i);
      });
    }
  
    function deleteIt(bool) {
      let currentText = $type.textContent;
      const deleteInterval = setInterval(() => {
        $type.textContent = currentText.slice(0, -1);
        if (!currentText.length) {
          clearInterval(deleteInterval);
          typeNextText();
        }
        currentText = $type.textContent;
      }, 100);
    }
  
    function delayedDelete() {
      setTimeout(() => {
        deleteIt(true);
      }, 200);
    }
  
    typeNextText();
  }
  
  const type = Typewriter(document.querySelector('.anim'));