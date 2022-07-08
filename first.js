x = 5
y = 15
z = x * y
console.log(z)

var person = {
    firstname : 'John',
    lastname : 'Doe',
    age : 43,
    gender : 'Male'
}
console.log(person.firstname)
// Shows Only In Browser
console.warn(person.firstname)
console.error(person.firstname)

msg = `He is ${person.firstname} a ${person.age} old ${person.gender}`
console.log(msg)
