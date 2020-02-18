const myApp={};

// myApp.baseUrl=`http://www.dnd5eapi.co/api/`;

myApp.getOwlbear = () => {
    const monsterPromise = $.ajax({
        url: 'http://proxy.hackeryou.com',
        dataType: 'json',
        method: 'GET',
        data: {
            reqUrl: `http://dnd5eapi.co/api/monsters/owlbear`,
        }
    }).then((data) => {
        console.log(data);
        // return data;
        myApp.displayMonster(data);
    });
    return monsterPromise
}

myApp.getGoblin = () => {
    const monsterPromise = $.ajax({
        url: 'http://proxy.hackeryou.com',
        dataType: 'json',
        method: 'GET',
        data: {
            reqUrl: `http://dnd5eapi.co/api/monsters/goblin`,
        }
    }).then((data) => {
        console.log(data);
        // return data;
        myApp.displayMonster(data);
    });
    return monsterPromise
}

myApp.getOrc = () => {
    const monsterPromise = $.ajax({
        url: 'http://proxy.hackeryou.com',
        dataType: 'json',
        method: 'GET',
        data: {
            reqUrl: `http://dnd5eapi.co/api/monsters/orc`,
        }
    }).then((data) => {
        console.log(data);
        // return data;
        myApp.displayMonster(data);
    });
    return monsterPromise
}

myApp.getSahuagin = () => {
    const monsterPromise = $.ajax({
        url: 'http://proxy.hackeryou.com',
        dataType: 'json',
        method: 'GET',
        data: {
            reqUrl: `http://dnd5eapi.co/api/monsters/sahuagin`,
        }
    }).then((data) => {
        console.log(data);
        // return data;
        myApp.displayMonster(data);
    });
    return monsterPromise
}

myApp.getTroll = () => {
    const monsterPromise = $.ajax({
        url: 'http://proxy.hackeryou.com',
        dataType: 'json',
        method: 'GET',
        data: {
            reqUrl: `http://dnd5eapi.co/api/monsters/troll`,
        }
    }).then((data) => {
        console.log(data);
        // return data;
        myApp.displayMonster(data);
    });
    return monsterPromise
}

myApp.getGelatinousCube = () => {
    const monsterPromise = $.ajax({
        url: 'http://proxy.hackeryou.com',
        dataType: 'json',
        method: 'GET',
        data: {
            reqUrl: `http://dnd5eapi.co/api/monsters/gelatinous-cube`,
        }
    }).then((data) => {
        console.log(data);
        // return data;
        myApp.displayMonster(data);
    });
    return monsterPromise
}

myApp.displayMonster = (monster) => {
    // $('.name1').html(monster.name);
    const hitPoints = `<li><p> Hit Points: ${monster.hit_points}</p></li>`
    const strength = `<li><p> Strength: ${monster.strength}</p></li>`
    const con = `<li><p> Constitution: ${monster.constitution}</p></li>`
    const dex = `<li><p> Dexterity: ${monster.dexterity}</p></li>`
    const int = `<li><p> Intelligence: ${monster.intelligence}</p></li>`
    const wis = `<li><p> Wisdom: ${monster.wisdom}</p></li>`
    const cha = `<li><p> Charisma: ${monster.charisma}</p></li>`

    $('#select-monster-title').text(monster.name);

    $('#gallery').replaceWith(hitPoints, strength, con, dex, int, wis, cha);

    // $('.attack-box').append(<button>'Attack'</button>)
    //appending that HTML

};

myApp.init = () => {
    $('body').on('click','.monster', function(){
        $('.attack-box').append('<button>ATTACK!!!!</button>')
    })

    $('body').on('click', '#owlbear', function() {
        console.log("Hellooooo?");
        myApp.getOwlbear();
        $('#monster-img').attr('src', './assets/Owlbear2.png');
        
    });
    $('body').on('click', '#goblin', function() {
        myApp.getGoblin();
        $('#monster-img').attr('src', './assets/gobbo.png');
    });
    $('body').on('click', '#orc', function() {
        myApp.getOrc();
        $('#monster-img').attr('src', './assets/orc.png');
    });

    $('body').on('click', '#sahuagin', function() {
        myApp.getSahuagin();
        $('#monster-img').attr('src', './assets/fishman2.png');
    });

    $('body').on('click', '#troll', function() {
        myApp.getTroll();
        $('#monster-img').attr('src', './assets/O-Mad-Troll-Monster-620-Wide-with-margins.png');
    });

    $('body').on('click', '#gelatinous-cube', function() {
        myApp.getGelatinousCube();
        $('#monster-img').attr('src', './assets/cube2.png');
    });
}

$(function() {
    myApp.init();
});

// On click of selecting monster, randomizer selects random opponent as well 

// image and stats display for both monster and opponent, but opponent does not have an attack button 

// User clicks Attack button

// Strengths
// Owlbear: 20 
// Goblin: 8
// Orc: 16
// Fishman: 13
// Troll: 18
// Cube: 14

// HP
// Owlbear: 59
// Goblin: 7 to balance , maybe set this 40
// Orc: 15 possibly set to 50
// Fishman: 22 possibly set to 60
// Troll: 84
// Cube: 84

//instead of the stats ul, the HP can be an h3 placed beside the stats list. 
//attack button will be placed at the center of the screen to attract user to click.

// If Strength > 15, then take off 10HP from opponent
// If Strength < 15, then take off 5HP from opponent 

// If Opponent Strength > 15, then take off 10HP from User
// If Opponent Strength < 15, then take off 5HP from User

// If (UserHP === 0) -> page says "You Lose"
// If (OpponentHP === 0) -> page says "You Win"

//MVP for now, have the attacks of user and opponent happen at the same time

//have a to-hit modifier. Attack === 0-1 = miss. attack === 2-9 = hit.

