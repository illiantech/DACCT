// Slider para PC

// valid click event (para no accionar el evento en medio de la animación)
let validSlider = true;

// prev item
const prev = () => {
	allianceList.classList.add('alliance--list__prev');
	validSlider = false;
	setTimeout(() => {
		allianceList.prepend(allianceList.lastElementChild);
		allianceList.classList.remove('alliance--list__prev');
		validSlider = true;
	}, 610);
};

// next item
const next = () => {
	allianceList.classList.add('alliance--list__next');
	validSlider = false;
	setTimeout(() => {
		allianceList.append(allianceList.firstElementChild);
		allianceList.classList.remove('alliance--list__next');
		validSlider = true;
	}, 610);
};

// slider automatic

let sliderAutoTime, sliderAutoInterval;
const sliderAuto = () => {
	sliderAutoTime = setTimeout(() => {
		sliderAutoInterval = setInterval(() => {
			next();
		}, 4000);
	}, 10000);
};

// aplication slider automatic in pc and avoid in mobile

let validSliderAuto = true;

const ApliSliderAutoDevice = () => {
	const viewportWidthDocument = document.firstElementChild.offsetWidth;

	if (viewportWidthDocument < 1000) {
		clearTimeout(sliderAutoTime);
		clearInterval(sliderAutoInterval);
		validSliderAuto = true;
	} else if (validSliderAuto) {
		sliderAuto();
		// cuando esta en "true" entra y se coloca en "false" para evitar que se vuelva a ejecutar el evento "resize"
		validSliderAuto = false;
	}
};

ApliSliderAutoDevice();

// aplication slider automatic in pc and avoid in mobile - dynamically

addEventListener('resize', ApliSliderAutoDevice);

// slider automatic reset

const sliderAutoReset = () => {
	clearTimeout(sliderAutoTime);
	clearInterval(sliderAutoInterval);
	sliderAuto();
};

// buttom and event click

const buttomPrev = document.getElementById('buttomPrev');

const buttomNext = document.getElementById('buttomNext');

buttomPrev.addEventListener('click', () => {
	if (validSlider) {
		prev();
		sliderAutoReset();
	}
});

buttomNext.addEventListener('click', () => {
	if (validSlider) {
		next();
		sliderAutoReset();
	}
});
