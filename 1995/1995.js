let startup = new Audio("assets/startup.m4a");
let windows, closeButtons, activePrograms, currentTime;

localStorage.setItem("index.html", '<!DOCTYPE html>\n<html>\n<head>\n  <title>Login</title>\n</head>\n<body>\n  <h1>Faça seu login</h1>\n  <form id="form">\n    <label for="email">Email: </label>\n    <input name="email" id="email" type="text">\n    <br>\n    <label for="senha">Senha: </label>\n    <input name="senha" id="senha" type="password">\n    <br>\n    <input type="submit">\n  </form>\n</body>\n</html>\n');

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
    
    document.getElementById("ui-id-1").innerHTML = "<div style='margin-right: 3px;'><img src='assets/netscape-16.png' width='16px'></div><div>Netscape - [Login]</div>";
    document.getElementById("ui-id-2").innerHTML = "<div style='margin-right: 3px;'><img src='assets/notepad-16.png' width='13px'></div><div>index.html - Notepad</div>";

    document.getElementById("reload").addEventListener("mousedown", () => {
        document.getElementById("reload").setAttribute("src", "assets/button-reload-selected.png");
        document.getElementById("status").textContent = "Reload current document";
    });

    document.getElementById("reload").addEventListener("mouseup", () => {
        document.getElementById("reload").setAttribute("src", "assets/button-reload.png");
        document.getElementById("status").textContent = "Document: Done";
    });

    document.getElementById("reload").addEventListener("click", () => {
        document.getElementById("site").setAttribute("srcdoc", '<!DOCTYPE html><html><head><title>Login</title><link rel="stylesheet" href="iframe.css" /></head><body><h1>Faça seu login</h1><form id="form"><label for="email">Email: </label><input name="email" id="email" type="text"><br><label for="senha">Senha: </label><input name="senha" id="senha" type="password"><br><input type="submit"></form><script>document.getElementById("form").addEventListener("submit", function(e) { e.preventDefault(); var email = document.getElementById("email").value; var senha = document.getElementById("senha").value; if (email == "lorem@ipsum.com" && senha == "dolor") { alert("Bem-vindo de volta, Lorem!"); } else { alert("Email ou senha incorretos! Acesso negado."); } });</script></body></html>');
    });
    
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
          } else if (element.lastElementChild.innerHTML == "index.html") {
            openFile();
          }
        }
      }
    });

function openNetscape() {
    windows[0].style.display = "block";
    activePrograms[0].style.display = "flex";
}

function openFile() {
    windows[1].style.display = "block";
    activePrograms[1].style.display = "flex";
    document.getElementById("notepad").value = localStorage.getItem("index.html");
}
