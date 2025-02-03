// script.js
document.getElementById('fullscreen-btn').addEventListener('click', function() {
  const iframe = document.getElementById('my-iframe');

  // Check if we can enter fullscreen mode
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.mozRequestFullScreen) { // Firefox
    iframe.mozRequestFullScreen();
  } else if (iframe.webkitRequestFullscreen) { // Chrome and Safari
    iframe.webkitRequestFullscreen();
  } else if (iframe.msRequestFullscreen) { // IE/Edge
    iframe.msRequestFullscreen();
  }

  // Show the iframe when fullscreen is triggered
  iframe.style.display = 'block';
});

// Listen for when fullscreen changes
document.addEventListener('fullscreenchange', function() {
  const iframe = document.getElementById('my-iframe');
  if (!document.fullscreenElement) {
    // Blank the iframe content when exiting fullscreen
    iframe.style.display = 'none';
    iframe.src = ''; // This removes the content inside the iframe
  }
});

document.addEventListener('webkitfullscreenchange', function() {
  const iframe = document.getElementById('my-iframe');
  if (!document.webkitFullscreenElement) {
    iframe.style.display = 'none';
    iframe.src = '';
  }
});

document.addEventListener('mozfullscreenchange', function() {
  const iframe = document.getElementById('my-iframe');
  if (!document.mozFullScreenElement) {
    iframe.style.display = 'none';
    iframe.src = '';
  }
});

document.addEventListener('MSFullscreenChange', function() {
  const iframe = document.getElementById('my-iframe');
  if (!document.msFullscreenElement) {
    iframe.style.display = 'none';
    iframe.src = '';
  }
});
