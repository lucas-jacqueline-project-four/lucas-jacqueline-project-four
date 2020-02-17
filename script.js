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

    
    //appending that HTML

};

myApp.init = () => {
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