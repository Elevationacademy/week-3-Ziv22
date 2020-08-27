
let data = JSON.parse(localStorage.wisdoms || "[]")

const wisdoms = []


const $clearWisdom = $("#clear-wisdom")
const $addWisdom = $("#add-wisdom")
const $wisdoms = $("#wisdoms")

const source = $("#wisdoms-template").html()
const template = Handlebars.compile(source)
const newHTML = template(data)
$wisdoms.append(newHTML)

$addWisdom.on("click", function(){
    const $wisdomText = $("#wisdom-text").val()
    wisdoms.push({text: $wisdomText})
    if(wisdoms.length % 2 == 0){
        localStorage.wisdoms = JSON.stringify(wisdoms)
    }
}) 

window