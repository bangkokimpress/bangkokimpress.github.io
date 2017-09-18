    if (/Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent)){
     window.onload = function (){
         document.getElementById('tubular-container').style.display = 'none';
         document.getElementById('tubular-player').style.display = 'none';
         document.getElementById('tubular-shield').style.display = 'none';
     }
   };