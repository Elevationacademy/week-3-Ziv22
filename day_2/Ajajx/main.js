// $.get("https://www.googleapis.com/books/v1/volumes?q=title:'Name of the Wind'", function(result){
//     console.log(result.items[0].volumeInfo.description)
// })

//Exc 1
// const fetch = (queryType,queryValue) =>{
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//         success: function (data) {
//             let container = $("<ol class='container'></ol>")
//             for(let item of data.items){
//                 let currentItem =
//                 `<li>
//                     <hr>
//                     Title: ${item.volumeInfo.title}
//                     <br>
//                     Author: ${item.volumeInfo.author}
//                     <br>
//                     ISBN: ${item.volumeInfo.isbn}
//                 </li>`
//                 container.append(currentItem)
//             }
//             $("body").append(container);
//         },
//         error: function (xhr, text, error) {
//             console.log(text);
//         }
//     }); 
// }

// // fetch("title", "The Wise Man's Fears")
// // fetch("isbn", 9789814561778)
// fetch("title", "How to Win Friends and Influence People")

// Exercise 4

const api_key = 'uwdAa2CCQ3OTNbhZRtF7N4Ph8kuePCVn';
const $container = $(".gifs-view");
const favorites = [];

const showFavorites =()=>{
    let $gifsList = $(`<div></div>`)
    favorites.forEach(gif =>{
        let $gifContainer = $(`<div class="gif-container"><div>`)
        let list = `<iframe class='gif' src="${gif}" title="W3Schools Free Online Web Tutorials"></iframe>`

        $gifContainer.append(list)
        $gifsList.append($gifContainer)
    });
    $container.append(`<h1>Favorite Gifs</h1>`)
    $container.append($gifsList)
}


const createGifsList = (dataArray) =>{
    let $gifsList = $(`<div></div>`)
    for(let i = 0; i < 5;i++){
        let $gifContainer = $(`<div class="gif-container"><div>`)
        let list = `<iframe class='gif' src="${dataArray[i]}" title="W3Schools Free Online Web Tutorials"></iframe>`
        let favButton = `<button class='favorite-button'> Add to Favorits</button>`

        $gifContainer.append(list)
        $gifContainer.append(favButton)
        $gifsList.append($gifContainer)


    };
    return $gifsList
} 

const fetch = (string,key) =>{
        $.ajax({
            method: "GET",
            url: `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${string}&limit=&offset=&rating=g&lang=en`,
            success: function (data) {
                $container.empty();
                let urls = data.data.map(item =>item.embed_url);
                let list = createGifsList(urls);
                $container.append(list);
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        }); 
    }


$('#fetch').on("click",function(){
    let search_text = $('#gif-text').val()
    fetch(search_text,api_key)
})

$('body').on('click','.favorite-button',function(){
    let currentGifSrc = $(this).closest('.gif-container').find('.gif').attr("src");
    favorites.push(currentGifSrc);
    $container.empty()
    showFavorites();
})

