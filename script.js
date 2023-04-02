
//Ініціаізація елементів по завершенню завантаження сторінки
document.addEventListener("DOMContentLoaded", function() {
	//Навігація
	const navButtons = document.querySelectorAll(".buttons__navigation, .greatings__more");
	for (var i = 0; i < navButtons.length; i++) {
		navButtons[i].addEventListener("click", scrollToTarget);
	}
		
	//Поп ап
	/*
	var reqButtons = document.querySelectorAll(".buy-button, .review__desc-button, .contacts__buttom");
	for (var i = 0; i < reqButtons.length; i++) {
		reqButtons[i].addEventListener("click", requstForm);
	}
*/
});

//Скрол
function scrollToTarget(event) {
	event.preventDefault();
	const targetId = this.getAttribute("href");
	const target = document.querySelector(targetId);
	const offset = 0; //-100
	const bodyRect = document.body.getBoundingClientRect().top;
	const targetRect = target.getBoundingClientRect().top;
	const targetPosition = targetRect - bodyRect;
	const offsetPosition = targetPosition + offset;

	window.scrollTo({
		top: offsetPosition,
		behavior: 'smooth'
	});
};

const sections = document.querySelectorAll('.slide');
window.addEventListener('scroll', checkSectionPosition);
function checkSectionPosition() {
	// висота вікна браузера
  const windowHeight = window.innerHeight;
	// межа яка повинен пересікти елемент
	const windowPos = windowHeight * 0.65;
  for (let i = 0; i < sections.length; i++) {
		// відстань від верху сторінки до верхньої межі елемента
    const sectionTop = sections[i].getBoundingClientRect().top; 
    if (sectionTop < windowPos) changeColorNav(i);
  }
}
function changeColorNav(index){
	const navButtons = document.querySelectorAll(".buttons__navigation");
	for (var i = 0; i < navButtons.length; i++) { 
		if (i === index) {
			navButtons[i].classList.add('_active');
    } else {
			navButtons[i].classList.remove('_active');
    }
	}
};



/*
//Зворотня форма
function requstForm(event) {
	var formRequest = document.querySelector('.form__request');
	var formArea = document.querySelector('.request__form-row');
	if (formRequest && formArea) {
		formRequest.classList.toggle('_active');
		formArea.classList.toggle('_active');
		document.body.classList.toggle('._lock');	
		
		var value = this.getAttribute("data-param");				
		let textElement = document.getElementById(`request_topic`);
		textElement.innerHTML = value;
	}
};
*/

const whySlider = new Swiper('.why__container',{
	//! клас повинен бути position:relative, но не точно
	//автоматична кількість показаних слайдів
	slidesPerView: 'auto',
	//вільний слайд
	freeMode: true,
	//заміна вигляду курсору миші
	grabCursor: true,
});

const purchaseSlider = new Swiper('.purchase-container',{
	//! клас повинен бути position:relative
	// адаптив
	breakpoints:{
		//Для різних екранів, mobile first
    320: {
			//кількість видимих слайдів на екрані
      slidesPerView: 1,
			//відстань між слайдами
      spaceBetween: 10,
    },
		600: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
		900: {			
			slidesPerView: 2,
			spaceBetween: 50,
		},
		1100: {			
			slidesPerView: 3,
			spaceBetween: 50,
		},
	},
	//можливіть перетаскування мишшю
	simulateTouch: true,
	//чуттєвість до свайпу
	touchRatio: 1,
	//кут спрацювання свайпу
	touchAngle: 45,
	//заміна вигляду курсору миші
	grabCursor: true,
	//скрол
	scrollbar:{
		el: '.swiper-scrollbar',
		draggable: false
	},
	//перелистання при кліку на слайд
	slideToClickedSlide: false,
	//активний слайд по центру
	centeredSlides: false,
	//нескінченний скрол
	loop: false,
	//автопрокртка
	autoplay:{
		//пауза
		delay: 1500,
		//чи закінчиться атвтопрокрутка на останньому слайді
		stopOnLastSlide: false,
		//чи зупиниться автопрокрутка якщо вручну прокрутити
		disableOnInteraction: false,
	},
})
