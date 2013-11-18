Реализация src/script.js
Спеки spec/script.spec.js
Запуск тестов SpecRunner.html

Задача №1
Напишите реализацию функции getObject(path, obj), которая вернет значение аттрибута объекта obj по заданному пути:
 
var o = {a: {b: ‘c’}};
      getObject(‘a.b’, o) // ‘c’
      getObject(‘a’, o) // {b: ‘c’}
      getObject(‘d’, o) // undefined
 
Задача №2.
Реализация функции deepCopy - для копирования объекта с учетом вложенных объектов:
var a = {b: ‘c’, d: {e: ‘f’}},
    b = deepCopy(a);
a.d = 12;
b.d // {e: ‘f’}
 
Задача №3.
Напишите функцию getFriends, которая бы возвращала массив друзей юзера по передаваемому id.
Коллекция, с которой будет работать функция:
var people = [
	{id: 1, name: 'Brad', friends: [2,5,6]},
	{id: 2, name: 'John', friends: [1, 3]},
	{id: 3, name: 'Tom', friends: [2, 5]},
	{id: 4, name: 'Fil', friends: null},
	{id: 5, name: 'John', friends: [1, 3]},
	{id: 6, name: 'Jim', friends: [1]}
];
 
var getFriends = function(userId) {
	// Put you code here
};
 
Example:
getFriends(2) // [{id: 1, name: 'Brad', friends: [2,5,6]}, {id: 3, name: 'Tom', friends: [2, 5]}]
getFriends(4) // []
getFriends(100500) // null
