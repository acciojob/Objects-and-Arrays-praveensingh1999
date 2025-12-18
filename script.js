window.players = ["John", "Bob", "Alice", "Poppy"];
window.person = {
  name: "John Doe",
  age: 80,
};

// Reference to the same array
const team = players;

// Copy of the array
const team1 = [...players];

// Copy of the object
const cap1 = { ...person };
