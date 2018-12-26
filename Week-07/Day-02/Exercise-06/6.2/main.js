//   1, Build up the necessary structure with JavaScript (try to use semantically correct elements)
//   2, Achive the same design by css
//   3, Try not to use css classes
//   4, Add some functionality to the buttons
//       - If "Up" is clicked the selection should move up by one
//       - If "Down" is clicked the selection should move down by one
//       - If "X" is clicked the selected item should be removed and the first item should be selected
//       - If ">" is clicked the selected item should be moved to the right side and the first item on the left side should be selected
//   5, Check all the edge cases, no error should be printed to the console

'use strict';

let mainContainer = document.querySelector('.main');
for (let i = 0; i < 3; i++) {
  let ul = document.createElement('ul');
  mainContainer.appendChild(ul);
}

const toBuy = ['bread', 'milk', 'orange', 'tomato'];
const myButtons = ['up', '>', 'X', 'down'];
const [toBuyList, buttonList, doneList] = document.querySelectorAll('ul');

const createList = (arrayToLi, ul) => {
  arrayToLi.forEach(e => {
    let li = document.createElement('li');
    li.innerText = e;
    ul.appendChild(li);
  });
};

createList(toBuy, toBuyList);
createList(myButtons, buttonList);

const [up, right, deleted, down] = buttonList.querySelectorAll('li');
toBuyList.childNodes[0].className = 'selected';

let indexOfSelection = 0;
const checkSelected = () => {
  toBuyList.childNodes.forEach((e, i) => {
    if (e.className === 'selected') {
      indexOfSelection = i;
    }
  });
  return indexOfSelection;
};

const moveUp = () => {
  let index = checkSelected();
  if (index > 0) {
    toBuyList.childNodes[index].className = '';
    toBuyList.childNodes[index - 1].className = 'selected';
  }
};

const moveDown = () => {
  let index = checkSelected();
  if (index < toBuyList.childNodes.length - 1) {
    toBuyList.childNodes[index].className = '';
    toBuyList.childNodes[index + 1].className = 'selected';
  }
};

const moveRight = () => {
  let index = checkSelected();
  let childWithIndex = toBuyList.childNodes[index];
  toBuyList.childNodes[index].className = '';
  doneList.appendChild(childWithIndex);
  toBuyList.childNodes[0].className = 'selected';
};

const deleteItem = () => {
  let index = checkSelected();
  let childWithIndex = toBuyList.childNodes[index];
  toBuyList.removeChild(childWithIndex);
  toBuyList.childNodes[0].className = 'selected';
};

buttonList.addEventListener('click', (e) => {
  if (e.target == up) {
    moveUp(1);
  } else if (e.target == right) {
    moveRight();
  } else if (e.target == deleted) {
    deleteItem();
  } else if (e.target == down) {
    moveDown();
  };
});