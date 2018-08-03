

let health = 100;

function update() {
    document.getElementById("health").innerHTML = health;
}

function slap() {
    health -= 1
    update()
}
update();
