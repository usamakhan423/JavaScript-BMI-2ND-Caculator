const bulb = document.querySelector("#bulb");
const bulbSwitch = document.querySelector("#bulbSwitch");

bulbSwitch.addEventListener('click', function() {
    if(bulb.src.match('off')){
        bulb.src = 'img/bulb-on.png';
        bulbSwitch.innerHTML = 'Turn OFF';
    } else {
        bulb.src = 'img/bulb-off.jpg';
        bulbSwitch.innerHTML = 'Turn ON';
    }
    
});