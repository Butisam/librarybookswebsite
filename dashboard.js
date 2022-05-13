document.getElementById('welcomeName').innerHTML = sessionStorage.getItem('name');
document.getElementById('profileImg').src = sessionStorage.getItem('img'); 
        
let authors = [{
    author: 'J.k Rowling',numOfBooks: '10 Books',img: 'pictures/j.k.jpg'
},
{
    author: 'Stephen King',numOfBooks: '61 Novels',img: 'pictures/king.jpg'
},
{
    author: 'Danielle Steel',numOfBooks: '179 Books',img: 'pictures/steel.jpg'
}];

function renderAuthors(){
    document.getElementById('authorImg1').src = authors[0].img;
    document.getElementById('authorName1').innerHTML = authors[0].author;
    document.getElementById('numOfBooks1').innerHTML = authors[0].numOfBooks;

    document.getElementById('authorImg2').src = authors[1].img;
    document.getElementById('authorName2').innerHTML = authors[1].author;
    document.getElementById('numOfBooks2').innerHTML = authors[1].numOfBooks;

    document.getElementById('authorImg3').src = authors[2].img;
    document.getElementById('authorName3').innerHTML = authors[2].author;
    document.getElementById('numOfBooks3').innerHTML = authors[2].numOfBooks;
}
renderAuthors();

let newBooks = [
    {
        bookImg: 'pictures/glass1.JPG', 
        bookName: 'The Glass Hotel',
         author: 'Emily St. JOhn', category: "Mystery"
    },
    {
        bookImg: 'pictures/book1.JPG',
        bookName: 'The Book Of Longings', author: 'Sue Monk',category: 'Fiction'
    },
    {
        bookImg: 'pictures/rose.jpg',bookName: 'Daqrling Rose Gold',author: 'Stephanie Wrobel',category: 'Thrillier'
    },
    {
        bookImg: 'pictures/dark.jpg',bookName: 'My Dark Venessa',author: 'My Dark Venessa',category: 'Mystery'
    },
    {
        bookImg: 'pictures/weather.jpg',bookName: 'Weather',author: 'Jenny offill',category: 'Mystery'
    },
];


function renderNewBooks()
{

    document.getElementById('bookImg1').src = newBooks[0].bookImg;
    document.getElementById('bookName1').innerHTML = newBooks[0].bookName;
    document.getElementById('nameOfAuthor1').innerHTML = newBooks[0].author;
    document.getElementById('Category1').innerHTML = newBooks[0].category;

    document.getElementById('bookImg2').src = newBooks[1].bookImg;
    document.getElementById('bookName2').innerHTML = newBooks[1].bookName;
    document.getElementById('nameOfAuthor2').innerHTML = newBooks[1].author;
    document.getElementById('Category2').innerHTML = newBooks[1].category;

    document.getElementById('bookImg3').src = newBooks[2].bookImg;
    document.getElementById('bookName3').innerHTML = newBooks[2].bookName;
    document.getElementById('nameOfAuthor3').innerHTML = newBooks[2].author;
    document.getElementById('Category3').innerHTML = newBooks[2].category;

    document.getElementById('bookImg4').src = newBooks[3].bookImg;
    document.getElementById('bookName4').innerHTML = newBooks[3].bookName;
    document.getElementById('nameOfAuthor4').innerHTML = newBooks[3].author;
    document.getElementById('Category4').innerHTML = newBooks[3].category;

    document.getElementById('bookImg5').src = newBooks[4].bookImg;
    document.getElementById('bookName5').innerHTML = newBooks[4].bookName;
    document.getElementById('nameOfAuthor5').innerHTML = newBooks[4].author;
    document.getElementById('Category5').innerHTML = newBooks[4].category;
}
renderNewBooks();

let lastBooks = [
    {
        bookName: 'pictures/OIP.jpg',name: 'Hurry Potter And The Sorcerers Stone',comment: '193 Page - Chapter 13 - Last Read',
    },
    {
        bookName: 'pictures/ta.jpg',name: 'TA Nehisi Goates The Water Dancer',comment: 'New Purchase - Yet to Read',
    },
    {
        bookName: 'pictures/son.jpg',name: 'The Life of Father And Son',comment: 'New Purchase - Yet to Read',
    },
    {
        bookName: 'pictures/ta.jpg',name: 'TA Nehisi Goates The Water Dancer',comment: 'New Purchase - Yet to Read',
    },
    {
        bookName: 'pictures/son.jpg',name: 'The Life of Father And Son',comment: 'New Purchase - Yet to Read',
    }
];

function renderLastBooks(){
    document.getElementById('lastBook1').src = lastBooks[0].bookName;
    document.getElementById('lastBookName1').innerHTML = lastBooks[0].name;
    document.getElementById('comment1').innerHTML = lastBooks[0].comment;

    document.getElementById('lastBook2').src = lastBooks[1].bookName;
    document.getElementById('lastBookName2').innerHTML = lastBooks[1].name;
    document.getElementById('comment2').innerHTML = lastBooks[1].comment;

    document.getElementById('lastBook3').src = lastBooks[2].bookName;
    document.getElementById('lastBookName3').innerHTML = lastBooks[2].name;
    document.getElementById('comment3').innerHTML = lastBooks[2].comment;

    document.getElementById('lastBook4').src = lastBooks[3].bookName;
    document.getElementById('lastBookName4').innerHTML = lastBooks[3].name;
    document.getElementById('comment4').innerHTML = lastBooks[3].comment;

    document.getElementById('lastBook5').src = lastBooks[4].bookName;
    document.getElementById('lastBookName5').innerHTML = lastBooks[4].name;
    document.getElementById('comment5').innerHTML = lastBooks[4].comment;

}
renderLastBooks();

const list = document.querySelectorAll('#scrollable');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

list.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtn.addEventListener('click', () => {
        item.scrollLeft += containerWidth;
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'none';
    });

    prevBtn.addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'block';
    })
});

