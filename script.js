var menu = document.getElementById("menu");
var toRemove = document.getElementById("toremove");
var toHover = document.getElementById("tohover");
menu.onclick = function(){menu.classList.add('active'); setTimeout(() => {toHover.style.zIndex = "-123"}, 1000);};
toRemove.onclick = function(){menu.classList.remove('active'); setTimeout(() => {toHover.style.zIndex = "123"}, 1000);};