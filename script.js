const players = ["John", "Bob", "Alice", "Poppy"];
const person = {
  name: "John Doe",
  age: 80,
};

// Step 1: Reference to the players array
const team = players;

// Step 2: Copy of the players array
const team1 = [...players]; // or players.slice()

// Step 3: Copy of the person object
const cap1 = { ...person }; // or Object.assign({}, person);