var myModal = document.getElementById("myModal");
var windowTitle = document.getElementById("title");
var btns = document.getElementsByClassName("modBtn");
var span = document.querySelector(".closeBtn");

for (var i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    console.log(`push ${[i]}`)
    myModal.classList.remove("hidden");
    windowTitle.textContent = `Hello, I'm the ${this.textContent}`;
  };
}

span.onclick = function () {
  myModal.classList.add("hidden");
};

