// https://docs.google.com/spreadsheets/d/1CyHIdo-y5auUGFtUjHnoZwtNjaq0yk1_N4XyV6WCOS4/edit?usp=sharing

let t = 'track';
let musPath = 'https://igor-mosijchuk.github.io/projects/music';

let SHEET_ID = '1CyHIdo-y5auUGFtUjHnoZwtNjaq0yk1_N4XyV6WCOS4';
let SHEET_TITLE = 'playlist';
let SHEET_RANGE = 'A7:J18';
let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
	.then(res => res.text())
	.then(rep => {
		let data = JSON.parse(rep.substr(47).slice(0, -2));
		let tracklist = document.querySelector(`.footer-content`);
		let playlist = document.querySelector(`#playlist`);
		// let nameVar = document.getElementById('playlist');
		let length = data.table.rows.length;
		/*
			1 track artist
			2 track title
			3 folder
			4 subfolder
			5 file
			6 path
			7 cover filename
		*/

		for (let i = 0; i < length; i++) {
			if (playlist) {

				//	create elements

				let NewBox = document.createElement('div'),
					Artist = document.querySelector(),
					Title = document.querySelector();



					// ContentBox = document.createElement('div'),

					// Subfolder = data.table.rows[i].c[4].v,

					// Artist = document.createElement('h5'),
					// Title = document.createElement('strong');




					// Track Hidden Data

					// TrackData = document.querySelector('true-media-player-single-track'),

					// TrackDataURL = document.querySelector('mp-track-url'),
					// TrackDataCover = document.querySelector('mp-track-thumbnail'),
					// TrackDataGenres = document.querySelector('mp-track-artist'),
					// TrackDataName = document.querySelector('mp-track-title')
					// ;

				// classes

				// true-media-player-single-track
				// 	mp-track-url
				// 	mp-track-thumbnail
				// 	mp-track-artist
				// 	mp-track-title


				// NewBox.className = `${t}`;
				// ContentBox.className = `${t}-content`;
				// Title.className = `${t}-title`;
				// Artist.className = `${t}-artist`;
				// TrackData.className = `${t}-data`;

				// attr

				// tracklist.setAttribute('tmplayer-dynamic-content','true-media-player')
				// playlist.setAttribute('tmplayer-dynamic-content', 'true-media-player');
				// NewBox.href;
				// NewBox.setAttribute('tmplayer-parent', 'true-media-player');
				// ContentBox.setAttribute('tmplayer-action', 'toggle');

				// ContentBox.setAttribute('tmplayer-parent','multitrack')
				// ContentBox.setAttribute('tmplayer-action','toggle')

				// TrackDataURL.setAttribute('tmplayer-meta', 'audio-url');
				// TrackDataName.setAttribute('tmplayer-meta', 'title');
				// TrackDataGenres.setAttribute('tmplayer-meta', 'genre');
				// TrackDataCover.setAttribute('tmplayer-meta', 'thumbnail');
				// tmplayer-action

				// CoverImg.src = `${musPath} + '__'+ ${Artist}`;


				// content
				// TrackDataURL.innerHTML = data.table.rows[i].c[6].v;
				// TrackDataName.innerHTML = data.table.rows[i].c[2].v;
				// TrackDataGenres.innerHTML = data.table.rows[i].c[1].v;
				// TrackDataCover.innerHTML = data.table.rows[i].c[7].v;

				// Artist.innerHTML = data.table.rows[i].c[1].v;
				// Title.innerHTML = data.table.rows[i].c[2].v;


				// TrackData.append(TrackDataURL)
				// TrackData.append(TrackDataName)
				// TrackData.append(TrackDataGenres)
				// TrackData.append(TrackDataCover)

				// ContentBox.append(Title)
				// ContentBox.append(Artist)
				// ContentBox.append(TrackData)
				// NewBox.append(ContentBox)
				// playlist.append(NewBox)

			}

			// console.log(length);
			// console.log(Subfolder);
		}
	})