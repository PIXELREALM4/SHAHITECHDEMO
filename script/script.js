const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelectorAll(".hack").forEach(anchor => {
  let interval = null;

  anchor.onmouseover = event => {
    let iteration = 0;

    clearInterval(interval);

    const originalText = event.target.innerText;
    event.target.dataset.originalText = originalText;

    interval = setInterval(() => {
      event.target.innerText = originalText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  anchor.onmouseout = event => {
    clearInterval(interval);
    event.target.innerText = event.target.dataset.originalText;
  };
});

