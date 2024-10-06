/**
 * const, let 等の変数宣言
 */

// var var1 = 'var変数';

// console.log(var1);

// // var変数は上書き可能

// var1 = 'var変数を上書き';

// console.log(var1);

// // var変数を再宣言可能

// var var1 = 'var変数を再宣言';

// console.log(var1);

// let var2 = 'let変数';
// console.log(var2);

// // var変数は上書き可能

// var2 = 'var変数を上書き';
// console.log(var2);

// // var変数を再宣言不可能

// var var2 = 'var変数を再宣言';
// console.log(var2);

// const var3 = 'const変数';
// console.log(var3);

// var変数は上書き不可能

// const var3 = 'const変数を上書き';
// console.log(var3);

// var変数を再宣言不可能

// const var3 = 'const変数を再宣言';
// console.log(var3);

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: 'yuma',
//   age: 19,
// };

// val4.name = 'hello';
// val4.address = 'kyoto';

// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];

// val5[0] = 'rabbit';
// val5.push('cow');

// console.log(val5);

/**
 * テンプレート文字列''
 */

// const name = 'yuma';

// const age = 19;

//「私の名前は、yumaです。年齢は、19歳です。」

//従来の方法

// const message1 = '私の名前は、' + name + 'です。年齢は、' + age + 'です。';

// console.log(message1);

// テンプレート文字列を用いた方法
// const message2 = `私の名前は、${name}です。年齢は、${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

//従来の関数
// function func1(str) {
//   return str;
// }

// const func1 = function (str) {
//   return str;
// };

// console.log(func1('func1です！'));

//アロー関数
// const func2 = (str) => {
//   return str;
// };

// console.log(func2('func2です。'));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(3, 5));

/**
 * 分割代入
 */

// const myProfile = {
//   name: 'yuma',
//   age: 19,
// };

// const message = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;

// console.log(message);

//分割代入

// const { name, age } = myProfile;

// const message1 = `名前は${name}です。年齢は${age}歳です。`;

// const myProfile = ['yuma', 19];

// const [name, age] = myProfile;

// const message1 = `名前は${name}です。年齢は${age}歳です。`;

// console.log(message1);

/**
 * デフォルト値(引数、分割代入)
 */

// const sayhello = (name = 'ゲスト') => {
//   console.log(`Hello ${name}`);
// };

// sayhello('ゴリラ');

// const myProfile = {
//   age: 31,
// };

// const { age, name = 'ゲスト' } = myProfile;

// console.log(age);
// console.log(name);
