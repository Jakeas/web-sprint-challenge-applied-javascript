import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const card = document.createElement("div");
  const cardHead = document.createElement("div");
  const author = document.createElement("div");
  const imgContain = document.createElement("div");
  const img = document.createElement("img");
  const authorName = document.createElement("span");

  card.classList.add("card");
  cardHead.classList.add("headline");
  author.classList.add("author");
  imgContain.classList.add("img-container");

  cardHead.textContent = article.headline;
  img.src = article.authorPhoto;
  authorName.textContent = article.authorName;

  card.appendChild(cardHead);
  card.appendChild(author);
  author.appendChild(imgContain);
  author.appendChild(authorName);
  imgContain.appendChild(img);

  
    card.addEventListener('click', () => {
    console.log(cardHead) 
    })
  
  return card;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
const container = document.createElement("div");

  axios
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then((res) => {
      // console.log('6:', res)
      const articles = res.data.articles;

      //articles is an object - need to convert to array to loop
      const arts = Object.values(articles);

      console.log("arts:", arts);
      
     

      for(let i = 0; i < arts.length; i++){
      let subArt = arts[i]
      
        for(let i = 0; i < subArt.length; i++){
          const finalSubArt = subArt[i]
            const cardContainer = document.querySelector(selector)
            cardContainer.appendChild(Card(finalSubArt));
        } //2nd for loop 
      } //1st for loop
        
    }) //closes then

    // })
    .catch((err) => {
      console.log(err);
    }); //closes catch
}; //closes function

export { Card, cardAppender };
