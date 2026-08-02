const defaultBooks = [

{
id:"001",
title:"小さな世界",
publisher:"ヤマハミュージック",
composer:"R.M.シャーマン",
arranger:"佐藤博昭",
difficulty:"2",
missing:[
"Tuba"
],
parts:[
"Score",
"Flute",
"Clarinet",
"Alto Sax",
"Trumpet",
"Horn",
"Trombone",
"Euphonium",
"Tuba",
"Percussion"
]
}

];



if(!localStorage.getItem("books")){

localStorage.setItem(
"books",
JSON.stringify(defaultBooks)
);

}