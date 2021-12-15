// Write your code here!

let node = document.getElementById("main");
if (node.parentNode) {
    node.parentNode.removeChild(node);
  }


let newHeader = document.createElement('h1');
newHeader.setAttribute("id","victory");

newHeader.innerHTML = "YOUR - NAME is the champion";