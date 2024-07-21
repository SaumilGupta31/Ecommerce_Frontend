let currentIndex = 0;
function showSlide(index) {
    const slidesContainer = document.querySelector('.slides')
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentIndex = 0;
    }
    else if (index < 0) {
        currentIndex = slides.length - 1;
    }
    else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}
function moveSlide(step) {
    showSlide(currentIndex + step);
}
setInterval(() => {
    moveSlide(1)
}, 3500);


const typewriterTexts = ["Cooling & Cleaning Solutions, Spare Parts Included", "Efficient Repairs & Authentic Spare Parts", "From Fixing to Parts, We have Got You Covered"];
let currentTextIndex = 0;
let isDeleting = false;
let charIndex = 0;
const typingSpeed = 10;
const deletingSpeed = 10;
const delayBetweenTyping = 2000;

function typeWriterEffect(texts, element) {
    const currentText = texts[currentTextIndex];

    if (isDeleting) {
        if (charIndex > 0) {
            charIndex--;
            element.innerHTML = currentText.substring(0, charIndex);
            setTimeout(() => typeWriterEffect(texts, element), deletingSpeed);
        } else {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            setTimeout(() => typeWriterEffect(texts, element), delayBetweenTyping);
        }
    } else {
        if (charIndex < currentText.length) {
            element.innerHTML = currentText.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(() => typeWriterEffect(texts, element), typingSpeed);
        } else {
            isDeleting = true;
            setTimeout(() => typeWriterEffect(texts, element), delayBetweenTyping);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.querySelector('.typewriter');
    typeWriterEffect(typewriterTexts, typewriterElement);
});



let navbar = document.querySelector('.nav-links');
let menu = document.querySelector('.menu');
let cross = document.querySelector('.cross');
let overlay = document.querySelector('.overlay');



function toggleMenu() {

    navbar.style.transform
    navbar.style.transform = 'translatex(0)'
    menu.style.display = 'none';
    cross.style.display = 'block';
    overlay.style.display = 'block';


}
function rtoggleMenu() {
    navbar.style.transform = 'translate(-100%)'
    menu.style.display = 'block';
    cross.style.display = 'none';
    overlay.style.display = 'none';

}

function hideMenu() {
    navbar.style.transform = 'translate(-100%)'
    overlay.style.display = 'none';
    cross.style.display = 'none';
    menu.style.display = 'block';
}

menu.addEventListener('click', toggleMenu);
cross.addEventListener('click', rtoggleMenu);


let dropdown1 = document.querySelector('.dropdown1')
function dropdownDisplay() {
    dropdownn.style.display = 'block';
}


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is <= 600px
        375: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 30
        },
       
        900: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }

});



//fourth page


function startCounting(target, targetValue, unit) {
    let count = 0;
    const interval = setInterval(() => {
        if (count < targetValue) {
            count++;
            target.textContent = count + unit;
        } else {
            clearInterval(interval);
        }
    }, 1);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const targetValue = parseInt(target.getAttribute('data-target'), 10);
            const unit = targetValue === 100 ? '%' : '+';
            startCounting(target, targetValue, unit);
            observer.unobserve(target);
        }
    });
}, { threshold: 1.0 });

document.querySelectorAll('.count').forEach(counter => {
    observer.observe(counter);
});





const filter = document.querySelector(".filter");
const filterContent = document.querySelector(".filter-content")

filter.style.height = '0vh';
filterContent.style.display = 'none';

function displayFilter() {
    if(filter.style.height === '0vh' && filterContent.style.display === 'none'){
        filter.style.height = 'auto';
        filterContent.style.display = 'flex';
        
    }
    else{
        filter.style.height = '0vh';
        filterContent.style.display = 'none';
    }
    
}

let i1 = document.querySelector(".i1");
let i2 = document.querySelector(".i2");
let i3 = document.querySelector(".i3");
let i4 = document.querySelector(".i4");
let i5 = document.querySelector(".i5");
let i6 = document.querySelector(".i6");
let i7 = document.querySelector(".i7");
let i8 = document.querySelector(".i8");

const arr = [i1, i2, i3, i4, i5, i6, i7, i8];

arr[0].style.display = 'none';
arr[1].style.display = 'none';
arr[2].style.display = 'none';
arr[3].style.display = 'none';
arr[4].style.display = 'none';
arr[5].style.display = 'none';
arr[6].style.display = 'none';
arr[7].style.display = 'none';

function crossCome(i){
    if (arr[i].style.display === 'none') {
        arr[i].style.display = 'block';
     
        
    } else {
        arr[i].style.display = 'none';
       
        
    }     
}

let ac = document.querySelector(".ac");
let wm = document.querySelector(".wm");
let r = document.querySelector(".r");
let tool = document.querySelector(".tool");
arrPro = [ac, wm, r, tool];

ac.style.display = 'flex';
wm.style.display = 'flex';
r.style.display = 'flex';
tool.style.display = 'flex';

if(arr[1].style.display === 'block'){
    arr.forEach(ac => {
        ac.style.display = 'flex'
    });
}
else{
    arr.forEach(ac => {
        ac.style.display = 'none'
    });
}




//search button working
function searchProducts(event) {
    event.preventDefault(); // Prevent form submission
    const query = document.getElementById('search-input').value.toLowerCase(); // Get search query
    const products = document.querySelectorAll('.p-box'); // Get all products

    products.forEach(product => {
        const productName = product.querySelector('h1').innerText.toLowerCase();
       

        if (productName.includes(query)) {
            product.style.display = 'flex'; // Show matching products
        } else {
            product.style.display = 'none'; // Hide non-matching products
        }
    });
}










