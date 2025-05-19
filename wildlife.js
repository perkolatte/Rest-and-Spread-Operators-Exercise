/* Task 1: Track Animal Sightings */
// TODO:
// Write a function with rest parameters
// to print sightings of different animals within the sanctuary.
// This function should accept an arbitrary number of animal names.

function trackAnimalSightings(...animalNames) {
  animalNames.forEach((element) => {
    console.log(`Animal sighted: ${element}`);
  });
}

trackAnimalSightings("Elephant", "Giraffe", "Zebra", "Lion", "Cheetah");

/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO:
// You are given two arrays of habitat names.
// Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.

const protectedHabitats = [...forestHabitats, ...savannahHabitats];

console.log("Protected Habitats:", protectedHabitats);

/* Task 3: Update Conservation Status */
const rhinoStatus = {
  population: 500,
  status: "Endangered",
};
// TODO:
// You are given an object representing an animal's conservation status.
// Use the spread operator to update this status with new information,
// such as an increase in population or a change in habitat.

const updatedRhinoStatus = {
  ...rhinoStatus,
  population: 499,
  habitat: "Protected Area",
};

console.log("Updated Rhino Status:", updatedRhinoStatus);

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
  name: "Leo",
  age: 5,
  species: "Lion",
};
// TODO:
// Duplicate an animal profile object using a shallow copy.
// Add genetic diversity information using the `genetics` property to this copy.
// Observe and explain how changes to nested properties affect both the original and the copied object.

lionProfile.genetics = {
  ancestry: "African Lion",
  geneticDiversity: "High",
};

console.log("Lion Profile:", lionProfile);

const lionProfile_Duplicate = {
  ...lionProfile,
}; // Shallow copy of lionProfile

console.log("Lion Profile Duplicate:", lionProfile_Duplicate);

lionProfile_Duplicate.age = 6; // Modifying the copied object
lionProfile_Duplicate.genetics.ancestry = "Asiatic Lion"; // Modifying a nested property

console.log("Lion Profile:", lionProfile);
console.log("Lion Profile Duplicate:", lionProfile_Duplicate);

/*
 * Observations:
 * TODO: Explain here.
 *
 * When we create a shallow copy of an object, top level properties are copied over,
 * but modifying a nested property in the copied object also affects the original object.
 * This is because the spread operator creates a shallow copy,
 * which means that nested objects are not duplicated but rather reference the same object in memory.
 *
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
  waterQuality: "Good",
  foodSupply: {
    herbivores: "Abundant",
    carnivores: "Sufficient",
  },
};
// TODO:
// You are given an object with a nested structure detailing the ecosystem's health,
// including water quality and food supply.
// Perform a shallow copy and
// modify a nested property.
// Observe and explain how changes to nested properties affect both the original and the copied object.

console.log("Ecosystem Health:", ecosystemHealth);

const updatedEcosystemHealth = {
  ...ecosystemHealth,
}; // Shallow copy of ecosystemHealth

updatedEcosystemHealth.waterQuality = "Excellent"; // Modifying a top-level property
updatedEcosystemHealth.foodSupply.herbivores = "Plentiful"; // Modifying a nested property

console.log("Updated Ecosystem Health:", updatedEcosystemHealth);
console.log("Original Ecosystem Health:", ecosystemHealth);

/*
 * Observations:
 * TODO: Explain here.
 *
 * When we create a shallow copy of an object with the spread operator,
 * top-level properties are copied over,
 * but modifying a nested property in the copied object also affects the original object.
 * This is because the spread operator creates a shallow copy,
 * which means that nested objects are not duplicated but rather reference the same object in memory.
 *
 */
