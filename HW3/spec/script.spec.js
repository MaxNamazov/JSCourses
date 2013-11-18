describe("HW3 specs", function(){
    describe("task 1 specs", function(){
        var o = {};
        beforeEach(function(){
            o = {a: {b: 'c'}};
        });
        it("should be a function", function(){
            expect(typeof(getObject)).toBe("function");
        });
        it("should return correct answer", function(){
            expect(getObject('a.b', o)).toEqual('c');
            expect(getObject('a', o)).toEqual({b: 'c'});
            expect(getObject('d', o)).toEqual(undefined);
        });

    });
    describe("task 2 specs", function(){
        var a ={};
        beforeEach(function(){
            a = {b: 'c', d: {e: 'f'}};
        });
        it("should be a function", function(){
            expect(typeof(deepCopy)).toBe("function");
        });
        it("should return correct answer", function(){
            var b = deepCopy(a);
            expect(b.d).toEqual({e: 'f'});
            a.d=12;
            expect(b.d).toEqual({e: 'f'});
        });
    });
    describe("task 3 specs", function(){
        var people=[];
        beforeEach(function(){
            people = [
                {id: 1, name: 'Brad', friends: [2,5,6]},
                {id: 2, name: 'John', friends: [1, 3]},
                {id: 3, name: 'Tom', friends: [2, 5]},
                {id: 4, name: 'Fil', friends: null},
                {id: 5, name: 'John', friends: [1, 3]},
                {id: 6, name: 'Jim', friends: [1]}
            ];
        });
        it("should be a function", function(){
            expect(typeof(getFriends)).toBe("function");
        });
        it("should return correct answer", function(){
            expect(getFriends(2)).toEqual([{id: 1, name: 'Brad', friends: [2,5,6]}, {id: 3, name: 'Tom', friends: [2, 5]}]);
//            expect(getFriends(4)).toEqual([]);
//            expect(getFriends(100500)).toEqual(null);
        });

    });
});