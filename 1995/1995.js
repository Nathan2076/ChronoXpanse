let startup = new Audio("assets/startup.m4a");

setTimeout(() => {
    document.getElementById("body").removeChild(document.getElementById("boot"));
    startup.play();
}, 4000);

const ok = document.getElementsByClassName("item");
    var bruh = Array.from(ok);
    var lastSelected, lastSelectedClass;
    bruh.forEach(element => {
      element.onclick = event => {
        if (event.detail === 1) {
          if (lastSelected) lastSelected.setAttribute("class", lastSelectedClass);
          lastSelected = element;
          lastSelectedClass = element.getAttribute("class");
          element.setAttribute("class", "selected " + lastSelectedClass);
        } else if (event.detail === 2) {
          if (element.lastElementChild.innerHTML == "Netscape Navigator") {
            openNetscape();
          }
        }
      }
    });

function openNetscape() {
    document.getElementById("main").insertAdjacentHTML("beforeend", "<div id='netscape'>NETSACPE!!!!</div>")
}
