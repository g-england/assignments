//Preliminaries
//#1
for (i = 0; i <= 9; i++) {
    console.log(i)
}

//#2
for (i = 9; i >= 0; i--) {
    console.log(i)
}

//#3
var fruit = ["banana", "orange", "apple", "kiwi"]
for (i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
}

//Bronze Medal
//#1
const myArr = []
for (i = 0; i <= 9; i++) {
    myArr.push(i)
}
console.log(myArr)

//#2
for (i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

//#3
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var newArr = []
for (i = 0; i < fruit.length; i++) {
    if (i % 2 === 0) {
        newArr.push(fruit[i])
    }
}
console.log(newArr)

//Silver Medal
//#1
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
]

for (i = 0; i < peopleArray.length; i++) {
      console.log(peopleArray[i].name)
}

//#2
const names = []
const occupations = []

for (i = 0; i < peopleArray.length; i++) {
    names.push(peopleArray[i].name)
    occupations.push(peopleArray[i].occupation)
}
console.log(names, occupations)

//#3
const names2 = []
const occupations2 = []

for (i = 0; i < peopleArray.length; i++) {
    if (i % 2 === 0) {
        names2.push(peopleArray[i].name)
        occupations2.push(peopleArray[i].occupation)
    }
}
console.log(names2, occupations2)

//Gold Medal - Nesting
//#1
var grid = [[], [], []]

for (i = 0; i < grid.length; i++) {
    for (j = 0; j < grid.length; j++) {
        grid[i].push(0)
    }
}
console.log(grid)

//#2
var grid2 = [[], [], []]

for (i = 0; i < grid2.length; i++) {
    for (j = 0; j < grid2.length; j++) {
        if (i === 0) {
            grid2[i].push(0)
        } else if (i === 1) {
            grid2[i].push(1)
        } else if (i === 2) {
            grid2[i].push(2)
        }
    }
}
console.log(grid2)

//#3
var grid3 = [[], [], []]

for (i = 0; i < grid3.length; i++) {
    for (j = 0; j < grid3.length; j++) {
        if (j === 0) {
            grid3[i].push(0)
        } else if (j === 1) {
            grid3[i].push(1)
        } else if (j === 2) {
            grid3[i].push(2)
        }
    }
}
console.log(grid3)

//#4
var grid4 = [[0, 1, 2], [0, 1, 2], [0, 1, 2]]

for (i = 0; i < grid4.length; i++) {
    for (j = 0; j < grid4.length; j++) {
        grid4[i][j] = "x"
    }
}
console.log(grid4)
