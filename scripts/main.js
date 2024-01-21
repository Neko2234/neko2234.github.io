const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/2539.png") {
    myImage.setAttribute("src", "images/amcr.png");
  } else {
    myImage.setAttribute("src", "images/2539.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("あなたの名前を入力してください。");
  if (myName === null || myName === "") {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `ニゴミクはかわいいよ、${myName} さん`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `ニゴミクはかわいいよ、${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
