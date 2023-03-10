
//Ініціаізація елементів по завершенню завантаження сторінки
window.onload = function() {
	var buttons = document.querySelectorAll(".button-red, .request-close");
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", requstForm);
	}

};


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


//Вертикальний слайдер
const swiperV = new Swiper('.', {
	speed: 400,
})

//ініціюємо кнопки А1,А2,В1,В2,С1
var levelButtons = document.querySelectorAll('.curriculum__levels_item');
//перемикання слайдерів - клік по верхнім кнопкам
if (levelButtons){
	for (let i = 0; i < levelButtons.length; i++) {
		levelButtons[i].addEventListener("click", ()=>{
				swiperCurriculum.slideTo(i);
			})
	};
}

//подія - зміна слайду - передає індекс активного слайду у сторонню функцію
swiperCurriculum.on('slideChange', () => {
  let ind = swiperCurriculum.activeIndex;
	levelButtons.forEach(function(level, index) {
    if (index === ind) {
			levelButtons[index].classList.add('_active');
    } else {
			levelButtons[index].classList.remove('_active');
    }
	})
});



const swiperMentors = new Swiper('.mentors',{
	//пагінація, кнопки кружки
	pagination: {
		el: '.mentor__pag',
		//бутлери
		clickable: true,
	},
	breakpoints:{
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
		700: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
		970: {			
			//відстань між слайдами
			spaceBetween: 50,
			//кількість видимих слайдів на екрані
			slidesPerView: 3,
			//Для різних екранів, mobile first
		}
	}
})
