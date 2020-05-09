import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() { }

  public getdataf() {
    return [
      {
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTv_dN7Lungz9_Qmdd0QKV1MCTuOUsd0c70EvGPogF7DfgkBya&usqp=CAU',
        name: 'Kathmandu',
        place: 'Nepal',
        desc:
          'Nepal is a tremendously attractive location for mountaineers, rock climbers and adventure seekers.It is being an attractive destination for adventure.',
      },
      {
        image:
          'https://stillmed.olympic.org/media/Images/OlympicOrg/News/2020/03/30/2020-03-30-tokyo-thumbnail-02.jpg',
        name: 'Tokyo',
        place: 'Nepal',
        desc:
          'There’s no better place to admire a historic icon of the capital. The station has been looking particularly spiffy after an extensive restoration a few years back. A major spot for many travellers passing in and out of the city.',
      },
      {
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTU9ANS5rcieo7OUFeyjBTATWos2H9NjOmH1w2QHgDnCpKsiM_0&usqp=CAU',
        name: 'San-Francisco',
        place: 'Nepal',
        desc:
          'San Francisco is home to a little bit of everything. Whether you are a first time visitor or a long- time local, San Francisco Golden Gates welcome all.',
      },
      {
        image:
          'https://secure.i.telegraph.co.uk/multimedia/archive/02423/london_2423609b.jpg',
        name: 'London',
        place: 'Nepal',
        desc:
          'Its little wonder London, England is one of the worlds top tourist destinations, attracting upward of 20 million visitors each year from around the world. Britains capital city is a vibrant arts and entertainment center',
      },
    ];
  }

  public getdatas() {
    return [
      {
        image:
          'https://ttgasia.2017.ttgasia.com/wp-content/uploads/sites/2/2020/04/Singapore-merlion.jpg',
        name: 'Singapore',
        place: 'Nepal',
        desc:
          'Singapore is much more than the sum of its numerous attractions. It’s constantly evolving, reinventing, and reimagining itself, with people who are passionate about creating new possibilities.',
      },
      {
        image:
          'https://churific.com/wp-content/uploads/2015/06/sydney-image.jpg',
        name: 'Australia',
        place: 'Nepal',
        desc:
          'From beaches, national parks, museums, and tourist spots, here are our best picks for you to tour around the land of kangaroos! Make sure you don’t miss out on the best Australia tourist attractions to have a memorable experience.',
      },
      {
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9ufVG-g9uuyW6N2vbrF-VaOukwNF4KSXqO_Q0P4fnVJz0EO4l&usqp=CAU',
        name: 'New-York',
        place: 'New-York',
        desc:
          'One of the greatest cities in the world, New York is always a whirlwind of activity, Many of the best places to visit in New York are within walking distance of each other, or just a short ride away, making this city a delight for sightseeing.',
      },
      {
        image:
          'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/vancouverbc/Aerial_Sunset_Vancouver_d3_copy_1bb86ed0-1edc-4cda-841d-0b033ca0bb72.jpg',
        name: 'Canada',
        place: 'Nepal',
        desc:
          'Canada incredible geographical variety is a significant tourist attractor, most mountainous province and has some of the most spectacular mountain scenery in the world. ',
      },
    ];
  }

  public getbutton() {
    return [
      { text: 'Flights', icon: 'flight' },
      { text: 'Hotels', icon: 'hotel' },
      { text: 'Car-Hire', icon: 'directions_car' },
    ];
  }

  public radio() {
    return [
      { text: 'Return', state: true, value: "1" },
      { text: 'One-Way', state: false, value: "2" },
      { text: 'Multi-city', state: false, value: "3" },
    ];
  }


  // public footer() {
  //   return [
  //     {
  //       header: 'Explore', p: "Cities, City Breaks,Airports,Countries/Regions,Airlines,Flights,Hotels,Car-Hire,App"
  //     },
  //     {
  //       header: 'Partners', p: "'Work with us', 'Advertise with us','Travel Insights','Affiliates','Travel APIs'"
  //     },
  //     {
  //       header: 'Company', p: "'About us','Why Travel','Media','Our People','Sustainability','Brand story','Company Details','Jobs','Travel Features & News','Cookis Policy','Privacy Policy','Terms of Service'"
  //     },
  //     {
  //       header: 'Help', p: "'Help','Privacy Setting',Security'"
  //     }
  //   ]
  // }

  public footer() {
    return [

      'Cities', 'City Breaks', 'Airports', 'Countries/Regions', 'Airlines', 'Flights', 'Hotels', 'Car-Hire', 'App'
      // {
      //   'Work with us', 'Advertise with us','Travel Insights','Affiliates','Travel APIs'
      // },
      // {
      //  'About us','Why Travel','Media','Our People','Sustainability','Brand story','Company Details','Jobs','Travel Features & News','Cookis Policy','Privacy Policy','Terms of Service'
      // },
      // {
      //  'Help','Privacy Setting',Security'
      // }
    ];
  }

  public getlang() {
    return [
      { "code": "en", "name": "English(United Kingdom)", "nativeName": "English" },
      { "code": "ab", "name": "Abkhaz", "nativeName": "аҧсуа" },
      { "code": "aa", "name": "Afar", "nativeName": "Afaraf" },
      { "code": "af", "name": "Afrikaans", "nativeName": "Afrikaans" },
      { "code": "ak", "name": "Akan", "nativeName": "Akan" },
      { "code": "sq", "name": "Albanian", "nativeName": "Shqip" },
      { "code": "am", "name": "Amharic", "nativeName": "አማርኛ" },
      { "code": "ar", "name": "Arabic", "nativeName": "العربية" },
      { "code": "an", "name": "Aragonese", "nativeName": "Aragonés" },
      { "code": "hy", "name": "Armenian", "nativeName": "Հայերեն" },
      { "code": "as", "name": "Assamese", "nativeName": "অসমীয়া" },
      { "code": "av", "name": "Avaric", "nativeName": "авар мацӀ, магӀарул мацӀ" },
      { "code": "ae", "name": "Avestan", "nativeName": "avesta" },
      { "code": "ay", "name": "Aymara", "nativeName": "aymar aru" },
      { "code": "az", "name": "Azerbaijani", "nativeName": "azərbaycan dili" },
      { "code": "bm", "name": "Bambara", "nativeName": "bamanankan" },
      { "code": "ba", "name": "Bashkir", "nativeName": "башҡорт теле" },
      { "code": "eu", "name": "Basque", "nativeName": "euskara, euskera" },
      { "code": "be", "name": "Belarusian", "nativeName": "Беларуская" },
      { "code": "bn", "name": "Bengali", "nativeName": "বাংলা" },
      { "code": "bh", "name": "Bihari", "nativeName": "भोजपुरी" },
      { "code": "bi", "name": "Bislama", "nativeName": "Bislama" },
      { "code": "bs", "name": "Bosnian", "nativeName": "bosanski jezik" },
      { "code": "br", "name": "Breton", "nativeName": "brezhoneg" },
      { "code": "bg", "name": "Bulgarian", "nativeName": "български език" },
      { "code": "my", "name": "Burmese", "nativeName": "ဗမာစာ" },
      { "code": "ca", "name": "Catalan; Valencian", "nativeName": "Català" },
      { "code": "ch", "name": "Chamorro", "nativeName": "Chamoru" },
      { "code": "ce", "name": "Chechen", "nativeName": "нохчийн мотт" },
      { "code": "ny", "name": "Chichewa; Chewa; Nyanja", "nativeName": "chiCheŵa, chinyanja" },
      { "code": "zh", "name": "Chinese", "nativeName": "中文 (Zhōngwén), 汉语, 漢語" },
      { "code": "cv", "name": "Chuvash", "nativeName": "чӑваш чӗлхи" },
      { "code": "kw", "name": "Cornish", "nativeName": "Kernewek" },
      { "code": "co", "name": "Corsican", "nativeName": "corsu, lingua corsa" },
      { "code": "cr", "name": "Cree", "nativeName": "ᓀᐦᐃᔭᐍᐏᐣ" },
      { "code": "hr", "name": "Croatian", "nativeName": "hrvatski" },
      { "code": "cs", "name": "Czech", "nativeName": "česky, čeština" },
      { "code": "da", "name": "Danish", "nativeName": "dansk" },
      { "code": "dv", "name": "Divehi; Dhivehi; Maldivian;", "nativeName": "ދިވެހި" },
      { "code": "nl", "name": "Dutch", "nativeName": "Nederlands, Vlaams" },
      { "code": "eng", "name": "English(USA)", "nativeName": "English" },
      { "code": "eo", "name": "Esperanto", "nativeName": "Esperanto" },
      { "code": "et", "name": "Estonian", "nativeName": "eesti, eesti keel" },
      { "code": "ee", "name": "Ewe", "nativeName": "Eʋegbe" },
      { "code": "fo", "name": "Faroese", "nativeName": "føroyskt" },
      { "code": "fj", "name": "Fijian", "nativeName": "vosa Vakaviti" },
      { "code": "fi", "name": "Finnish", "nativeName": "suomi, suomen kieli" },
      { "code": "fr", "name": "French", "nativeName": "français, langue française" },
      { "code": "ff", "name": "Fula; Fulah; Pulaar; Pular", "nativeName": "Fulfulde, Pulaar, Pular" },
      { "code": "gl", "name": "Galician", "nativeName": "Galego" },
      { "code": "ka", "name": "Georgian", "nativeName": "ქართული" },
      { "code": "de", "name": "German", "nativeName": "Deutsch" },
      { "code": "el", "name": "Greek, Modern", "nativeName": "Ελληνικά" },
      { "code": "gn", "name": "Guaraní", "nativeName": "Avañeẽ" },
      { "code": "gu", "name": "Gujarati", "nativeName": "ગુજરાતી" },
      { "code": "ht", "name": "Haitian; Haitian Creole", "nativeName": "Kreyòl ayisyen" },
      { "code": "ha", "name": "Hausa", "nativeName": "Hausa, هَوُسَ" },
      { "code": "he", "name": "Hebrew (modern)", "nativeName": "עברית" },
      { "code": "hz", "name": "Herero", "nativeName": "Otjiherero" },
      { "code": "hi", "name": "Hindi", "nativeName": "हिन्दी, हिंदी" },
      { "code": "ho", "name": "Hiri Motu", "nativeName": "Hiri Motu" },
      { "code": "hu", "name": "Hungarian", "nativeName": "Magyar" },
      { "code": "ia", "name": "Interlingua", "nativeName": "Interlingua" },
      { "code": "id", "name": "Indonesian", "nativeName": "Bahasa Indonesia" },
      { "code": "ie", "name": "Interlingue", "nativeName": "Originally called Occidental; then Interlingue after WWII" },
      { "code": "ga", "name": "Irish", "nativeName": "Gaeilge" },
      { "code": "ig", "name": "Igbo", "nativeName": "Asụsụ Igbo" },
      { "code": "ik", "name": "Inupiaq", "nativeName": "Iñupiaq, Iñupiatun" },
      { "code": "io", "name": "Ido", "nativeName": "Ido" },
      { "code": "is", "name": "Icelandic", "nativeName": "Íslenska" },
      { "code": "it", "name": "Italian", "nativeName": "Italiano" },
      { "code": "iu", "name": "Inuktitut", "nativeName": "ᐃᓄᒃᑎᑐᑦ" },
      { "code": "ja", "name": "Japanese", "nativeName": "日本語 (にほんご／にっぽんご)" },
      { "code": "jv", "name": "Javanese", "nativeName": "basa Jawa" },
      { "code": "kl", "name": "Kalaallisut, Greenlandic", "nativeName": "kalaallisut, kalaallit oqaasii" },
      { "code": "kn", "name": "Kannada", "nativeName": "ಕನ್ನಡ" },
      { "code": "kr", "name": "Kanuri", "nativeName": "Kanuri" },
      { "code": "ks", "name": "Kashmiri", "nativeName": "कश्मीरी, كشميري‎" },
      { "code": "kk", "name": "Kazakh", "nativeName": "Қазақ тілі" },
      { "code": "km", "name": "Khmer", "nativeName": "ភាសាខ្មែរ" },
      { "code": "ki", "name": "Kikuyu, Gikuyu", "nativeName": "Gĩkũyũ" },
      { "code": "rw", "name": "Kinyarwanda", "nativeName": "Ikinyarwanda" },
      { "code": "ky", "name": "Kirghiz, Kyrgyz", "nativeName": "кыргыз тили" },
      { "code": "kv", "name": "Komi", "nativeName": "коми кыв" },
      { "code": "kg", "name": "Kongo", "nativeName": "KiKongo" },
      { "code": "ko", "name": "Korean", "nativeName": "한국어 (韓國語), 조선말 (朝鮮語)" },
      { "code": "ku", "name": "Kurdish", "nativeName": "Kurdî, كوردی‎" },
      { "code": "kj", "name": "Kwanyama, Kuanyama", "nativeName": "Kuanyama" },
      { "code": "la", "name": "Latin", "nativeName": "latine, lingua latina" },
      { "code": "lb", "name": "Luxembourgish, Letzeburgesch", "nativeName": "Lëtzebuergesch" },
      { "code": "lg", "name": "Luganda", "nativeName": "Luganda" },
      { "code": "li", "name": "Limburgish, Limburgan, Limburger", "nativeName": "Limburgs" },
      { "code": "ln", "name": "Lingala", "nativeName": "Lingála" },
      { "code": "lo", "name": "Lao", "nativeName": "ພາສາລາວ" },
      { "code": "lt", "name": "Lithuanian", "nativeName": "lietuvių kalba" },
      { "code": "lu", "name": "Luba-Katanga", "nativeName": "" },
      { "code": "lv", "name": "Latvian", "nativeName": "latviešu valoda" },
      { "code": "gv", "name": "Manx", "nativeName": "Gaelg, Gailck" },
      { "code": "mk", "name": "Macedonian", "nativeName": "македонски јазик" },
      { "code": "mg", "name": "Malagasy", "nativeName": "Malagasy fiteny" },
      { "code": "ms", "name": "Malay", "nativeName": "bahasa Melayu, بهاس ملايو‎" },
      { "code": "ml", "name": "Malayalam", "nativeName": "മലയാളം" },
      { "code": "mt", "name": "Maltese", "nativeName": "Malti" },
      { "code": "mi", "name": "Māori", "nativeName": "te reo Māori" },
      { "code": "mr", "name": "Marathi (Marāṭhī)", "nativeName": "मराठी" },
      { "code": "mh", "name": "Marshallese", "nativeName": "Kajin M̧ajeļ" },
      { "code": "mn", "name": "Mongolian", "nativeName": "монгол" },
      { "code": "na", "name": "Nauru", "nativeName": "Ekakairũ Naoero" },
      { "code": "nv", "name": "Navajo, Navaho", "nativeName": "Diné bizaad, Dinékʼehǰí" },
      { "code": "nb", "name": "Norwegian Bokmål", "nativeName": "Norsk bokmål" },
      { "code": "nd", "name": "North Ndebele", "nativeName": "isiNdebele" },
      { "code": "ne", "name": "Nepali", "nativeName": "नेपाली" },
      { "code": "ng", "name": "Ndonga", "nativeName": "Owambo" },
      { "code": "nn", "name": "Norwegian Nynorsk", "nativeName": "Norsk nynorsk" },
      { "code": "no", "name": "Norwegian", "nativeName": "Norsk" },
      { "code": "ii", "name": "Nuosu", "nativeName": "ꆈꌠ꒿ Nuosuhxop" },
      { "code": "nr", "name": "South Ndebele", "nativeName": "isiNdebele" },
      { "code": "oc", "name": "Occitan", "nativeName": "Occitan" },
      { "code": "oj", "name": "Ojibwe, Ojibwa", "nativeName": "ᐊᓂᔑᓈᐯᒧᐎᓐ" },
      { "code": "cu", "name": "Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic", "nativeName": "ѩзыкъ словѣньскъ" },
      { "code": "om", "name": "Oromo", "nativeName": "Afaan Oromoo" },
      { "code": "or", "name": "Oriya", "nativeName": "ଓଡ଼ିଆ" },
      { "code": "os", "name": "Ossetian, Ossetic", "nativeName": "ирон æвзаг" },
      { "code": "pa", "name": "Panjabi, Punjabi", "nativeName": "ਪੰਜਾਬੀ, پنجابی‎" },
      { "code": "pi", "name": "Pāli", "nativeName": "पाऴि" },
      { "code": "fa", "name": "Persian", "nativeName": "فارسی" },
      { "code": "pl", "name": "Polish", "nativeName": "polski" },
      { "code": "ps", "name": "Pashto, Pushto", "nativeName": "پښتو" },
      { "code": "pt", "name": "Portuguese", "nativeName": "Português" },
      { "code": "qu", "name": "Quechua", "nativeName": "Runa Simi, Kichwa" },
      { "code": "rm", "name": "Romansh", "nativeName": "rumantsch grischun" },
      { "code": "rn", "name": "Kirundi", "nativeName": "kiRundi" },
      { "code": "ro", "name": "Romanian, Moldavian, Moldovan", "nativeName": "română" },
      { "code": "ru", "name": "Russian", "nativeName": "русский язык" },
      { "code": "sa", "name": "Sanskrit (Saṁskṛta)", "nativeName": "संस्कृतम्" },
      { "code": "sc", "name": "Sardinian", "nativeName": "sardu" },
      { "code": "sd", "name": "Sindhi", "nativeName": "सिन्धी, سنڌي، سندھی‎" },
      { "code": "se", "name": "Northern Sami", "nativeName": "Davvisámegiella" },
      { "code": "sm", "name": "Samoan", "nativeName": "gagana faa Samoa" },
      { "code": "sg", "name": "Sango", "nativeName": "yângâ tî sängö" },
      { "code": "sr", "name": "Serbian", "nativeName": "српски језик" },
      { "code": "gd", "name": "Scottish Gaelic; Gaelic", "nativeName": "Gàidhlig" },
      { "code": "sn", "name": "Shona", "nativeName": "chiShona" },
      { "code": "si", "name": "Sinhala, Sinhalese", "nativeName": "සිංහල" },
      { "code": "sk", "name": "Slovak", "nativeName": "slovenčina" },
      { "code": "sl", "name": "Slovene", "nativeName": "slovenščina" },
      { "code": "so", "name": "Somali", "nativeName": "Soomaaliga, af Soomaali" },
      { "code": "st", "name": "Southern Sotho", "nativeName": "Sesotho" },
      { "code": "es", "name": "Spanish; Castilian", "nativeName": "español, castellano" },
      { "code": "su", "name": "Sundanese", "nativeName": "Basa Sunda" },
      { "code": "sw", "name": "Swahili", "nativeName": "Kiswahili" },
      { "code": "ss", "name": "Swati", "nativeName": "SiSwati" },
      { "code": "sv", "name": "Swedish", "nativeName": "svenska" },
      { "code": "ta", "name": "Tamil", "nativeName": "தமிழ்" },
      { "code": "te", "name": "Telugu", "nativeName": "తెలుగు" },
      { "code": "tg", "name": "Tajik", "nativeName": "тоҷикӣ, toğikī, تاجیکی‎" },
      { "code": "th", "name": "Thai", "nativeName": "ไทย" },
      { "code": "ti", "name": "Tigrinya", "nativeName": "ትግርኛ" },
      { "code": "bo", "name": "Tibetan Standard, Tibetan, Central", "nativeName": "བོད་ཡིག" },
      { "code": "tk", "name": "Turkmen", "nativeName": "Türkmen, Түркмен" },
      { "code": "tl", "name": "Tagalog", "nativeName": "Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔" },
      { "code": "tn", "name": "Tswana", "nativeName": "Setswana" },
      { "code": "to", "name": "Tonga (Tonga Islands)", "nativeName": "faka Tonga" },
      { "code": "tr", "name": "Turkish", "nativeName": "Türkçe" },
      { "code": "ts", "name": "Tsonga", "nativeName": "Xitsonga" },
      { "code": "tt", "name": "Tatar", "nativeName": "татарча, tatarça, تاتارچا‎" },
      { "code": "tw", "name": "Twi", "nativeName": "Twi" },
      { "code": "ty", "name": "Tahitian", "nativeName": "Reo Tahiti" },
      { "code": "ug", "name": "Uighur, Uyghur", "nativeName": "Uyƣurqə, ئۇيغۇرچە‎" },
      { "code": "uk", "name": "Ukrainian", "nativeName": "українська" },
      { "code": "ur", "name": "Urdu", "nativeName": "اردو" },
      { "code": "uz", "name": "Uzbek", "nativeName": "zbek, Ўзбек, أۇزبېك‎" },
      { "code": "ve", "name": "Venda", "nativeName": "Tshivenḓa" },
      { "code": "vi", "name": "Vietnamese", "nativeName": "Tiếng Việt" },
      { "code": "vo", "name": "Volapük", "nativeName": "Volapük" },
      { "code": "wa", "name": "Walloon", "nativeName": "Walon" },
      { "code": "cy", "name": "Welsh", "nativeName": "Cymraeg" },
      { "code": "wo", "name": "Wolof", "nativeName": "Wollof" },
      { "code": "fy", "name": "Western Frisian", "nativeName": "Frysk" },
      { "code": "xh", "name": "Xhosa", "nativeName": "isiXhosa" },
      { "code": "yi", "name": "Yiddish", "nativeName": "ייִדיש" },
      { "code": "yo", "name": "Yoruba", "nativeName": "Yorùbá" },
      { "code": "za", "name": "Zhuang, Chuang", "nativeName": "Saɯ cueŋƅ, Saw cuengh" }
    ]
  }

  public getCurrency() {
    return [
      {
        "symbol": "NPRs",
        "name": "Nepalese Rupee",
        "symbol_native": "नेरू",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "NPR",
        "name_plural": "Nepalese rupees"
      },
      {
        "symbol": "$",
        "name": "US Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "USD",
        "name_plural": "US dollars"
      },
      {
        "symbol": "CA$",
        "name": "Canadian Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "CAD",
        "name_plural": "Canadian dollars"
      },
      {
        "symbol": "€",
        "name": "Euro",
        "symbol_native": "€",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "EUR",
        "name_plural": "euros"
      },
      {
        "symbol": "AED",
        "name": "United Arab Emirates Dirham",
        "symbol_native": "د.إ.‏",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "AED",
        "name_plural": "UAE dirhams"
      },
      {
        "symbol": "Af",
        "name": "Afghan Afghani",
        "symbol_native": "؋",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "AFN",
        "name_plural": "Afghan Afghanis"
      },
      {
        "symbol": "ALL",
        "name": "Albanian Lek",
        "symbol_native": "Lek",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "ALL",
        "name_plural": "Albanian lekë"
      },
      {
        "symbol": "AMD",
        "name": "Armenian Dram",
        "symbol_native": "դր.",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "AMD",
        "name_plural": "Armenian drams"
      },
      {
        "symbol": "AR$",
        "name": "Argentine Peso",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "ARS",
        "name_plural": "Argentine pesos"
      },
      {
        "symbol": "AU$",
        "name": "Australian Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "AUD",
        "name_plural": "Australian dollars"
      },
      {
        "symbol": "man.",
        "name": "Azerbaijani Manat",
        "symbol_native": "ман.",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "AZN",
        "name_plural": "Azerbaijani manats"
      },
      {
        "symbol": "KM",
        "name": "Bosnia-Herzegovina Convertible Mark",
        "symbol_native": "KM",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BAM",
        "name_plural": "Bosnia-Herzegovina convertible marks"
      },
      {
        "symbol": "Tk",
        "name": "Bangladeshi Taka",
        "symbol_native": "৳",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BDT",
        "name_plural": "Bangladeshi takas"
      },
      {
        "symbol": "BGN",
        "name": "Bulgarian Lev",
        "symbol_native": "лв.",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BGN",
        "name_plural": "Bulgarian leva"
      },
      {
        "symbol": "BD",
        "name": "Bahraini Dinar",
        "symbol_native": "د.ب.‏",
        "decimal_digits": 3,
        "rounding": 0,
        "code": "BHD",
        "name_plural": "Bahraini dinars"
      },
      {
        "symbol": "FBu",
        "name": "Burundian Franc",
        "symbol_native": "FBu",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "BIF",
        "name_plural": "Burundian francs"
      },
      {
        "symbol": "BN$",
        "name": "Brunei Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BND",
        "name_plural": "Brunei dollars"
      },
      {
        "symbol": "Bs",
        "name": "Bolivian Boliviano",
        "symbol_native": "Bs",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BOB",
        "name_plural": "Bolivian bolivianos"
      },
      {
        "symbol": "R$",
        "name": "Brazilian Real",
        "symbol_native": "R$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BRL",
        "name_plural": "Brazilian reals"
      },
      {
        "symbol": "BWP",
        "name": "Botswanan Pula",
        "symbol_native": "P",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BWP",
        "name_plural": "Botswanan pulas"
      },
      {
        "symbol": "Br",
        "name": "Belarusian Ruble",
        "symbol_native": "руб.",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BYN",
        "name_plural": "Belarusian rubles"
      },
      {
        "symbol": "BZ$",
        "name": "Belize Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BZD",
        "name_plural": "Belize dollars"
      },
      {
        "symbol": "CDF",
        "name": "Congolese Franc",
        "symbol_native": "FrCD",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "CDF",
        "name_plural": "Congolese francs"
      },
      {
        "symbol": "CHF",
        "name": "Swiss Franc",
        "symbol_native": "CHF",
        "decimal_digits": 2,
        "rounding": 0.05,
        "code": "CHF",
        "name_plural": "Swiss francs"
      },
      {
        "symbol": "CL$",
        "name": "Chilean Peso",
        "symbol_native": "$",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "CLP",
        "name_plural": "Chilean pesos"
      },
      {
        "symbol": "CN¥",
        "name": "Chinese Yuan",
        "symbol_native": "CN¥",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "CNY",
        "name_plural": "Chinese yuan"
      },
      {
        "symbol": "CO$",
        "name": "Colombian Peso",
        "symbol_native": "$",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "COP",
        "name_plural": "Colombian pesos"
      },
      {
        "symbol": "₡",
        "name": "Costa Rican Colón",
        "symbol_native": "₡",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "CRC",
        "name_plural": "Costa Rican colóns"
      },
      {
        "symbol": "CV$",
        "name": "Cape Verdean Escudo",
        "symbol_native": "CV$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "CVE",
        "name_plural": "Cape Verdean escudos"
      },
      {
        "symbol": "Kč",
        "name": "Czech Republic Koruna",
        "symbol_native": "Kč",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "CZK",
        "name_plural": "Czech Republic korunas"
      },
      {
        "symbol": "Fdj",
        "name": "Djiboutian Franc",
        "symbol_native": "Fdj",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "DJF",
        "name_plural": "Djiboutian francs"
      },
      {
        "symbol": "Dkr",
        "name": "Danish Krone",
        "symbol_native": "kr",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "DKK",
        "name_plural": "Danish kroner"
      },
      {
        "symbol": "RD$",
        "name": "Dominican Peso",
        "symbol_native": "RD$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "DOP",
        "name_plural": "Dominican pesos"
      },
      {
        "symbol": "DA",
        "name": "Algerian Dinar",
        "symbol_native": "د.ج.‏",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "DZD",
        "name_plural": "Algerian dinars"
      },
      {
        "symbol": "Ekr",
        "name": "Estonian Kroon",
        "symbol_native": "kr",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "EEK",
        "name_plural": "Estonian kroons"
      },
      {
        "symbol": "EGP",
        "name": "Egyptian Pound",
        "symbol_native": "ج.م.‏",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "EGP",
        "name_plural": "Egyptian pounds"
      },
      {
        "symbol": "Nfk",
        "name": "Eritrean Nakfa",
        "symbol_native": "Nfk",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "ERN",
        "name_plural": "Eritrean nakfas"
      },
      {
        "symbol": "Br",
        "name": "Ethiopian Birr",
        "symbol_native": "Br",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "ETB",
        "name_plural": "Ethiopian birrs"
      },
      {
        "symbol": "£",
        "name": "British Pound Sterling",
        "symbol_native": "£",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "GBP",
        "name_plural": "British pounds sterling"
      },
      {
        "symbol": "GEL",
        "name": "Georgian Lari",
        "symbol_native": "GEL",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "GEL",
        "name_plural": "Georgian laris"
      },
      {
        "symbol": "GH₵",
        "name": "Ghanaian Cedi",
        "symbol_native": "GH₵",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "GHS",
        "name_plural": "Ghanaian cedis"
      },
      {
        "symbol": "FG",
        "name": "Guinean Franc",
        "symbol_native": "FG",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "GNF",
        "name_plural": "Guinean francs"
      },
      {
        "symbol": "GTQ",
        "name": "Guatemalan Quetzal",
        "symbol_native": "Q",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "GTQ",
        "name_plural": "Guatemalan quetzals"
      },
      {
        "symbol": "HK$",
        "name": "Hong Kong Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "HKD",
        "name_plural": "Hong Kong dollars"
      },
      {
        "symbol": "HNL",
        "name": "Honduran Lempira",
        "symbol_native": "L",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "HNL",
        "name_plural": "Honduran lempiras"
      },
      {
        "symbol": "kn",
        "name": "Croatian Kuna",
        "symbol_native": "kn",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "HRK",
        "name_plural": "Croatian kunas"
      },
      {
        "symbol": "Ft",
        "name": "Hungarian Forint",
        "symbol_native": "Ft",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "HUF",
        "name_plural": "Hungarian forints"
      },
      {
        "symbol": "Rp",
        "name": "Indonesian Rupiah",
        "symbol_native": "Rp",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "IDR",
        "name_plural": "Indonesian rupiahs"
      },
      {
        "symbol": "₪",
        "name": "Israeli New Sheqel",
        "symbol_native": "₪",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "ILS",
        "name_plural": "Israeli new sheqels"
      },
      {
        "symbol": "Rs",
        "name": "Indian Rupee",
        "symbol_native": "টকা",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "INR",
        "name_plural": "Indian rupees"
      },
      {
        "symbol": "IQD",
        "name": "Iraqi Dinar",
        "symbol_native": "د.ع.‏",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "IQD",
        "name_plural": "Iraqi dinars"
      },
      {
        "symbol": "IRR",
        "name": "Iranian Rial",
        "symbol_native": "﷼",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "IRR",
        "name_plural": "Iranian rials"
      },
      {
        "symbol": "Ikr",
        "name": "Icelandic Króna",
        "symbol_native": "kr",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "ISK",
        "name_plural": "Icelandic krónur"
      },
      {
        "symbol": "J$",
        "name": "Jamaican Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "JMD",
        "name_plural": "Jamaican dollars"
      },
      {
        "symbol": "JD",
        "name": "Jordanian Dinar",
        "symbol_native": "د.أ.‏",
        "decimal_digits": 3,
        "rounding": 0,
        "code": "JOD",
        "name_plural": "Jordanian dinars"
      },
      {
        "symbol": "¥",
        "name": "Japanese Yen",
        "symbol_native": "￥",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "JPY",
        "name_plural": "Japanese yen"
      },
      {
        "symbol": "Ksh",
        "name": "Kenyan Shilling",
        "symbol_native": "Ksh",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "KES",
        "name_plural": "Kenyan shillings"
      },
      {
        "symbol": "KHR",
        "name": "Cambodian Riel",
        "symbol_native": "៛",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "KHR",
        "name_plural": "Cambodian riels"
      },
      {
        "symbol": "CF",
        "name": "Comorian Franc",
        "symbol_native": "FC",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "KMF",
        "name_plural": "Comorian francs"
      },
      {
        "symbol": "₩",
        "name": "South Korean Won",
        "symbol_native": "₩",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "KRW",
        "name_plural": "South Korean won"
      },
      {
        "symbol": "KD",
        "name": "Kuwaiti Dinar",
        "symbol_native": "د.ك.‏",
        "decimal_digits": 3,
        "rounding": 0,
        "code": "KWD",
        "name_plural": "Kuwaiti dinars"
      },
      {
        "symbol": "KZT",
        "name": "Kazakhstani Tenge",
        "symbol_native": "тңг.",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "KZT",
        "name_plural": "Kazakhstani tenges"
      },
      {
        "symbol": "LB£",
        "name": "Lebanese Pound",
        "symbol_native": "ل.ل.‏",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "LBP",
        "name_plural": "Lebanese pounds"
      },
      {
        "symbol": "SLRs",
        "name": "Sri Lankan Rupee",
        "symbol_native": "SL Re",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "LKR",
        "name_plural": "Sri Lankan rupees"
      },
      {
        "symbol": "Lt",
        "name": "Lithuanian Litas",
        "symbol_native": "Lt",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "LTL",
        "name_plural": "Lithuanian litai"
      },
      {
        "symbol": "Ls",
        "name": "Latvian Lats",
        "symbol_native": "Ls",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "LVL",
        "name_plural": "Latvian lati"
      },
      {
        "symbol": "LD",
        "name": "Libyan Dinar",
        "symbol_native": "د.ل.‏",
        "decimal_digits": 3,
        "rounding": 0,
        "code": "LYD",
        "name_plural": "Libyan dinars"
      },
      {
        "symbol": "MAD",
        "name": "Moroccan Dirham",
        "symbol_native": "د.م.‏",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "MAD",
        "name_plural": "Moroccan dirhams"
      },
      {
        "symbol": "MDL",
        "name": "Moldovan Leu",
        "symbol_native": "MDL",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "MDL",
        "name_plural": "Moldovan lei"
      },
      {
        "symbol": "MGA",
        "name": "Malagasy Ariary",
        "symbol_native": "MGA",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "MGA",
        "name_plural": "Malagasy Ariaries"
      },
      {
        "symbol": "MKD",
        "name": "Macedonian Denar",
        "symbol_native": "MKD",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "MKD",
        "name_plural": "Macedonian denari"
      },
      {
        "symbol": "MMK",
        "name": "Myanma Kyat",
        "symbol_native": "K",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "MMK",
        "name_plural": "Myanma kyats"
      },
      {
        "symbol": "MOP$",
        "name": "Macanese Pataca",
        "symbol_native": "MOP$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "MOP",
        "name_plural": "Macanese patacas"
      },
      {
        "symbol": "MURs",
        "name": "Mauritian Rupee",
        "symbol_native": "MURs",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "MUR",
        "name_plural": "Mauritian rupees"
      },
      {
        "symbol": "MX$",
        "name": "Mexican Peso",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "MXN",
        "name_plural": "Mexican pesos"
      },
      {
        "symbol": "RM",
        "name": "Malaysian Ringgit",
        "symbol_native": "RM",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "MYR",
        "name_plural": "Malaysian ringgits"
      },
      {
        "symbol": "MTn",
        "name": "Mozambican Metical",
        "symbol_native": "MTn",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "MZN",
        "name_plural": "Mozambican meticals"
      },
      {
        "symbol": "N$",
        "name": "Namibian Dollar",
        "symbol_native": "N$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "NAD",
        "name_plural": "Namibian dollars"
      },
      {
        "symbol": "₦",
        "name": "Nigerian Naira",
        "symbol_native": "₦",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "NGN",
        "name_plural": "Nigerian nairas"
      },
      {
        "symbol": "C$",
        "name": "Nicaraguan Córdoba",
        "symbol_native": "C$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "NIO",
        "name_plural": "Nicaraguan córdobas"
      },
      {
        "symbol": "Nkr",
        "name": "Norwegian Krone",
        "symbol_native": "kr",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "NOK",
        "name_plural": "Norwegian kroner"
      },
      {
        "symbol": "NZ$",
        "name": "New Zealand Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "NZD",
        "name_plural": "New Zealand dollars"
      },
      {
        "symbol": "OMR",
        "name": "Omani Rial",
        "symbol_native": "ر.ع.‏",
        "decimal_digits": 3,
        "rounding": 0,
        "code": "OMR",
        "name_plural": "Omani rials"
      },
      {
        "symbol": "B/.",
        "name": "Panamanian Balboa",
        "symbol_native": "B/.",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "PAB",
        "name_plural": "Panamanian balboas"
      },
      {
        "symbol": "S/.",
        "name": "Peruvian Nuevo Sol",
        "symbol_native": "S/.",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "PEN",
        "name_plural": "Peruvian nuevos soles"
      },
      {
        "symbol": "₱",
        "name": "Philippine Peso",
        "symbol_native": "₱",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "PHP",
        "name_plural": "Philippine pesos"
      },
      {
        "symbol": "PKRs",
        "name": "Pakistani Rupee",
        "symbol_native": "₨",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "PKR",
        "name_plural": "Pakistani rupees"
      },
      {
        "symbol": "zł",
        "name": "Polish Zloty",
        "symbol_native": "zł",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "PLN",
        "name_plural": "Polish zlotys"
      },
      {
        "symbol": "₲",
        "name": "Paraguayan Guarani",
        "symbol_native": "₲",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "PYG",
        "name_plural": "Paraguayan guaranis"
      },
      {
        "symbol": "QR",
        "name": "Qatari Rial",
        "symbol_native": "ر.ق.‏",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "QAR",
        "name_plural": "Qatari rials"
      },
      {
        "symbol": "RON",
        "name": "Romanian Leu",
        "symbol_native": "RON",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "RON",
        "name_plural": "Romanian lei"
      },
      {
        "symbol": "din.",
        "name": "Serbian Dinar",
        "symbol_native": "дин.",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "RSD",
        "name_plural": "Serbian dinars"
      },
      {
        "symbol": "RUB",
        "name": "Russian Ruble",
        "symbol_native": "₽.",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "RUB",
        "name_plural": "Russian rubles"
      },
      {
        "symbol": "RWF",
        "name": "Rwandan Franc",
        "symbol_native": "FR",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "RWF",
        "name_plural": "Rwandan francs"
      },
      {
        "symbol": "SR",
        "name": "Saudi Riyal",
        "symbol_native": "ر.س.‏",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "SAR",
        "name_plural": "Saudi riyals"
      },
      {
        "symbol": "SDG",
        "name": "Sudanese Pound",
        "symbol_native": "SDG",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "SDG",
        "name_plural": "Sudanese pounds"
      },
      {
        "symbol": "Skr",
        "name": "Swedish Krona",
        "symbol_native": "kr",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "SEK",
        "name_plural": "Swedish kronor"
      },
      {
        "symbol": "S$",
        "name": "Singapore Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "SGD",
        "name_plural": "Singapore dollars"
      },
      {
        "symbol": "Ssh",
        "name": "Somali Shilling",
        "symbol_native": "Ssh",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "SOS",
        "name_plural": "Somali shillings"
      },
      {
        "symbol": "SY£",
        "name": "Syrian Pound",
        "symbol_native": "ل.س.‏",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "SYP",
        "name_plural": "Syrian pounds"
      },
      {
        "symbol": "฿",
        "name": "Thai Baht",
        "symbol_native": "฿",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "THB",
        "name_plural": "Thai baht"
      },
      {
        "symbol": "DT",
        "name": "Tunisian Dinar",
        "symbol_native": "د.ت.‏",
        "decimal_digits": 3,
        "rounding": 0,
        "code": "TND",
        "name_plural": "Tunisian dinars"
      },
      {
        "symbol": "T$",
        "name": "Tongan Paʻanga",
        "symbol_native": "T$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "TOP",
        "name_plural": "Tongan paʻanga"
      },
      {
        "symbol": "TL",
        "name": "Turkish Lira",
        "symbol_native": "TL",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "TRY",
        "name_plural": "Turkish Lira"
      },
      {
        "symbol": "TT$",
        "name": "Trinidad and Tobago Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "TTD",
        "name_plural": "Trinidad and Tobago dollars"
      },
      {
        "symbol": "NT$",
        "name": "New Taiwan Dollar",
        "symbol_native": "NT$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "TWD",
        "name_plural": "New Taiwan dollars"
      },
      {
        "symbol": "TSh",
        "name": "Tanzanian Shilling",
        "symbol_native": "TSh",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "TZS",
        "name_plural": "Tanzanian shillings"
      },
      {
        "symbol": "₴",
        "name": "Ukrainian Hryvnia",
        "symbol_native": "₴",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "UAH",
        "name_plural": "Ukrainian hryvnias"
      },
      {
        "symbol": "USh",
        "name": "Ugandan Shilling",
        "symbol_native": "USh",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "UGX",
        "name_plural": "Ugandan shillings"
      },
      {
        "symbol": "$U",
        "name": "Uruguayan Peso",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "UYU",
        "name_plural": "Uruguayan pesos"
      },
      {
        "symbol": "UZS",
        "name": "Uzbekistan Som",
        "symbol_native": "UZS",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "UZS",
        "name_plural": "Uzbekistan som"
      },
      {
        "symbol": "Bs.F.",
        "name": "Venezuelan Bolívar",
        "symbol_native": "Bs.F.",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "VEF",
        "name_plural": "Venezuelan bolívars"
      },
      {
        "symbol": "₫",
        "name": "Vietnamese Dong",
        "symbol_native": "₫",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "VND",
        "name_plural": "Vietnamese dong"
      },
       {
        "symbol": "FCFA",
        "name": "CFA Franc BEAC",
        "symbol_native": "FCFA",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "XAF",
        "name_plural": "CFA francs BEAC"
      },
       {
        "symbol": "CFA",
        "name": "CFA Franc BCEAO",
        "symbol_native": "CFA",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "XOF",
        "name_plural": "CFA francs BCEAO"
      },
       {
        "symbol": "YR",
        "name": "Yemeni Rial",
        "symbol_native": "ر.ي.‏",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "YER",
        "name_plural": "Yemeni rials"
      },
       {
        "symbol": "R",
        "name": "South African Rand",
        "symbol_native": "R",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "ZAR",
        "name_plural": "South African rand"
      },
      {
        "symbol": "ZK",
        "name": "Zambian Kwacha",
        "symbol_native": "ZK",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "ZMK",
        "name_plural": "Zambian kwachas"
      },
      {
        "symbol": "ZWL$",
        "name": "Zimbabwean Dollar",
        "symbol_native": "ZWL$",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "ZWL",
        "name_plural": "Zimbabwean Dollar"
      }
      
    ]
  }

}
