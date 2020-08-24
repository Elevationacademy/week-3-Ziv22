let data;
const neruoscienceComputerBooks = [];

const pushBooks = book =>{
    if(book.volumeInfo.categories){
        if(book.volumeInfo.categories.includes('Computers')){
            neruoscienceComputerBooks.push(book.volumeInfo.title)
        }
    }
}

const fetchBooks = (startIndex) =>{
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=title:neuroscience&maxResults=40&startIndex=${startIndex}`,
        success: function (data) {
            data.items.forEach(element => {
                pushBooks(element) 
            });
        },  
        error: function (xhr, text, error) {
            console.log(text);
        }
    }); 
}

const generateNeruoscienceArray = (runsNum) =>{
    for (let i = 0; i < runsNum; i+=40) {
        fetchBooks(i);
    }
}


generateNeruoscienceArray(121);