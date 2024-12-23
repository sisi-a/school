function incrementCount(element) {
    // زيادة عدد الضغوطات
    let countElement = element.querySelector('p');
    let count = parseInt(countElement.textContent);
    count++;
    countElement.textContent = count;

    // تغيير لون الزر عند الضغط
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => icon.classList.remove('active')); // إزالة اللون من جميع الأيقونات
    element.classList.add('active'); // إضافة اللون للأيقونة المضغوطة
}