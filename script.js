const myApp={}

// myApp.baseUrl=`http://www.dnd5eapi.co/api/`;

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