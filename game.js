

let bopIt = {
    name: 'Bop It!',
    health: 100,
    hits: 0,
    moods: [
        'Boppity',
        'Bopped',
    ],
    moodImgs: [
        "assets/bopit.gif"

    ]

}
const bopItImg = document.getElementById("bopit-img")
const health = document.getElementById("health");
const hits = document.getElementById("hits");
const bopName = document.getElementById("name");

function update() {
    if (bopIt.health <= 0) {
        bopIt.health = 0
        document.getElementById("kick-button").disabled = true;
        document.getElementById("slap-button").disabled = true;
        document.getElementById("punch-button").disabled = true;
    }
    health.innerHTML = bopIt.health;
    hits.innerHTML = bopIt.hits;
    name.innerHTML = bopIt.name;
    bopItImg.setAttribute('src', bopIt.moodImgs[0])
}

function slap() {
    bopIt.health -= 1;
    bopIt.hits += 1;
    update()
}

function kick() {
    bopIt.health -= 10;
    bopIt.hits += 1;
    update()
}

function punch() {
    bopIt.health -= 5;
    bopIt.hits += 1;
    update()
}

update();

//consider doing a bop it theme - i.e. when its dropped, it takes 20% more health, think about what gives the bop it a shield type thing