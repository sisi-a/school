// قائمة الكتب
const books = [
    {
        title: "كتاب واحد",
        cover: "E:/مشروع/نهائي/GIF/book1.jpg", // تأكد من استخدام مسار صحيح
        link: "E:/مشروع/نهائي/book1.html" // رابط صفحة الكتاب
    },
    {
        title: "كتاب اثنان",
        cover: "E:/مشروع/نهائي/GIF/book2.jpg", // تأكد من استخدام مسار صحيح
        link: "E:/مشروع/نهائي/book2.html" // رابط صفحة الكتاب
    },
    {
        title: "كتاب ثلاثة",
        cover: "E:/مشروع/نهائي/GIF/book3.jpg", // تأكد من استخدام مسار صحيح
        link: "E:/مشروع/نهائي/book3.html" // رابط صفحة الكتاب
    }
    // أضف المزيد من الكتب هنا
];

// دالة لعرض الكتب
function displayBooks() {
    const bookList = document.getElementById('book-list');
    books.forEach(book => {
        const bookContainer = document.createElement('div');
        bookContainer.className = 'book-container';
        bookContainer.onclick = () => window.open(book.link, '_blank'); // فتح رابط الكتاب عند الضغط

        bookContainer.innerHTML = `
            <div class="book-cover">
                <img src="${book.cover}" alt="${book.title}" />
            </div>
            <h2 class="book-title">${book.title}</h2>
        `;

        bookList.appendChild(bookContainer);
    });
}

// استدعاء الدالة لعرض الكتب عند تحميل الصفحة
window.onload = displayBooks;