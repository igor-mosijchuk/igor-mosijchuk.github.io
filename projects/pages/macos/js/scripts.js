document.querySelector('.container').onclick = (event) => {
	const elem = event.target;
	if (elem.classList.contains('section-symbol')) {
		console.log(elem);
		navigator.clipboard.writeText(elem.innerHTML)
			.then(() => {
				document.querySelector('.out').innerHTML += 'copy<br>';
			})
			.catch(err => {
				console.log(err);
			});
	}
}


document.querySelector('object#document').onclick = (event) => {
	const elem = event.target;
	if (elem.classList.contains('codeNode')) {
		console.log(elem);
		navigator.clipboard.writeText(elem.innerHTML)
			.then(() => {
				document.querySelector('.out').innerHTML += 'copy<br>';
			})
			.catch(err => {
				console.log(err);
			});
	}
}