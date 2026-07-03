/* ============ MENU DATA (shared across pages) ============
   img fields map to real photos in img/<slug>.jpg
======================================================== */
const menuData = [
  {
    key:"burgers", name:"Burgers", desc:"Pressed to order", img:"beef-burger",
    items:[
      {n:"Chicken Patty Burger", p:580, img:"chicken-burger"},
      {n:"Beef Patty Burger", p:875, img:"beef-burger"},
      {n:"Chapli Kabab Burger", p:580, img:"double-burger"},
      {n:"Chicken Double Patty Burger", p:750, img:"chicken-burger"},
      {n:"Beef Double Patty Burger", p:1060, img:"double-burger"},
    ]
  },
  {
    key:"sandwiches", name:"Sandwiches & Wraps", desc:"Toasted & rolled fresh", img:"club-sandwich",
    items:[
      {n:"Sandwich Toaster", p:499, img:"toasted-sandwich"},
      {n:"Club Sandwich", p:499, img:"club-sandwich"},
      {n:"Chicken Wrap", p:750, img:"wrap"},
      {n:"Chicken Paratha Roll", p:180, img:"wrap"},
    ]
  },
  {
    key:"fries", name:"Fries & Snacks", desc:"Crispy sides & shareables", img:"loaded-fries",
    items:[
      {n:"Fries", p:270, img:"fries"},
      {n:"Loaded Fries", p:755, img:"loaded-fries"},
      {n:"Nuggets (5 Pieces)", p:450, img:"nuggets"},
      {n:"Chicken Strips (4 Pieces)", p:980, img:"fried-chicken"},
      {n:"10 Pieces Combo *", p:860, img:"fried-chicken", note:"item name to be confirmed"},
    ]
  },
  {
    key:"rice", name:"Rice & Pasta", desc:"Slow-simmered classics", img:"biryani",
    items:[
      {n:"Chicken Biryani", p:820, img:"biryani"},
      {n:"Chicken Pulao", p:720, img:"pulao"},
      {n:"Macaroni", p:550, img:"pasta"},
      {n:"Pasta", p:750, img:"pasta"},
    ]
  },
  {
    key:"salads", name:"Salads & Chaat", desc:"Fresh, tangy & spiced", img:"salad",
    items:[
      {n:"Russian Salad", p:520, img:"salad"},
      {n:"Salad", p:120, img:"green-salad"},
      {n:"Dahi Bhallay", p:430, img:"chaat"},
      {n:"Cream Chaat", p:520, img:"chaat"},
      {n:"Dry Fruit Cream Chaat", p:680, img:"chaat"},
      {n:"Chana Chaat", p:430, img:"chaat"},
      {n:"Fruit Chaat", p:470, img:"fruit"},
    ]
  },
  {
    key:"shakes", name:"Shakes & Drinks", desc:"Thick, cold & blended fresh", img:"choc-shake",
    items:[
      {n:"Mint Margarita", p:510, img:"mint-drink"},
      {n:"Lemon Margarita", p:490, img:"lemon-drink"},
      {n:"Chocolate Shake", p:580, img:"choc-shake"},
      {n:"Mango Shake", p:630, img:"mango-shake"},
      {n:"Peach Shake", p:590, img:"shake"},
      {n:"Banana Shake", p:580, img:"shake"},
      {n:"Banana Date Shake", p:620, img:"shake"},
      {n:"Apple Shake", p:620, img:"shake"},
      {n:"Khoya Khajoor Shake", p:770, img:"choc-shake"},
    ]
  },
  {
    key:"lassi", name:"Lassi", desc:"Traditional & creamy", img:"lassi",
    items:[
      {n:"Meethi Lassi", p:null, img:"lassi", note:"price to be confirmed"},
      {n:"Namkeen Lassi", p:null, img:"lassi", note:"price to be confirmed"},
      {n:"Mango Lassi", p:null, img:"lassi", note:"price to be confirmed"},
    ]
  },
  {
    key:"drinks", name:"Soft Drinks", desc:"Chilled & ready", img:"soft-drink",
    items:[
      {n:"Pepsi 345ml", p:130, img:"soft-drink"},
      {n:"Mirinda 345ml", p:130, img:"soft-drink"},
      {n:"7UP 345ml", p:130, img:"soft-drink"},
      {n:"Mineral Water 500ml", p:85, img:"water"},
    ]
  },
  {
    key:"extras", name:"Sides & Dips", desc:"Extras from our kitchen", img:"kebab",
    items:[
      {n:"Beef Shami Kabab", p:110, img:"kebab"},
      {n:"Chicken Shami Kabab", p:110, img:"kebab"},
      {n:"Aloo Kabab", p:95, img:"kebab"},
      {n:"Chicken Pakora (tray)", p:1300, img:"fried-chicken", note:"unit/quantity to be confirmed"},
      {n:"Raita", p:135, img:"dip"},
      {n:"Churchurry Mayo Dip", p:130, img:"dip"},
      {n:"Garlic Mayo Dip", p:130, img:"dip"},
      {n:"Honey Mayo Dip", p:130, img:"dip"},
      {n:"Wanna Eat Rolls", p:950, img:"spring-rolls"},
    ]
  },
];

const bestSellerPicks = [
  {n:"Chicken Biryani", p:820, img:"biryani", tag:"Rice & Pasta"},
  {n:"Beef Double Patty Burger", p:1060, img:"double-burger", tag:"Burgers"},
  {n:"Loaded Fries", p:755, img:"loaded-fries", tag:"Fries & Snacks"},
  {n:"Khoya Khajoor Shake", p:770, img:"choc-shake", tag:"Shakes & Drinks"},
  {n:"Chicken Wrap", p:750, img:"wrap", tag:"Sandwiches & Wraps"},
];

const galleryPicks = [
  {img:"beef-burger", cat:"burgers", tall:true},
  {img:"biryani", cat:"rice"},
  {img:"choc-shake", cat:"shakes"},
  {img:"fried-chicken", cat:"fries"},
  {img:"chaat", cat:"salads"},
  {img:"kebab", cat:"extras", tall:true},
  {img:"pasta", cat:"rice"},
  {img:"mango-shake", cat:"shakes"},
  {img:"wrap", cat:"sandwiches"},
  {img:"soft-drink", cat:"drinks"},
  {img:"lassi", cat:"lassi"},
  {img:"table", cat:"burgers"},
];

function imgUrl(slug){ return `/img/${slug}.jpg`; }

/* ---- render best sellers (home page) ---- */
function renderBestSellers(){
  const bsRow = document.getElementById('bsRow');
  if(!bsRow) return;
  bestSellerPicks.forEach(it=>{
    bsRow.innerHTML += `
      <div class="bs-card">
        <div class="img"><img src="${imgUrl(it.img)}" alt="${it.n}" loading="lazy"></div>
        <div class="info">
          <span class="bs-tag">${it.tag}</span>
          <h3>${it.n}</h3>
          <div class="bs-price">${it.p}</div>
        </div>
      </div>`;
  });
}

/* ---- render category tiles (home page) ---- */
function renderCatGrid(){
  const catGrid = document.getElementById('catGrid');
  if(!catGrid) return;
  menuData.forEach(cat=>{
    catGrid.innerHTML += `
      <a class="cat-tile" href="menu.html#${cat.key}">
        <span class="cat-thumb"><img src="${imgUrl(cat.img)}" alt="${cat.name}" loading="lazy"></span>
        <strong>${cat.name}</strong>
        <span>${cat.items.length} items</span>
      </a>`;
  });
}

/* ---- render menu tabs + panels (menu page) ---- */
function renderMenu(){
  const menuTabs = document.getElementById('menuTabs');
  const menuPanels = document.getElementById('menuPanels');
  if(!menuTabs || !menuPanels) return;

  const hashKey = window.location.hash.replace('#','');
  const startKey = menuData.some(c=>c.key===hashKey) ? hashKey : menuData[0].key;

  menuData.forEach((cat)=>{
    menuTabs.innerHTML += `<button class="tab-btn ${cat.key===startKey?'active':''}" data-cat="${cat.key}">${cat.name}</button>`;

    let itemsHtml = cat.items.map(it=>`
      <div class="item-card">
        <div class="thumb-sm"><img src="${imgUrl(it.img)}" alt="${it.n}" loading="lazy"></div>
        <div class="item-body">
          <div class="item-top">
            <h4>${it.n}</h4>
            <div class="item-price">${it.p!==null ? 'Rs. '+it.p : 'TBC'}</div>
          </div>
          ${it.note ? `<div class="item-note">* ${it.note}</div>` : ''}
        </div>
      </div>`).join('');

    menuPanels.innerHTML += `
      <div class="menu-panel ${cat.key===startKey?'active':''}" id="panel-${cat.key}">
        <div class="menu-cat-head">
          <div class="thumb"><img src="${imgUrl(cat.img)}" alt="${cat.name}"></div>
          <div>
            <h3>${cat.name}</h3>
            <p>${cat.desc}</p>
          </div>
        </div>
        <div class="item-grid">${itemsHtml}</div>
      </div>`;
  });

  function activateCat(key){
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.toggle('active', b.dataset.cat===key));
    document.querySelectorAll('.menu-panel').forEach(p=>p.classList.toggle('active', p.id===`panel-${key}`));
  }
  menuTabs.addEventListener('click', e=>{
    const btn = e.target.closest('.tab-btn');
    if(!btn) return;
    activateCat(btn.dataset.cat);
    history.replaceState(null,'','#'+btn.dataset.cat);
    window.scrollTo({top: menuTabs.offsetTop - 90, behavior:'smooth'});
  });
}

/* ---- render gallery (gallery page) ---- */
function renderGallery(){
  const galleryGrid = document.getElementById('galleryGrid');
  if(!galleryGrid) return;
  galleryPicks.forEach((g)=>{
    const tall = g.tall ? 'g-tall' : '';
    galleryGrid.innerHTML += `<a class="${tall}" data-cat="${g.cat}" href="${imgUrl(g.img)}" target="_blank"><img src="${imgUrl(g.img)}" alt="Wanna Eat food" loading="lazy"></a>`;
  });
  const filterBar = document.getElementById('galleryFilter');
  if(filterBar){
    const cats = [{key:'all',name:'All'}, ...menuData.map(c=>({key:c.key,name:c.name}))];
    cats.forEach((c,i)=>{
      filterBar.innerHTML += `<button class="tab-btn ${i===0?'active':''}" data-filter="${c.key}">${c.name}</button>`;
    });
    filterBar.addEventListener('click', e=>{
      const btn = e.target.closest('.tab-btn');
      if(!btn) return;
      filterBar.querySelectorAll('.tab-btn').forEach(b=>b.classList.toggle('active', b===btn));
      const f = btn.dataset.filter;
      galleryGrid.querySelectorAll('a').forEach(a=>{
        a.style.display = (f==='all' || a.dataset.cat===f) ? '' : 'none';
      });
    });
  }
}

/* ---- home hero art (local images) ---- */
function renderHeroArt(){
  const c1 = document.getElementById('heroC1');
  const c2 = document.getElementById('heroC2');
  const c3 = document.getElementById('heroC3');
  if(c1) c1.src = imgUrl('beef-burger');
  if(c2) c2.src = imgUrl('biryani');
  if(c3) c3.src = imgUrl('choc-shake');
}

/* ---- shared site chrome behavior ---- */
document.addEventListener('DOMContentLoaded', ()=>{
  renderBestSellers();
  renderCatGrid();
  renderMenu();
  renderGallery();
  renderHeroArt();

  const header = document.getElementById('siteHeader');
  if(header){
    window.addEventListener('scroll', ()=>{
      header.classList.toggle('scrolled', window.scrollY>10);
    });
  }

  const burgerBtn = document.getElementById('burgerBtn');
  const navLinks = document.getElementById('navLinks');
  if(burgerBtn && navLinks){
    burgerBtn.addEventListener('click', ()=>{
      burgerBtn.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.addEventListener('click', e=>{
      if(e.target.tagName==='A'){ burgerBtn.classList.remove('open'); navLinks.classList.remove('open'); }
    });
  }

  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); } });
  },{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
});
