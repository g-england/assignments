const {v4: uuidv4} = require('uuid')
const bountyData = {
    bounties: [
        {firstName: "Johnny", lastName: "Depp", living: true, bountyAmount: 5000, type: "Sith", _id: uuidv4()},
        {firstName: "Matt", lastName: "Damon", living: true, bountyAmount: 5000, type: "Jedi", _id: uuidv4()},
        {firstName: "Justin", lastName: "Beiber", living: true, bountyAmount: 5000, type: "Jedi", _id: uuidv4()},
        {firstName: "Peter", lastName: "Griffin", living: true, bountyAmount: 5000, type: "Sith", _id: uuidv4()},
        {firstName: "Lucifer", lastName: "Morningstar", living: true, bountyAmount: 5000, type: "Sith", _id: uuidv4()}
    ]
}


module.exports = bountyData