// const dosomething = (foo = 1, bar = 'hey') => {
//     //do something
//   }
//   const args = [2, 'ho!']
//   console.log(dosomething(...args));
//   console.log(dosomething());
//   console.log(args);

//   const dosomething = ({ foo = 1, bar = 'hey' }) => {
//     //do something
//     console.log(foo) // 2
//     console.log(bar) // 'ho!'
//     return `Bar to - ${bar} a foo to - ${foo}`;
//   }
//   const args = { foo: 2, bar: 'ho!' }
//   console.log(dosomething(args))

// const dosomething = () => {
//     return 'test'
//   }
//   const result = dosomething() // r
//   console.log(result);

// const dosomething=()=> {
//     return ['Roger', 6]
// }
// const [name, age] = dosomething()

// name
// age

// const dosomething = () => {
//         return {name:'Roger', age:6}
//     }
//     const {name, age} = dosomething()
    
//     name
//     age

// let a = 3;
// let b = 0;

// const dosomething = () => {
//     const dosomethingelse = () => {
//         b = a+2;
//         a = 4;
//     }
//     dosomethingelse()
//     return a + b;
//   }
// //   console.log(dosomethingelse())
//   console.log(dosomething())

// const bark = () => {
//     const dosomethingelse = () => {
//       //some code here
//     }
//     dosomethingelse()
//     return 'test'
//   }
    
//   const sleep = () => {
//     const dosomethingelse = () => {
//       //some code here
//     }
//     dosomethingelse()
//     return 'test'
//   }

//   console.log(bark(), sleep())

// const car = {
//     brand: 'Ford',
//     model: 'Fiesta',
//     start: function(a) {
//       console.log(`Started`)
//       let b = a + 2;
//       return b;
//     }
//   }
  
//   console.log(car.start(3))