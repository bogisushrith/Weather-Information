const weather = document.querySelector('#passing');
const info = document.querySelector('form');
info.addEventListener('submit', (call) => {
	call.preventDefault();
	const Location = info.elements.Location.value;
	const apiKey = 'your_api_key';
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ Location }&appid=${ apiKey }&units=metric`)
		.then(response => response.json())
		.then(data => {
			const Temperature = data.main.temp;
			const Minimum_Temperature = data.main.temp_min;
			const Maximum_Temperature = data.main.temp_max;
			const Description = data.weather[0].description;
			weather.innerHTML = `
		<p>The temperature in ${ Location } is ${ Temperature }°C.</p>
		<p>Minimum temperature in ${ Location } : ${ Minimum_Temperature }°C</p>
		<p>Maximum temperature in ${ Location } : ${ Maximum_Temperature }°C</p>
		<p>Weather description in ${ Location } : ${ Description }</p>
		`;
		})
		.catch(e => {
			weather.textContent = `Please enter a valid location`;
		});
});