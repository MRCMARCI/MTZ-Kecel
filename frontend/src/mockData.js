// Mock data for MTZ Tools and Components Store

export const productCategories = [
  {
    id: 1,
    name: "Munkaruházat",
    description: "Portwest minőségi munkaruházat minden igényre",
    image: "https://images.unsplash.com/photo-1505582866941-6788e0205dd2?w=800",
    items: ["Munkanadrág", "Kabátok", "Overálok", "Mellények"]
  },
  {
    id: 2,
    name: "Munkacipők",
    description: "Biztonságos és kényelmes munkavédelmi cipők",
    image: "https://images.unsplash.com/photo-1581893260082-8f6953fe27dd?w=800",
    items: ["Bakancsok", "Félcipők", "Gumicsizmák", "S3 védőcipők"]
  },
  {
    id: 3,
    name: "Kesztyűk",
    description: "Védő- és munkakesztyűk minden munkához",
    image: "https://images.pexels.com/photos/9754819/pexels-photo-9754819.jpeg?w=800",
    items: ["Bőrkesztyű", "Latexkesztyű", "Nitril kesztyű", "Vágásálló kesztyű"]
  },
  {
    id: 4,
    name: "Csavarok & Anyák",
    description: "Széles választék csavarok és rögzítőelemek",
    image: "https://images.unsplash.com/photo-1607733067403-a0396fa4d3d0?w=800",
    items: ["Hatlapfejű csavarok", "Anyák", "Alátétek", "Menetes rudak"]
  },
  {
    id: 5,
    name: "Olajok",
    description: "Kenőanyagok és ipari olajok",
    image: "https://images.unsplash.com/photo-1590880795696-20c7dfadacde?w=800",
    items: ["Motor olaj", "Hidraulika olaj", "Váltó olaj", "Zsírok"]
  },
  {
    id: 6,
    name: "Kardánok",
    description: "Minőségi kardántengely alkatrészek",
    image: "https://images.unsplash.com/photo-1707064892275-a3088e8240be?w=800",
    items: ["Kardántengely", "Keresztcsuklók", "Tömítések", "Csapágyak"]
  },
  {
    id: 7,
    name: "Bilincsek",
    description: "Tömlőbilincsek és rögzítő megoldások",
    image: "https://images.unsplash.com/photo-1769971361807-1e3d025c2abb?w=800",
    items: ["Tömlőbilincs", "Fémbilincs", "Spannbilincs", "Gyorsbilincs"]
  },
  {
    id: 8,
    name: "Portwest Termékek",
    description: "Hivatalos Portwest márkatermékek",
    image: "https://images.pexels.com/photos/8488007/pexels-photo-8488007.jpeg?w=800",
    items: ["Védőruházat", "Védőszemüveg", "Sisakok", "Hallásvédők"]
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
  name: "MTZ Szerszám és Alkatrész Bolt",
  description: "Több mint 20 éves tapasztalattal rendelkező családi vállalkozás vagyunk, amely az ipari és háztartási szerszámok, munkaruházat és alkatrészek széles választékával várja ügyfeleit. Partnereink között megtalálhatók a legjelentősebb gyártók, mint például a Portwest, így mindig magas minőségű termékeket kínálunk.",
  mission: "Célunk, hogy ügyfeleink számára megbízható, minőségi termékeket és kiváló kiszolgálást nyújtsunk versenyképes árakon.",
  values: [
    {
      title: "Minőség",
      description: "Csak ellenőrzött, megbízható gyártóktól szerezzük be termékeinket"
    },
    {
      title: "Megbízhatóság",
      description: "20+ éve szolgáljuk ki ügyfeleinket folyamatos elérhetőséggel"
    },
    {
      title: "Szakértelem",
      description: "Szakképzett csapatunk segít a megfelelő termék kiválasztásában"
    },
    {
      title: "Ár-érték arány",
      description: "Versenyképes árak mellett kiváló minőséget biztosítunk"
    }
  ]
};

export const contactInfo = {
  address: "1234 Budapest, Ipari utca 45.",
  phone: "+36 1 234 5678",
  mobile: "+36 30 123 4567",
  email: "info@mtzszerszam.hu",
  hours: {
    weekday: "Hétfő - Péntek: 8:00 - 17:00",
    saturday: "Szombat: 8:00 - 13:00",
    sunday: "Vasárnap: Zárva"
  }
};
