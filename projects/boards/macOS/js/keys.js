document.addEventListener("keydown", e => {
	if (e.key.toLowerCase() === "u"
		&& e.ctrlKey
	) {
		alert("U key");
	}
});