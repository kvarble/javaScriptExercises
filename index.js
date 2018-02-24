'use strict';

const kathy = {
    name: 'kathy',
    age: 35,
    happy: true,
    hairColor: 'brown',
};

const olivia = {
    name: 'olivia',
    age: 30,
    happy: true,
    hairColor: 'red',
};

const dimitry = {
    name: 'dimitry',
    age: 30,
    happy: false,
    hairColor: 'brown',
};

const studentArray = [kathy, olivia, dimitry]
// console.log(studentArray);

for(let i = 0; i < studentArray.length; i++)
{
    console.log(`hello, ${studentArray[i].name}. I heard you are ${studentArray[i].age}. That sure is old! Why are you so ${studentArray[i].happy ? 'happy': 'unhappy'}?`);
}