const findTheOldest = function(people) {
    let arr =[]; 

    for (let i = 0; i< people.length; i++){
        if (people[i].hasOwnProperty('yearOfDeath')){
        age =  people[i].yearOfDeath - people[i].yearOfBirth;
        arr.push(age);
    }else {
        let date = new Date().getFullYear()
        age =  date - people[i].yearOfBirth;
        arr.push(age);
    }
    }
    return people[arr.indexOf(Math.max(...arr))]
};


// Do not edit below this line
module.exports = findTheOldest;

