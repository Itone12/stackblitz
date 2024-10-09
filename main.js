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

/**
 * オブジェクトの省略記法
 */

// const name = 'yuma';
// const age = 19;

// const myProfile = { name, age };

// console.log(myProfile);

/**
 * スプレッド構文...
 */

//配列の展開
// const arr = [1, 2];
// console.log(arr);
// console.log(...arr);

// const sumFunc = (num1, num2) => {
//   console.log(num1 + num2);
// };

// sumFunc(arr[0], arr[1]);
// sumFunc(...arr);
//この時、arrの配列番号を指定せずに引数を入力することができるようになった。

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(...arr3);

//配列のコピー・結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

//このように指定することで配列をコピーすることができる
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4; //　このような代入の仕方をするとarr8とarr4の指しているアドレスが同じになってしまい、arr8を変更したはずがarr4を変更する結果になってしまうことがあるので注意すること。
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

/**
 *  mapやfilterを使った配列の処理
 */

// const nameArr = ['yuma', '太郎', '次郎'];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// console.log(nameArr2);

// const numArr = [1, 2, 3, 4, 5];
// const numArr2 = numArr.filter((num) => {
//   return num % 2 === 1;
// });

// console.log(numArr2);
// const nameArr3 = nameArr.map((name) => {
//   if (name === 'yuma') {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(nameArr3);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時

// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 1300;

// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';

// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています!!' : '許容範囲内です';
// };

// console.log(checkSum(60, 50));

/**
 *  論理演算子の本当の意味を知ろう && ||
 */
// truthy、falsyについて
// "ABC" 0 10 undefined null false NaN "" [] {}

// const val = '';
// if (val) {
//   console.log('truthyです');
// } else {
//   console.log('falsyです');
// }

// const flag1 = true;
// const flag2 = false;

// if (flag1 && flag2) {
//   console.log('どちらもtrueです');
// }

// if (flag1 || flag2) {
//   console.log('一方がtrueです');
// }

// ||  は左側がtruthyの時その時点で返却する
// const num = 100;
// const fee = num || '金額未設定';
// console.log(fee);

// &&  は左側がfalsyの時その時点で返却する
// const num2 = 'ABC';
// const fee2 = num2 && '何か設定されました';
// console.log(fee2);

// truthy falsy を見分けられるようになろう.

//
