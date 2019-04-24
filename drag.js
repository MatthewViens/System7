function makeDraggable(element) {
  const dragHandle  = element.querySelector('.drag-handle');
  let xOffset       = 0;
  let yOffset       = 0;
  let currentX;
  let currentY;
  let initialX;
  let initialY;
  
  dragHandle.addEventListener('mousedown', handleDrag);

  function handleDrag(e) {
    e.preventDefault();
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
    window.addEventListener('mousemove', drag);
    window.addEventListener('mouseup', stopDrag);
  }
  
  function drag(e) {
    currentX  = e.clientX - initialX;
    currentY  = e.clientY - initialY;
    xOffset   = currentX;
    yOffset   = currentY;
    element.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
  }
  
  function stopDrag() {
    window.removeEventListener('mousemove', drag);
  }
}