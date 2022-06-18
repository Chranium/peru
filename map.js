let mapId = document.getElementById('peruMap');
let generalMap;

console.log(mapId.clientWidth);
console.log(mapId.clientHeight);

console.log(window.innerWidth);
console.log(window.screen.width);

console.log(window.innerHeight);
console.log(window.screen.height);

mapId.style.left = `${(window.innerWidth / 2) - mapId.clientWidth}px`;
mapId.style.top = `${(window.innerHeight / 2) - mapId.clientHeight / 2}px`;

const areas = [
   { map: 'AmazonasMap', text: 'AmazonasText' },
   { map: 'AncashMap', text: 'AncashText' },
   { map: 'ApurimacMap', text: 'ApurimacText' },
   { map: 'ArequipaMap', text: 'ArequipaText' },
   { map: 'AyacuchoMap', text: 'AyacuchoText' },
   { map: 'CajamarcaMap', text: 'CajamarcaText' },
   { map: 'CuzcoMap', text: 'CuzcoText' },
   { map: 'HuancavelicaMap', text: 'HuancavelicaText' },
   { map: 'HuanucoMap', text: 'HuanucoText' },
   { map: 'IcaMap', text: 'IcaText' },
   { map: 'JuninMap', text: 'JuninText' },
   { map: 'LaLibertadMap', text: 'LaLibertadText' },
   { map: 'LambayequeMap', text: 'LambayequeText' },
   { map: 'LimaMap', text: 'LimaText' },
   { map: 'LoretoMap', text: 'LoretoText' },
   { map: 'MadredeDiosMap', text: 'MadredeDiosText' },
   { map: 'MoqueguaMap', text: 'MoqueguaText' },
   { map: 'PascoMap', text: 'PascoText' },
   { map: 'PiuraMap', text: 'PiuraText' },
   { map: 'PunoMap', text: 'PunoText' },
   { map: 'SanMartinMap', text: 'SanMartinText' },
   { map: 'TacnaMap', text: 'TacnaText' },
   { map: 'TumbesMap', text: 'TumbesText' },
   { map: 'UcayaliMap', text: 'UcayaliText' }
];

const bringTopSVG = (targetElement) => {
   let parent = targetElement.ownerSVGElement;
   parent.appendChild(targetElement);
}

const area = {}

area.enter = (map, mapText) => {
   map.style.opacity = 1;
   map.style.stroke = '#00B0F0';
   map.style.strokeWidth = 5;
   map.style.strokeOpacity = 1;
   mapText.style.visibility = 'visible';
   bringTopSVG(map);
   bringTopSVG(mapText);
}

area.out = (map, mapText) => {
   map.style.opacity = 1;
   map.style.stroke = '#646464';
   map.style.strokeWidth = 1;
   mapText.style.visibility = 'hidden';
}

mapId.addEventListener("load", () => {
   generalMap = mapId.contentDocument;

   for (let _area of areas) {
      let map = generalMap.getElementById(_area.map);
      let mapText = generalMap.getElementById(_area.text);
      mapText.style.visibility = 'hidden';
      mapText.addEventListener('mouseenter', () => { area.enter(map, mapText); });
      map.addEventListener('mouseenter', () => { area.enter(map, mapText); });
      map.addEventListener('mouseout', () => { area.out(map, mapText); });
   }
});

