const person1 = {
    firstname: 'TheGodEmporerOfMankind',
    dob: '????????',
    hight: '12foot3inches',
    LastName: 'smith',
    Gender: 'Male',
    Phsyker: 'Yes'
    
};

const person2 = {
    firstname: 'Robute',
    LastName: 'Gulliman',
    dob: '????????',
    Phsyker: 'N/A'
};

const person3 = {
    firstname: 'Tona',
    LastName: 'Creed',
    Gender: 'female',
    Phsyker: 'Yes'
}
person2.Gender = 'Male';
console.log('person2 after change', person2)

const people = [person1, person2, person3];
console.log(people[0].firstname);
for(let i = 0; i < people.length; i++){
    let fullname = people[i].firstname + ' '+ people[i].LastName
    if(people[i].Gender === 'female') {
        console.log('Gender', people[i].Gender)

    }
    console.log(fullname)
}


