var file = null;
var menu = document.getElementById("menu1985");
var menu_menu = document.getElementById("menu-menu1985");
var filebar = document.getElementById("filebar1985");
var fileDiv = document.getElementById("file1985");
var bar_title = document.getElementById("bar-title1985");
var screenDiv = document.getElementById("screen1985");

menu.addEventListener("mousedown", () => {
  menu.setAttribute("src", "assets/menu-selected.png");
  menu_menu.style.display = "block";
});

menu.addEventListener("mouseup", () => {
  menu.setAttribute("src", "assets/menu.png");
  menu_menu.style.display = "none";
});

filebar.addEventListener("mouseup", () => {
  filebar.style.backgroundColor = "var(--yellow)";
  filebar.style.color = "black";
  fileDiv.style.display = "none";
});

document.getElementById("close1985").addEventListener("mouseup", () => {
  close();
});

filebar.addEventListener("mousedown", () => {
  filebar.style.backgroundColor = "var(--blue)";
  filebar.style.color = "white";
  fileDiv.style.display = "block";
});

filebar.addEventListener("mouseup", () => {
  filebar.style.backgroundColor = "var(--yellow)";
  filebar.style.color = "black";
  fileDiv.style.display = "none";
});

document.getElementById("save1985").addEventListener("mouseup", () => {
  if (document.getElementById("notepad1985"))
    localStorage.setItem(file, document.getElementById("notepad1985").value);
  filebar.style.backgroundColor = "var(--yellow)";
  filebar.style.color = "black";
  fileDiv.style.display = "none";
});

var files = [ "ABC.TXT", "AUTOEXEC.BAT", "CALC.EXE", "CALENDAR.EXE", "CARDFILE.EXE", "CLIPBRD.EXE", "CLOCK.EXE", "COMMAND.COM", "CONTROL.EXE", "COURA.FON", "COURB.FON", "DOTHIS.EXE", "HELVA.FON", "HELVB.FON", "HIFONTS.FON", "HPLASER.DRV", "LOFONTS.FON", "MODERN.FON", "MSDOS.EXE", "MSDOSD.EXE", "NOTEPAD.EXE", "PAINT.EXE", "PRACTICE.DOC", "README.DOC", "REVERSI.EXE", "ROMAN.FON", "SCRIPT.FON", "SPOOLER.EXE", "TERMINAL.EXE", "TEXT.TXT", "TMSRA.FON", "TMSRB.FON", "WIN.CNF", "WIN.COM", "WIN.INI", "WIN100.BIN", "WIN100.OVL", "WINOLDAP.GRB", "WINOLDAP.MOD", "WRITE.DAT", "WRITE.EXE" ];
    localStorage.setItem("files", JSON.stringify(files));
    localStorage.setItem("INDEX.TXT", '<!DOCTYPE     >\n<html>\n  <head>\n    <title>        </title>\n  </    >\n  <body>\n    <h >Faca seu cadastro</ 1>\n    <form>\n      <      for="email">Email</label>\n      <input name="     " type="text">\n      <br>\n      <label for="     ">Senha</label>\n      <      name="senha" type="password">\n      <br>\n      <input type="submit">\n    </    >\n  </body>\n</html>')
    var eita = JSON.parse(localStorage.getItem("files"));
    eita.forEach(element => {
      document.getElementById("files1985").insertAdjacentHTML("beforeend", `<div class='item1985'>${element}</div>`);
    });
    const ok = document.getElementsByClassName("item1985");
    var bruh = Array.from(ok);
    var lastSelected, lastSelectedClass;
    bruh.forEach(element => {
      element.onclick = event => {
        if (event.detail === 1) {
          if (lastSelected) lastSelected.setAttribute("class", lastSelectedClass);
          lastSelected = element;
          lastSelectedClass = element.getAttribute("class");
          element.setAttribute("class", "selected1985 " + lastSelectedClass);
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
      document.getElementById("files1985").insertAdjacentHTML("afterbegin", `<div class='item1985'>INDEX.TXT</div>`);
      const tmj = document.getElementsByClassName("item1985");
      var kkkiai = Array.from(tmj);
      kkkiai.forEach(element => {
        element.onclick = event => {
        if (event.detail === 1) {
          if (lastSelected) lastSelected.setAttribute("class", lastSelectedClass);
          lastSelected = element;
          lastSelectedClass = element.getAttribute("class");
          element.setAttribute("class", "selected1985 " + lastSelectedClass);
        } else if (event.detail === 2) {
          file = element.innerHTML
          openFile();
        }
      }
      });
    }
  
    function openFile() {
      bar_title.innerHTML = "Notepad - " + file;
      document.getElementById("view1985").innerHTML = "Edit";
      document.getElementById("special1985").innerHTML = "Search";
      document.getElementById("main1985").insertAdjacentHTML("afterbegin", "<textarea id='notepad1985' class='main1985' spellcheck='false' autofocus></textarea>");
      console.log(localStorage.getItem(file));
      document.getElementById("notepad1985").value = localStorage.getItem(file);
    }

    function close() {
      if (bar_title.innerHTML.includes("Notepad")) {
        menu.setAttribute("src", "assets/menu.png");
        menu_menu.style.display = "none";
        document.getElementById("notepad1985").remove();
        bar_title.innerHTML = "MS-DOS Executive";
      } else if (bar_title.innerHTML == "MS-DOS Executive") {
        screenDiv.replaceChildren();
        screenDiv.setAttribute("class", "terminal1985");
        screenDiv.insertAdjacentHTML("beforeend", '<div id="input1985" class="input1985"><div id="text1985">A></div><form id="forms1985"><input type="text" id="command1985" class="cli1985"/></form></div><div id="response1985"></div><div id="cursor1985"></div>');
        document.getElementById("command1985").focus();
        foo();
      }
    }


    function foo() {
      let text = document.getElementById("text1985");
      let form = document.getElementById("forms1985");
      let input = document.getElementById("input1985");
      let cursor = document.getElementById("cursor1985");
      let responseDiv = document.getElementById("response1985");
      var position = 17.2;
      cursor.style.left = position + "px";
      let commandInput = document.getElementById('command1985');
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
      document.getElementById('forms1985').addEventListener('submit', function(event) {
        event.preventDefault();
        let command = document.getElementById("command1985").value;
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
    responseDiv.insertAdjacentHTML("afterend", '<div id="input1985" class="input1985"><div id="text1985"></div><form id="forms1985"><input type="text" id="command1985" class="cli1985" /></form></div>');
    responseDiv.removeAttribute("id");
    input = document.getElementById("input1985");
    input.insertAdjacentHTML("afterend", '<div id="response1985"></div>');
    text = document.getElementById("text1985");
    text.textContent = "A>";
    foo();
    };
    });
  }