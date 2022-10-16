const container = document.querySelector(".container");
const coffees = [
  {
    name: "Web Development",
    image: "images/1.png"
  },
  {
    name: "Cross-Platform Mobile App",
    image: "images/2.png"
  },
  {
    name: "Chatbot Services",
    image: "images/8.png"
  },
  {
    name: "Blockchain Services",
    image: "images/3.png"
  },
  {
    name: "Unity Game Services",
    image: "images/4.png"
  },
  {
    name: "Software development",
    image: "images/5.png"
  },
  {
    name: "Old to new migrations",
    image: "images/6.png"
  },
  {
    name: "Cloud development",
    image: "images/7.png"
  },
  {
    name: "WordPress development",
    image: "images/9.png"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h3 class="card--title">${name}</h3>
                <a class="card--link" href="#">Explore</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
