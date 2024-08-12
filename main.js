const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioContext = new AudioContext();

let audio1 = new Audio("startup.wav");
let audio2 = new Audio("loop.wav");

let source1 = audioContext.createMediaElementSource(audio1);
let source2 = audioContext.createMediaElementSource(audio2);

source1.connect(audioContext.destination);
source2.connect(audioContext.destination);

audio1.onended = function() {
  audio2.loop = true;
  audio2.play();
}

document.getElementById("screen").insertAdjacentHTML("beforebegin", '<img src="button.png" id="button">');
document.getElementById("button").insertAdjacentHTML("beforebegin", '<img src="light.png" id="light">');

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState == "visible" && document.getElementById('command')) {
    console.log("tab is active");
    document.getElementById('command').focus;
  }
});
        var power = document.getElementById("button");
            power.addEventListener('click', clicks);
        
        document.addEventListener('fullscreenchange', handleFullScreenChange);
        document.getElementById("text").textContent = "";
        document.cookie = "1980=true; Expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=Strict; Secure";
        var i = 0;
        var page = document.documentElement;

        async function kkk() {
          try {
            const responses = await fetch("loop.wav");
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
        
        document.getElementById("button").style.transform = "rotate(0deg)";
        let light = document.getElementById("light");
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
      xhr.open('POST', 'idk.php');
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send('command=' + command);
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
      
      const cookieValue = document.cookie.split("; ").find((row) =>
                          row.startsWith("1980="))?.split("=")[1];
                          
                          function startup() {
      
      document.getElementById("cursor").style.display = "block";
      // var interval = setInterval(function(){
      //   document.getElementById("text").textContent = i + " KB OK";
      //   if (i < 128) i += 16;
      //   }, 700);
      
        setTimeout(function(){
          let text = document.getElementById("text");
          text.innerHTML = "The IBM Personal Computer DOS";
          text.insertAdjacentHTML("afterend", "<div>Version 1.00 (C)Copyright IBM Corp 1981<br><br></div>");
          text.removeAttribute("id");
          let yo = document.getElementById("input");
        yo.insertAdjacentHTML("afterbegin", "<div id='text'>A></div>");
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
              
              document.getElementById("screen").style.top = "14.7vh";
              document.getElementById("screen").style.height = "61.5vh";
              
              // const output = document.getElementById("cookie-value");
              // output.textContent = `> ${cookieValue}`;
      }
  
  
      function handleFullScreenChange() {
          if (!document.fullscreenElement) {
              // document.getElementById("screen").style.top = "18vh";
              // document.getElementById("screen").style.height = "77vh";
          }
      }
