//#1
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var count = []

for (i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        count.push(officeItems[i])
    }
    console.log(count.length)
}

//#2
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
      if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female" ) {
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. SHE'S good to see Mad Max.")
      } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male" ) {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. HE'S good to see Mad Max.")
      }  else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female" ) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough, don't let HER in.")
      }  else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male" ) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough, don't let HIM in.")
      }
  }

  //Toggle Button BONUS CHALLENGE

//* METHOD 1 (Difference in inner loop setup)
//   const toggleArr = [2, 5, 435, 4, 3]
//   let button = "off"
  
//   for (i = 0; i < toggleArr.length; i++) {
      
//       for (j = toggleArr[i]; j > 0; j--) {
//           if (button === "off") {
//               button = "on";
//           } else if (button === "on") {
//               button = "off"
//           }
//       }
//   }
//   console.log(button)


//METHOD 2
  const toggleArr = [9, 3, 4, 2]
  let button = "off"
  
  for (i = 0; i < toggleArr.length; i++) {
      
      for (j = 0; j <= toggleArr[i] - 1; j++) {
          if (button === "off") {
              button = "on";
          } else if (button === "on") {
              button = "off"
          }
      }
  }
  console.log(button)


  