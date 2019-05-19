const main  = document.querySelector("main");
const clock = document.querySelector(".clock");
let icons   = document.querySelectorAll(".icon");
const dropdown = document.querySelector('.dropdown');
const file = document.getElementById('file');
const fileNew = document.getElementById('file-new');

document.addEventListener("click", function(e) {
  if(e.target.tagName === "IMG") {
    for(let i = 0; i < icons.length; i++) {
      icons[i].classList.remove("selected");
    }
    e.target.parentElement.classList.add("selected");
  } else {
    for(let i = 0; i < icons.length; i++) {
      icons[i].classList.remove("selected");
    }
  }
});

for(let i = 0; i < icons.length; i++) {
  icons[i].addEventListener("dblclick", function() {
    let name = icons[i].textContent;
    let newFinderWindow = createWindow(name);
    main.appendChild(newFinderWindow);
  });
}

setClock();
setInterval(setClock, 1000);

function setClock() {
  let ampm;
  let datetime  = new Date();
  let hours     = datetime.getHours();
  let minutes   = checkTime(datetime.getMinutes());

  if(hours > 12) {
    hours -= 12;
    ampm = 'PM';
  } else if(hours === 0) {
    ampm = 'AM';
    hours = 12;
  } else if(hours < 12) {
    ampm = 'AM';
  } else if(hours === 12) {
    ampm = 'PM';
  }
  
  clock.textContent = `${hours}:${minutes} ${ampm}`;
  
  function checkTime(i) {
    return (i < 10) ? "0" + i : i;
  }
}

document.addEventListener('click', function(e) {
  if(e.target === file) {
    dropdown.style.visibility = 'visible';
  } else {
    dropdown.style.visibility = 'hidden';
  }
});

fileNew.addEventListener('click', function() {
  let newFinderWindow = createWindow('Macintosh HD');
  main.appendChild(newFinderWindow);
});
