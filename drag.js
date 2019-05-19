function makeDraggable(element) {
  const dragHandle  = element.querySelector('.drag-handle');
  dragHandle.addEventListener('mousedown', handleDrag);

  function handleDrag(e) {
    e.preventDefault();
    let originalTop     = element.getBoundingClientRect().top;
    let originalLeft    = element.getBoundingClientRect().left;
    xOffset = e.clientX - originalLeft;
    yOffset = e.clientY - originalTop;
    window.addEventListener('mousemove', drag);
    window.addEventListener('mouseup', stopDrag);
    console.log(originalLeft, xOffset);
  }
  
  function drag(e) {
    newLeft  = e.clientX - xOffset;
    newTop  = e.clientY - yOffset;
    element.style.left = newLeft;
    element.style.top = newTop;
  }
  
  function stopDrag() {
    window.removeEventListener('mousemove', drag);
  }
}