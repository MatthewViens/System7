function makeResizable(element) {
  const sides       = ['top', 'left', 'bottom', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right' ];
  const handles     = [];
  const minWidth    = 200;
  const minHeight   = 200;
  
  createHandles();
  addListenersToHandles();
  
  function createHandles() {
    for(let i = 0; i < sides.length; i++) {
      let handle = document.createElement('div');
      handle.setAttribute("data-handle", sides[i]);
      handles.push(handle);
      element.appendChild(handle);
    }
  }
  
  function addListenersToHandles() {
    for(let i = 0; i < handles.length; i++) {
      handles[i].addEventListener('mousedown', handleResize);
    }
  }
  
  function handleResize(e) {
    e.preventDefault();
    handle          = e.target.dataset.handle;
    originalWidth   = element.getBoundingClientRect().width;
    originalHeight  = element.getBoundingClientRect().height;
    originalTop     = element.getBoundingClientRect().top;
    originalLeft    = element.getBoundingClientRect().left;
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
      element.style.top = e.pageY - 56.4;
      element.style.height = height;
    }
  }

  function resizeBottom(e) {
    let height = e.pageY - originalTop;
    if(height > minHeight) {
      element.style.height = height;
    }
  }

  function resizeLeft(e) {
    let width = originalWidth + (originalLeft - e.pageX);
    if(width > minWidth) {
      element.style.left = e.pageX - 30;
      element.style.width = width;
    }
  }

  function resizeRight(e) {
    let width = e.pageX - originalLeft;
    if(width > minWidth) {
      element.style.width = width;
    }
  }
  
  function resizeTopLeft(e) {
    let height = originalHeight + (originalTop - e.pageY);
    let width = originalWidth + (originalLeft - e.pageX);
    if(height > minHeight) {
      element.style.top = e.pageY - 55;
      element.style.height = height;
    }
    if(width > minWidth) {
      element.style.left = e.pageX - 30;
      element.style.width = width;
    }
  }
  
  function resizeTopRight(e) {
    let height = originalHeight + (originalTop - e.pageY);
    let width = e.pageX - originalLeft;
    if(height > minHeight) {
      element.style.top = e.pageY - 55;
      element.style.height = height;
    }
    if(width > minWidth) {
      element.style.width = width;
    }
  }
  
  function resizeBottomLeft(e) {
    let height = e.pageY - originalTop;
    let width = originalWidth + (originalLeft - e.pageX);
    if(height > minHeight) {
      element.style.height = e.pageY - originalTop;
    }
    if(width > minWidth) {
      element.style.left = e.pageX - 30;
      element.style.width = originalWidth + (originalLeft - e.pageX);
    }
  }
  
  function resizeBottomRight(e) {
    let height = e.pageY - originalTop;
    let width = e.pageX - originalLeft;
    element.style.width = width;
    element.style.height = height;
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