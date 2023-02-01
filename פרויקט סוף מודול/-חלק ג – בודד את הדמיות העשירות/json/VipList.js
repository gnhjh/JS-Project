let box = document.getElementById("box");

json_ar = [
  {
    name: "Bill Gates",
    worth: "$90B",
    birth_year: "1955",
    source: "microsoft",
    country: "USA",
    image:
      "https://specials-images.forbesimg.com/imageserve/59d502f931358e542c034e76/200x200.jpg?background=000000&cropX1=245&cropX2=2420&cropY1=636&cropY2=2813",
  },
  {
    name: "Warren Buffett",
    worth: "$84B",
    birth_year: "1931",
    source: "Berkshire Hathaway",
    country: "USA",
    image:
      "https://specials-images.forbesimg.com/imageserve/59d5055931358e542c034ead/200x200.jpg?background=000000&cropX1=46&cropX2=693&cropY1=159&cropY2=806",
  },
  {
    name: "Mark Zuckerberg",
    worth: "$71B",
    birth_year: "1984",
    source: "Facebook",
    country: "USA",
    image:
      "https://specials-images.forbesimg.com/imageserve/59d5062131358e542c034eb7/200x200.jpg?background=000000&cropX1=419&cropX2=1409&cropY1=53&cropY2=1044",
  },
  {
    name: "Larry Ellison",
    worth: "$57B",
    birth_year: "1945",
    source: "Sun, Oracle",
    country: "USA",
    image:
      "https://specials-images.forbesimg.com/imageserve/59d5069b31358e542c034ec1/200x200.jpg?background=000000&cropX1=0&cropX2=2000&cropY1=227&cropY2=2228",
  },
  {
    name: "Michael Bloomberg",
    worth: "$50B",
    birth_year: "1942",
    source: "Bloomberg",
    country: "USA",
    image:
      "https://specials-images.forbesimg.com/imageserve/58c1d278a7ea431f321add1f/200x200.jpg?background=000000&cropX1=0&cropX2=744&cropY1=40&cropY2=784",
  },
];

// callback with map
json_ar.map(
  (m) =>
    (box.innerHTML += `<div  class="text-center card p-3 m-3 w-25 mx-auto ">
       <img class="w-80 mx-auto" src="${m.image}" alt="${m.name}">
        <h2> ${m.name}</h2>
        <p>worth: ${m.worth}</p>
        <p>birth year: ${m.birth_year}</p>
        <p>source: ${m.source}</p>
        <p>country: ${m.country}</p>  
    </div>
 `)
);

// SelectorAll #box > div
const btn = document.querySelectorAll("#box div");
// remove div
btn.forEach((btn) =>
  btn.addEventListener("click", () => {
    console.log(`success remove` + btn.innerHTML); // show remove div in console
    btn.remove();
  })
);
