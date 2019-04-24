function createWindow(name) {
  const mainWindow  = document.createElement('div');
  
  mainWindow.innerHTML = `
      <div class="titlebar drag-handle">
        <hr><hr><hr><hr><hr><hr>
        <div class="close-container">
          <div class="close-box-1">
            <div class="close-box-2"></div>
          </div>
        </div>
        <p>${name}</p>
      </div> `
  mainWindow.classList.add('finder-window');
  
  addListenersToTrapdoor();
  addListenersToTitleBar();
  
  makeDraggable(mainWindow);
  makeResizable(mainWindow);
  return mainWindow;
  
  function addListenersToTrapdoor() {
    let trapDoor = mainWindow.querySelector('.close-container');
    trapDoor.addEventListener('click', function(){
      mainWindow.remove();
    });
  }
  
  function addListenersToTitleBar() {
    let titlebar = mainWindow.querySelector(".titlebar");
    titlebar.addEventListener('dblclick', function() {
      if(mainWindow.getBoundingClientRect().height > 20) {
        console.log(mainWindow.style.height);
        mainWindow.originalHeight = mainWindow.getBoundingClientRect().height;
        mainWindow.style.height = 20;
      } else {
        mainWindow.style.height = mainWindow.originalHeight;
      }
    });
  }
}