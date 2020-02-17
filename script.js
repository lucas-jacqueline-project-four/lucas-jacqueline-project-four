const myApp={};

// myApp.baseUrl=`http://www.dnd5eapi.co/api/`;
myApp.displayMonster = (monster) => {
    $('.name-1').html(monster.name);
    $('.monster').html('');
    const hitPoints = `<li><p> Hit Points: ${monster.hit_points}</p></li>`
    const strength = `<li><p> Strength: ${monster.strength}</p></li>`
    const con = `<li><p> Constitution: ${monster.constitution}</p></li>`
    const dex = `<li><p> Dexterity: ${monster.dexterity}</p></li>`
    const int = `<li><p> Intelligence: ${monster.intelligence}</p></li>`
    const wis = `<li><p> Wisdom: ${monster.wisdom}</p></li>`
    const cha = `<li><p> Charisma: ${monster.charisma}</p></li>`
    $('.monster').append(hitPoints, type, size, strength, con, int, wis, cha);

    //appending that HTML
};


myApp.getMonster = () => {
    $.ajax({
        url:'http://www.dnd5eapi.co/api/monsters',
        method:'GET',
        dataType:'json',
        data:{
            format:'json',
            q:'goblin'
        }
        }).then(function(result){
            console.log('any monsters here?',result)
    })
}

myApp.init = () => {
    myApp.getMonster();
}

$(function() {
    myApp.init();
});