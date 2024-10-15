const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioContext = new AudioContext();

let audio1 = new Audio("audios/startup.wav");
let audio2 = new Audio("audios/loop.wav");

let source1 = audioContext.createMediaElementSource(audio1);
let source2 = audioContext.createMediaElementSource(audio2);

source1.connect(audioContext.destination);
source2.connect(audioContext.destination);

audio1.onended = function() {
  audio2.loop = true;
  audio2.play();
}

document.getElementById("screen1980").insertAdjacentHTML("beforebegin", '<img src="1980/assets/button.png" id="button1980">');
document.getElementById("button1980").insertAdjacentHTML("beforebegin", '<img src="1980/assets/light.png" id="light1980">');

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState == "visible" && document.getElementById('command1980')) {
    console.log("tab is active");
    document.getElementById('command1980').focus;
  }
});
        var power = document.getElementById("button1980");
            power.addEventListener('click', clicks);
        
        document.addEventListener('fullscreenchange', handleFullScreenChange);
        document.getElementById("text1980").textContent = "";
        document.cookie = "1980=true; Expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=Strict; Secure";
        var i = 0;
        var page = document.documentElement;

        async function kkk() {
          try {
            const responses = await fetch("audios/loop.wav");
            buffer = await audioCtx.decodeAudioData(await responses.arrayBuffer());
          } catch (err) {
            console.error(`deu nao: ${err.message}`)
          }
        }

        async function certo() {
          if (!audioCtx) {
            audioCtx = new AudioContext();
            await kkk();
          }
          source = audioCtx.createBufferSource();
          source.buffer = buffer;
          source.connect(audioCtx.destination);
          source.loop = true;
          source.loopStart = 0;
          source.loopEnd = Math.floor(buffer.duration);
          source.start();
        }
      
      function clicks() {
        power.removeEventListener('click', clicks);
        
        document.getElementById("button1980").style.transform = "rotate(0deg)";
        let light = document.getElementById("light1980");
        light.style.animation = "1s fade";

        console.log("antes do interval1 com vagabundas e vadios;");
        
        var interval3 = setInterval(() => {
          var li = light ? light.parentNode : null;
          if (li) li.removeChild(light);
          clearInterval(interval3);
        }, 1000);

        var interval1 = setInterval(function(){
          var pa = power ? power.parentNode : null;
          if (pa) pa.removeChild(power);
          audio1.play();
          console.log("no interval1 com gays e viados;");
          clearInterval(interval1);
        }, 250);
  
        console.log("depois do interval1ea com vadias e putas;");
        
        var interval2 = setInterval(function(){
          openFullscreen();
          console.log("abreu;");
          clearInterval(interval2);
        }, 500);
  
      console.log("started aqui;");
        
        started = true;
  
        startup();
        console.log("startupou;");
        return;
      }
      
      function foo() {
        let text = document.getElementById("text1980");
        let form = document.getElementById("forms1980");
        let input = document.getElementById("input1980");
        let cursor = document.getElementById("cursor1980");
        let responseDiv = document.getElementById("response1980");
        var position = 17.2;
        cursor.style.left = position + "px";
        let commandInput = document.getElementById('command1980');
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
        document.getElementById('forms1980').addEventListener('submit', function(event) {
          event.preventDefault();
          let command = document.getElementById("command1980").value;
        var xhr = new XMLHttpRequest();
        var response = "";
      xhr.open('POST', 'idk.php');
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send('command=' + command + "&level=1980");
      xhr.onload = function() {
      if (xhr.status === 200) {
          console.log('Dados enviados com sucesso!');
          response = xhr.responseText;
          if (response == "booting") {
            document.getElementById("bg1980").replaceChildren();
            document.getElementById("bg1980").insertAdjacentHTML("beforeend", "<video id='video1980' src='1980/assets/vamo.mp4'></video>");
            document.getElementById("video1980").play();
            setTimeout(() => {
              document.getElementById("bg1980").style.backgroundImage = "none";
              document.getElementById("bg1980").removeChild(document.getElementById("video1980"));
              document.getElementById("bg1980").insertAdjacentHTML("beforeend", "<iframe src='1985/1985.html' style='z-index: -1; width: 100vw; height: 100vh; border: none;'>");
            }, 6000);
            // document.getElementById("bg1980").insertAdjacentHTML("beforeend", "<div id='screen1985' oncontextmenu='return false;'><img src='assets/boot.png' id='boot1985'><div id='bar1985'><img src='assets/menu.png' draggable='false' id='menu1985' class='bar1985' /><div id='barra1985'><div id='bar-title1985'>MS-DOS Executive</div></div><img src='assets/minimize.png' id='nemsei1985' class='bar1985' /></div><ul id='menu-menu1985' class='menu1985'><li><div>Size</div></li><li><div>Move</div></li><li><div>Icon</div></li><li><div>Zoom</div></li><li id='close1985'><div>Close</div></li><li><hr /></li><li><div>About...</div></li></ul><div id='baragain1985'><div class='baritem1985' id='filebar1985'>File</div><div class='baritem1985' id='view1985'>View</div><div class='baritem1985' id='special1985'>Special</div></div><ul id='file1985' class='menu1985'><li><div>New</div></li><li><div>Open...</div></li><li id='save1985'><div>Save</div></li><li><div>Save As...</div></li><li><div>Print</div></li></ul><div id='main1985' class='main1985'><div id='directorybar1985'><div class='drive1985'><div>A</div  ><img src='assets/drive.png'></div><div class='directory1985'>A:WIN101</div></div><div id='files1985'><div class='folder1985 item1985' id='19801985'>1980</div></div></div><div id='bottom1985'></div></div><script src='../include/jquery/jquery-3.7.1.min.js'></script><script src='../include/jquery-ui-1.14.0/jquery-ui.js'></script><script>$(function() {$('#menu-menu1985').menu();$('#file1985').menu();});</script><script src='1985.js'></script>");
            // document.getElementById("screen").insertAdjacentHTML("afterend", "<img src='1985/assets/boot.png' id='boot' />");
            // boot();
          }
      } else {
          console.log('Ocorreu um erro ao enviar os dados.');
          }
      responseDiv.innerHTML = response;
      input.removeAttribute("id");
      form.setAttribute("inert", "");
      form.removeAttribute("id");
      commandInput.removeAttribute("id");
      text.removeAttribute("id");
      responseDiv.insertAdjacentHTML("afterend", '<div id="input1980" class="input1980"><div id="text1980"></div><form id="forms1980"><input type="text" id="command1980" class="cli1980" /></form></div>');
      responseDiv.removeAttribute("id");
      input = document.getElementById("input1980");
      input.insertAdjacentHTML("afterend", '<div id="response1980"></div>');
      text = document.getElementById("text1980");
      text.textContent = "A>";
      foo();
      };
      });
    }
      
      const cookieValue = document.cookie.split("; ").find((row) =>
                          row.startsWith("1980="))?.split("=")[1];
                          
                          function startup() {
      
      document.getElementById("cursor1980").style.display = "block";
      // var interval = setInterval(function(){
      //   document.getElementById("text").textContent = i + " KB OK";
      //   if (i < 128) i += 16;
      //   }, 700);
      
        setTimeout(function(){
          let text = document.getElementById("text1980");
          text.innerHTML = "The IBM Personal Computer DOS";
          text.insertAdjacentHTML("afterend", "<div>Version 1.00 (C)Copyright IBM Corp 1981<br><br>Desafio 1: use git para clonar o Windows<br><br></div>");
          text.removeAttribute("id");
          let yo = document.getElementById("input1980");
        yo.insertAdjacentHTML("afterbegin", "<div id='text1980'>A></div>");
        // document.getElementById("screen").style.width = "100vw";
        // document.getElementById("screen").style.height = "100vh";
        // document.getElementById("screen").style.top = "0px";
        // document.getElementById("screen").style.left = "0px";
        foo();
      }, 8000);
      }
    
      function openFullscreen() {
        if (page.requestFullscreen) {
              page.requestFullscreen();
          } else if (page.webkitRequestFullscreen) { /* Safari */
              page.webkitRequestFullscreen();
          } else if (page.msRequestFullscreen) { /* IE11 */
              page.msRequestFullscreen();
              }
              
              document.getElementById("screen1980").style.top = "14.7vh";
              document.getElementById("screen1980").style.height = "61.5vh";
              
              // const output = document.getElementById("cookie-value");
              // output.textContent = `> ${cookieValue}`;
      }
  
  
      function handleFullScreenChange() {
          if (!document.fullscreenElement) {
              // document.getElementById("screen").style.top = "18vh";
              // document.getElementById("screen").style.height = "77vh";
          }
      }

      // function boot() {
      //   setTimeout(() => {
      //     document.getElementById("boot").style.transform = "scale(2)";
      //     document.getElementById("boot").style.top = "0px";
      //     document.getElementById("boot").style.left = "0px";
      //     document.getElementById("boot").style.width = "100vw";
      //     document.getElementById("bg").style.backgroundImage = "url('1980/assets/ibm.gif')";
      //     document.getElementById("bg").style.backgroundPosition = "45% 37%";
      //     document.getElementById("bg").style.backgroundSize = "220%";
      //   }, 2000);
      // }
