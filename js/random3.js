var array = ['Goro', 'Johnny Cago', 'Kano', 'Liu Kano', 'Raiden', 'Reptil', 'Scorpion', 'Shang Tsun', 'Sonya', 'Sub-Zero'];
var choix = 0;
function getRandomArbitrary(min, max) {
     choix = parseInt(Math.random()*((array.length+1) - 0)+0);
     console.log(array[choix]);
}

getRandomArbitrary();
