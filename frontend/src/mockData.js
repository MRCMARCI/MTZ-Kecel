// Mock data for MTZ Tools and Components Store

export const productCategories = [
  {
    id: 1,
    name: "Munkaruházat",
    description: "Prémium Portwest munkaruházat tartósságra tervezve",
    image: "https://images.unsplash.com/photo-1505582866941-6788e0205dd2?w=800",
    items: ["Munkanadrágok", "Munkakabátok", "Overálok", "Mellények"]
  },
  {
    id: 2,
    name: "Munkavédelmi Cipők",
    description: "Maximális védelem kényelemmel párosítva",
    image: "https://images.unsplash.com/photo-1581893260082-8f6953fe27dd?w=800",
    items: ["Bakancsok", "Munkacipők", "Gumicsizmák", "S3 védőcipők"]
  },
  {
    id: 3,
    name: "Munkavédelmi Kesztyűk",
    description: "Professzionális védelem minden munkafázishoz",
    image: "https://images.pexels.com/photos/9754819/pexels-photo-9754819.jpeg?w=800",
    items: ["Bőrkesztyűk", "Latexkesztyűk", "Nitril kesztyűk", "Vágásálló"]
  },
  {
    id: 4,
    name: "Csavarok & Rögzítők",
    description: "Megbízható kötőelemek minden alkalmazáshoz",
    image: "https://images.unsplash.com/photo-1607733067403-a0396fa4d3d0?w=800",
    items: ["Csavarok", "Anyák", "Alátétek", "Menetes rudak"]
  },
  {
    id: 5,
    name: "Kenőanyagok",
    description: "Minőségi olajok és kenőanyagok gépeihez",
    image: "https://images.unsplash.com/photo-1590880795696-20c7dfadacde?w=800",
    items: ["Motor olajok", "Hidraulika olajok", "Váltó olajok", "Zsírok"]
  },
  {
    id: 6,
    name: "Kardántengely Alkatrészek",
    description: "Eredeti minőségű kardántengely részegységek",
    image: "https://images.unsplash.com/photo-1707064892275-a3088e8240be?w=800",
    items: ["Kardántengelyek", "Keresztcsuklók", "Tömítések", "Csapágyak"]
  },
  {
    id: 7,
    name: "Bilincsek & Szorítók",
    description: "Precíz rögzítési megoldások szakembereknek",
    image: "https://images.unsplash.com/photo-1769971361807-1e3d025c2abb?w=800",
    items: ["Tömlőbilincsek", "Fémbilincsek", "Spannbilincsek", "Gyorsbilincsek"]
  },
  {
    id: 8,
    name: "Portwest Védőfelszerelések",
    description: "Hivatalos Portwest termékek raktárról",
    image: "https://images.pexels.com/photos/8488007/pexels-photo-8488007.jpeg?w=800",
    items: ["Védőruházat", "Védőszemüvegek", "Védősisakok", "Hallásvédők"]
  }
];

export const featuredProducts = [
  {
    id: 1,
    name: "Portwest S3 Munkavédelmi Bakancs",
    category: "Munkacipők",
    price: "18 990 Ft",
    image: "https://images.unsplash.com/photo-1774569036555-c3d233425a13?w=600",
    features: ["S3 védelem", "Vízálló", "Acél orrbetét"]
  },
  {
    id: 2,
    name: "Nitril Munkakesztyű Csomag",
    category: "Kesztyűk",
    price: "2 490 Ft",
    image: "https://images.pexels.com/photos/8488007/pexels-photo-8488007.jpeg?w=600",
    features: ["Olajálló", "Csúszásgátló", "10 pár"]
  },
  {
    id: 3,
    name: "M10 Rozsdamentes Csavarszett",
    category: "Csavarok & Anyák",
    price: "4 990 Ft",
    image: "https://images.unsplash.com/photo-1704732061018-3ac738176c20?w=600",
    features: ["100 db", "A4 rozsdamentes", "Alátéttel"]
  },
  {
    id: 4,
    name: "Portwest Munkanadrág",
    category: "Munkaruházat",
    price: "12 990 Ft",
    image: "https://images.unsplash.com/photo-1522832712787-3fbd36c9fe2d?w=600",
    features: ["Több zsebes", "Térdvédő zsebbel", "Tartós anyag"]
  }
];

export const companyInfo = {
  name: "MTZ-Kecel",
  description: "Kecelen, több mint 20 éve szolgáljuk ki vásárlóinkat minőségi szerszámokkal, munkaruházattal és ipari alkatrészekkel. Családi vállalkozásunk a megbízhatóság és szakértelem szimbóluma lett a régióban. Partnereink között olyan neves gyártókat találhatnak, mint a Portwest, így garantáljuk termékeinksz kiemelkedő minőségét.",
  mission: "Célunk, hogy minden ügyfél megtalálja nálunk a munkájához szükséges eszközöket, versenyképes áron, kiemelkedő minőségben és szakértő tanácsadással.",
  values: [
    {
      title: "Minőség",
      description: "Csak ellenőrzött, megbízható gyártóktól kínálunk termékeket"
    },
    {
      title: "Megbízhatóság",
      description: "20+ éve folyamatosan elérhetőek vagyunk vásárlóinknak"
    },
    {
      title: "Szakértelem",
      description: "Tapasztalt munkatársaink segítenek a helyes választásban"
    },
    {
      title: "Ár-érték arány",
      description: "Kiemelkedő minőség mellett versenyképes áraink vannak"
    }
  ]
};

export const contactInfo = {
  address: "6237 Kecel, Soltvadkerti u. 17.",
  phone: "+36 78 422 700",
  mobile: "+36 20 321 3055",
  email: "beleczki.sandor@gmail.com",
  hours: {
    monday: { day: "Hétfő", morning: "07:30 - 12:00", afternoon: "13:00 - 17:00" },
    tuesday: { day: "Kedd", morning: "07:30 - 12:00", afternoon: "13:00 - 17:00" },
    wednesday: { day: "Szerda", morning: "07:30 - 12:00", afternoon: "13:00 - 17:00" },
    thursday: { day: "Csütörtök", morning: "07:30 - 12:00", afternoon: "13:00 - 17:00" },
    friday: { day: "Péntek", morning: "07:30 - 12:00", afternoon: "13:00 - 17:00" },
    saturday: { day: "Szombat", time: "07:30 - 12:00" },
    sunday: { day: "Vasárnap", time: "Zárva" }
  }
};
