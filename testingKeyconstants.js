const key = "message";

const letter = {
    message: "Hello, World!",
    [key]: "Hello, Earth!",
};

console.log(letter.message)

// what will letter.message return
// it will basically return "Hello Earth" as first "const key's value => message" will override the second line [key] then it will look like 
// const letter = {
//      message: "Hello, World!",        
//      message: "Hello, Earth!",
//}