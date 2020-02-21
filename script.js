// Credit to the Dungeons and Dragons API: http://www.dnd5eapi.co/api/

const app = {};

// Getting the stats for each monster from the API

app.getOwlbear = () => {
    const monsterPromise = $.ajax({
        url: 'http://proxy.hackeryou.com',
        dataType: 'json',
        method: 'GET',
        data: {
            reqUrl: `http://dnd5eapi.co/api/monsters/owlbear`,
        }
    }).then((data) => {
        app.displayMonster(data);
    });
    return monsterPromise;
}

app.getGoblin = () => {
    const monsterPromise = $.ajax({
        url: 'http://proxy.hackeryou.com',
        dataType: 'json',
        method: 'GET',
        data: {
            reqUrl: `http://dnd5eapi.co/api/monsters/goblin`,
        }
    }).then((data) => {
        app.displayMonster(data);
    });
    return monsterPromise;
}

app.getOrc = () => {
    const monsterPromise = $.ajax({
        url: 'http://proxy.hackeryou.com',
        dataType: 'json',
        method: 'GET',
        data: {
            reqUrl: `http://dnd5eapi.co/api/monsters/orc`,
        }
    }).then((data) => {
        app.displayMonster(data);
    });
    return monsterPromise;
}

app.getSahuagin = () => {
    const monsterPromise = $.ajax({
        url: 'http://proxy.hackeryou.com',
        dataType: 'json',
        method: 'GET',
        data: {
            reqUrl: `http://dnd5eapi.co/api/monsters/sahuagin`,
        }
    }).then((data) => {
        app.displayMonster(data);
    });
    return monsterPromise;
}

app.getTroll = () => {
    const monsterPromise = $.ajax({
        url: 'http://proxy.hackeryou.com',
        dataType: 'json',
        method: 'GET',
        data: {
            reqUrl: `http://dnd5eapi.co/api/monsters/troll`,
        }
    }).then((data) => {
        app.displayMonster(data);
    });
    return monsterPromise;
}

app.getGelatinousCube = () => {
    const monsterPromise = $.ajax({
        url: 'http://proxy.hackeryou.com',
        dataType: 'json',
        method: 'GET',
        data: {
            reqUrl: `http://dnd5eapi.co/api/monsters/gelatinous-cube`,
        }
    }).then((data) => {
        app.displayMonster(data);;
    });
    return monsterPromise;
}


// Updating the HTML to display the monster stats and title on the page

app.displayMonster = (monster) => {
    const strength = `<li><p> Strength: ${monster.strength}</p></li>`;
    const con = `<li><p> Constitution: ${monster.constitution}</p></li>`;
    const dex = `<li><p> Dexterity: ${monster.dexterity}</p></li>`;
    const int = `<li><p> Intelligence: ${monster.intelligence}</p></li>`;
    const wis = `<li><p> Wisdom: ${monster.wisdom}</p></li>`;
    const cha = `<li><p> Charisma: ${monster.charisma}</p></li>`;

    $('#select-monster-title').text(monster.name);

    $('#gallery').hide();
    
    $('#monster-stat-box').replaceWith( strength, con, dex, int, wis, cha);
};

app.displayEnemy = (monster) => {
    const strength = `<li><p> Strength: ${monster.strength}</p></li>`;
    const con = `<li><p> Constitution: ${monster.constitution}</p></li>`;
    const dex = `<li><p> Dexterity: ${monster.dexterity}</p></li>`;
    const int = `<li><p> Intelligence: ${monster.intelligence}</p></li>`;
    const wis = `<li><p> Wisdom: ${monster.wisdom}</p></li>`;
    const cha = `<li><p> Charisma: ${monster.charisma}</p></li>`;

    $('#enemy-monster-title').text(monster.name);

    $('#enemy-stat-box').replaceWith(strength, con, dex, int, wis, cha);
};


// Generating a random enemy monster

app.getRandomMonster = () => {
    const listOfRandomOpponents = ['goblin', 'owlbear', 'orc', 'troll', 'sahuagin', 'gelatinous cube'];
    const random = Math.floor(Math.random() * listOfRandomOpponents.length);
    
    if (listOfRandomOpponents[random] === 'goblin') {
        const enemyMonsterPromise = $.ajax({
            url: 'http://proxy.hackeryou.com',
            dataType: 'json',
            method: 'GET',
            data: {
                reqUrl: `https://dnd5eapi.co/api/monsters/goblin`,
            }
        }).then((data) => {
            app.displayEnemy(data);
            $('#enemy-img').attr('src', './assets/gobbo.png').attr('alt', 'Goblin');
            enemyHP = 40;
            $('#enemy-hp').append(`<p class="hp">HP: ${enemyHP}/40</p>`);
            $('body').on('click', '#attack', function() {
                enemyHP = enemyHP - 5;
                $('#enemy-hp').replaceWith(`<p class="hp" id="enemy-hp">HP: ${enemyHP}/40`);
                app.checkWinner();
            });
        });
        return enemyMonsterPromise;
    } else if (listOfRandomOpponents[random] === 'owlbear') {
        const enemyMonsterPromise = $.ajax({
            url: 'http://proxy.hackeryou.com',
            dataType: 'json',
            method: 'GET',
            data: {
                reqUrl: `https://dnd5eapi.co/api/monsters/owlbear`,
            }
        }).then((data) => {
            app.displayEnemy(data);
            $('#enemy-img').attr('src', './assets/Owlbear2.png').attr('alt', 'Owlbear');
            enemyHP = 59;
            $('#enemy-hp').append(`<p class="hp">HP: ${enemyHP}/59</p>`);
            $('body').on('click', '#attack', function() {
                enemyHP = enemyHP - 5;
                $('#enemy-hp').replaceWith(`<p class="hp" id="enemy-hp">HP: ${enemyHP}/59`);
                app.checkWinner();
            });
        });
        return enemyMonsterPromise;
    } else if (listOfRandomOpponents[random] === 'orc') {
        const enemyMonsterPromise = $.ajax({
            url: 'http://proxy.hackeryou.com',
            dataType: 'json',
            method: 'GET',
            data: {
                reqUrl: `https://dnd5eapi.co/api/monsters/orc`,
            }
        }).then((data) => {
            app.displayEnemy(data);
            $('#enemy-img').attr('src', './assets/orc.png').attr('alt', 'Orc');
            enemyHP =  50;
            $('#enemy-hp').append(`<p class="hp">HP: ${enemyHP}/50</p>`); 
            $('body').on('click', '#attack', function() { 
                enemyHP = enemyHP - 5;
                $('#enemy-hp').replaceWith(`<p class="hp" id="enemy-hp">HP: ${enemyHP}/50`);
                app.checkWinner();
            });
        });
        return enemyMonsterPromise;
    } else if (listOfRandomOpponents[random] === 'troll') {
        const enemyMonsterPromise = $.ajax({
            url: 'http://proxy.hackeryou.com',
            dataType: 'json',
            method: 'GET',
            data: {
                reqUrl: `https://dnd5eapi.co/api/monsters/troll`,
            }
        }).then((data) => {
            app.displayEnemy(data);
            $('#enemy-img').attr('src', './assets/O-Mad-Troll-Monster-620-Wide-with-margins.png').attr('alt', 'Troll');
            enemyHP = 84;
            $('#enemy-hp').append(`<p class="hp">HP: ${enemyHP}/84</p>`);
            $('body').on('click', '#attack', function() {
                enemyHP = enemyHP - 5;
                $('#enemy-hp').replaceWith(`<p class="hp" id="enemy-hp">HP: ${enemyHP}/84`);
                app.checkWinner();
            });
        });
        return enemyMonsterPromise;
    } else if (listOfRandomOpponents[random] === 'sahuagin') {
        const enemyMonsterPromise = $.ajax({
            url: 'http://proxy.hackeryou.com',
            dataType: 'json',
            method: 'GET',
            data: {
                reqUrl: `https://dnd5eapi.co/api/monsters/sahuagin`,
            }
        }).then((data) => {
            app.displayEnemy(data);
            $('#enemy-img').attr('src', './assets/fishman2.png').attr('alt', 'Sahuagin');
            enemyHP = 60;
            $('#enemy-hp').append(`<p class="hp">HP: ${enemyHP}/60</p>`);
            $('body').on('click', '#attack', function() {
                enemyHP = enemyHP - 5;
                $('#enemy-hp').replaceWith(`<p class="hp" id="enemy-hp">HP: ${enemyHP}/60`);
                app.checkWinner();
            });
        });
        return enemyMonsterPromise;
    } else if (listOfRandomOpponents[random] === 'gelatinous cube') {
        const enemyMonsterPromise = $.ajax({
            url: 'http://proxy.hackeryou.com',
            dataType: 'json',
            method: 'GET',
            data: {
                reqUrl: `https://dnd5eapi.co/api/monsters/gelatinous-cube`,
            }
        }).then((data) => {
            app.displayEnemy(data);
            $('#enemy-img').attr('src', './assets/cube2.png').attr('alt', 'Gelatinous Cube');
            enemyHP = 84;
            $('#enemy-hp').append(`<p class="hp">HP: ${enemyHP}/84</p>`);
            $('body').on('click', '#attack', function() {
                enemyHP = enemyHP - 5;
                $('#enemy-hp').replaceWith(`<p class="hp" id="enemy-hp">HP: ${enemyHP}/84`);
                app.checkWinner();
            });
        });
        return enemyMonsterPromise;
    }
}


// Decreasing monster HP during battle

let enemyHP = 0;
let userHP = 0;

// Init 

app.init = () => {
    $('body').one('click', '#owlbear', function() {
        app.getOwlbear();
        $('#monster-img').attr('src', './assets/Owlbear2.png').attr('alt', 'Owlbear');
        userHP = 59;
        $('#monster-hp').append(`<p class="hp">HP: ${userHP}/59</p>`);
        $('body').on('click', '#attack', function() {
            userHP = userHP - 3;
            $('#monster-hp').replaceWith(`<p class="hp" id="monster-hp">HP: ${userHP}/59</p>`);
        });
    });
    $('body').on('click', '#goblin', function() {
        app.getGoblin();
        $('#monster-img').attr('src', './assets/gobbo.png').attr('alt', 'Goblin');
        userHP = 40;
        $('#monster-hp').append(`<p class="hp">HP: ${userHP}/40</p>`);
        $('body').on('click', '#attack', function() {
            userHP = userHP - 3;
            $('#monster-hp').replaceWith(`<p class="hp" id="monster-hp">HP: ${userHP}/40</p>`);
        });
    });
    $('body').on('click', '#orc', function() {
        app.getOrc();
        $('#monster-img').attr('src', './assets/orc.png').attr('alt', 'Orc');
        userHP = 50;
        $('#monster-hp').append(`<p class="hp">HP: ${userHP}/50</p>`);
        $('body').on('click', '#attack', function() {
            userHP = userHP - 3;
            $('#monster-hp').replaceWith(`<p class="hp" id="monster-hp">HP: ${userHP}/50</p>`);
        });
    });

    $('body').on('click', '#sahuagin', function() {
        app.getSahuagin();
        $('#monster-img').attr('src', './assets/fishman2.png').attr('alt', 'Sahuagin');
        userHP = 60;
        $('#monster-hp').append(`<p class="hp">HP: ${userHP}/60</p>`);
        $('body').on('click', '#attack', function() {
            userHP = userHP - 3;
            $('#monster-hp').replaceWith(`<p class="hp" id="monster-hp">HP: ${userHP}/60</p>`);
        });
    });

    $('body').on('click', '#troll', function() {
        app.getTroll();
        $('#monster-img').attr('src', './assets/O-Mad-Troll-Monster-620-Wide-with-margins.png').attr('alt', 'Troll');
        userHP = 84;
        $('#monster-hp').append(`<p class="hp">HP: ${userHP}/84</p>`);
        $('body').on('click', '#attack', function() {
            userHP = userHP - 3;
            $('#monster-hp').replaceWith(`<p class="hp" id="monster-hp">HP: ${userHP}/84</p>`);
        });
    });

    $('body').on('click', '#gelatinous-cube', function() {
        app.getGelatinousCube();
        $('#monster-img').attr('src', './assets/cube2.png').attr('alt', 'Gelatinous Cube');
        userHP = 84;
        $('#monster-hp').append(`<p class="hp">HP: ${userHP}/84</p>`);
        $('body').on('click', '#attack', function() {
            userHP = userHP - 3;
            $('#monster-hp').replaceWith(`<p class="hp" id="monster-hp">HP: ${userHP}/84</p>`);
        });
    });


    // Transition from gallery to battle page 

    $('body').on('click', '.monster', function() {
        $('#attack-box').append('<button class="attack-button" id="attack">ATTACK!!!!</button>');
        app.getRandomMonster();
        $('.monster').attr("disabled", true);
        $('#gallery').hide();
    })
}


// Checking for the winner of the battle

app.checkWinner = function() {
    if (userHP < 1 && enemyHP < 1) {
        $('.body-container').replaceWith(`<section class='end-page'><h1>you tied</h1><p>Due to unfortunate circumstances, our two brave competitors have met with a grisly end. A sorry sight, our poor groundskeepers have a large mess to clean up.</p><a href=#><button id="try-again">try again</button></a></section>`);
    } else if (userHP < 1) {
        $('.body-container').replaceWith(`<section class='end-page'><h1>you lose</h1><p>A sad, sorry fate. At least your body will keep the Vultures happy!</p><a href=#><button id="try-again">try again</button></a></section>`);
    } else if (enemyHP < 1) {
        $('.body-container').replaceWith(`<section class='end-page'><h1>you win</h1><p>You live to see another day, but should you wish to tempt fate again, you know where to go!</p><a href=#><button id="try-again">try again</button></a></section>`);
    }


    // Try again button brings you back to selection screen

    $('#try-again').on('click', function(){
        location.reload();
    });
};


// Document ready 

$(function() {
    app.init();
});




