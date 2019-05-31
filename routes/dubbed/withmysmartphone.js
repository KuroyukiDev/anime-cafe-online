const express = require('express');
let router = express.Router();
const animeData = require('./../../public/anime_lib.js').animeData;

router.get('/', (req, res) => {
  
  let anime = animeData.anime[2];
  
  res.render('withmysmartphone.hbs', {
    pageTitle: anime.name,
    banner: anime.imgSrc,
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

router.get('/1', (req, res) => {
  
  let anime = animeData.anime[2];
  
  res.render('vidPlayer.hbs', {
    pageTitle: `${anime.name} - EP #${anime.eps[0].ep_num}`,
    vidUrl: anime.eps[0].src,
    listid: anime.id,
    previd: `/dubbed${anime.eps[11].id}`,
    nextid: `/dubbed${anime.eps[1].id}`
  });
});

router.get('/2', (req, res) => {
  
  let anime = animeData.anime[2];
  
  res.render('vidPlayer.hbs', {
    pageTitle: `${anime.name} - EP #${anime.eps[1].ep_num}`,
    vidUrl: anime.eps[1].src,
    listid: anime.id,
    previd: `/dubbed${anime.eps[0].id}`,
    nextid: `/dubbed${anime.eps[2].id}`
  });
});

router.get('/3', (req, res) => {
  
  let anime = animeData.anime[2];
  
  res.render('vidPlayer.hbs', {
    pageTitle: `${anime.name} - EP #${anime.eps[2].ep_num}`,
    vidUrl: anime.eps[2].src,
    listid: anime.id,
    previd: `/dubbed${anime.eps[1].id}`,
    nextid: `/dubbed${anime.eps[3].id}`
  });
});

router.get('/4', (req, res) => {
  
  let anime = animeData.anime[2];
  
  res.render('vidPlayer.hbs', {
    pageTitle: `${anime.name} - EP #${anime.eps[3].ep_num}`,
    vidUrl: anime.eps[3].src,
    listid: anime.id,
    previd: `/dubbed${anime.eps[2].id}`,
    nextid: `/dubbed${anime.eps[4].id}`
  });
});

router.get('/5', (req, res) => {
  
  let anime = animeData.anime[2];
  
  res.render('vidPlayer.hbs', {
    pageTitle: `${anime.name} - EP #${anime.eps[4].ep_num}`,
    vidUrl: anime.eps[4].src,
    listid: anime.id,
    previd: `/dubbed${anime.eps[3].id}`,
    nextid: `/dubbed${anime.eps[5].id}`
  });
});

router.get('/6', (req, res) => {
  
  let anime = animeData.anime[2];
  
  res.render('vidPlayer.hbs', {
    pageTitle: `${anime.name} - EP #${anime.eps[5].ep_num}`,
    vidUrl: anime.eps[5].src,
    listid: anime.id,
    previd: `/dubbed${anime.eps[4].id}`,
    nextid: `/dubbed${anime.eps[6].id}`
  });
});

router.get('/7', (req, res) => {
  
  let anime = animeData.anime[2];
  
  res.render('vidPlayer.hbs', {
    pageTitle: `${anime.name} - EP #${anime.eps[6].ep_num}`,
    vidUrl: anime.eps[6].src,
    listid: anime.id,
    previd: `/dubbed${anime.eps[5].id}`,
    nextid: `/dubbed${anime.eps[7].id}`
  });
});

router.get('/8', (req, res) => {
  
  let anime = animeData.anime[2];
  
  res.render('vidPlayer.hbs', {
    pageTitle: `${anime.name} - EP #${anime.eps[7].ep_num}`,
    vidUrl: anime.eps[7].src,
    listid: anime.id,
    previd: `/dubbed${anime.eps[6].id}`,
    nextid: `/dubbed${anime.eps[8].id}`
  });
});

router.get('/9', (req, res) => {
  
  let anime = animeData.anime[2];
  
  res.render('vidPlayer.hbs', {
    pageTitle: `${anime.name} - EP #${anime.eps[8].ep_num}`,
    vidUrl: anime.eps[8].src,
    listid: anime.id,
    previd: `/dubbed${anime.eps[7].id}`,
    nextid: `/dubbed${anime.eps[9].id}`
  });
});

router.get('/10', (req, res) => {
  
  let anime = animeData.anime[2];
  
  res.render('vidPlayer.hbs', {
    pageTitle: `${anime.name} - EP #${anime.eps[9].ep_num}`,
    vidUrl: anime.eps[9].src,
    listid: anime.id,
    previd: `/dubbed${anime.eps[8].id}`,
    nextid: `/dubbed${anime.eps[10].id}`
  });
});

router.get('/11', (req, res) => {
  
  let anime = animeData.anime[2];
  
  res.render('vidPlayer.hbs', {
    pageTitle: `${anime.name} - EP #${anime.eps[10].ep_num}`,
    vidUrl: anime.eps[10].src,
    listid: anime.id,
    previd: `/dubbed${anime.eps[9].id}`,
    nextid: `/dubbed${anime.eps[11].id}`
  });
});

router.get('/12', (req, res) => {
  
  let anime = animeData.anime[2];
  
  res.render('vidPlayer.hbs', {
    pageTitle: `${anime.name} - EP #${anime.eps[11].ep_num}`,
    vidUrl: anime.eps[11].src,
    listid: anime.id,
    previd: `/dubbed${anime.eps[10].id}`,
    nextid: `/dubbed${anime.eps[0].id}`
  });
});

module.exports = router;