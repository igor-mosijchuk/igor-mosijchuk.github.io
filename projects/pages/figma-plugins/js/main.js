let SHEET_ID = '1tMFMujULZ4tHcHX8qyyUKYaI4WTZOO2mhvfIwVy0Vok'

let SHEET_TITLE = 'my_test';
let SHEET_RANGE = 'E10:F21'

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
	let data = JSON.parse(rep.substr(47).slice(0,-2));

	let player_Name_title = document.getElementById('player_Name_title');
	let player_Shoe_title = document.getElementById('player_Shoe_title');
	let player_Name = document.getElementById('player_Name');
	let player_Shoe = document.getElementById('player_Shoe');
	let length = data.table.rows.length;


	player_Name_title.innerHTML = data.table.rows[0].c[0].v;
	player_Shoe_title.innerHTML = data.table.rows[0].c[1].v;

	for(let i = 1;i<length;i++){

		let NewBoxPlayer = document.createElement('div');
		NewBoxPlayer.id = ("box" + i);
		NewBoxPlayer.className = "style";
		player_Name.append(NewBoxPlayer);
		NewBoxPlayer.innerHTML = data.table.rows[i].c[0].v;

		let NewBoxShoe = document.createElement('div');
		NewBoxShoe.id = ("box" + i);
		NewBoxShoe.className = "style";
		player_Shoe.append(NewBoxShoe);
		NewBoxShoe.innerHTML = data.table.rows[i].c[1].v;

	}

})