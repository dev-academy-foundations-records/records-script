// leave this code as-is please
let terah = {
  name: 'Terah',
  age: 32,
  height: 172,
  hairColor: 'brown',
  eyeColor: 'brown',
}
// write your code below this line---------------------------------

// 1. Use object literal notation to assign adam the value of an object with no properties.
const adam = Object.create(terah)

// 2. Give the adam object a name key that has the value "Adam".
adam.name = 'Adam'
// 3. Add a spouse key to the adam object and assign it the value of terah.
adam.spouse = terah
// 4. Add a "spouse" key to terah and assign it the value of adam.
terah.spouse = adam
// 5. Change the value of the terah "age" property to 33.
terah.age = 33
// 6. Remove the eyeColor property from terah (hint: use the delete operator).
delete terah.eyeColor
// 7. Add a children key to terah and use object literal notation to assign this variable to an empty object.

terah.children = {}

// 8. Add a ben property to the value of the terah children property. ben should be an object with the key name and the value "Ben".
const ben = {
  name: 'Ben',
}

terah.children.ben = ben

// 9. Add a wilson property to the value of the terah children property. wilson should be an object with the key name with the value "Wilson".
const wilson = {
  name: 'Wilson',
}

terah.children.wilson = wilson

// 10. Add a felicia property to the value of the terah children property. felicia should be an object with the key name with the value "Felicia".
const felicia = {
  name: 'Felicia',
}

terah.children.felicia = felicia
// 11. Add a children property to adam and assign it the value of terah.children.
adam.children = terah.children

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { terah, adam }
