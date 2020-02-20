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
    // const listOfRandomOpponents = [ 'sahuagin', 'gelatinous cube'];
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
            enemyHP = 40;
            $('#enemy-hp').append(`<p class="hp">HP: ${enemyHP}/40</p>`);
            $('body').on('click', '#attack', function () {
                enemyHP = enemyHP - 5;
                $('#enemy-hp').replaceWith(`<p class="hp" id="enemy-hp">HP: ${enemyHP}/40`);
                console.log(enemyHP);
                console.log($('#enemy-hp'));
                myApp.checkWinner();
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
            enemyHP = 59;
            $('#enemy-hp').append(`<p class="hp">HP: ${enemyHP}/59</p>`);
            $('body').on('click', '#attack', function () {
                enemyHP = enemyHP - 5;
                $('#enemy-hp').replaceWith(`<p class="hp" id="enemy-hp">HP: ${enemyHP}/59`);
                console.log(enemyHP);
                console.log($('#enemy-hp'));
                myApp.checkWinner();
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
            enemyHP =  50;
            $('#enemy-hp').append(`<p class="hp">HP: ${enemyHP}/50</p>`); 
            $('body').on('click', '#attack', function(){ 
                enemyHP = enemyHP - 5;
                $('#enemy-hp').replaceWith(`<p class="hp" id="enemy-hp">HP: ${enemyHP}/50`);
                console.log(enemyHP);
                console.log($('#enemy-hp'));
                myApp.checkWinner();
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
            enemyHP = 84;
            $('#enemy-hp').append(`<p class="hp">HP: ${enemyHP}/84</p>`);
            $('body').on('click', '#attack', function () {
                enemyHP = enemyHP - 5;
                $('#enemy-hp').replaceWith(`<p class="hp" id="enemy-hp">HP: ${enemyHP}/84`);
                console.log(enemyHP);
                console.log($('#enemy-hp'));
                myApp.checkWinner();
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
            enemyHP = 60;
            $('#enemy-hp').append(`<p class="hp">HP: ${enemyHP}/60</p>`);
            $('body').on('click', '#attack', function () {
                enemyHP = enemyHP - 5;
                $('#enemy-hp').replaceWith(`<p class="hp" id="enemy-hp">HP: ${enemyHP}/60`);
                console.log(enemyHP);
                console.log($('#enemy-hp'));
                myApp.checkWinner();
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
            enemyHP = 84;
            $('#enemy-hp').append(`<p class="hp">HP: ${enemyHP}/84</p>`);
            $('body').on('click', '#attack', function () {
                enemyHP = enemyHP - 5;
                $('#enemy-hp').replaceWith(`<p class="hp" id="enemy-hp">HP: ${enemyHP}/84`);
                console.log(enemyHP);
                console.log($('#enemy-hp'));
                myApp.checkWinner();
            });
        });
        return enemyMonsterPromise;
    }
}

let enemyHP = 0;
let userHP = 0;

myApp.init = () => {
   
    $('body').on('click', '#owlbear', function() {
        myApp.getOwlbear();
        $('#monster-img').attr('src', './assets/Owlbear2.png');
        userHP = 59;
        $('#monster-hp').append(`<p class="hp">HP: ${userHP}/59</p>`);
        $('body').on('click', '#attack', function () {
            userHP = userHP - 3;
            $('#monster-hp').replaceWith(`<p class="hp" id="monster-hp">HP: ${userHP}/59</p>`);
        });
    });
    $('body').on('click', '#goblin', function() {
        myApp.getGoblin();
        $('#monster-img').attr('src', './assets/gobbo.png');
        userHP = 40;
        $('#monster-hp').append(`<p class="hp">HP: ${userHP}/40</p>`)
        $('body').on('click', '#attack', function () {
            userHP = userHP - 3;
            $('#monster-hp').replaceWith(`<p class="hp" id="monster-hp">HP: ${userHP}/40</p>`)
        });
    });
    $('body').on('click', '#orc', function() {
        myApp.getOrc();
        $('#monster-img').attr('src', './assets/orc.png');
        userHP = 50;
        $('#monster-hp').append(`<p class="hp">HP: ${userHP}/50</p>`);
        $('body').on('click', '#attack', function () {
            userHP = userHP - 3;
            $('#monster-hp').replaceWith(`<p class="hp" id="monster-hp">HP: ${userHP}/50</p>`);
        });
    });

    $('body').on('click', '#sahuagin', function() {
        myApp.getSahuagin();
        $('#monster-img').attr('src', './assets/fishman2.png');
        userHP = 60;
        $('#monster-hp').append(`<p class="hp">HP: ${userHP}/60</p>`)
        $('body').on('click', '#attack', function () {
            userHP = userHP - 3;
            $('#monster-hp').replaceWith(`<p class="hp" id="monster-hp">HP: ${userHP}/60</p>`);
        });
    });

    $('body').on('click', '#troll', function() {
        myApp.getTroll();
        $('#monster-img').attr('src', './assets/O-Mad-Troll-Monster-620-Wide-with-margins.png');
        userHP = 84;
        $('#monster-hp').append(`<p class="hp">HP: ${userHP}/84</p>`);
        $('body').on('click', '#attack', function () {
            userHP = userHP - 3;
            $('#monster-hp').replaceWith(`<p class="hp" id="monster-hp">HP: ${userHP}/84</p>`);
        });
    });

    $('body').on('click', '#gelatinous-cube', function() {
        myApp.getGelatinousCube();
        $('#monster-img').attr('src', './assets/cube2.png');
        userHP = 84;
        $('#monster-hp').append(`<p class="hp">HP: ${userHP}/84</p>`);
        $('body').on('click', '#attack', function () {
            userHP = userHP - 3;
            $('#monster-hp').replaceWith(`<p class="hp" id="monster-hp">HP: ${userHP}/84</p>`);
        });
        
    });

    $('body').on('click', '.monster', function () {
        $('#attack-box').append('<button class="attack-button" id="attack">ATTACK!!!!</button>');
        myApp.getRandomMonster();
    })


 


    // $('body').on('click', '#attack', function(){
    //     userHP = userHP - 3;
        
        console.log(userHP)
    // })

}

myApp.checkWinner=function(){
    if (userHP < 1 && enemyHP < 1) {
        $('.body-container').replaceWith(`<section class='end-page'><h1>you tied</h1><p>Due to unfortunate circumstances, our two brave competitors have met with a grisly end. A sorry sight, our poor groundskeepers have a large mess to clean up.</p><a href=#><button id="try-again">try again</button></a></section>`);
    } else if (userHP < 1) {
        $('.body-container').replaceWith(`<section class='end-page'><h1>you lose</h1><p>A sad, sorry fate. At least your body will keep the Vultures happy!</p><a href=#><button id="try-again">try again</button></a></section>`);
    } else if (enemyHP < 1) {
        $('.body-container').replaceWith(`<section class='end-page'><h1>you win</h1><p>You live to see another day, but should you wish to tempt fate again, you know where to go!</p><a href=#><button id="try-again">try again</button></a></section>`);
    }

    $('#try-again').on('click', function(){
        location.reload();
    });
};

$(function() {
    myApp.init();
});
// If (UserHP === 0) -> page says "You Lose"
// If (OpponentHP === 0) -> page says "You Win"

//STRETCH GOALS
// If Strength > 15, then take off 10HP from opponent
// If Strength < 15, then take off 5HP from opponent 

// If Opponent Strength > 15, then take off 10HP from User
// If Opponent Strength < 15, then take off 5HP from User

//have a to-hit modifier. Attack === 0-1 = miss. attack === 2-9 = hit.




