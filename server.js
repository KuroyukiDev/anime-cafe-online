let express = require('express');
const hbs = require('hbs');
const animeData = require('./public/anime_lib').animeData;
const port = process.env.PORT || 3000;
let app = express();

hbs.registerPartials(__dirname + '/views');
app.set('view engine', 'hbs');


// Mainenance Page Activator
// (INFO: Comment out to deactivate Maintenance Page - Uncomment to activate it)

// app.use((req,res,next) => {
// 	res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
  res.render('home.hbs', {
		pageTitle: 'Anime Cafe',
    subTitle: '~ Home ~'
	});
});

app.get('/dubbed', (req, res) => {
    // const renderDubbedList = () => {
    //     return animeData.animeData.anime.forEach(series => {
    //         let a = document.createElement('a');
    //         let h4 = document.createElement('h4');
    //         a.href=series.id;
    //         a.key=series.id;
    //         a.setAttribute('class', 'list-group-item');
    //         h4.textContent=series.name;
    //         h4.setAttribute('class', 'text-center list-group-item-header');
    //         let li = a.appendChild(h4);
    //         return li;
    //         // return <a class="list-group-item" key="${series.id}" href=><h4 class="text-center list-group-item-header">${series.name}</h4></a>`;
    //     });
    // };

    let anime = animeData.anime;

    res.render('dubbed.hbs', {
        pageTitle: 'Dubbed Anime List',
        dubbedList: {
            barakamon: {
                name: anime[0].name,
                id: anime[0].id
            },
            danmachi: {
                name: anime[1].name,
                id: anime[1].id
            },
            withmysmartphone: {
                name: anime[2].name,
                id: anime[2].id
            }
        }
    });
});

app.get('/dubbed/in-another-world-with-my-smartphone', (req, res) => {
    
    let anime = animeData.anime[2];
    
    res.render('withmysmartphone.hbs', {
        pageTitle: anime.name,
        ep1: {
			name: `${anime.name} - EP #${anime.eps[0].ep_num}`,
        	id: `/dubbed${anime.eps[0].id}`
		},
        ep2: {
			name: `${anime.name} - EP #${anime.eps[1].ep_num}`,
        	id: `/dubbed${anime.eps[1].id}`
		},
		ep3: {
			name: `${anime.name} - EP #${anime.eps[2].ep_num}`,
        	id: `/dubbed${anime.eps[2].id}`
		},
		ep4: {
			name: `${anime.name} - EP #${anime.eps[3].ep_num}`,
        	id: `/dubbed${anime.eps[3].id}`
		},
		ep5: {
			name: `${anime.name} - EP #${anime.eps[4].ep_num}`,
        	id: `/dubbed${anime.eps[4].id}`
		},
		ep6: {
			name: `${anime.name} - EP #${anime.eps[5].ep_num}`,
        	id: `/dubbed${anime.eps[5].id}`
		},
		ep7: {
			name: `${anime.name} - EP #${anime.eps[6].ep_num}`,
        	id: `/dubbed${anime.eps[6].id}`
		},
		ep8: {
			name: `${anime.name} - EP #${anime.eps[7].ep_num}`,
        	id: `/dubbed${anime.eps[7].id}`
		},
		ep9: {
			name: `${anime.name} - EP #${anime.eps[8].ep_num}`,
        	id: `/dubbed${anime.eps[8].id}`
		},
		ep10: {
			name: `${anime.name} - EP #${anime.eps[9].ep_num}`,
        	id: `/dubbed${anime.eps[9].id}`
		},
		ep11: {
			name: `${anime.name} - EP #${anime.eps[10].ep_num}`,
        	id: `/dubbed${anime.eps[10].id}`
		},
		ep12: {
			name: `${anime.name} - EP #${anime.eps[11].ep_num}`,
        	id: `/dubbed${anime.eps[11].id}`
		}
    });
});

app.get('/dubbed/in-another-world-with-my-smartphone-1', (req, res) => {
    
    let anime = animeData.anime[2];
    
    res.render('vidPlayer.hbs', {
        pageTitle: `${anime.name} - EP #${anime.eps[0].ep_num}`,
        vidUrl: anime.eps[0].src,
		listid: anime.id,
		previd: `/dubbed${anime.eps[11].id}`,
		nextid: `/dubbed${anime.eps[1].id}`
    });
});

app.get('/dubbed/in-another-world-with-my-smartphone-2', (req, res) => {
    
    let anime = animeData.anime[2];
    
    res.render('vidPlayer.hbs', {
        pageTitle: `${anime.name} - EP #${anime.eps[1].ep_num}`,
        vidUrl: anime.eps[1].src,
		listid: anime.id,
		previd: `/dubbed${anime.eps[0].id}`,
		nextid: `/dubbed${anime.eps[2].id}`
    });
});

app.get('/dubbed/in-another-world-with-my-smartphone-3', (req, res) => {
    
    let anime = animeData.anime[2];
    
    res.render('vidPlayer.hbs', {
        pageTitle: `${anime.name} - EP #${anime.eps[2].ep_num}`,
        vidUrl: anime.eps[2].src,
		listid: anime.id,
		previd: `/dubbed${anime.eps[1].id}`,
		nextid: `/dubbed${anime.eps[3].id}`
    });
});

app.get('/dubbed/in-another-world-with-my-smartphone-4', (req, res) => {
    
    let anime = animeData.anime[2];
    
    res.render('vidPlayer.hbs', {
        pageTitle: `${anime.name} - EP #${anime.eps[3].ep_num}`,
        vidUrl: anime.eps[3].src,
		listid: anime.id,
		previd: `/dubbed${anime.eps[2].id}`,
		nextid: `/dubbed${anime.eps[4].id}`
    });
});

app.get('/dubbed/in-another-world-with-my-smartphone-5', (req, res) => {
    
    let anime = animeData.anime[2];
    
    res.render('vidPlayer.hbs', {
        pageTitle: `${anime.name} - EP #${anime.eps[4].ep_num}`,
        vidUrl: anime.eps[4].src,
		listid: anime.id,
		previd: `/dubbed${anime.eps[3].id}`,
		nextid: `/dubbed${anime.eps[5].id}`
    });
});

app.get('/dubbed/in-another-world-with-my-smartphone-6', (req, res) => {
    
    let anime = animeData.anime[2];
    
    res.render('vidPlayer.hbs', {
        pageTitle: `${anime.name} - EP #${anime.eps[5].ep_num}`,
        vidUrl: anime.eps[5].src,
		listid: anime.id,
		previd: `/dubbed${anime.eps[4].id}`,
		nextid: `/dubbed${anime.eps[6].id}`
    });
});

app.get('/dubbed/in-another-world-with-my-smartphone-7', (req, res) => {
    
    let anime = animeData.anime[2];
    
    res.render('vidPlayer.hbs', {
        pageTitle: `${anime.name} - EP #${anime.eps[6].ep_num}`,
        vidUrl: anime.eps[6].src,
		listid: anime.id,
		previd: `/dubbed${anime.eps[5].id}`,
		nextid: `/dubbed${anime.eps[7].id}`
    });
});

app.get('/dubbed/in-another-world-with-my-smartphone-8', (req, res) => {
    
    let anime = animeData.anime[2];
    
    res.render('vidPlayer.hbs', {
        pageTitle: `${anime.name} - EP #${anime.eps[7].ep_num}`,
        vidUrl: anime.eps[7].src,
		listid: anime.id,
		previd: `/dubbed${anime.eps[6].id}`,
		nextid: `/dubbed${anime.eps[8].id}`
    });
});

app.get('/dubbed/in-another-world-with-my-smartphone-9', (req, res) => {
    
    let anime = animeData.anime[2];
    
    res.render('vidPlayer.hbs', {
        pageTitle: `${anime.name} - EP #${anime.eps[8].ep_num}`,
        vidUrl: anime.eps[8].src,
		listid: anime.id,
		previd: `/dubbed${anime.eps[7].id}`,
		nextid: `/dubbed${anime.eps[9].id}`
    });
});

app.get('/dubbed/in-another-world-with-my-smartphone-10', (req, res) => {
    
    let anime = animeData.anime[2];
    
    res.render('vidPlayer.hbs', {
        pageTitle: `${anime.name} - EP #${anime.eps[9].ep_num}`,
        vidUrl: anime.eps[9].src,
		listid: anime.id,
		previd: `/dubbed${anime.eps[8].id}`,
		nextid: `/dubbed${anime.eps[10].id}`
    });
});

app.get('/dubbed/in-another-world-with-my-smartphone-11', (req, res) => {
    
    let anime = animeData.anime[2];
    
    res.render('vidPlayer.hbs', {
        pageTitle: `${anime.name} - EP #${anime.eps[10].ep_num}`,
        vidUrl: anime.eps[10].src,
		listid: anime.id,
		previd: `/dubbed${anime.eps[9].id}`,
		nextid: `/dubbed${anime.eps[11].id}`
    });
});

app.get('/dubbed/in-another-world-with-my-smartphone-12', (req, res) => {
    
    let anime = animeData.anime[2];
    
    res.render('vidPlayer.hbs', {
        pageTitle: `${anime.name} - EP #${anime.eps[11].ep_num}`,
        vidUrl: anime.eps[11].src,
		listid: anime.id,
		previd: `/dubbed${anime.eps[10].id}`,
		nextid: `/dubbed${anime.eps[0].id}`
    });
});

// app.get('/:id', (req, res) => {
//     let anime = animeData.anime;
//     let seriesList = [
//         {
//             name: anime[0].name,
//             eps: anime[0].eps
//         },
//         {
//             name: anime[1].name,
//             eps: anime[1].eps
//         },
//         {
//             name: anime[2].name,
//             eps: anime[2].eps
//         }
//     ];
//
//     const epIdFilterSearch = (data, term) => {
//         return data.forEach((item) => {
//             if (term === item.id) {
//                 return term;
//             }
//         });
//     };
//
//     const getVidUrlFilterSearch = (data, term) => {
//         return data.forEach((item) => {
//             if (term === item.id) {
//                 return item.src;
//             }
//         });
//     };
//
//     switch (req.params.id) {
//         case epIdFilterSearch(seriesList[0].eps, req.params.id):
//
//             res.render('vidPlayer.hbs', {
//                 pageTitle: anime[0].name,
//                 vidUrl: getVidUrlFilterSearch(seriesList[0].eps, req.params.id)
//             });
//
//         case epIdFilterSearch(seriesList[1].eps, req.params.id):
//
//             res.render('vidPlayer.hbs', {
//                 pageTitle: anime[1].name,
//                 vidUrl: getVidUrlFilterSearch(seriesList[1].eps, req.params.id)
//             });
//
//         case epIdFilterSearch(seriesList[2].eps, req.params.id):
//
//             res.render('vidPlayer.hbs', {
//                 pageTitle: anime[2].name,
//                 vidUrl: getVidUrlFilterSearch(seriesList[2].eps, req.params.id)
//             });
//
//     }
// });
//
// app.get('/youtube-irc/:id', (req, res) => {
//     let id = req.params.id;
//     if (id === 'anime-live-irc-1') {
//         res.render('yt-player.hbs', {
//             vidTitle: "Kawaii Anime Music Live IRC",
//             vidurl: "https://www.youtube.com/embed/PRlAY486hVg?rel=0&amp;showinfo=0"
//         });
//     } else if (id === 'anime-live-irc-2') {
//         res.render('yt-player.hbs', {
//             vidTitle: "Anime Music Live IRC",
//             vidurl: "https://www.youtube.com/embed/BgZ7hJore2w?rel=0&amp;showinfo=0"
//         });
//     }
// });



app.listen(port, () => {
  console.log(`Started on port ${port}`);
});
