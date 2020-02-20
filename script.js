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
        myApp.displayMonster(data);;
    });
    return monsterPromise
}

myApp.displayMonster = (monster) => {
    // const hitPoints = `<li><p> Hit Points: ${monster.hit_points}</p></li>`
    const strength = `<li><p> Strength: ${monster.strength}</p></li>`
    const con = `<li><p> Constitution: ${monster.constitution}</p></li>`
    const dex = `<li><p> Dexterity: ${monster.dexterity}</p></li>`
    const int = `<li><p> Intelligence: ${monster.intelligence}</p></li>`
    const wis = `<li><p> Wisdom: ${monster.wisdom}</p></li>`
    const cha = `<li><p> Charisma: ${monster.charisma}</p></li>`

    $('#select-monster-title').text(monster.name);

    $('#gallery').hide();
    
    $('#monster-stat-box').replaceWith( strength, con, dex, int, wis, cha);
};

myApp.displayEnemy = (monster) => {
    // const hitPoints = `<li><p> Hit Points: ${monster.hit_points}</p></li>`
    const strength = `<li><p> Strength: ${monster.strength}</p></li>`
    const con = `<li><p> Constitution: ${monster.constitution}</p></li>`
    const dex = `<li><p> Dexterity: ${monster.dexterity}</p></li>`
    const int = `<li><p> Intelligence: ${monster.intelligence}</p></li>`
    const wis = `<li><p> Wisdom: ${monster.wisdom}</p></li>`
    const cha = `<li><p> Charisma: ${monster.charisma}</p></li>`

    $('#enemy-monster-title').text(monster.name);

    $('#enemy-stat-box').replaceWith(strength, con, dex, int, wis, cha);
};

myApp.getRandomMonster = () => {
    const listOfRandomOpponents = ['goblin', 'owlbear', 'orc', 'troll', 'sahuagin', 'gelatinous cube'];
    const random = Math.floor(Math.random() * listOfRandomOpponents.length);
    
    if (listOfRandomOpponents[random] === 'goblin') {
        const enemyMonsterPromise = $.ajax({
            url: 'http://proxy.hackeryou.com',
            dataType: 'json',
            method: 'GET',
            data: {
                reqUrl: `http://dnd5eapi.co/api/monsters/goblin`,
            }
        }).then((data) => {
            console.log(data);
            // return data;
            myApp.displayEnemy(data);
            $('#enemy-img').attr('src', './assets/gobbo.png');
            let enemyGoblinHP = 40;
            $('#enemy-hp').append(`<p class="hp">HP: ${enemyGoblinHP}/40</p>`);
            $('body').on('click', '#attack', function () {
                enemyGoblinHP = enemyGoblinHP - 5;
                console.log(enemyGoblinHP);
            });
        });
        return enemyMonsterPromise;
    } else if (listOfRandomOpponents[random] === 'owlbear') {
        const enemyMonsterPromise = $.ajax({
            url: 'http://proxy.hackeryou.com',
            dataType: 'json',
            method: 'GET',
            data: {
                reqUrl: `http://dnd5eapi.co/api/monsters/owlbear`,
            }
        }).then((data) => {
            console.log(data);
            // return data;
            myApp.displayEnemy(data);
            $('#enemy-img').attr('src', './assets/Owlbear2.png');
            let enemyOwlbearHP = 59;
            $('#enemy-hp').append(`<p class="hp">HP: ${enemyOwlbearHP}/59</p>`);
            $('body').on('click', '#attack', function () {
                enemyOwlbearHP = enemyOwlbearHP - 5;
                console.log(enemyOwlbearHP);
            });
        });
        return enemyMonsterPromise;
    } else if (listOfRandomOpponents[random] === 'orc') {
        // const enemyAttackedHP
        // const attackedOrcHP = enemyOrcHP;
        // return attackedOrcHP;
        const enemyMonsterPromise = $.ajax({
            url: 'http://proxy.hackeryou.com',
            dataType: 'json',
            method: 'GET',
            data: {
                reqUrl: `http://dnd5eapi.co/api/monsters/orc`,
            }
        }).then((data) => {
            console.log(data);
            // return data;
            myApp.displayEnemy(data);
            $('#enemy-img').attr('src', './assets/orc.png');
            let enemyOrcHP =  50;
            $('#enemy-hp').append(`<p class="hp">HP: ${enemyOrcHP}/50</p>`); 
            $('body').on('click', '#attack', function(){ 
                enemyOrcHP = enemyOrcHP - 5;
                console.log(enemyOrcHP);
            });
        });
        return enemyMonsterPromise;
    } else if (listOfRandomOpponents[random] === 'troll') {
        const enemyMonsterPromise = $.ajax({
            url: 'http://proxy.hackeryou.com',
            dataType: 'json',
            method: 'GET',
            data: {
                reqUrl: `http://dnd5eapi.co/api/monsters/troll`,
            }
        }).then((data) => {
            console.log(data);
            // return data;
            myApp.displayEnemy(data);
            $('#enemy-img').attr('src', './assets/O-Mad-Troll-Monster-620-Wide-with-margins.png');
            let enemyTrollHP = 84;
            $('#enemy-hp').append(`<p class="hp">HP: ${enemyTrollHP}/84</p>`);
            $('body').on('click', '#attack', function () {
                enemyTrollHP = enemyTrollHP - 5;
                console.log(enemyTrollHP);
            });
        });
        return enemyMonsterPromise;
    } else if (listOfRandomOpponents[random] === 'sahuagin') {
        const enemyMonsterPromise = $.ajax({
            url: 'http://proxy.hackeryou.com',
            dataType: 'json',
            method: 'GET',
            data: {
                reqUrl: `http://dnd5eapi.co/api/monsters/sahuagin`,
            }
        }).then((data) => {
            console.log(data);
            // return data;
            myApp.displayEnemy(data);
            $('#enemy-img').attr('src', './assets/fishman2.png');
            let enemySahuaginHP = 60;
            $('#enemy-hp').append(`<p class="hp">HP: ${enemySahuaginHP}/60</p>`);
            $('body').on('click', '#attack', function () {
                enemySahuaginHP = enemySahuaginHP - 5;
                console.log(enemySahuaginHP);
            });
        });
        return enemyMonsterPromise;
    } else if (listOfRandomOpponents[random] === 'gelatinous cube') {
        const enemyMonsterPromise = $.ajax({
            url: 'http://proxy.hackeryou.com',
            dataType: 'json',
            method: 'GET',
            data: {
                reqUrl: `http://dnd5eapi.co/api/monsters/gelatinous-cube`,
            }
        }).then((data) => {
            console.log(data);
            // return data;
            myApp.displayEnemy(data);
            $('#enemy-img').attr('src', './assets/cube2.png');
            let enemyGelatinousCubeHP = 84;
            $('#enemy-hp').append(`<p class="hp">HP: ${enemyGelatinousCubeHP}/84</p>`);
            $('body').on('click', '#attack', function () {
                enemyGelatinousCubeHP = enemyGelatinousCubeHP - 5;
                console.log(enemyGelatinousCubeHP);
                $('#enemy-hp').replaceWith(`<p class="hp">HP: ${enemyGelatinousCubeHP}/84</p>`);
            });
        });
        return enemyMonsterPromise;
    }
}

myApp.init = () => {
    $('body').on('click', '#owlbear', function() {
        myApp.getOwlbear();
        $('#monster-img').attr('src', './assets/Owlbear2.png');
        let owlBearHP = 59;
        $('#monster-hp').append(`<p class="hp">HP: ${owlBearHP}/59</p>`)
    });
    $('body').on('click', '#goblin', function() {
        myApp.getGoblin();
        $('#monster-img').attr('src', './assets/gobbo.png');
        let goblinHP = 40;
        $('#monster-hp').append(`<p class="hp">HP: ${goblinHP}/40</p>`)
    });
    $('body').on('click', '#orc', function() {
        myApp.getOrc();
        $('#monster-img').attr('src', './assets/orc.png');
        let orcHP = 50;
        $('#monster-hp').append(`<p class="hp">HP: ${orcHP}/50</p>`)
    });

    $('body').on('click', '#sahuagin', function() {
        myApp.getSahuagin();
        $('#monster-img').attr('src', './assets/fishman2.png');
        let sahuaginHP = 60;
        $('#monster-hp').append(`<p class="hp">HP: ${sahuaginHP}/60</p>`)
    });

    $('body').on('click', '#troll', function() {
        myApp.getTroll();
        $('#monster-img').attr('src', './assets/O-Mad-Troll-Monster-620-Wide-with-margins.png');
        let trollHP = 84;
        $('#monster-hp').append(`<p class="hp">HP: ${trollHP}/84</p>`)
    });

    $('body').on('click', '#gelatinous-cube', function() {
        myApp.getGelatinousCube();
        $('#monster-img').attr('src', './assets/cube2.png');
        let cubeHP = 84;
        $('#monster-hp').append(`<p class="hp">HP: ${cubeHP}/84</p>`)
    });

    $('body').on('click', '.monster', function () {
        $('#attack-box').append('<button class="attack-button" id="attack">ATTACK!!!!</button>');
        myApp.getRandomMonster();
    })

    // $('body').on('click', '#attack', function(){
        // const masterEnemyHP = [enemyTrollHP, enemySahuaginHP, enemyOwlbearHP, enemyOrcHP, enemyGelatinousCubeHP, enemyGoblinHP];
        // console.log('Hello')
        // masterenemyHP should be equal to a random number - current HP of random enemy
        // how to gt current random enemy 
        //get the current enemy's HP 
        //return the value
        // attackedOrcHP();

        // When we click on a monster, a enemy image is randomly generated, as well as their corresponding stats, title and HP
        // When we click on the Attack button, we want 5 to be subtracted from the enemy's generated HP
        // Current problem: We want to apply an On Click to the attack button, but don't know how to get it to reach the enemy's HP, because it was generated and lives in a different function
    // })
}



$(function() {
    myApp.init();
});

//make a method, that checks the ID/Class of the random monster. based on that, append HP

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

