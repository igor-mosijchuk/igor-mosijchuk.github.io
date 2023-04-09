let SHEET_ID = '1oQGnzagrCDBZqZ5-GLmvjxiVnL0VoHSMOBGiUZ9ZHmg'
let SHEET_TITLE = 'Plugins';
let SHEET_RANGE = 'E1:H150'
let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);
fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
	let data = JSON.parse(rep.substr(47).slice(0,-2));
	let plugins_list = document.getElementById('plugins-list');
	let length = data.table.rows.length;

	for(let i = 1; i < length; i++){

		let NewBox = document.createElement('div'),
			Link = document.createElement('a'),
			Preview = document.createElement('img'),
			Info = document.createElement('div'),
			PluginName = document.createElement('h4'),
			Description = document.createElement('p');


		NewBox.className = "plugins-item";
		PluginName.innerHTML = data.table.rows[i].c[0].v;
		Preview.src = "img/preview/" + data.table.rows[i].c[0].v + ".png";
		Preview.className = "img_style";
		Link.className = "plugins-item-content";
		Link.href = data.table.rows[i].c[3].v;
		Link.target = "_blank"
		Description.innerHTML = data.table.rows[i].c[2].v;

		plugins_list.append(NewBox);

		NewBox.append(Link);
		Link.append(Preview, Info);
		Info.className = "plugin-info";
		Info.append(PluginName, Description)
	}

})


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