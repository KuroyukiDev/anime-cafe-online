const express = require('express');
let router = express.Router();
const animeData = require('./../../public/anime_lib.js').animeData;

router.get('/', (req, res) => {
   
   let anime = animeData.anime[3];
   
   res.render('newgame.hbs', {
      pageTitle: anime.name,
      ep1: {
         name: `${anime.name} - ${anime.eps[0].ep_num}`,
         id: `/dubbed${anime.eps[0].id}`
      },
      ep2: {
         name: `${anime.name} - ${anime.eps[1].ep_num}`,
         id: `/dubbed${anime.eps[1].id}`
      },
      ep3: {
         name: `${anime.name} - ${anime.eps[2].ep_num}`,
         id: `/dubbed${anime.eps[2].id}`
      },
      ep4: {
         name: `${anime.name} - ${anime.eps[3].ep_num}`,
         id: `/dubbed${anime.eps[3].id}`
      },
      ep5: {
         name: `${anime.name} - ${anime.eps[4].ep_num}`,
         id: `/dubbed${anime.eps[4].id}`
      },
      ep6: {
         name: `${anime.name} - ${anime.eps[5].ep_num}`,
         id: `/dubbed${anime.eps[5].id}`
      },
      ep7: {
         name: `${anime.name} - ${anime.eps[6].ep_num}`,
         id: `/dubbed${anime.eps[6].id}`
      },
      ep8: {
         name: `${anime.name} - ${anime.eps[7].ep_num}`,
         id: `/dubbed${anime.eps[7].id}`
      },
      ep9: {
         name: `${anime.name} - ${anime.eps[8].ep_num}`,
         id: `/dubbed${anime.eps[8].id}`
      },
      ep10: {
         name: `${anime.name} - ${anime.eps[9].ep_num}`,
         id: `/dubbed${anime.eps[9].id}`
      },
      ep11: {
         name: `${anime.name} - ${anime.eps[10].ep_num}`,
         id: `/dubbed${anime.eps[10].id}`
      },
      ep12: {
         name: `${anime.name} - ${anime.eps[11].ep_num}`,
         id: `/dubbed${anime.eps[11].id}`
      },
      ep13: {
         name: `${anime.name} - ${anime.eps[12].ep_num}`,
         id: `/dubbed${anime.eps[12].id}`
      },
      ep14: {
         name: `${anime.name} - ${anime.eps[13].ep_num}`,
         id: `/dubbed${anime.eps[13].id}`
      },
      ep15: {
         name: `${anime.name} - ${anime.eps[14].ep_num}`,
         id: `/dubbed${anime.eps[14].id}`
      },
      ep16: {
         name: `${anime.name} - ${anime.eps[15].ep_num}`,
         id: `/dubbed${anime.eps[15].id}`
      },
      ep17: {
         name: `${anime.name} - ${anime.eps[16].ep_num}`,
         id: `/dubbed${anime.eps[16].id}`
      },
      ep18: {
         name: `${anime.name} - ${anime.eps[17].ep_num}`,
         id: `/dubbed${anime.eps[17].id}`
      },
      ep19: {
         name: `${anime.name} - ${anime.eps[18].ep_num}`,
         id: `/dubbed${anime.eps[18].id}`
      },
      ep20: {
         name: `${anime.name} - ${anime.eps[19].ep_num}`,
         id: `/dubbed${anime.eps[19].id}`
      },
      ep21: {
         name: `${anime.name} - ${anime.eps[20].ep_num}`,
         id: `/dubbed${anime.eps[20].id}`
      },
      ep22: {
         name: `${anime.name} - ${anime.eps[21].ep_num}`,
         id: `/dubbed${anime.eps[21].id}`
      },
      ep23: {
         name: `${anime.name} - ${anime.eps[22].ep_num}`,
         id: `/dubbed${anime.eps[22].id}`
      },
      ep24: {
         name: `${anime.name} - ${anime.eps[23].ep_num}`,
         id: `/dubbed${anime.eps[23].id}`
      }
   });
});

router.get('/1', (req, res) => {
   
   let anime = animeData.anime[3];
   
   res.render('vidPlayer.hbs', {
      pageTitle: `${anime.name} - ${anime.eps[0].ep_num}`,
      vidUrl: anime.eps[0].src,
      listid: anime.id,
      previd: `/dubbed${anime.eps[23].id}`,
      nextid: `/dubbed${anime.eps[1].id}`
   });
});

router.get('/2', (req, res) => {
   
   let anime = animeData.anime[3];
   
   res.render('vidPlayer.hbs', {
      pageTitle: `${anime.name} - ${anime.eps[1].ep_num}`,
      vidUrl: anime.eps[1].src,
      listid: anime.id,
      previd: `/dubbed${anime.eps[0].id}`,
      nextid: `/dubbed${anime.eps[2].id}`
   });
});

router.get('/3', (req, res) => {
   
   let anime = animeData.anime[3];
   
   res.render('vidPlayer.hbs', {
      pageTitle: `${anime.name} - ${anime.eps[2].ep_num}`,
      vidUrl: anime.eps[2].src,
      listid: anime.id,
      previd: `/dubbed${anime.eps[1].id}`,
      nextid: `/dubbed${anime.eps[3].id}`
   });
});

router.get('/4', (req, res) => {
   
   let anime = animeData.anime[3];
   
   res.render('vidPlayer.hbs', {
      pageTitle: `${anime.name} - ${anime.eps[3].ep_num}`,
      vidUrl: anime.eps[3].src,
      listid: anime.id,
      previd: `/dubbed${anime.eps[2].id}`,
      nextid: `/dubbed${anime.eps[4].id}`
   });
});

router.get('/5', (req, res) => {
   
   let anime = animeData.anime[3];
   
   res.render('vidPlayer.hbs', {
      pageTitle: `${anime.name} - ${anime.eps[4].ep_num}`,
      vidUrl: anime.eps[4].src,
      listid: anime.id,
      previd: `/dubbed${anime.eps[3].id}`,
      nextid: `/dubbed${anime.eps[5].id}`
   });
});

router.get('/6', (req, res) => {
   
   let anime = animeData.anime[3];
   
   res.render('vidPlayer.hbs', {
      pageTitle: `${anime.name} - ${anime.eps[5].ep_num}`,
      vidUrl: anime.eps[5].src,
      listid: anime.id,
      previd: `/dubbed${anime.eps[4].id}`,
      nextid: `/dubbed${anime.eps[6].id}`
   });
});

router.get('/7', (req, res) => {
   
   let anime = animeData.anime[3];
   
   res.render('vidPlayer.hbs', {
      pageTitle: `${anime.name} - ${anime.eps[6].ep_num}`,
      vidUrl: anime.eps[6].src,
      listid: anime.id,
      previd: `/dubbed${anime.eps[5].id}`,
      nextid: `/dubbed${anime.eps[7].id}`
   });
});

router.get('/8', (req, res) => {
   
   let anime = animeData.anime[3];
   
   res.render('vidPlayer.hbs', {
      pageTitle: `${anime.name} - ${anime.eps[7].ep_num}`,
      vidUrl: anime.eps[7].src,
      listid: anime.id,
      previd: `/dubbed${anime.eps[6].id}`,
      nextid: `/dubbed${anime.eps[8].id}`
   });
});

router.get('/9', (req, res) => {
   
   let anime = animeData.anime[3];
   
   res.render('vidPlayer.hbs', {
      pageTitle: `${anime.name} - ${anime.eps[8].ep_num}`,
      vidUrl: anime.eps[8].src,
      listid: anime.id,
      previd: `/dubbed${anime.eps[7].id}`,
      nextid: `/dubbed${anime.eps[9].id}`
   });
});

router.get('/10', (req, res) => {
   
   let anime = animeData.anime[3];
   
   res.render('vidPlayer.hbs', {
      pageTitle: `${anime.name} - ${anime.eps[9].ep_num}`,
      vidUrl: anime.eps[9].src,
      listid: anime.id,
      previd: `/dubbed${anime.eps[8].id}`,
      nextid: `/dubbed${anime.eps[10].id}`
   });
});

router.get('/11', (req, res) => {
   
   let anime = animeData.anime[3];
   
   res.render('vidPlayer.hbs', {
      pageTitle: `${anime.name} - ${anime.eps[10].ep_num}`,
      vidUrl: anime.eps[10].src,
      listid: anime.id,
      previd: `/dubbed${anime.eps[9].id}`,
      nextid: `/dubbed${anime.eps[11].id}`
   });
});

router.get('/12', (req, res) => {
   
   let anime = animeData.anime[3];
   
   res.render('vidPlayer.hbs', {
      pageTitle: `${anime.name} - ${anime.eps[11].ep_num}`,
      vidUrl: anime.eps[11].src,
      listid: anime.id,
      previd: `/dubbed${anime.eps[10].id}`,
      nextid: `/dubbed${anime.eps[12].id}`
   });
});

router.get('/13', (req, res) => {
   
   let anime = animeData.anime[3];
   
   res.render('vidPlayer.hbs', {
      pageTitle: `${anime.name} - ${anime.eps[12].ep_num}`,
      vidUrl: anime.eps[12].src,
      listid: anime.id,
      previd: `/dubbed${anime.eps[11].id}`,
      nextid: `/dubbed${anime.eps[13].id}`
   });
});

router.get('/14', (req, res) => {
   
   let anime = animeData.anime[3];
   
   res.render('vidPlayer.hbs', {
      pageTitle: `${anime.name} - ${anime.eps[13].ep_num}`,
      vidUrl: anime.eps[13].src,
      listid: anime.id,
      previd: `/dubbed${anime.eps[12].id}`,
      nextid: `/dubbed${anime.eps[14].id}`
   });
});

router.get('/15', (req, res) => {
   
   let anime = animeData.anime[3];
   
   res.render('vidPlayer.hbs', {
      pageTitle: `${anime.name} - ${anime.eps[14].ep_num}`,
      vidUrl: anime.eps[14].src,
      listid: anime.id,
      previd: `/dubbed${anime.eps[13].id}`,
      nextid: `/dubbed${anime.eps[15].id}`
   });
});

router.get('/16', (req, res) => {
   
   let anime = animeData.anime[3];
   
   res.render('vidPlayer.hbs', {
      pageTitle: `${anime.name} - ${anime.eps[15].ep_num}`,
      vidUrl: anime.eps[15].src,
      listid: anime.id,
      previd: `/dubbed${anime.eps[14].id}`,
      nextid: `/dubbed${anime.eps[16].id}`
   });
});

router.get('/17', (req, res) => {
   
   let anime = animeData.anime[3];
   
   res.render('vidPlayer.hbs', {
      pageTitle: `${anime.name} - ${anime.eps[16].ep_num}`,
      vidUrl: anime.eps[16].src,
      listid: anime.id,
      previd: `/dubbed${anime.eps[15].id}`,
      nextid: `/dubbed${anime.eps[17].id}`
   });
});

router.get('/18', (req, res) => {
   
   let anime = animeData.anime[3];
   
   res.render('vidPlayer.hbs', {
      pageTitle: `${anime.name} - ${anime.eps[17].ep_num}`,
      vidUrl: anime.eps[17].src,
      listid: anime.id,
      previd: `/dubbed${anime.eps[16].id}`,
      nextid: `/dubbed${anime.eps[18].id}`
   });
});

router.get('/19', (req, res) => {
   
   let anime = animeData.anime[3];
   
   res.render('vidPlayer.hbs', {
      pageTitle: `${anime.name} - ${anime.eps[18].ep_num}`,
      vidUrl: anime.eps[18].src,
      listid: anime.id,
      previd: `/dubbed${anime.eps[17].id}`,
      nextid: `/dubbed${anime.eps[19].id}`
   });
});

router.get('/20', (req, res) => {
   
   let anime = animeData.anime[3];
   
   res.render('vidPlayer.hbs', {
      pageTitle: `${anime.name} - ${anime.eps[19].ep_num}`,
      vidUrl: anime.eps[19].src,
      listid: anime.id,
      previd: `/dubbed${anime.eps[18].id}`,
      nextid: `/dubbed${anime.eps[20].id}`
   });
});

router.get('/21', (req, res) => {
   
   let anime = animeData.anime[3];
   
   res.render('vidPlayer.hbs', {
      pageTitle: `${anime.name} - ${anime.eps[20].ep_num}`,
      vidUrl: anime.eps[20].src,
      listid: anime.id,
      previd: `/dubbed${anime.eps[19].id}`,
      nextid: `/dubbed${anime.eps[21].id}`
   });
});

router.get('/22', (req, res) => {
   
   let anime = animeData.anime[3];
   
   res.render('vidPlayer.hbs', {
      pageTitle: `${anime.name} - ${anime.eps[21].ep_num}`,
      vidUrl: anime.eps[21].src,
      listid: anime.id,
      previd: `/dubbed${anime.eps[20].id}`,
      nextid: `/dubbed${anime.eps[22].id}`
   });
});

router.get('/23', (req, res) => {
   
   let anime = animeData.anime[3];
   
   res.render('vidPlayer.hbs', {
      pageTitle: `${anime.name} - ${anime.eps[22].ep_num}`,
      vidUrl: anime.eps[22].src,
      listid: anime.id,
      previd: `/dubbed${anime.eps[21].id}`,
      nextid: `/dubbed${anime.eps[23].id}`
   });
});

router.get('/24', (req, res) => {
   
   let anime = animeData.anime[3];
   
   res.render('vidPlayer.hbs', {
      pageTitle: `${anime.name} - ${anime.eps[23].ep_num}`,
      vidUrl: anime.eps[23].src,
      listid: anime.id,
      previd: `/dubbed${anime.eps[22].id}`,
      nextid: `/dubbed${anime.eps[0].id}`
   });
});


module.exports = router;