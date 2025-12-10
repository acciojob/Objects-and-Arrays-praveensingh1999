const players = ["John", "Bob", "Alice", "Poppy"];
const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here

// team should reference the same array
const team = players;

// team1 should be a copy of the array
const team1 = [...players];   // or players.slice()

// cap1 should be a copy of the object
const cap1 = { ...person };   // or Object.assign({}, person)
