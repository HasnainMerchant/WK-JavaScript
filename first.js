// x = 5
// y = 15
// z = x * y
// console.log(z)

// var person = {
//     firstname : 'John',
//     lastname : 'Doe',
//     age : 43,
//     gender : 'Male'
// }
// console.log(person.firstname)
// // Shows Only In Browser
// console.warn(person.firstname)
// console.error(person.firstname)

// msg = `He is ${person.firstname} a ${person.age} old ${person.gender}`
// console.log(msg)

// const arr= [2, 3, 4]
// let [x, y, z] = arr
// console.log(x, y, z)
// console.log(arr)

// const question = new Map([
//     ["Nagraj", 100],
//     ["Football", ["Hello", "World"]],
//     [102, "Football"],
//     [[1,2], ["hello", "world"]],
// ]);

// console.log(question)
// let key_itr = question.values()
// console.log(typeof(key_itr.next().value));
// console.log(typeof(key_itr.next().value));
// console.log(typeof(key_itr.next().value));
// console.log(typeof(key_itr.next().value));
// values = question.get([1,2])
// console.log(values)
// console.log(question.values());

const Student_New = {
    name : "Hasnain",
    age : 21
}

let s1 = Object.create(Student_New)
console.log(s1.name);