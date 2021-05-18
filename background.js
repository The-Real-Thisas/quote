jQuery(document).ready(function($){
    //you can now use $ as your jQuery object.
  });

const numItemsToGenerate = 1;
function renderItem(){
    fetch(`https://source.unsplash.com/1600x900/?landscape`).then((response)=> {   
    // let item = document.createElement('div');
    // let item = document.querySelector("#magic")
    // item.classList.add('item');

    // Your CSS as text
    var styles = `
        .magic {
            background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${response.url});
        }
    `
    var styleSheet = document.createElement("style")
    styleSheet.type = "text/css"
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)
    // document.body.appendChild(item);
    }) 
}

const quote = document.querySelector("#loaded-text");
const cite = document.querySelector("#loaded-cite");

async function updateQuote() {
    // Fetch a random quote from the Quotable API
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();

    if (response.ok) {
      // Update DOM elements
      quote.textContent = data.content;
      cite.textContent = data.author;
      console.log(data);
    } else {
      quote.textContent = "Hmm something is wrong, sorry about that.</br> Happy birthday";
      console.log(data);
    }
  }

renderItem();
updateQuote();