var nameVar = 'Andrew';
var nameVar = 'Mike';

console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
// let nameLet = 'Julie'; Duplicate declaration "nameLet"

console.log('nameLet', nameLet);

const nameConst = 'Frank';
// const nameConst = 'Ghunter'; Duplicate declaration "nameConst"
// nameConst = 'Ghunter' value does not change

console.log('nameConst', nameConst);

function getPetName() {
  var petName= 'Hal';
  return petName
}

getPetName();