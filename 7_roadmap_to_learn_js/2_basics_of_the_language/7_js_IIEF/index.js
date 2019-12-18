// JavaScript Immediately-invoked Function Expressions (IIFE)\

console.log(
(function() {
    return 2+3;
})()
)

console.log(
    (() => {
        return 1+3
      })()
)

console.log(
    (function() {
        return 2+6
      }())
)

// console.log(
//     (() => {
//         return 3
//       }())
// )

console.log(
    ~(function() {
        return 2+2
      })()
      )

console.log(
    (function doSomething() {
        return 3+3;
      })()
    )




