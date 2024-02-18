let x;

const todo = {};

todo.id = 1;
todo.name = 'Buy Milk'
todo.completed = false;

x = todo;

const persin = {
    addres: {
        coords: {
            lat: 45.343,
            lng: -71.3232,

        },
    },
};

x = persin.addres.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };
const obj4 = Object.assign({}, obj1, obj2);

const todos = [
    { id: 1, name: 'Buy Milk' },
    { id: 2, name: 'Stuff' },
    { id: 3, name: 'Hello World' },
]

x = todos[0].name;
x = Object.keys(todo);

x = Object.keys(todo).length;

console.log(x);