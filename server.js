let express = require('express');
const hbs = require('hbs');
const animeData = require('./public/anime_lib').animeData;

const barakamondubroute = require('./routes/dubbed/barakamon');
const danmachidubroute = require('./routes/dubbed/danmachi');
const withmysmartphonedubroute = require('./routes/dubbed/withmysmartphone');
const newgamedubroute = require('./routes/dubbed/newgame');
const mikaguradubroute = require('./routes/dubbed/mikagura');
const asobinidubroute = require('./routes/dubbed/asobiniikuyo');
const gamersdubroute = require('./routes/dubbed/gamers');
const haganaidubroute = require('./routes/dubbed/haganai');
const monmusudubroute = require('./routes/dubbed/monmusu');

const port = process.env.PORT || 3000;
let app = express();

hbs.registerPartials(__dirname + '/views');
app.set('view engine', 'hbs');


// Maintenance Page Activator
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
  //         // return <a class="list-group-item" key="${series.id}" href=><h4 class="text-center
  // list-group-item-header">${series.name}</h4></a>`; }); };
  
  let anime = animeData.anime;
  
  res.render('dubbed.hbs', {
    pageTitle: 'Dubbed Anime List',
    barakamon: {
      banner: anime[0].imgSrc,
      name: anime[0].name,
      id: anime[0].id
    },
    danmachi: {
      banner: anime[1].imgSrc,
      name: anime[1].name,
      id: anime[1].id
    },
    withmysmartphone: {
      banner: anime[2].imgSrc,
      name: anime[2].name,
      id: anime[2].id
    },
    newgame: {
      banner: anime[3].imgSrc,
      name: anime[3].name,
      id: anime[3].id
    },
    mikagura: {
      banner: anime[4].imgSrc,
      name: anime[4].name,
      id: anime[4].id
    },
    asobini: {
      banner: anime[5].imgSrc,
      name: anime[5].name,
      id: anime[5].id
    },
    gamers: {
      banner: anime[6].imgSrc,
      name: anime[6].name,
      id: anime[6].id
    },
    haganai: {
      banner: anime[7].imgSrc,
      name: `${anime[7].name1} + ${anime[7].name2}`,
      id: anime[7].id
    },
    monmusu: {
      banner: anime[8].imgSrc,
      name: anime[8].name,
      id: anime[8].id
    }
  });
});

app.get('/donate', (req, res) => {
  res.render('donate.hbs', {
    pageTitle: 'Support My Projects!',
    subTitle: '~ Donate ~'
  });
});

// Use Routes
app.use(animeData.anime[0].id, barakamondubroute);
app.use(animeData.anime[1].id, danmachidubroute);
app.use(animeData.anime[2].id, withmysmartphonedubroute);
app.use(animeData.anime[3].id, newgamedubroute);
app.use(animeData.anime[4].id, mikaguradubroute);
app.use(animeData.anime[5].id, asobinidubroute);
app.use(animeData.anime[6].id, gamersdubroute);
app.use(animeData.anime[7].id, haganaidubroute);
app.use(animeData.anime[8].id, monmusudubroute);

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

app.use((req, res, next) => {
  res.render('bad.hbs');
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});
