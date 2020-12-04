// Exersise #1
// let favoriteBreed = "Doberman Pincer"

// function breedString (dog) {
//     if (favoriteBreed == dog) {
//         return `My favorite dog breed is ${favoriteBreed}`;
//     }
//     else {
//         return `I like cats.`
//     }
// }

// console.log(`When it comes to pets, ${breedString(favoriteBreed)}`);

// Exercise #2
// let painter = {
//     tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
//     uniform: "white overalls",
//     cost_per_hour: 25.00,
//     insured: true,
//     get_paid: (hours) => {
//         let payment = (painter.cost_per_hour * hours)
//         return payment
//     }
// }

//   console.log(painter.get_paid(1));

//Exercise #3
// const button = document.querySelector("#button");
// const messageBox = document.querySelector("#text");
// button.addEventListener("click", () => messageBox.innerHTML = "Thanks for the click!");

//Exercise #4
let family = [
    {
      name: "Fred Jones",
      age: 49,
      title: "parent"
    },
    {
      name: "Pat Jones",
      age: 50,
      title: "parent"
    },
    {
      name: "Bubba Jones",
      age: 20,
      title: "adult child"
    },
    {
      name: "Kelly Jones",
      age: 12,
      title: "dependent child"
    },
    {
      name: "Bartleby",
      age: 3,
      title: "pet"
    }
  ]

//   for (const member of family) {
//       const familyhtml = `
//         <h3>${member.name}</h3>
//     `
//     document.querySelector("#family").innerHTML += `
//         ${familyhtml}
//     `
//   }
