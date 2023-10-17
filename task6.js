function Size() {
    const width = document.getElementById('width');
    const height = document.getElementById('height');
  
    width.textContent = window.innerWidth;
    height.textContent = window.innerHeight;
  }
  
  window.addEventListener('resize', Size);
  
  Size();
  