class Book{
    constructor(title, author, ISBN, price, description, image)
    {
        this.title=title;
        this.author=author;
        this.ISBN=ISBN;
        this.price=Price;
        this.description=description;
        this.image=image;
    }
}

let books=[];

books.push(new Book('Surviving Loss','Busisiwe Mahlangu','isbn', 120, "a lesson about winning", "./Gladiator.jpg"));
books.push(new Book('Clocking in','Busisiwe Mahlangu','isbn', 120, "a lesson about winning", "./Aladin.jpg"));
let bookshelve=document.getElementById('bookshelve');
let text="";

for(let x=0; x<books.length; x++)
{
    text += `<h1>${books[x].title}</h1>`;
    text += `<h1>${books[x].author}</h1>`;
    text += `<h1>${books[x].ISBN}</h1>`;
    text += `<h1>${books[x].Price}</h1>`;
    text += `<h1></h1>`;
    text += `<img src=${books[x].image}>`;
}

bookshelve.innerHTML=text;