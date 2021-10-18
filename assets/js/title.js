window.onload = fadeIn;

        function fadeIn() {
            var fade = document.getElementById("gif");
            var opacity = 0;
            var intervalID = setInterval(function() {
  
                if (opacity < 1) {
                    opacity = opacity + 0.1
                    fade.style.opacity = opacity;
                } else {
                    clearInterval(intervalID);
                }
            }, 100);
        }

let glowInTexts = document.querySelectorAll(".glowIn");
glowInTexts.forEach(glowInText => {
    let letters = glowInText.textContent.split("");
          glowInText.textContent = "";
          letters.forEach((letter, i) => {
            let span = document.createElement("span");
            span.textContent = letter;
            span.style.animationDelay = `${i * 0.05}s`;
            glowInText.append(span);
          });
        });