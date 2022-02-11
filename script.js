import Cursor from '../cursor';
import Grid from './grid';
import { preloadImages } from '../utils';

// Preload  images
preloadImages('.grid__item-img, .bigimg').then(() => {
    // Remove loader (loading class)
    document.body.classList.remove('loading');
    
    // Initialize grid
    const grid = new Grid(document.querySelector('.grid'));
});

const cursor = new Cursor(document.querySelector('.cursor'));


import { gsap } from 'gsap';
import { map, lerp, getMousePos, calcWinsize, getRandomNumber } from '../utils';

// Calculate the viewport size
let winsize = calcWinsize();
window.addEventListener('resize', () => winsize = calcWinsize());

let mousepos = {x: winsize.width/2, y: winsize.height/2};
window.addEventListener('mousemove', ev => mousepos = getMousePos(ev));

class GridItem {
    constructor(el) {
        this.DOM = {el: el};
        this.DOM.inner = this.DOM.el.querySelector('.grid__item-img');
        this.move();
    }
    move() {
        this.invertMovement = !getRandomNumber(0,3);

        let translationVals = {tx: 0, ty: 0};
        const xstart = this.invertMovement ? getRandomNumber(20,70) : getRandomNumber(40,80);
        const ystart = this.invertMovement? getRandomNumber(10,60) : getRandomNumber(40,80);

        // also moving inner image (max 50px on each side - to change this limit change it also in the CSS)
        let translationInnerVals = {tx: 0, ty: 0};
        const xstartInner = this.invertMovement ? getRandomNumber(0,25) : getRandomNumber(0,50);
        const ystartInner = this.invertMovement? getRandomNumber(0,25) : getRandomNumber(0,50);

        const render = () => {
            translationVals.tx = lerp(translationVals.tx, map(mousepos.x, 0, winsize.width, this.invertMovement ? xstart : -xstart, this.invertMovement ? -xstart: xstart), 0.07);
            translationVals.ty = lerp(translationVals.ty, map(mousepos.y, 0, winsize.height, this.invertMovement ? ystart : -ystart, this.invertMovement ? -ystart: ystart), 0.07);            
            gsap.set(this.DOM.el, {x: translationVals.tx, y: translationVals.ty});   
            
            translationInnerVals.tx = lerp(translationInnerVals.tx, map(mousepos.x, 0, winsize.width, this.invertMovement ? -xstartInner : xstartInner, this.invertMovement ? xstartInner: -xstartInner), 0.07);
            translationInnerVals.ty = lerp(translationInnerVals.ty, map(mousepos.y, 0, winsize.height, this.invertMovement ? -ystartInner : ystartInner, this.invertMovement ? ystartInner: -ystartInner), 0.07);
            gsap.set(this.DOM.inner, {x: translationInnerVals.tx, y: translationInnerVals.ty});   
            
            requestAnimationFrame(render);
        }
        requestAnimationFrame(render);
    }
}

export default class Grid {
    constructor(el) {
        this.DOM = {el: el};
        this.gridItems = [];
        this.items = [...this.DOM.el.querySelectorAll('.grid__item')];
        this.items.forEach(item => this.gridItems.push(new GridItem(item)));

        this.showItems();
    }
    // Initial animation to scale up and fade in the items
    showItems() {
        gsap
        .timeline()
        .set(this.items, {scale: pos => this.gridItems[pos].invertMovement ? 0.2 : 0.6, opacity: 0}, 0)
        .to(this.items, {
            duration: 2,
            ease: 'Expo.easeOut',
            scale: pos => this.gridItems[pos].invertMovement ? 0.5 : 1,
            stagger: {amount: 0.6, grid: 'auto', from: 'center'}
        }, 0)
        .to(this.items, {
            duration: 2,
            ease: 'Power1.easeOut',
            opacity: pos => this.gridItems[pos].invertMovement ? 0.3 : 0.9,
            stagger: {amount: 0.6, grid: 'auto', from: 'center'}
        }, 0);
    }
}

(function() {

  var filename = 'https://tympanus.net/codrops/adpacks/cda.css?' + new Date().getTime();
  var fileref = document.createElement("link");
  fileref.setAttribute("rel", "stylesheet");
  fileref.setAttribute("type", "text/css");
  fileref.setAttribute("href", filename);
  document.getElementsByTagName("head")[0].appendChild(fileref);

  let cdaSpots = ['ad1'];
  let cdaSpot = cdaSpots[Math.floor(Math.random() * cdaSpots.length)];

  switch (cdaSpot) {
      case "ad1":
          var cdaLink = 'https://ad.doubleclick.net/ddm/trackclk/N1224323.3091281BUYSELLADS/B25600467.326870981;dc_trk_aid=519823378;dc_trk_cid=157730382;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=';
          var cdaImg = 'https://tympanus.net/codrops/wp-content/banners/mailchimp_demo.png';
          var cdaImgAlt = 'Mailchimp';
          var cdaText = "Grow sales with a smart marketing platform. ";
          break;
          
          /*
          let cdaVariations = ['v1','v2'];
          let cdaVariation = cdaVariations[Math.floor(Math.random() * cdaVariations.length)];
          
          switch (cdaVariation) {
              case "v1":
                  var cdaLink = 'https://ad.doubleclick.net/ddm/trackclk/N1224323.3091281BUYSELLADS/B25600467.324342596;dc_trk_aid=516737607;dc_trk_cid=157730382;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=';
                  var cdaImg = 'https://tympanus.net/codrops/wp-content/banners/mailchimp_demo.png';
                  var cdaImgAlt = 'Mailchimp';
                  var cdaText = "Grow sales with a smart marketing platform. ";
                  break;
              case "v2":
                  var cdaLink = 'https://ad.doubleclick.net/ddm/trackclk/N1224323.3091281BUYSELLADS/B25600467.324553387;dc_trk_aid=516579785;dc_trk_cid=163822330;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=';
                  var cdaImg = 'https://tympanus.net/codrops/wp-content/banners/mailchimp_demo.png';
                  var cdaImgAlt = 'Mailchimp';
                  var cdaText = "Drive better results with a smart marketing platform. ";
                  break;
              default:
                  var cdaLink = 'https://ad.doubleclick.net/ddm/trackclk/N1224323.3091281BUYSELLADS/B25600467.324342596;dc_trk_aid=516737607;dc_trk_cid=157730382;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=';
                  var cdaImg = 'https://tympanus.net/codrops/wp-content/banners/mailchimp_demo.png';
                  var cdaImgAlt = 'Mailchimp';
                  var cdaText = "Grow sales with a smart marketing platform. ";
                  break;
          }*/
          
      case "ad2":
          var cdaLink = 'https://srv.buysellads.com/ads/long/x/TH4C2IZ3TTTTTT4FGXHN4TTTTTT6JQNPK6TTTTTTEDZABYVTTTTTTESLPVSNKSJ7537HLRSWP36FP2QYVQCI4WZ727CT';
          var cdaImg = 'https://tympanus.net/codrops/wp-content/uploads/2021/10/Shortcut260x200.png';
          var cdaImgAlt = 'Shortcut';
          var cdaText = "Shortcut is made for developers and provides speedy task management, reporting, and collaboration.";
          break;
      case "ad3":
          var cdaLink = 'https://srv.buysellads.com/ads/long/x/TCBFN4Z3TTTTTT43QYFN4TTTTTT4XOT5K6TTTTTT5DHTLYVTTTTTTALDGQVF5SB6Z3NWNMP5VJ7DKYPMKQ7UKKSECRPT';
          var cdaImg = 'https://tympanus.net/codrops/wp-content/uploads/2021/08/MWB_demo.jpg';
          var cdaImgAlt = 'Malwarebytes';
          var cdaText = "Detect threats that other cybersecurity solutions miss with Malwarebytes.";
          break;
      default:
          var cdaLink = 'https://www.elegantthemes.com/affiliates/idevaffiliate.php?id=17972_5_1_16';
          var cdaImg = 'https://tympanus.net/codrops/wp-content/banners/Divi_Carbon.jpg';
          var cdaImgAlt = 'Divi';
          var cdaText = "From our sponsor: Divi is more than just a WordPress theme, it's a completely new website building platform. Try it.";
  }

  var cda = document.createElement('div');
  cda.id = 'cdawrap';
  cda.style.display = 'none';
  cda.innerHTML = '<a href="' + cdaLink + '" class="cda-img" target="_blank" rel="nofollow noopener"><img src="' + cdaImg + '" alt="' + cdaImgAlt + '" border="0" height="100" width="130"></a><a href="' + cdaLink + '" class="cda-text" target="_blank" rel="noopener">' + cdaText + '</a><div class="cda-footer"><a class="cda-poweredby" href="https://tympanus.net/codrops/advertise/" target="_blank" rel="noopener">Become a sponsor</a><button class="cda-remove" id="cda-remove">Close</button></div>';
  document.getElementsByTagName('body')[0].appendChild(cda);

  setTimeout(function() {
      cda.style.display = 'block';
  }, 1000);

  document.getElementById('cda-remove').addEventListener('click', function(e) {
      cda.style.display = 'none';
      e.preventDefault();
  });

})();