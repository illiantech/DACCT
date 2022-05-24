// constantes, variables y objetos

const form = document.getElementById('form');

const formInputs = form.children[1];

const formSubmitError = formInputs.children[10];

const btnSubmit = formInputs.children[11];

const itemInputs = document.querySelectorAll('.itemInput');

const inputs = {
	name: undefined,
	email: undefined
};

let send = false;

let timeoutError, timeoutSend;

// Regular Expresion

const regExp = {
	// Lo unico es que es valido cuando termina en guion
	name: /^([a-záéíóúñ]\-?\s?){1,}$/i,
	email:
		/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
};

// funtion validator inputs

const validator = (e) => {
	const element = e.target;
	const validator = element.dataset.validator;

	if (validator) {
		if (element.value.length == 0) {
			formInputs.classList.remove(`form-block--group-inputs__${validator}-invalid`);

			inputs[validator] = undefined;
		} else if (!regExp[validator].test(element.value)) inputs[validator] = false;
		else inputs[validator] = true;

		if (inputs[validator] != undefined)
			formInputs.classList.toggle(`form-block--group-inputs__${validator}-invalid`, !regExp[validator].test(element.value));

		formInputs.classList.toggle(`form-block--group-inputs__${validator}-required`, inputs[validator] == undefined);
	}
};

form.addEventListener('input', validator);

// submit form

const submitError = () => {
	clearTimeout(timeoutError);

	formSubmitError.style.transitionDuration = '0s';
	formInputs.classList.remove(`form-block--group-inputs__submit-error`);

	// hay que dar TIEMPO para procesar el cambio de estilo en linea
	setTimeout(() => {
		formSubmitError.style.transitionDuration = '0.4s';
		formInputs.classList.add(`form-block--group-inputs__submit-error`);
	}, 10);

	timeoutError = setTimeout(() => {
		formInputs.classList.remove(`form-block--group-inputs__submit-error`);
	}, 4000);
};

const submitSend = () => {
	clearTimeout(timeoutSend);

	formInputs.classList.remove(`form-block--group-inputs__submit-error`);

	formInputs.classList.add(`form-block--group-inputs__submit-send`);

	timeoutSend = setTimeout(() => {
		formInputs.classList.remove(`form-block--group-inputs__submit-send`);
	}, 4000);

	inputs.name = undefined;
	inputs.email = undefined;

	form.reset();
};

form.addEventListener('submit', function (event) {
	event.preventDefault();

	// se coloca primero para verificar si es indefenido antes de de enviar para que no lo lea cuando mute el objeto
	if (inputs.name == undefined) formInputs.classList.add(`form-block--group-inputs__name-required`);

	if (inputs.email == undefined) formInputs.classList.add(`form-block--group-inputs__email-required`);

	if (inputs.name == true && inputs.email == true) send = true;
	else submitError();

	if (send) {
		// Elementos de la libreria Email JS
		const serviceID = 'default_service';
		const templateID = 'template_o7vzfkj';

		if (localStorage.getItem('lang') == 'es') btnSubmit.value = 'Enviando...';
		else btnSubmit.value = 'Sending...';

		itemInputs.forEach((item) => {
			item.setAttribute('disabled', 'true');
		});

		emailjs.sendForm(serviceID, templateID, this).then(
			() => {
				submitSend();

				send = false;

				if (localStorage.getItem('lang') == 'es') btnSubmit.value = 'Enviar';
				else btnSubmit.value = 'Send';

				itemInputs.forEach((item) => {
					item.removeAttribute('disabled');
				});
			},
			(err) => {
				if (localStorage.getItem('lang') == 'es') alert('Error de conexion: Intentalo de nuevo');
				else alert('Connection error: try again');
			}
		);
	}
});
