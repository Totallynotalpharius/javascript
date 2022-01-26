const person1 = {
    firstname: 'TheGodEmporerOfMankind',
    dob: '????????',
    hight: '12foot3inches',
    LastName: 'smith'
};

const person2 = {
    firstname: 'Robute',
    LastName: 'Gulliman',
    dob: '????????'
};
const people = [person1, person2];
console.log(people[0].firstname);
for(let i = 0; i < people.length; i++){

    let fullname = people[i].firstname + ' '+ people[i].LastName


    console.log(fullname)
}