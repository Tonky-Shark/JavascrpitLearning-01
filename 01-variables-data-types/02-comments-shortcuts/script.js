//Console the log experminet

//This is a single line of code 

console.log(100);
console.log('Hello World');
console.log(20, 'Hello', true);

//variables logs
const x = 100;
console.log(x);

//alert for errors

console.error('Alert');
console.warn('Warning');

//objects
console.table({ name: 'Brad', email: 'email@email.com' });

console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

const styles = 'padding:10px; background-color: white; color: green;';

console.log('%cHello World', styles);
