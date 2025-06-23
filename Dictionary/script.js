

const form = document.querySelector('form');
const resultDiv = document.querySelector('.glass');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getWordInfo(form.elements[0].value);
})

const getWordInfo = async (word) => {
    try{
        resultDiv.innerHTML = "Fetching Data , Please Wait....";
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    const data = await response.json();
    let definitions = data[0].meanings[0].definitions[0];
    resultDiv.innerHTML = `
        <h3><strong>Word:</strong> ${data[0].word}</h3>
        <p class="partofspeech" >${data[0].meanings[0].partOfSpeech}</p>
        <p><strong>Meaning: </strong>${definitions.definition}</p>
        <p><strong>Example: </strong>${definitions.example == undefined ? "Not Found" : definitions.example}</p>
        <p><strong>Antonyms: </strong></p>
        `;
        if(definitions.antonyms.length == 0)
        {
            resultDiv.innerHTML += `<span>Not Found</span>`;
        }
        else{
        for(let i =0;i<definitions.antonyms.length;i++)
        {
            resultDiv.innerHTML += `<li>${definitions.antonyms[i]}</li>` 
        }}

        resultDiv.innerHTML += `<div><a href="${data[0].sourceUrls}" target="_blank">Read More</a></div>`
    }
    catch(error)
    {
        resultDiv.innerHTML = `<p>Sorry , The word could not be found </p>`;
    }

   // console.log(data);
}

///////////
const cursor= document.querySelector(".cursor");

        //follow mouse
        document.addEventListener("mousemove", (e) => {
            let x = e.pageX;
            let y = e.pageY;

            cursor.style.top = y + "px";
            cursor.style.left = x + "px";
            cursor.style.display = "block";

            function mousestopped(){
                cursor.style.display = "none";
            }
            clearTimeout(timeout);
            timeout = setTimeout(mousestopped,1000);
        });

        //cursor effects on mosue out
        document.addEventListener("mouseout", () =>{
            cursor.style.display = "none";
        });


        //////////
        document.addEventListener('DOMContentLoaded', () => {
            const searchInput = document.querySelector('.srch input');
            const searchContainer = document.querySelector('.srch');
        
            searchContainer.addEventListener('mouseenter', () => {
                searchInput.classList.add('expanded');
            });
        
            searchContainer.addEventListener('mouseleave', () => {
                if (searchInput.value === '') {
                    searchInput.classList.remove('expanded');
                }
            });
        
            searchInput.addEventListener('input', () => {
                if (searchInput.value !== '') {
                    searchInput.classList.add('expanded');
                }
            });
        
            searchInput.addEventListener('blur', () => {
                if (searchInput.value === '') {
                    searchInput.classList.remove('expanded');
                }
            });
        });
        

