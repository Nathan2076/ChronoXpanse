var file = null;

setTimeout(() => {
  document.getElementById("boot").remove();
}, 2000);

document.getElementById("menu").addEventListener("mousedown", () => {
  document.getElementById("menu").setAttribute("src", "assets/menu-selected.png");
  document.getElementById("menu-menu").style.display = "block";
});

document.getElementById("menu").addEventListener("mouseup", () => {
  document.getElementById("menu").setAttribute("src", "assets/menu.png");
  document.getElementById("menu-menu").style.display = "none";
});

document.getElementById("filebar").addEventListener("mouseup", () => {
  document.getElementById("filebar").style.backgroundColor = "var(--yellow)";
  document.getElementById("filebar").style.color = "black";
  document.getElementById("file").style.display = "none";
});

document.getElementById("close").addEventListener("mouseup", () => {
  close();
});

document.getElementById("filebar").addEventListener("mousedown", () => {
  document.getElementById("filebar").style.backgroundColor = "var(--blue)";
  document.getElementById("filebar").style.color = "white";
  document.getElementById("file").style.display = "block";
});

document.getElementById("filebar").addEventListener("mouseup", () => {
  document.getElementById("filebar").style.backgroundColor = "var(--yellow)";
  document.getElementById("filebar").style.color = "black";
  document.getElementById("file").style.display = "none";
});

document.getElementById("save").addEventListener("mouseup", () => {
  if (document.getElementById("notepad"))
    localStorage.setItem(file, document.getElementById("notepad").value);
  document.getElementById("filebar").style.backgroundColor = "var(--yellow)";
  document.getElementById("filebar").style.color = "black";
  document.getElementById("file").style.display = "none";
});

var files = [ "COMMAND.COM", "FORMAT.COM", "CHKDSK.COM", "SYS.COM", "DISKCOPY.COM", "DISKCOMP.COM", "COMP.COM", "DATE.COM", "TIME.COM", "MODE.COM", "EDLIN.COM", "DEBUG.COM", "LINK.EXE", "BASIC.COM", "BASICA.COM", "ART.BAS", "SAMPLES.BAS" ];
    localStorage.setItem("files", JSON.stringify(files));
    var eita = JSON.parse(localStorage.getItem("files"));
    eita.forEach(element => {
      document.getElementById("files").insertAdjacentHTML("beforeend", `<div class='item'>${element}</div>`);
    });
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
          if (element.innerHTML == "1980") {
            bruh.forEach(element => {
              element.remove();
            });
            openFolder();
          } else {
            alert("Cannot run " + element.innerHTML);
          }
        }
      }
    });

    function openFolder() {
      document.getElementById("files").insertAdjacentHTML("beforeend", `<div class='item'>DESIGN.TXT</div><div class='item'>HISTORY.TXT</div>`);
      const tmj = document.getElementsByClassName("item");
      var kkkiai = Array.from(tmj);
      kkkiai.forEach(element => {
        element.onclick = event => {
        if (event.detail === 1) {
          if (lastSelected) lastSelected.setAttribute("class", lastSelectedClass);
          lastSelected = element;
          lastSelectedClass = element.getAttribute("class");
          element.setAttribute("class", "selected " + lastSelectedClass);
        } else if (event.detail === 2) {
          file = element.innerHTML
          openFile();
        }
      }
      });
    }
  
    function openFile() {
      document.getElementById("bar-title").innerHTML = "Notepad - " + file;
      document.getElementById("view").innerHTML = "Edit";
      document.getElementById("special").innerHTML = "Search";
      document.getElementById("main").insertAdjacentHTML("afterbegin", "<textarea id='notepad' class='main' spellcheck='false' autofocus></textarea>");
      console.log(localStorage.getItem(file));
      document.getElementById("notepad").value = localStorage.getItem(file);
    }

    function close() {
      if (document.getElementById("bar-title").innerHTML.includes("Notepad")) {
        document.getElementById("menu").setAttribute("src", "assets/menu.png");
        document.getElementById("menu-menu").style.display = "none";
        document.getElementById("notepad").remove();
        document.getElementById("bar-title").innerHTML = "MS-DOS Executive";
      } else if (document.getElementById("bar-title").innerHTML == "MS-DOS Executive") {
        document.getElementById("screen").replaceChildren();
        document.getElementById("screen").setAttribute("class", "terminal");
        document.getElementById("screen").insertAdjacentHTML("beforeend", '<div id="input" class="input"><div id="text">A></div><form id="forms"><input type="text" id="command" class="cli"/></form></div><div id="response"></div><div id="cursor"></div>');
        document.getElementById("command").focus();
        foo();
      }
    }


    function foo() {
      let text = document.getElementById("text");
      let form = document.getElementById("forms");
      let input = document.getElementById("input");
      let cursor = document.getElementById("cursor");
      let responseDiv = document.getElementById("response");
      var position = 17.2;
      cursor.style.left = position + "px";
      let commandInput = document.getElementById('command');
      var inputLengthPast = 0;
      var inputLengthNow = 0;
      commandInput.style.display = "block";
      commandInput.focus();
      commandInput.addEventListener("input", function() {
        inputLengthNow = commandInput.value.length;

        if (inputLengthNow > inputLengthPast) {
          position += 8.6 * (inputLengthNow - inputLengthPast);
        }
        else if (inputLengthNow < inputLengthPast) {
          position -= 8.6 * (inputLengthPast - inputLengthNow);
        }

        cursor.style.left = position + "px";
        inputLengthPast = inputLengthNow;
      });
      document.getElementById('forms').addEventListener('submit', function(event) {
        event.preventDefault();
        let command = document.getElementById("command").value;
      var xhr = new XMLHttpRequest();
      var response = "";
    xhr.open('POST', '../idk.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send("command=" + command + "&level=1985");
    xhr.onload = function() {
    if (xhr.status === 200) {
        console.log('Dados enviados com sucesso!');
        response = xhr.responseText;
    } else {
        console.log('Ocorreu um erro ao enviar os dados.');
        }
    responseDiv.innerHTML = response;
    input.removeAttribute("id");
    form.setAttribute("inert", "");
    form.removeAttribute("id");
    commandInput.removeAttribute("id");
    text.removeAttribute("id");
    responseDiv.insertAdjacentHTML("afterend", '<div id="input" class="input"><div id="text"></div><form id="forms"><input type="text" id="command" class="cli" /></form></div>');
    responseDiv.removeAttribute("id");
    input = document.getElementById("input");
    input.insertAdjacentHTML("afterend", '<div id="response"></div>');
    text = document.getElementById("text");
    text.textContent = "A>";
    foo();
    };
    });
  }