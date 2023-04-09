let SHEET_ID = '1tMFMujULZ4tHcHX8qyyUKYaI4WTZOO2mhvfIwVy0Vok'
let SHEET_TITLE = 'Plugins';
let SHEET_RANGE = 'C3:F12'
let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);
fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
	let data = JSON.parse(rep.substr(47).slice(0,-2));
	let plugins_list = document.getElementById('plugins-list');
	let length = data.table.rows.length;

	for(let i = 1;i<length;i++){

		let NewBox = document.createElement('div');
		let Link = document.createElement('a');
		let Preview = document.createElement('img');
		let PluginName = document.createElement('h4');

		NewBox.className = "plugins-item";
		PluginName.innerHTML = data.table.rows[i].c[0].v;
		Preview.src = data.table.rows[i].c[1].v;
		Preview.className = "img_style";
		Link.className = "plugins-item-content";
		Link.href = data.table.rows[i].c[2].v;
		Link.target = "_blank"

		plugins_list.append(NewBox);
		NewBox.append(Link);
		Link.append(Preview);
		Link.append(PluginName);
	}

})