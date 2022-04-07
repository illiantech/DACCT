// slider CSS MOBILE

const allianceList = document.getElementById('allianceList');

let sliderAutoMobile;

const sliderAutoActive = (viewportWidth, index) => {
	sliderAutoMobile = setTimeout(() => {
		// NEW

		if (index <= allianceList.children.length - 1) {
			allianceList.scrollLeft = viewportWidth * index;

			index++;

			sliderAutoActive(viewportWidth, index);
		} else {
			index = 0;
			sliderAutoActive(viewportWidth, index);
		}
	}, 5000);
};

const sliderAutoDesac = () => {
	clearInterval(sliderAutoMobile);
	sliderAutoActive(viewportWidth, 0);
};

allianceList.addEventListener('touchmove', () => {
	//NEW
	sliderAutoDesac();
});

// exit slider auto mobile

// variables slider auto PC - (se tiene arriba para que lo limpie en mobile) -----------
let sliderAutoTime, sliderAutoInterval;
const sliderAuto = () => {
	sliderAutoTime = setTimeout(() => {
		sliderAutoInterval = setInterval(() => {
			next();
		}, 4000);
	}, 10000);
};

// aplicacion de slider CSS con JS

// construccion de slider infinito CSS mobile
let viewportWidth = document.firstElementChild.clientWidth;

let validSliderMovil = true;

if (viewportWidth < 1000) {
	// activar slider auto mobile // NEW

	if (validSliderMovil) {
		sliderAutoActive(viewportWidth, 1); // NEW
		validSliderMovil = false;
	}
} else {
	sliderAuto();
}

addEventListener('resize', () => {
	viewportWidth = document.firstElementChild.clientWidth;

	// no se ocupara espacio en memoria cada vez que haga resize en PC
	if (viewportWidth < 1000) {
		// limpiar TIEMPOS de slider pc
		clearTimeout(sliderAutoTime);
		clearInterval(sliderAutoInterval);

		if (validSliderMovil) {
			sliderAutoActive(viewportWidth, 0); // NEW
			validSliderMovil = false;
			sliderAutoDesac();
		}
	} else {
		if (!validSliderMovil) {
			clearInterval(sliderAutoMobile); // NEW
			validSliderMovil = true;
		}
	}
});

// INCISO -------------------------------------------------------------------------

// Slider para PC

// valid click event
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
