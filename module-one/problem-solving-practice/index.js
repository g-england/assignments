//1. Largest Number

largestNumber = (array) => {
    var number = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > number)
        var number = array[i]
    }
    console.log(number)
}

largestNumber([-11, -4, -18, -20])

//2. 