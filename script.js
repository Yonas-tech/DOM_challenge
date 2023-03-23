let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener  

  // Part 1
  const mainTitleEl = document.querySelector("#main-title");
  mainTitleEl.textContent = "Welcome to my page!"

  // Part 2
  const bodyEl = document.querySelector('body');
  bodyEl.style.background = 'linear-gradient(to bottom right, red, yellow)';//'papayawhip';

  // Part 3
  const favoriteUlEl = document.querySelector("#favorite-things");
  favoriteUlEl.removeChild(favoriteUlEl.lastElementChild); //

  // Part 4
  const specialTitleEls = document.querySelectorAll('.special-title');
  specialTitleEls.forEach((element) => element.style.fontSize = '2rem');

  // Part 5: Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
  const pastRacesUlEl = document.querySelector('#past-races');
  let pastRacesUlElChildren = pastRacesUlEl.children;
  for (let i = 0; i < pastRacesUlElChildren.length; i++) {
    if (pastRacesUlElChildren[i].textContent == 'Chicago') {
      pastRacesUlEl.removeChild(pastRacesUlElChildren[i]);
    }
  }

  // Part 6: Create a new <li> element, change the new <li> text to the name of a city, and append it to the Past Races list.
  const liEl = document.createElement('li');
  liEl.textContent = 'Malibu';
  pastRacesUlEl.appendChild(liEl)

  // Part 7: Create a new .blog-post corresponding to the new city added in Part 6. You will have to create a new <div> with class of .blog-post, a new <h2> with text, and a new <p> with some text. Think about what order you want to create the elements, and what order you want to append them in.

  const divEl = document.createElement('div');
  divEl.classList.add('blog-post');
  const h2El = document.createElement('h1');
  h2El.textContent = liEl.textContent; // 'Malibu'
  divEl.appendChild(h2El);
  const pEl = document.createElement('p');
  pEl.textContent = "That's one thing about me Dom you don't understand.";
  divEl.appendChild(pEl);

  const mainDivEl = document.querySelector('.main');
  mainDivEl.appendChild(divEl)

  divEl.classList.add('purple'); // I added this

  // Part 8: Query select the #quote-title ID element and add a click event handler. That event handler should use the function randomQuote whenever #quote-title is clicked.
  const quoteEl = document.querySelector('#quote-title');
  quoteEl.addEventListener('click', randomQuote);


  // Part 9
  const allBlogPostEls = document.querySelectorAll('.blog-post');
  allBlogPostEls.forEach((element) => {
       element.addEventListener('mouseenter', (e)=> {
        e.target.classList.add('red')
        e.target.classList.remove('purple')
        console.log('enterd 1st')
      }
   )

       element.addEventListener('mouseout', (e)=> {
        e.target.classList.add('purple')
        e.target.classList.remove('red')
        console.log('enterd 2nd')
      }
  )
});


})

