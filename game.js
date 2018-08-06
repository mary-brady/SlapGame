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
        "assets/blam.gif"
    ],
    items: []
}
let bonusItems = {
    boop: {
        name: 'boop',
        modifier: -2,
        description: 'Softly Booped!',
    },
    miss: {
        name: 'missed',
        modifier: -5,
        description: 'Missed it!'
    }
    // bonus: {
    //     name: 'bonus',
    //     modifier: 0,
    //     description: 'extra health'
    // }
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
        document.getElementById("boop-button").disabled = true;
        document.getElementById("miss-button").disabled = true;
    }
    else if (bopIt.health >= 0) {
        document.getElementById("kick-button").disabled = false;
        document.getElementById("slap-button").disabled = false;
        document.getElementById("punch-button").disabled = false;
        document.getElementById("boop-button").disabled = false;
        document.getElementById("miss-button").disabled = false;
    }
    health.innerHTML = bopIt.health;
    hits.innerHTML = bopIt.hits;
    name.innerHTML = bopIt.name;
    bopItImg.setAttribute('src', bopIt.moodImgs[0])
}

function bop() {
    bopIt.health -= 3 + addMods();
    bopIt.hits += 1;
    update()
}

function twist() {
    bopIt.health -= 10 + addMods();
    bopIt.hits += 1;
    update()
}

function pull() {
    bopIt.health -= 5 + addMods();
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
    bopIt.health += 10
    update()
    // bopIt.items.push(bonusItems.bonus);
}

function addMods() {
    let notDamage = 0
    for (let i = 0; i < bopIt.items.length; i++) {
        let elem = bopIt.items[i];
        notDamage += elem.modifier;
    }
    bopIt.items = []
    return notDamage
}

update();

