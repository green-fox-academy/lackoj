// 1) Subscribe to keyup events on the global window object
// 2) Console log the event object and peek inside
// 3) Display the last pressed key's code as "Last pressed key code is: __"
'use strict';

window.addEventListener("keyup", (e) => {
  const result = document.querySelector(".result");
  result.textContent = `Last pressed key code is: ${e.keyCode} (${e.key})`;
});
