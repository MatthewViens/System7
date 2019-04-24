function createWindow(name) {
  const sides       = ['top', 'left', 'bottom', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right' ];
  const mainWindow  = document.createElement('div');
  const handles     = [];
  const minWidth    = 200;
  const minHeight   = 200;
  
  mainWindow.innerHTML = `
      <div class="titlebar">
        <hr><hr><hr><hr><hr><hr>
        <div class="close-container">
          <div class="close-box-1">
            <div class="close-box-2"></div>
          </div>
        </div>
        <p>${name}</p>
      </div> `
  mainWindow.classList.add('finder-window');
  
  createHandles();
  addListenersToHandles();
  addListenersToTrapdoor();
  addListenersToTitleBar();
  
  return mainWindow;
  
  function createHandles() {
    for(let i = 0; i < sides.length; i++) {
      let handle = document.createElement('div');
      handle.setAttribute("data-handle", sides[i]);
      handles.push(handle);
      mainWindow.appendChild(handle);
    }
  }
  
  function addListenersToHandles() {
    for(let i = 0; i < handles.length; i++) {
      handles[i].addEventListener('mousedown', handleResize);
    }
  }
  
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
  
  function handleResize(e) {
    e.preventDefault();
    handle          = e.target.dataset.handle;
    originalWidth   = mainWindow.getBoundingClientRect().width;
    originalHeight  = mainWindow.getBoundingClientRect().height;
    originalTop     = mainWindow.getBoundingClientRect().top;
    originalBottom  = mainWindow.getBoundingClientRect().bottom;
    originalLeft    = mainWindow.getBoundingClientRect().left;
    switch(handle) {
      case 'top':
        window.addEventListener('mousemove', resizeTop);
        break;
      case 'bottom':
        window.addEventListener('mousemove', resizeBottom);
        break;
      case 'left':
        window.addEventListener('mousemove', resizeLeft);
        break;
      case 'right':
        window.addEventListener('mousemove', resizeRight);
        break;
      case 'top-left':
        window.addEventListener('mousemove', resizeTopLeft);
        break;
      case 'top-right':
        window.addEventListener('mousemove', resizeTopRight);
        break;
      case 'bottom-left':
        window.addEventListener('mousemove', resizeBottomLeft);
        break;
      case 'bottom-right':
        window.addEventListener('mousemove', resizeBottomRight);
        break;
    }
    window.addEventListener('mouseup', stopResize);
  }
  
  function resizeTop(e) {
    let height = originalHeight + (originalTop - e.pageY)
    if(height > minHeight) {
      mainWindow.style.top = e.pageY - 56.4;
      mainWindow.style.height = height;
    }
  }

  function resizeBottom(e) {
    let height = e.pageY - originalTop;
    if(height > minHeight) {
      mainWindow.style.height = height;
    }
  }

  function resizeLeft(e) {
    let width = originalWidth + (originalLeft - e.pageX);
    if(width > minWidth) {
      mainWindow.style.left = e.pageX - 30;
      mainWindow.style.width = width;
    }
  }

  function resizeRight(e) {
    let width = e.pageX - originalLeft;
    if(width > minWidth) {
      mainWindow.style.width = width;
    }
  }
  
  function resizeTopLeft(e) {
    let height = originalHeight + (originalTop - e.pageY);
    let width = originalWidth + (originalLeft - e.pageX);
    if(height > minHeight) {
      mainWindow.style.top = e.pageY - 55;
      mainWindow.style.height = height;
    }
    if(width > minWidth) {
      mainWindow.style.left = e.pageX - 30;
      mainWindow.style.width = width;
    }
  }
  
  function resizeTopRight(e) {
    let height = originalHeight + (originalTop - e.pageY);
    let width = e.pageX - originalLeft;
    if(height > minHeight) {
      mainWindow.style.top = e.pageY - 55;
      mainWindow.style.height = height;
    }
    if(width > minWidth) {
      mainWindow.style.width = width;
    }
  }
  
  function resizeBottomLeft(e) {
    let height = e.pageY - originalTop;
    let width = originalWidth + (originalLeft - e.pageX);
    if(height > minHeight) {
      mainWindow.style.height = e.pageY - originalTop;
    }
    if(width > minWidth) {
      mainWindow.style.left = e.pageX - 30;
      mainWindow.style.width = originalWidth + (originalLeft - e.pageX);
    }
  }
  
  function resizeBottomRight(e) {
    let height = e.pageY - originalTop;
    let width = e.pageX - originalLeft;
    mainWindow.style.width = width;
    mainWindow.style.height = height;
  }

  function stopResize() {
    window.removeEventListener('mousemove', resizeTop);
    window.removeEventListener('mousemove', resizeBottom);
    window.removeEventListener('mousemove', resizeLeft);
    window.removeEventListener('mousemove', resizeRight);
    window.removeEventListener('mousemove', resizeTopLeft);
    window.removeEventListener('mousemove', resizeTopRight);
    window.removeEventListener('mousemove', resizeBottomLeft);
    window.removeEventListener('mousemove', resizeBottomRight);
  }
}
