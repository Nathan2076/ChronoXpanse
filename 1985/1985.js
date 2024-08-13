var files = [ "COMMAND.COM", "FORMAT.COM", "CHKDSK.COM", "SYS.COM", "DISKCOPY.COM", "DISKCOMP.COM", "COMP.COM", "DATE.COM", "TIME.COM", "MODE.COM", "EDLIN.COM", "DEBUG.COM", "LINK.EXE", "BASIC.COM", "BASICA.COM", "ART.BAS", "SAMPLES.BAS" ];
    localStorage.setItem("files", JSON.stringify(files));
    var eita = JSON.parse(localStorage.getItem("files"));
    eita.forEach(element => {
      document.getElementById("files").insertAdjacentHTML("beforeend", `<div class='item'>${element}</div>`);
    });
    console.log("A:WIN101/");
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
            document.getElementById("files").insertAdjacentHTML("beforeend", `<div class='item'>IAI.KKK</div>`);
            
          } else {
            alert("Cannot run " + element.innerHTML);
          }
        }
      }
    });