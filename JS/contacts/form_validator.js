const regExp = {
	name: /^([a-záéíóúñ]\s?){1,}$/i,
	email:
		/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
};

// funtion validator inputs

const form = document.getElementById('form');

const validator = (e) => {
	const element = e.target;
	const validator = element.dataset.validator;

	if (validator) form.classList.toggle(`form-block--group-inputs__${validator}-invalid`, regExp[validator].test(element.value) != true);
};

form.addEventListener('input', validator);

// submit button

const btn = document.getElementById('button');

form.addEventListener('submit', function (event) {
	event.preventDefault();

	// Elementos de la libreria Email JS
	const serviceID = 'default_service';
	const templateID = 'template_o7vzfkj';

	emailjs.sendForm(serviceID, templateID, this).then(
		() => {
			alert('Sent!');
		},
		(err) => {
			alert(JSON.stringify(err));
		}
	);
});
