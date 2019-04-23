const main  = document.querySelector("main");
const clock = document.querySelector(".clock");
let icons   = document.querySelectorAll(".icon");

document.addEventListener("click", function(e) {
  if(e.target.tagName === "IMG") {
    console.log('clicked');
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
  let minutes   = datetime.getMinutes();

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
}
