var screeen = document.getElementById("screen")
function openApp(appInternalName) {
  const app = document.getElementById(appInternalName);
  app.classList.add("shown");
  screeen.classList.add('zoomed');
  setTimeout(() => {
    //nothing to see here folks
  }, 160);
}

// Función que agrega listeners para swipe horizontal derecho
function enableSwipeToClose(appElement, callback = () => {}) {
  let startX = 0;

  const onTouchStart = (e) => startX = e.touches ? e.touches[0].clientX : e.clientX;
  const onTouchEnd = (e) => {
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    if (endX - startX > 100) {
      appElement.classList.remove("shown");
      screeen.classList.remove('zoomed');
      callback();
    }
  };

  appElement.addEventListener("touchstart", onTouchStart);
  appElement.addEventListener("touchend", onTouchEnd);
  appElement.addEventListener("mousedown", onTouchStart);
  appElement.addEventListener("mouseup", onTouchEnd);
}
/*function enableSwipeToControlCenter(element) {
  
}*/

// Lista de apps con posibles callbacks
enableSwipeToClose(document.getElementById("settingsApp"));
enableSwipeToClose(document.getElementById("personalization"));
enableSwipeToClose(document.getElementById("calculator"), () => {
  document.getElementById("calcScreen").value = "";
});
enableSwipeToClose(document.getElementById("clockApp"));
enableSwipeToClose(document.getElementById("themes"));
enableSwipeToClose(document.getElementById("sysinfo"));
enableSwipeToClose(document.getElementById("galeria"));
enableSwipeToClose(document.getElementById("phone"));
enableSwipeToClose(document.getElementById("files"));