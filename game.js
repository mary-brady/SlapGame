
let health = 100;
let hits = 0;
let name = 'Name Here'

function update() {
    if(health < 0) {
        return
    }
  document.getElementById("health").innerHTML = health;
  document.getElementById("hits").innerHTML = hits;
  document.getElementById("name").innerHTML = name;
}

function slap() {
    health -= 1;
    hits += 1;
    update()
}

function kick() {
    health -= 10;
    hits += 1;
    update()
}

function punch() {
    health -= 5;
    hits += 1;
    update()
}

update();
