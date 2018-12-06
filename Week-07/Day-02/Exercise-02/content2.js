// 1) replace the list items' content with items from this list:
//       ['apple', 'banana', 'cat', 'dog']
//  2) change the <ul> element's background color to 'limegreen'
//       - use css class to change the color instead of the style property

let content = ['apple', 'banana', 'cat', 'dog'];
let listItems = document.querySelectorAll("li");

//change content
for (let i = 0; i < content.length; i++) {
  listItems[i].textContent = content[i];
}

//change background
let ul = document.querySelector("ul");
ul.className = 'limegreen';
