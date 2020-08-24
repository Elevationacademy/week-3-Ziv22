// var classData = {
//     classmates: [
//         {name: "That on gal", description: "Always has the ansswer", socialNetwork:false},
//         {name: "The weird dude", description: "Quick with a smile", socialNetwork:true},
//         {name: "Taylor", description: "Just Taylor", socialNetwork:true}
//     ]
// }

// const source = $('#menu-template').html()
// const template = Handlebars.compile(source)
// let newHTML = template(classData)
// console.log(newHTML)
// $(".items").append(newHTML)

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]
const languagesView = $('#languages-template').html()
const languagesTemplate = Handlebars.compile(languagesView)

let languagesList = languagesTemplate({languages})
$(".languages").append(languagesList)



const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]
const animalsView = $('#animals-template').html()
const animalesTemplate = Handlebars.compile(animalsView)

let animalsList = animalesTemplate({animals})
$(".animals").append(animalsList)