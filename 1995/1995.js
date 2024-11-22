let startup = new Audio("assets/startup.m4a");
let windows, closeButtons, activePrograms, currentTime;

localStorage.setItem("index.html", "<!DOCTYPE html><html><head><title>Cadastro</title></head><body><h1>Faca seu cadastro</h1><form><label for='email'>Email: </label><input name='email' type='text'><br><label for='senha'>Senha: </label><input name='senha' type='password'><br><input type='submit'></form></body></html>");

setTimeout(() => {
    windows = Array.from(document.getElementsByClassName("ui-dialog"));
    windows.forEach(window => {
        window.style.display = "none";
    });

    closeButtons = Array.from(document.getElementsByClassName("ui-dialog-titlebar-close"));
    closeButtons.forEach(closeButton => {
        closeButton.style.all = "unset";
        closeButton.style.position = "relative";
        closeButton.style.right = "2px";
        closeButton.innerHTML = "<img src='assets/min-max.png' width='32px' style='margin-right: 2px;'><img src='assets/close.png' width='16px'>";
        closeButton.addEventListener("click", () => {
            closeButton.parentElement.parentElement.style.display = "none";
        });
    });

    activePrograms = Array.from(document.getElementsByClassName("program"));
    activePrograms.forEach(activeProgram => {
        activeProgram.style.display = "none";
    });
    
    document.getElementById("ui-id-1").innerHTML = "<div style='margin-right: 3px;'><img src='assets/netscape-16.png' width='16px'></div><div>Netscape - [Cadastro]</div>";
    document.getElementById("ui-id-2").innerHTML = "<div style='margin-right: 3px;'><img src='assets/folder-16.png' width='16px'></div><div>Cadastro</div>";
    
    document.getElementById("body").removeChild(document.getElementById("boot"));
    startup.play();
}, 4000);

var updateClock = setInterval(() => {
    currentTime = new Date();
    document.getElementById("clock").textContent = currentTime.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
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
          } else if (element.lastElementChild.innerHTML == "Cadastro") {
            openFolder();
          }
        }
      }
    });

function openNetscape() {
    windows[0].style.display = "block";
    activePrograms[0].style.display = "block";
}

function openFolder() {
    windows[1].style.display = "block";
    activePrograms[1].style.display = "block";
}
