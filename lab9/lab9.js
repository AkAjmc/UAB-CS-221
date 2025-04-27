let bookList;
async function getData(text) {
    try {
        const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=" + text, { // gets value inputed that will go to the query user requested
            method:"GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        } // if error
    const data = await response.json();
    return data;
    } catch (error) {
        console.error(error.message); // error message
    }
}
async function PData(text, index){ // function gets query values from fetch and changes values on the page with elements in query
    const data = await getData(text);// receives data
    bookList = data;
    let image = document.getElementById("image");
    let author = document.getElementById("author");
    let date = document.getElementById("date");
    let title = document.getElementById("title");
    let description = document.getElementById("description");
    let authorHidden = document.getElementById("authorHolder");
    let dateHidden = document.getElementById("dateHolder");
    let descriptionHidden = document.getElementById("descriptionHolder");
    let back = document.getElementById("back");
    let next = document.getElementById("next");
    if(index != 0){ // roundabout if statements to make it so no buttons by default. when at last item next disappears when at first back disappears
        back.style.display = "flow-root";
    }
    if(index == 0){
        next.style.display = "flow-root";
    }
    let counter = 0;
    for(let element of bookList.items){
        counter +=1
    }
    if(index == counter - 1){
        next.style.display = "none";
    }
    if(index != counter - 1){
        next.style.display = "flow-root";
    }
    authorHidden.style.display = "block"; // all Hidden display once search returns true
    dateHidden.style.display = "block";
    descriptionHidden.style.display = "block";
    console.log(bookList.items[index].volumeInfo); // all of these insert html to change
    image.src = bookList.items[index].volumeInfo.imageLinks.smallThumbnail;
    image.style.display = "block"
    title.innerHTML = bookList.items[index].volumeInfo.title;
    let count = 0;
    for(let element of bookList.items[index].volumeInfo.authors){
        count += 1;
    }
    let iterate = 0;
    let authorsTogether;
    while(iterate != count){
        authorsTogether += bookList.items[index].volumeInfo.authors[iterate] + " ";
        iterate += 1;
    } // authors is originally in array so concatenate string and display
    author.innerHTML = bookList.items[index].volumeInfo.authors;
    date.innerHTML = bookList.items[index].volumeInfo.publishedDate;
    if(!bookList.items[index].volumeInfo.description){
        description.innerHTML = bookList.items[index].volumeInfo.subtitle;
    }else{
        description.innerHTML = bookList.items[index].volumeInfo.description
    }
}
function clickButtons(){
    let searchText = document.getElementById("searchBar");
    let back = document.getElementById("back");
    let next = document.getElementById("next");
    let text = searchText.value;
    console.log(text);
    PData(text, 0);
    let index = 0;
    back.addEventListener("click", () =>{ // next button finds next val
        let text = searchText.value;
        console.log(text);
        index -= 1;
        PData(text,index);
    });
    next.addEventListener("click", () =>{ //button finds previous val
        let text = searchText.value;
        console.log(text);
        index += 1;
        PData(text,index);
    });
}
document.addEventListener("DOMContentLoaded", () =>{ // loads page
    let search = document.getElementById("searchIcon");
    search.addEventListener("click", () =>{ // whenever search button is clicked creates an event listener to display the info of the books found
        clickButtons();
    });
});
