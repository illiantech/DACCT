const regExpName = /^[a-z]+\s?([a-z]+?\s?){1,}$/i;

const regExpEmail =
	/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

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
