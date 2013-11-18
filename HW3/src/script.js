/**
 * Created by mnama_000 on 18.11.13.
 */
function getObject(path, obj){
    var
        result = obj,
        pathArray = path.split('.');
    pathArray.forEach(function(elem){
        result=result[elem];
    });
    return result;
}


function deepCopy(obj){
    if (typeof(obj) != "object" || obj == null)
        return obj;
    var result ={};
    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            result[key]=deepCopy(obj[key]);
        }
    }
    return result;
}
 var people = [
     {id: 1, name: 'Brad', friends: [2,5,6]},
     {id: 2, name: 'John', friends: [1, 3]},
     {id: 3, name: 'Tom', friends: [2, 5]},
     {id: 4, name: 'Fil', friends: null},
     {id: 5, name: 'John', friends: [1, 3]},
     {id: 6, name: 'Jim', friends: [1]}
     ];

function getFriends(userId){
    var result = null;

    people.forEach(function(elem){
        if(elem.id == userId){
            if(elem.friends){
                result = [];
                elem.friends.forEach(function(friendId){
                    result.push( people.filter(function(peopleItem){
                                if(peopleItem.id == friendId){
                                    console.log(friendId);
                                    return true;

                                }else{
                                    return false;
                                }
                            })[0]);
                })
            }else{
                result = [];
            }
        }
    });
    return result;
}
