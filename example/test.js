

export default function sayHello() {
    console.log("Hello")
}

export const sayBye = () => {
    console.log("Bye")
}

export const greet = () => {
    console.log("How is your day")
}



//////////////
import { sayBye as Bye, greet} from "./this file"
//use
Bye(), greet()

import * as Xxx from "./this file"
//use
Xxx.sayBye() = Xxx.default()

import { default as hello} from "./this file"
import hello from "./this file" // <--- Can only access default this way
//use
hello() = sayHello()

/////
export { greet } from "./another file" // loads and passes through