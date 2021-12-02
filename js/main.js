var buttons = document.getElementsByClassName("buttons")[0];

document.getElementById("iconname").onchange = function () {
  search(this.value);
};

function addIcons() {
  buttons.innerHTML = "";
  for (let j = 0; j < icons.length; j++) {
    let i = document.createElement("i");
    i.className = "mdi mdi-36px mdi-" + icons[j].name;

    i.onmouseup = function () {
      copyText(String.fromCodePoint(parseInt(icons[j].hex, 16)));
    };

    let span = document.createElement("span");
    span.className = "icon";

    let button = document.createElement("button");
    button.className = "button";

    if (icons[j].version.startsWith("6")) {
      button.className += " is-info is-outlined";
    }

    span.appendChild(i);
    button.appendChild(span);
    buttons.appendChild(button);
  }
}

function search(name) {
  name = name.toLowerCase();
  for (let i = 0; i < buttons.childElementCount; i++) {
    className = buttons.children[i].lastChild.lastChild.className;
    if (className.includes(name)) {
      buttons.children[i].classList.remove("is-hidden");
    } else {
      buttons.children[i].classList.add("is-hidden");
    }
  }
}

function copyText(text) {
  var copyFrom = document.createElement("textarea");
  copyFrom.setAttribute("style", "position:fixed;opacity:0;top:100px;left:100px;");
  copyFrom.value = text;
  document.body.appendChild(copyFrom);
  copyFrom.select();
  document.execCommand("copy");
  var copied = document.createElement("div");
  copied.setAttribute("class", "notification is-info");
  copied.appendChild(document.createTextNode("Скопировано"));
  document.getElementById("notification").appendChild(copied);
  setTimeout(function () {
    document.body.removeChild(copyFrom);
    document.getElementById("notification").removeChild(copied);
  }, 1500);
}

addIcons();
