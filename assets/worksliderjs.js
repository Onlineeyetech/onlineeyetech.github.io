document.addEventListener("DOMContentLoaded", () => {
	const sliders = document.querySelectorAll(".booking-slider");

	if (!sliders.length) return;

	const list = [];

	sliders.forEach((element) => {
		const [slider, prevEl, nextEl, pagination] = [
			element.querySelector(".swiper"),
			element.querySelector(".slider-nav__item_prev"),
			element.querySelector(".slider-nav__item_next"),
			element.querySelector(".slider-pagination")
		];

		list.push(
			new Swiper(slider, {
				slidesPerView: 1.15,
				spaceBetween: 20,
				slidesOffsetBefore: 20,
				slidesOffsetAfter: 20,
				speed: 600,
				observer: true,
				watchOverflow: true,
				watchSlidesProgress: true,
				navigation: { nextEl, prevEl, disabledClass: "disabled" },
				pagination: {
					el: pagination,
					type: "bullets",
					modifierClass: "slider-pagination",
					bulletClass: "slider-pagination__item",
					bulletActiveClass: "active",
					clickable: true
				},
				breakpoints: {
					575: {
						slidesPerView: 1.5
					},
					992: {
						slidesPerView: 2,
						slidesOffsetBefore: 0,
						slidesOffsetAfter: 0
					},
					1366: {
						slidesPerView: 3,
						spaceBetween: 40,
						slidesOffsetBefore: 0,
						slidesOffsetAfter: 0
					}
				}
			})
		);
	});
});