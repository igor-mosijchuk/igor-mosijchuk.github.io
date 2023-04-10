let SHEET_ID = '1oQGnzagrCDBZqZ5-GLmvjxiVnL0VoHSMOBGiUZ9ZHmg'
let SHEET_TITLE = 'Plugins';
let SHEET_RANGE = 'C1:I150'
let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);
fetch(FULL_URL)
	.then(res => res.text())
	.then(rep => {
		let data = JSON.parse(rep.substr(47).slice(0, -2));
		let plugins_list = document.getElementById('plugins-list');
		let length = data.table.rows.length;

		for (let i = 1; i < length; i++) {

			let NewBox = document.createElement('div'),
				Link = document.createElement('a'),
				PreviewFrame = document.createElement('div'),
				Preview = document.createElement('img'),
				Info = document.createElement('div'),
				PluginName = document.createElement('h4'),
				Description = document.createElement('p');
				StatusField = document.createElement('p'),
				KeyField = document.createElement('span'),
				Status = data.table.rows[i].c[3].v;
				Key = data.table.rows[i].c[6].v;

			NewBox.className = `plugins-item ${Status} show`;
			NewBox.append(Link);

			Link.className = "plugins-item-content";
			Link.href = data.table.rows[i].c[5].v;
			Link.target = "_blank"
			Link.append(PreviewFrame, Info);

			PreviewFrame.append(Preview, StatusField, KeyField)
			PreviewFrame.className = "cover"
			Preview.src = "img/preview/" + data.table.rows[i].c[2].v + ".png";
			Preview.className = "img_style";
			StatusField.innerHTML = Status;
			KeyField.innerHTML = Key;

			Info.className = "plugin-info";
			Info.append(PluginName, Description);
			PluginName.innerHTML = data.table.rows[i].c[2].v;
			Description.innerHTML = data.table.rows[i].c[4].v;

			plugins_list.append(NewBox);

			if (KeyField.textContent != 0) { KeyField.style.cssText = "display:block; background:red" }

			if (StatusField.textContent == "bad") { StatusField.style.cssText = "background:yellow" }

		}

	});






document.querySelector('#search-input').addEventListener('input', filterList);

function filterList() {
	const searchInput = document.querySelector('#search-input');
	const filter = searchInput.value.toLowerCase();
	const listItems = document.querySelectorAll('.plugins-item');
	listItems.forEach((item) => {
		let text = item.textContent;
		if (text.toLowerCase().includes(filter.toLowerCase())) {
			item.style.display = '';
		} else {
			item.style.display = 'none';
		}
	});

}

filterSelection("all")
function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("plugins-item");
	if (c == "all") c = "";
	for (i = 0; i < x.length; i++) {
		removeShowClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) addShowClass(x[i], "show");
	}
}

function addShowClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
	}
}

function removeShowClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("filters");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function(){
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}





