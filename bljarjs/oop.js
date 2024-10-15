// soal 1

// function person(firstName, lastName, age) {
//     this.firstName = firstName;      
//     this.lastName = lastName;    
//     this.age = age;    

//     this.sayHello = function (name) {
//         console.log(`Hello ${name}, my name is ${this.firstName}, ${this.lastName}, im years old ${this.age}`);
//     } 
// }

// const ridwan = new person("ridwan", "basandid", "99");
// ridwan.sayHello("dika");

// const kiki = new person("kiki", "elsa", "100");
// kiki.sayHello("dika");

// soal 2

// function persegipanjang(panjang,lebar){
//     this.panjang = panjang;
//     this.lebar = lebar;

//     this.luas = function () {
//         console.log(this.panjang * this.lebar);
//     }
//     this.keliling = function () {
//         console.log(2 * (this.panjang + this.lebar));
//     }
  
// }
// let persegipanjang1 = new persegipanjang(10, 10);
// persegipanjang1.luas();
// persegipanjang1.keliling();

// soal 3

// class person {
//     constructor(firstname,lastname,age) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//     }
//     showdetails(name) {
//         console.log(`hello ${name}, my name is ${this.firstname}, ${this.lastname}, im years old ${this.age}`);
//     }
// }

// const kiki= new person("subi", "basandid", "100");
// kiki.showdetails("kiki"), ("my name is");

// const mahmud= new person("subi", "basandid", "100");
// kiki.showdetails("mahmud"), ("my name is");

// soal 4

// class persegipanjang{
//     constructor(panjang, lebar){
//         this.panjang = panjang;
//         this.lebar = lebar;
//     }
//     luas() {
//         console.log(this.panjang * this.lebar);
//         };
//     keliling () {
//         console.log(2*(this.panjang + this.lebar));
//         };
// } 
// const persegipanjang2 = new persegipanjang(5, 5);
// persegipanjang2.luas();
// persegipanjang2.keliling();

//soal 5

// class rekening {
//     constructor (norek, saldo){
//         this.saldo = saldo;
//         this.norek = norek;
//     }

//     setorTunai(nominal){
//         return(this.saldo = nominal + this.saldo)
//     }
//     tarikTunai(nominal){
//         return(this.saldo = nominal + this.saldo)
//     }
// }

// let o = new rekening (123456, 50000);
// console.log(o.setorTunai(10000));
// console.log(o.tarikTunai(20000));

// let p = new rekening (123456, 1000000);
// console.log(o.setorTunai(10000));
// console.log(o.tarikTunai(20000));

// let r = new rekening (123456, 2000000);
// console.log(o.setorTunai(10000));
// console.log(o.tarikTunai(20000));