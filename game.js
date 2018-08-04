let bopIt = {
    name: 'Bop It!',
    health: 100,
    hits: 0,
    moods: [
        'Boppity',
        'Bopped',
    ],
    moodImgs: [
        "assets/bopit.gif",
    ],
    items: []
}
var bonusItems = {
    boop: {
        name: 'boop',
        modifier: 2,
        description: 'Softly Booped!',
    },
    miss: {
        name: 'missed',
        modifier: 5,
        description: 'Missed it!'
    },
    bonus: {
        name: 'bonus',
        modifier: 8,
        description: 'extra health'
    }
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

function giveBoop() {
    bopIt.items.push(bonusItems.boop)
}
function giveMiss() {
    bopIt.items.push(bonusItems.miss);
}
function giveBonus() {
    bopIt.items.push(bonusItems.bonus);
}

update();
