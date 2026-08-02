const list =
document.getElementById("list");


function display(data=books){


list.innerHTML="";


data.forEach(book=>{


list.innerHTML+=`

<div class="card">


<h2>

<a href="detail.html?id=${book.id}">

${book.title}

</a>

</h2>


<p>

作曲：
${book.composer}

</p>


<p>

編曲：
${book.arranger}

</p>


<p>

出版社：
${book.publisher}

</p>


</div>


`;


});


}



function search(){


let word=
document.getElementById("search").value;


let result=
books.filter(b=>

b.title.includes(word)
||
b.composer.includes(word)
||
b.arranger.includes(word)

);


display(result);


}


display();