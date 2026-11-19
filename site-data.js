(function(global){
'use strict';
// TANEM production site: sourced from salon's business.json, with no demo content.
const data={
  "schemaVersion": 1,
  "mode": "production",
  "country": "RU",
  "locales": [
    "ru",
    "en"
  ],
  "defaultLocale": "ru",
  "salon": {
    "name": {
      "ru": "Натали",
      "en": "Natali",
      "hy": ""
    },
    "kind": {
      "ru": "Салон красоты",
      "en": "Beauty salon",
      "hy": ""
    },
    "city": {
      "ru": "Москва",
      "en": "Moscow",
      "hy": ""
    },
    "address": {
      "ru": "ул. Академика Королёва, 9, корп. 1",
      "en": "9, bldg. 1, Akademika Korolyova St.",
      "hy": ""
    },
    "fullAddress": {
      "ru": "Россия, Москва, улица Академика Королёва, 9, корп. 1, 129515, этаж 1",
      "en": "9, building 1, Akademika Korolyova Street, Moscow, 129515, Russia (1st floor)",
      "hy": ""
    },
    "heroDescription": {
      "ru": "Ваша красота. Ваша уверенность.",
      "en": "Your beauty. Your confidence.",
      "hy": ""
    },
    "about": {
      "ru": "В основе нашей работы — профессиональный подход, внимание к деталям и уважение к индивидуальности каждого гостя. Мы создаём комфортное пространство, где качество и забота остаются главным приоритетом.",
      "en": "Our work is built on professionalism, attention to detail, and respect for every guest’s individuality. We create a comfortable space where quality and care remain our highest priorities.",
      "hy": ""
    }
  },
  "schedule": {
    "timezone": "Europe/Moscow",
    "periods": [
      {
        "days": [
          1,
          2,
          3,
          4,
          5,
          6,
          7
        ],
        "open": "09:00",
        "close": "21:00"
      }
    ],
    "fallback": {
      "ru": "Ежедневно с 09:00 до 21:00",
      "en": "Daily 9 AM–9 PM",
      "hy": ""
    }
  },
  "contacts": {
    "phone": "+7 (967) 228-86-00",
    "phoneLabel": {
      "ru": "Позвонить",
      "en": "Call",
      "hy": ""
    },
    "messengerUrl": "https://wa.me/79672288600",
    "messengerLabel": {
      "ru": "WhatsApp",
      "en": "WhatsApp",
      "hy": ""
    },
    "messengerHandle": "+7 967 228-86-00",
    "mapUrl": "https://yandex.ru/maps/org/1031010152/",
    "mapEmbedUrl": "https://yandex.ru/map-widget/v1/?oid=1031010152",
    "reviewsUrl": "https://yandex.ru/maps/org/1031010152/reviews/",
    "booking": [
      {
        "type": "online",
        "label": {
          "ru": "Онлайн-запись",
          "en": "Book online",
          "hy": ""
        },
        "url": "https://widget.sonline.su/ru/services/?placeid=959792372"
      }
    ]
  },
  "rating": {
    "value": 4.8,
    "count": 1022
  },
  "media": {
    "logo": "",
    "hero": [
      {
        "src": "hero.webp",
        "alt": {
          "ru": "Интерьер салона красоты «Натали»",
          "en": "Inside Natali beauty salon",
          "hy": ""
        }
      }
    ],
    "about": "profile.webp",
    "portfolio": [
      {
        "src": "assets/Gallery-07.webp",
        "alt": {
          "ru": "Укладка волос",
          "en": "Hairstyling",
          "hy": ""
        }
      },
      {
        "src": "assets/Gallery-12.webp",
        "alt": {
          "ru": "Локоны",
          "en": "Curly hair",
          "hy": ""
        }
      },
      {
        "src": "assets/Gallery-34.webp",
        "alt": {
          "ru": "Окрашивание волос",
          "en": "Hair coloring",
          "hy": ""
        }
      },
      {
        "src": "assets/Gallery-18.webp",
        "alt": {
          "ru": "Маникюр",
          "en": "Manicure",
          "hy": ""
        }
      },
      {
        "src": "assets/Gallery-19.webp",
        "alt": {
          "ru": "Дизайн ногтей",
          "en": "Nail design",
          "hy": ""
        }
      },
      {
        "src": "assets/Gallery-22.webp",
        "alt": {
          "ru": "Маникюр с покрытием",
          "en": "Nail polish",
          "hy": ""
        }
      },
      {
        "src": "assets/Gallery-38.webp",
        "alt": {
          "ru": "Дизайн ногтей",
          "en": "Nail design",
          "hy": ""
        }
      },
      {
        "src": "assets/Gallery-41.webp",
        "alt": {
          "ru": "Маникюр",
          "en": "Manicure",
          "hy": ""
        }
      },
      {
        "src": "assets/Gallery-13.webp",
        "alt": {
          "ru": "Мужская стрижка",
          "en": "Men's haircut",
          "hy": ""
        }
      }
    ],
    "gallery": {
      "Салон": [
        {
          "src": "assets/Gallery-02.webp",
          "alt": {
            "ru": "Интерьер салона «Натали»",
            "en": "Natali beauty salon",
            "hy": ""
          }
        },
        {
          "src": "assets/Gallery-03.webp",
          "alt": {
            "ru": "Интерьер салона «Натали»",
            "en": "Natali beauty salon",
            "hy": ""
          }
        },
        {
          "src": "assets/Gallery-04.webp",
          "alt": {
            "ru": "Интерьер салона «Натали»",
            "en": "Natali beauty salon",
            "hy": ""
          }
        },
        {
          "src": "assets/Gallery-36.webp",
          "alt": {
            "ru": "Интерьер салона «Натали»",
            "en": "Natali beauty salon",
            "hy": ""
          }
        },
        {
          "src": "assets/Gallery-48.webp",
          "alt": {
            "ru": "Интерьер салона «Натали»",
            "en": "Natali beauty salon",
            "hy": ""
          }
        }
      ],
      "Волосы": [
        {
          "src": "assets/Gallery-07.webp",
          "alt": {
            "ru": "Стрижки и окрашивание волос",
            "en": "Haircuts and coloring",
            "hy": ""
          }
        },
        {
          "src": "assets/Gallery-09.webp",
          "alt": {
            "ru": "Стрижки и окрашивание волос",
            "en": "Haircuts and coloring",
            "hy": ""
          }
        },
        {
          "src": "assets/Gallery-12.webp",
          "alt": {
            "ru": "Стрижки и окрашивание волос",
            "en": "Haircuts and coloring",
            "hy": ""
          }
        },
        {
          "src": "assets/Gallery-13.webp",
          "alt": {
            "ru": "Стрижки и окрашивание волос",
            "en": "Haircuts and coloring",
            "hy": ""
          }
        },
        {
          "src": "assets/Gallery-14.webp",
          "alt": {
            "ru": "Стрижки и окрашивание волос",
            "en": "Haircuts and coloring",
            "hy": ""
          }
        },
        {
          "src": "assets/Gallery-25.webp",
          "alt": {
            "ru": "Стрижки и окрашивание волос",
            "en": "Haircuts and coloring",
            "hy": ""
          }
        },
        {
          "src": "assets/Gallery-27.webp",
          "alt": {
            "ru": "Стрижки и окрашивание волос",
            "en": "Haircuts and coloring",
            "hy": ""
          }
        },
        {
          "src": "assets/Gallery-30.webp",
          "alt": {
            "ru": "Стрижки и окрашивание волос",
            "en": "Haircuts and coloring",
            "hy": ""
          }
        },
        {
          "src": "assets/Gallery-34.webp",
          "alt": {
            "ru": "Стрижки и окрашивание волос",
            "en": "Haircuts and coloring",
            "hy": ""
          }
        }
      ],
      "Ногти": [
        {
          "src": "assets/Gallery-08.webp",
          "alt": {
            "ru": "Маникюр и дизайн ногтей",
            "en": "Manicure and nail design",
            "hy": ""
          }
        },
        {
          "src": "assets/Gallery-17.webp",
          "alt": {
            "ru": "Маникюр и дизайн ногтей",
            "en": "Manicure and nail design",
            "hy": ""
          }
        },
        {
          "src": "assets/Gallery-18.webp",
          "alt": {
            "ru": "Маникюр и дизайн ногтей",
            "en": "Manicure and nail design",
            "hy": ""
          }
        },
        {
          "src": "assets/Gallery-19.webp",
          "alt": {
            "ru": "Маникюр и дизайн ногтей",
            "en": "Manicure and nail design",
            "hy": ""
          }
        },
        {
          "src": "assets/Gallery-20.webp",
          "alt": {
            "ru": "Маникюр и дизайн ногтей",
            "en": "Manicure and nail design",
            "hy": ""
          }
        },
        {
          "src": "assets/Gallery-21.webp",
          "alt": {
            "ru": "Маникюр и дизайн ногтей",
            "en": "Manicure and nail design",
            "hy": ""
          }
        },
        {
          "src": "assets/Gallery-22.webp",
          "alt": {
            "ru": "Маникюр и дизайн ногтей",
            "en": "Manicure and nail design",
            "hy": ""
          }
        },
        {
          "src": "assets/Gallery-23.webp",
          "alt": {
            "ru": "Маникюр и дизайн ногтей",
            "en": "Manicure and nail design",
            "hy": ""
          }
        },
        {
          "src": "assets/Gallery-35.webp",
          "alt": {
            "ru": "Маникюр и дизайн ногтей",
            "en": "Manicure and nail design",
            "hy": ""
          }
        },
        {
          "src": "assets/Gallery-38.webp",
          "alt": {
            "ru": "Маникюр и дизайн ногтей",
            "en": "Manicure and nail design",
            "hy": ""
          }
        },
        {
          "src": "assets/Gallery-41.webp",
          "alt": {
            "ru": "Маникюр и дизайн ногтей",
            "en": "Manicure and nail design",
            "hy": ""
          }
        }
      ]
    },
    "desktopGalleryLimits": {
      "Салон": 5,
      "Волосы": 9,
      "Ногти": 11
    }
  },
  "categoryLabels": {
    "Окрашивание": {
      "ru": "Окрашивание",
      "en": "Hair Coloring",
      "hy": ""
    },
    "Стрижки и укладки": {
      "ru": "Стрижки и укладки",
      "en": "Haircuts & Styling",
      "hy": ""
    },
    "Мужской зал": {
      "ru": "Мужской зал",
      "en": "Men's Haircuts",
      "hy": ""
    },
    "Маникюр": {
      "ru": "Маникюр",
      "en": "Manicure",
      "hy": ""
    },
    "Брови и ресницы": {
      "ru": "Брови и ресницы",
      "en": "Brows & Lashes",
      "hy": ""
    },
    "Услуги для ногтей": {
      "ru": "Услуги для ногтей",
      "en": "Nail Extras",
      "hy": ""
    },
    "Наращивание ногтей": {
      "ru": "Наращивание ногтей",
      "en": "Nail Extensions",
      "hy": ""
    },
    "Педикюр": {
      "ru": "Педикюр",
      "en": "Pedicure",
      "hy": ""
    }
  },
  "categoryOrder": [
    "Окрашивание",
    "Стрижки и укладки",
    "Мужской зал",
    "Маникюр",
    "Брови и ресницы",
    "Услуги для ногтей",
    "Наращивание ногтей",
    "Педикюр"
  ],
  "services": [
    {
      "id": "service-01",
      "category": "Окрашивание",
      "title": {
        "ru": "Декапирование/смывка (стоимость работы)",
        "en": "Color stripping / removal (labor only)",
        "hy": ""
      },
      "price": "от 1 200 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": [
        {
          "label": {
            "ru": "Короткие — до 10 см",
            "en": "Short — up to 10 cm",
            "hy": ""
          },
          "duration": "",
          "price": "1 200 ₽"
        },
        {
          "label": {
            "ru": "Средние — до 25 см",
            "en": "Medium — up to 25 cm",
            "hy": ""
          },
          "duration": "",
          "price": "1 500 ₽"
        },
        {
          "label": {
            "ru": "Длинные — до 40 см",
            "en": "Long — up to 40 cm",
            "hy": ""
          },
          "duration": "",
          "price": "1 800 ₽"
        }
      ]
    },
    {
      "id": "service-02",
      "category": "Окрашивание",
      "title": {
        "ru": "Колорирование (стоимость работы)",
        "en": "Multi-tone coloring (labor only)",
        "hy": ""
      },
      "price": "от 2 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": [
        {
          "label": {
            "ru": "Короткие — до 10 см",
            "en": "Short — up to 10 cm",
            "hy": ""
          },
          "duration": "",
          "price": "2 000 ₽"
        },
        {
          "label": {
            "ru": "Средние — до 25 см",
            "en": "Medium — up to 25 cm",
            "hy": ""
          },
          "duration": "",
          "price": "2 500 ₽"
        },
        {
          "label": {
            "ru": "Длинные — до 40 см",
            "en": "Long — up to 40 cm",
            "hy": ""
          },
          "duration": "",
          "price": "2 800 ₽"
        }
      ]
    },
    {
      "id": "service-03",
      "category": "Окрашивание",
      "title": {
        "ru": "Мелирование (стоимость работы)",
        "en": "Highlights (labor only)",
        "hy": ""
      },
      "price": "от 1 300 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": [
        {
          "label": {
            "ru": "Короткие — до 10 см",
            "en": "Short — up to 10 cm",
            "hy": ""
          },
          "duration": "",
          "price": "1 300 ₽"
        },
        {
          "label": {
            "ru": "Средние — до 25 см",
            "en": "Medium — up to 25 cm",
            "hy": ""
          },
          "duration": "",
          "price": "1 600 ₽"
        },
        {
          "label": {
            "ru": "Длинные — до 40 см",
            "en": "Long — up to 40 cm",
            "hy": ""
          },
          "duration": "",
          "price": "2 000 ₽"
        }
      ]
    },
    {
      "id": "service-04",
      "category": "Окрашивание",
      "title": {
        "ru": "Окрашивание (стоимость работы)",
        "en": "Hair coloring (labor only)",
        "hy": ""
      },
      "price": "от 1 100 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": [
        {
          "label": {
            "ru": "Короткие — до 10 см",
            "en": "Short — up to 10 cm",
            "hy": ""
          },
          "duration": "",
          "price": "1 100 ₽"
        },
        {
          "label": {
            "ru": "Средние — до 25 см",
            "en": "Medium — up to 25 cm",
            "hy": ""
          },
          "duration": "",
          "price": "1 300 ₽"
        },
        {
          "label": {
            "ru": "Длинные — до 40 см",
            "en": "Long — up to 40 cm",
            "hy": ""
          },
          "duration": "",
          "price": "1 500 ₽"
        }
      ]
    },
    {
      "id": "service-05",
      "category": "Окрашивание",
      "title": {
        "ru": "Окрашивание красителем клиента",
        "en": "Coloring with client's dye",
        "hy": ""
      },
      "price": "от 1 200 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": [
        {
          "label": {
            "ru": "Короткие — до 10 см",
            "en": "Short — up to 10 cm",
            "hy": ""
          },
          "duration": "",
          "price": "1 200 ₽"
        },
        {
          "label": {
            "ru": "Средние — до 25 см",
            "en": "Medium — up to 25 cm",
            "hy": ""
          },
          "duration": "",
          "price": "1 400 ₽"
        },
        {
          "label": {
            "ru": "Длинные — до 40 см",
            "en": "Long — up to 40 cm",
            "hy": ""
          },
          "duration": "",
          "price": "1 700 ₽"
        }
      ]
    },
    {
      "id": "service-06",
      "category": "Окрашивание",
      "title": {
        "ru": "Осветление (стоимость работы)",
        "en": "Hair lightening (labor only)",
        "hy": ""
      },
      "price": "от 1 300 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": [
        {
          "label": {
            "ru": "Короткие — до 10 см",
            "en": "Short — up to 10 cm",
            "hy": ""
          },
          "duration": "",
          "price": "1 300 ₽"
        },
        {
          "label": {
            "ru": "Средние — до 25 см",
            "en": "Medium — up to 25 cm",
            "hy": ""
          },
          "duration": "",
          "price": "1 600 ₽"
        },
        {
          "label": {
            "ru": "Длинные — до 40 см",
            "en": "Long — up to 40 cm",
            "hy": ""
          },
          "duration": "",
          "price": "1 900 ₽"
        }
      ]
    },
    {
      "id": "service-07",
      "category": "Окрашивание",
      "title": {
        "ru": "Тонирование (стоимость работы)",
        "en": "Hair toning (labor only)",
        "hy": ""
      },
      "price": "от 600 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": [
        {
          "label": {
            "ru": "Короткие — до 10 см",
            "en": "Short — up to 10 cm",
            "hy": ""
          },
          "duration": "",
          "price": "600 ₽"
        },
        {
          "label": {
            "ru": "Средние — до 25 см",
            "en": "Medium — up to 25 cm",
            "hy": ""
          },
          "duration": "",
          "price": "800 ₽"
        },
        {
          "label": {
            "ru": "Длинные — до 40 см",
            "en": "Long — up to 40 cm",
            "hy": ""
          },
          "duration": "",
          "price": "1 000 ₽"
        }
      ]
    },
    {
      "id": "service-08",
      "category": "Окрашивание",
      "title": {
        "ru": "Частичное мелирование (стоимость работы)",
        "en": "Partial highlights (labor only)",
        "hy": ""
      },
      "price": "от 800 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": [
        {
          "label": {
            "ru": "Короткие — до 10 см",
            "en": "Short — up to 10 cm",
            "hy": ""
          },
          "duration": "",
          "price": "800 ₽"
        },
        {
          "label": {
            "ru": "Средние — до 25 см",
            "en": "Medium — up to 25 cm",
            "hy": ""
          },
          "duration": "",
          "price": "1 000 ₽"
        },
        {
          "label": {
            "ru": "Длинные — до 40 см",
            "en": "Long — up to 40 cm",
            "hy": ""
          },
          "duration": "",
          "price": "1 200 ₽"
        }
      ]
    },
    {
      "id": "service-09",
      "category": "Стрижки и укладки",
      "title": {
        "ru": "Вытягивание волос (утюжком, феном)",
        "en": "Hair straightening (flat iron or blow-dryer)",
        "hy": ""
      },
      "price": "от 600 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": [
        {
          "label": {
            "ru": "Короткие — до 10 см",
            "en": "Short — up to 10 cm",
            "hy": ""
          },
          "duration": "",
          "price": "600 ₽"
        },
        {
          "label": {
            "ru": "Средние — до 25 см",
            "en": "Medium — up to 25 cm",
            "hy": ""
          },
          "duration": "",
          "price": "900 ₽"
        },
        {
          "label": {
            "ru": "Длинные — до 40 см",
            "en": "Long — up to 40 cm",
            "hy": ""
          },
          "duration": "",
          "price": "1 000 ₽"
        }
      ]
    },
    {
      "id": "service-10",
      "category": "Стрижки и укладки",
      "title": {
        "ru": "Детская стрижка до 6 лет (с мытьем,сушкой)",
        "en": "Children's haircut under 6 (wash and dry)",
        "hy": ""
      },
      "price": "от 550 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": [
        {
          "label": {
            "ru": "Короткие — до 10 см",
            "en": "Short — up to 10 cm",
            "hy": ""
          },
          "duration": "",
          "price": "550 ₽"
        },
        {
          "label": {
            "ru": "Средние — до 25 см",
            "en": "Medium — up to 25 cm",
            "hy": ""
          },
          "duration": "",
          "price": "600 ₽"
        },
        {
          "label": {
            "ru": "Длинные — до 40 см",
            "en": "Long — up to 40 cm",
            "hy": ""
          },
          "duration": "",
          "price": "650 ₽"
        }
      ]
    },
    {
      "id": "service-11",
      "category": "Стрижки и укладки",
      "title": {
        "ru": "Женская стрижка (с мытьем и сушкой)",
        "en": "Women's haircut (wash and dry)",
        "hy": ""
      },
      "price": "от 800 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": [
        {
          "label": {
            "ru": "Короткие — до 10 см",
            "en": "Short — up to 10 cm",
            "hy": ""
          },
          "duration": "",
          "price": "800 ₽"
        },
        {
          "label": {
            "ru": "Средние — до 25 см",
            "en": "Medium — up to 25 cm",
            "hy": ""
          },
          "duration": "",
          "price": "900 ₽"
        },
        {
          "label": {
            "ru": "Длинные — до 40 см",
            "en": "Long — up to 40 cm",
            "hy": ""
          },
          "duration": "",
          "price": "1 000 ₽"
        }
      ]
    },
    {
      "id": "service-12",
      "category": "Стрижки и укладки",
      "title": {
        "ru": "Коктейльная/вечерняя прическа",
        "en": "Cocktail / evening hairstyle",
        "hy": ""
      },
      "price": "700–3 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-13",
      "category": "Стрижки и укладки",
      "title": {
        "ru": "Плетение косичек",
        "en": "Braiding",
        "hy": ""
      },
      "price": "400–1 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-14",
      "category": "Стрижки и укладки",
      "title": {
        "ru": "Подравнивание волос (одним срезом)",
        "en": "One-length hair trim",
        "hy": ""
      },
      "price": "200–350 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-15",
      "category": "Стрижки и укладки",
      "title": {
        "ru": "Стрижка челки (с сушкой по форме)",
        "en": "Fringe trim with styling",
        "hy": ""
      },
      "price": "300 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-16",
      "category": "Стрижки и укладки",
      "title": {
        "ru": "Сушка феном по форме",
        "en": "Blow-drying",
        "hy": ""
      },
      "price": "от 300 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": [
        {
          "label": {
            "ru": "Короткие — до 10 см",
            "en": "Short — up to 10 cm",
            "hy": ""
          },
          "duration": "",
          "price": "300 ₽"
        },
        {
          "label": {
            "ru": "Средние — до 25 см",
            "en": "Medium — up to 25 cm",
            "hy": ""
          },
          "duration": "",
          "price": "400 ₽"
        },
        {
          "label": {
            "ru": "Длинные — до 40 см",
            "en": "Long — up to 40 cm",
            "hy": ""
          },
          "duration": "",
          "price": "500 ₽"
        }
      ]
    },
    {
      "id": "service-17",
      "category": "Стрижки и укладки",
      "title": {
        "ru": "Укладка феном",
        "en": "Blowout styling",
        "hy": ""
      },
      "price": "от 600 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": [
        {
          "label": {
            "ru": "Короткие — до 10 см",
            "en": "Short — up to 10 cm",
            "hy": ""
          },
          "duration": "",
          "price": "600 ₽"
        },
        {
          "label": {
            "ru": "Средние — до 25 см",
            "en": "Medium — up to 25 cm",
            "hy": ""
          },
          "duration": "",
          "price": "800 ₽"
        },
        {
          "label": {
            "ru": "Длинные — до 40 см",
            "en": "Long — up to 40 cm",
            "hy": ""
          },
          "duration": "",
          "price": "1 000 ₽"
        }
      ]
    },
    {
      "id": "service-18",
      "category": "Стрижки и укладки",
      "title": {
        "ru": "Химическая завивка",
        "en": "Perm",
        "hy": ""
      },
      "price": "от 2 200 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": [
        {
          "label": {
            "ru": "Короткие — до 10 см",
            "en": "Short — up to 10 cm",
            "hy": ""
          },
          "duration": "",
          "price": "2 200 ₽"
        },
        {
          "label": {
            "ru": "Средние — до 25 см",
            "en": "Medium — up to 25 cm",
            "hy": ""
          },
          "duration": "",
          "price": "2 600 ₽"
        },
        {
          "label": {
            "ru": "Длинные — до 40 см",
            "en": "Long — up to 40 cm",
            "hy": ""
          },
          "duration": "",
          "price": "3 000 ₽"
        }
      ]
    },
    {
      "id": "service-19",
      "category": "Мужской зал",
      "title": {
        "ru": "Моделирование бороды",
        "en": "Beard shaping",
        "hy": ""
      },
      "price": "600 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-20",
      "category": "Мужской зал",
      "title": {
        "ru": "Окантовка",
        "en": "Hairline trimming",
        "hy": ""
      },
      "price": "300 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-21",
      "category": "Мужской зал",
      "title": {
        "ru": "Рисунки",
        "en": "Hair designs",
        "hy": ""
      },
      "price": "150–200 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-22",
      "category": "Мужской зал",
      "title": {
        "ru": "Стрижка детская (до 6 лет) (с мытьем и сушкой)",
        "en": "Children's haircut under 6 (wash and dry)",
        "hy": ""
      },
      "price": "600 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-23",
      "category": "Мужской зал",
      "title": {
        "ru": "Стрижка машинкой (с мытьем и сушкой)",
        "en": "Clipper haircut (wash and dry)",
        "hy": ""
      },
      "price": "500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-24",
      "category": "Мужской зал",
      "title": {
        "ru": "Стрижка машинкой наголо (с мытьем и сушкой)",
        "en": "Buzz cut (wash and dry)",
        "hy": ""
      },
      "price": "300 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-25",
      "category": "Мужской зал",
      "title": {
        "ru": "Стрижка модельная (с мытьем и сушкой)",
        "en": "Styled men's haircut (wash and dry)",
        "hy": ""
      },
      "price": "800 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-26",
      "category": "Мужской зал",
      "title": {
        "ru": "Укладка",
        "en": "Styling",
        "hy": ""
      },
      "price": "250 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-27",
      "category": "Маникюр",
      "title": {
        "ru": "Коррекция без укрепления",
        "en": "Nail correction without strengthening",
        "hy": ""
      },
      "price": "2 300 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-28",
      "category": "Маникюр",
      "title": {
        "ru": "Коррекция с укреплением",
        "en": "Nail correction with strengthening",
        "hy": ""
      },
      "price": "2 800 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-29",
      "category": "Маникюр",
      "title": {
        "ru": "Маникюр + гель лак",
        "en": "Manicure + gel polish",
        "hy": ""
      },
      "price": "1 900 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-30",
      "category": "Маникюр",
      "title": {
        "ru": "Маникюр + лак/лечебный лак",
        "en": "Manicure + nail polish / treatment polish",
        "hy": ""
      },
      "price": "1 250 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-31",
      "category": "Маникюр",
      "title": {
        "ru": "Маникюр женский (класс., комбо.,аппарат.)",
        "en": "Women's manicure (classic, combined or e-file)",
        "hy": ""
      },
      "price": "1 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-32",
      "category": "Брови и ресницы",
      "title": {
        "ru": "Коррекция бровей",
        "en": "Eyebrow shaping",
        "hy": ""
      },
      "price": "400 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-33",
      "category": "Брови и ресницы",
      "title": {
        "ru": "Окрашивание бровей",
        "en": "Eyebrow tinting",
        "hy": ""
      },
      "price": "400 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-34",
      "category": "Брови и ресницы",
      "title": {
        "ru": "Окрашивание ресниц",
        "en": "Eyelash tinting",
        "hy": ""
      },
      "price": "400 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-35",
      "category": "Брови и ресницы",
      "title": {
        "ru": "Форма бровей",
        "en": "Eyebrow styling",
        "hy": ""
      },
      "price": "500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-36",
      "category": "Услуги для ногтей",
      "title": {
        "ru": "Дизайн",
        "en": "Nail art",
        "hy": ""
      },
      "price": "100 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-37",
      "category": "Услуги для ногтей",
      "title": {
        "ru": "Ремонт одного ногтя",
        "en": "Single nail repair",
        "hy": ""
      },
      "price": "300 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-38",
      "category": "Услуги для ногтей",
      "title": {
        "ru": "Снятие гель-лака",
        "en": "Gel polish removal",
        "hy": ""
      },
      "price": "500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-39",
      "category": "Услуги для ногтей",
      "title": {
        "ru": "Форма ногтей",
        "en": "Nail shaping",
        "hy": ""
      },
      "price": "500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-40",
      "category": "Наращивание ногтей",
      "title": {
        "ru": "Коррекция + маникюр + гель-лак",
        "en": "Nail extension fill + manicure + gel polish",
        "hy": ""
      },
      "price": "3 100 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-41",
      "category": "Наращивание ногтей",
      "title": {
        "ru": "Наращивание + маникюр + гель-лак",
        "en": "Nail extensions + manicure + gel polish",
        "hy": ""
      },
      "price": "3 500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-42",
      "category": "Наращивание ногтей",
      "title": {
        "ru": "Наращивание одного ногтя",
        "en": "Single nail extension",
        "hy": ""
      },
      "price": "500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-43",
      "category": "Наращивание ногтей",
      "title": {
        "ru": "Снятие нарощенных ногтей",
        "en": "Nail extension removal",
        "hy": ""
      },
      "price": "800 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-44",
      "category": "Педикюр",
      "title": {
        "ru": "Педикюр + гель-лак",
        "en": "Pedicure + gel polish",
        "hy": ""
      },
      "price": "3 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-45",
      "category": "Педикюр",
      "title": {
        "ru": "Педикюр + лак/лечебный лак",
        "en": "Pedicure + nail polish / treatment polish",
        "hy": ""
      },
      "price": "2 100 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "service-46",
      "category": "Педикюр",
      "title": {
        "ru": "Педикюр женский (класс.,комбо.,аппарат.)",
        "en": "Women's pedicure (classic, combined or e-file)",
        "hy": ""
      },
      "price": "1 750 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    }
  ],
  "team": [],
  "reviews": [
    {
      "id": "yandex-review-01",
      "author": {
        "ru": "Deni_Che",
        "en": "Deni_Che",
        "hy": ""
      },
      "text": {
        "ru": "Записался онлайн, очень удобно. Пришёл к назначенному времени, без каких либо ожиданий и проволочек подстригся. Мастер Бек- профессионал своего дела, 15 мин и я свободен, хотя в других парикмахерских доходит до часа🫩",
        "en": "Online booking was very convenient. I arrived on time, had no waiting, and got my haircut. Bek is a true professional — I was done in 15 minutes, while other barbershops can take up to an hour.",
        "hy": ""
      },
      "rating": 5,
      "source": {
        "ru": "Яндекс Карты",
        "en": "Yandex Maps",
        "hy": ""
      },
      "url": "https://yandex.ru/maps/org/1031010152/reviews/"
    },
    {
      "id": "yandex-review-02",
      "author": {
        "ru": "Елена Селиванова",
        "en": "Елена Селиванова",
        "hy": ""
      },
      "text": {
        "ru": "Хожу в этот салон постоянно на стрижку, всё отлично.Сегодня была первый раз на маникюре у Бемы, очень понравилось.Сделала всё быстро и аккуратно.Буду ходить теперь именно к ней.Отлично сочетаются цена-качество!Спасибо большое!",
        "en": "I regularly come here for haircuts and everything is excellent. Today I tried a manicure with Bema for the first time and loved it. She was quick and careful. Great value for money!",
        "hy": ""
      },
      "rating": 5,
      "source": {
        "ru": "Яндекс Карты",
        "en": "Yandex Maps",
        "hy": ""
      },
      "url": "https://yandex.ru/maps/org/1031010152/reviews/"
    },
    {
      "id": "yandex-review-03",
      "author": {
        "ru": "Экатерина Мебония",
        "en": "Экатерина Мебония",
        "hy": ""
      },
      "text": {
        "ru": "Рекомендую салон \"Натали\". Цены доступные, качество на уровне, атмосфера благоприятная. Отдельное спасибо стилисту Замире. Хожу к ней не первый раз на окрашивание и укладку. Очень довольна. Профессионал!!!",
        "en": "I recommend Natali salon. Prices are affordable, the quality is good and the atmosphere is pleasant. Special thanks to stylist Zamira. I come to her for coloring and styling and am very satisfied.",
        "hy": ""
      },
      "rating": 5,
      "source": {
        "ru": "Яндекс Карты",
        "en": "Yandex Maps",
        "hy": ""
      },
      "url": "https://yandex.ru/maps/org/1031010152/reviews/"
    },
    {
      "id": "yandex-review-04",
      "author": {
        "ru": "Наталья Дымова",
        "en": "Наталья Дымова",
        "hy": ""
      },
      "text": {
        "ru": "Отличный мастер маникюра-педикюра Марина:) профи своего дела! Редко к таким профессионалам попадаешь! Благодарю ее за советы и итог:) все очень тщательно сделано и с любовью к своей профессии! Рекомендую однозначно:)",
        "en": "Marina is an excellent manicure and pedicure specialist, a true professional! Everything was done thoroughly and with genuine care. Thank you for the advice and the result. Highly recommended!",
        "hy": ""
      },
      "rating": 5,
      "source": {
        "ru": "Яндекс Карты",
        "en": "Yandex Maps",
        "hy": ""
      },
      "url": "https://yandex.ru/maps/org/1031010152/reviews/"
    },
    {
      "id": "yandex-review-05",
      "author": {
        "ru": "Татьяна Валентинова",
        "en": "Татьяна Валентинова",
        "hy": ""
      },
      "text": {
        "ru": "Хочу выразить благодарность женскому мастеру Эльнуре. Делаю модельную стрижку .Хожу к ней не первый раз. Очень довольна, что нашла мастера с чувством стиля. Каждый раз выхожу от неё с замечательным настроением. Спасибо огромное! 😘",
        "en": "I want to thank the women's hairstylist Elnura. I've been coming to her for a styled haircut for some time. I'm happy to have found someone with such a sense of style. I leave in a wonderful mood every time!",
        "hy": ""
      },
      "rating": 5,
      "source": {
        "ru": "Яндекс Карты",
        "en": "Yandex Maps",
        "hy": ""
      },
      "url": "https://yandex.ru/maps/org/1031010152/reviews/"
    },
    {
      "id": "yandex-review-06",
      "author": {
        "ru": "Светлана",
        "en": "Светлана",
        "hy": ""
      },
      "text": {
        "ru": "Много лет хожу к мастеру Беме.Мастер просто супер,профессионал своего дела.Знает подход к каждому клиенту,каждый раз ухожу от неё с прекрасным настроением,отличным маникюром и педикюром.Очень советую посетить Салон Натали.",
        "en": "I've been going to Bema for many years. She's an outstanding professional who knows how to approach each client. I always leave with a great manicure and pedicure and in a good mood. I recommend Natali salon!",
        "hy": ""
      },
      "rating": 5,
      "source": {
        "ru": "Яндекс Карты",
        "en": "Yandex Maps",
        "hy": ""
      },
      "url": "https://yandex.ru/maps/org/1031010152/reviews/"
    },
    {
      "id": "yandex-review-07",
      "author": {
        "ru": "marina-w-a",
        "en": "marina-w-a",
        "hy": ""
      },
      "text": {
        "ru": "Хожу в салон \"Натали\" уже не один год к мастеру Замире.Очень нравится. Делаю Химическую завивку.Очень довольна . Всем рекомендую. Все очень приветливые и отзывчивые. Салон чистенький, просторный.",
        "en": "I've been visiting Natali and getting perms from Zamira for years. I'm always very pleased. Everyone is friendly and helpful, and the salon is clean and spacious. Highly recommended!",
        "hy": ""
      },
      "rating": 5,
      "source": {
        "ru": "Яндекс Карты",
        "en": "Yandex Maps",
        "hy": ""
      },
      "url": "https://yandex.ru/maps/org/1031010152/reviews/"
    },
    {
      "id": "yandex-review-08",
      "author": {
        "ru": "Галя Галя",
        "en": "Галя Галя",
        "hy": ""
      },
      "text": {
        "ru": "Сегодня делала маникюр у очень хорошего мастера, зовут её Бема.Очень осталась довольна результатом ее работы, спасибо большое за её профессионализм и прекрасное обслуживание!!!",
        "en": "Today I had a manicure with Bema, a very good specialist. I am delighted with the result. Many thanks for her professionalism and excellent service!",
        "hy": ""
      },
      "rating": 5,
      "source": {
        "ru": "Яндекс Карты",
        "en": "Yandex Maps",
        "hy": ""
      },
      "url": "https://yandex.ru/maps/org/1031010152/reviews/"
    },
    {
      "id": "yandex-review-09",
      "author": {
        "ru": "Алексей Ардаев",
        "en": "Алексей Ардаев",
        "hy": ""
      },
      "text": {
        "ru": "Хорошая парикмахерская, персонал отзывчивый. Расказал что хочу по бороде и волосам на голове, сделали то что я хотел. Остался очень доволен.",
        "en": "A good barbershop with helpful staff. I explained what I wanted for my beard and hair and they did exactly that. I was very satisfied.",
        "hy": ""
      },
      "rating": 5,
      "source": {
        "ru": "Яндекс Карты",
        "en": "Yandex Maps",
        "hy": ""
      },
      "url": "https://yandex.ru/maps/org/1031010152/reviews/"
    }
  ]
};
global.TANEM_SITE_DATA=data;
const rows=[];
const collect=value=>{if(!value||typeof value!=='object')return;if(typeof value.ru==='string'&&typeof value.en==='string'&&typeof value.hy==='string'){if(value.ru)rows.push([value.ru,value.hy,value.en]);return;}if(Array.isArray(value))value.forEach(collect);else Object.values(value).forEach(collect);};
collect(data);global.TANEM_SITE_I18N_ROWS=rows;
})(window);
