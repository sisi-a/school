const books = [
    { title: "كتاب واحد", cover: "https://www.abjjad.com/books", description: "هذه هي قصة الكتاب الأول." },
    { title: "كتاب اثنان", cover: "file:///F:/مشروع/نهائي/books/book1.html", description: "هذه هي قصة الكتاب الثاني." },
    { title: "كتاب ثلاثة", cover: "https://via.placeholder.com/150", description: "هذه هي قصة الكتاب الثالث." },
    { title: "كتاب أربعة", cover: "https://via.placeholder.com/150", description: "هذه هي قصة الكتاب الرابع." },
    { title: "كتاب خمسة", cover: "https://via.placeholder.com/150", description: "هذه هي قصة الكتاب الخامس." }
];

const bookListDiv = document.getElementById('book-list');

books.forEach(book => {
    const bookItem = document.createElement('div');
    bookItem.className = 'book-item';
    bookItem.innerHTML = `
        <div class="book" onclick="openBook('${book.cover}', this)">
            <div class="cover" onmouseover="showDescription('${book.description}')">
                <img src="${book.cover}" alt="${book.title} غلاف">
                <h2>${book.title}</h2>
            </div>
            <div class="page">محتوى الكتاب: ${book.title}</div>
        </div>
    `;
    bookListDiv.appendChild(bookItem);
});

function openBook(cover, element) {
    // إزالة تأثير التكبير من جميع الكتب
    const allBooks = document.querySelectorAll('.book-item');
    allBooks.forEach(book => {
        book.classList.remove('active');
    });

    // إضافة تأثير التكبير للكتاب الذي تم النقر عليه
    element.parentElement.classList.add('active');

    // فتح الكتاب في نافذة جديدة
    window.open(cover, '_blank');
}

function showDescription(description) {
    // يمكنك إضافة كود لعرض الوصف هنا إذا كنت ترغب في ذلك
    console.log(description); // مثال على عرض الوصف في وحدة التحكم
}