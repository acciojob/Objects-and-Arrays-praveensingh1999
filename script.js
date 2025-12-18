const players = ["John", "Bob", "Alice", "Poppy"];
const person = {
  name: "John Doe",
  age: 80,
};

// Attach originals to window
window.players = players;
window.person = person;

// Reference to same array
window.team = window.players;

// Copy of array
window.team1 = [...window.players];

// Copy of object
window.cap1 = { ...window.person };
