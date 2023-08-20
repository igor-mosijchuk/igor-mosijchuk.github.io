// 1CyHIdo-y5auUGFtUjHnoZwtNjaq0yk1_N4XyV6WCOS4
// https://docs.google.com/spreadsheets/d/1CyHIdo-y5auUGFtUjHnoZwtNjaq0yk1_N4XyV6WCOS4/edit?usp=sharing

// console.log('');
let SHEET_ID = '1CyHIdo-y5auUGFtUjHnoZwtNjaq0yk1_N4XyV6WCOS4';
let SHEET_TITLE = 'playlist';
let SHEET_RANGE = 'A1:F100';
let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tg?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
	let data = JSON.parse(rep.substr(47).slice(0, -2));
	console.log(rep);
})