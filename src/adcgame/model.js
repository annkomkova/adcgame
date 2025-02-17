import imgAlt from '../images/alt.png'
import imgBurger from '../images/burger.png'
import imgKebab from '../images/kebab.png'
import imgMem1 from '../images/mem1.png'
import imgMitball from '../images/mitball.png'
import imgOnigiri from '../images/onigiri.png'
import imgMusic from '../images/music.png'
import imgStickers from '../images/stickers1.png'

const adc_bubbles = `<a href="https://t.me/addstickers/adc_bubbles" target="_blank"><img src=${imgStickers}></a>`
const speed = 3000

const stages = {
  stage1: [
    {
      questions: [
        'Ghbdtn! Rfr ltkf? &#9728;',
        'Ой',
        'Привет! Как дела? &#9728;',
        'Ладно, знаешь меня?'
      ],
      answers: [
        {
          text: 'Да',
          stage: 'stage3'
        },
        {
          text: 'Нет',
          stage: 'stage2'
        }
      ]
    },
    {
      questions: [
        'Хей! приветствую тебя из глубин интернета',
        'Ты ведь не знаешь кто я, верно?'
      ],
      answers: [
        {
          text: 'Вообще-то знаю',
          stage: 'stage3'
        },
        {
          text: 'Нет',
          stage: 'stage2'
        }
      ]
    },
    {
      questions: [
        'О, как хорошо, что ты заглянул',
        'Кажется, мы уже встречались?',
        'На вечеринке... Ну этого... того '
      ],
      answers: [
        { text: 'Ну точно, было', stage: 'stage3' },
        { text: 'Ты меня с кем-то путаешь', stage: 'stage2' }
      ]
    },
    {
      questions: ['ЙОУ', 'ДИП!', 'РЭП'],
      answers: [
        { text: 'ДИП!', stage: 'stage3' },
        { text: 'ЭЭЭ, ЧТО?', stage: 'stage2' }
      ]
    }
  ],
  stage2: [
    {
      questions: [
        'Я Дипфейс',
        'Маскот кафедры «Дизайн и программированеие», знаешь что такое?'
      ],
      stage: 'stage4'
    },
    {
      questions: ['Я чёрный круг с ромбом вместо глаза, неужели не видно?'],
      stage: 'stage4'
    },
    {
      questions: [
        'Вообще, я не раскрываю своё происхождение, но тебе скажу ',
        'Я был рождён в недрах Школы Дизайна, меня сотворили дизайнеры... или программисты... или... Я так и не понял, кто они',
        'Я видел только миллион своих клонов, а потом всё потемнело. Очнулся уже здесь, на сайте.  Тут немного одиноко, поэтому давай поболтаем?'
      ],
      stage: 'stage4'
    },
    {
      questions: [
        'Я Дипфейс! Я создаю новую визуальную культуру!',
        'Ой, кажется это не мои слова',
        'Прости, в этом интернете в меня часто прилетают куски информации',
        'На самом деле, я символ кафедры «Дизайн и программирование» и скоро здесь будет весело))',
        '))))+'
      ],
      stage: 'stage4'
    }
  ],
  stage3: [
    {
      questions: ['А ты, я гляжу, прошаренный! Задам тебе пару вопросов'],
      answers: [
        {
          text: 'Я сегодня не в настроении(',
          stage: 'stage5'
        },
        {
          text: 'Ок',
          stage: 'stage4'
        }
      ]
    },
    {
      questions: ['Ого, ну ничего себе! Точно хочу узнать тебя поближе'],
      answers: [
        {
          text: 'Ок',
          stage: 'stage4'
        },
        {
          text: 'Я сегодня не в настроении(',
          stage: 'stage5'
        }
      ]
    },
    {
      questions: ['Вау! Круто! Мама, я знаменитость'],
      answers: [
        {
          text: 'Ок',
          stage: 'stage4'
        },
        {
          text: 'Я сегодня не в настроении(',
          stage: 'stage5'
        }
      ]
    }
  ],
  stage4: [
    {
      questions: ['Ну раз уж я рассказал кто я, поделишься кто ты?'],
      answers: [
        {
          text: 'Дизайнер',
          stage: 'stage_diz1'
        },
        {
          text: 'Прогер',
          stage: 'stage_prog1'
        },
        {
          text: '???',
          stage: 'stage_who'
        }
      ]
    },
    {
      questions: ['А ты сам чем занимаешься?'],
      answers: [
        {
          text: 'Дизайнер',
          stage: 'stage_diz1'
        },
        {
          text: 'Прогер',
          stage: 'stage_prog1'
        },
        {
          text: '???',
          stage: 'stage_who'
        }
      ]
    },
    {
      questions: ['Твоя очередь представиться'],
      answers: [
        {
          text: 'Дизайнер',
          stage: 'stage_diz1'
        },
        {
          text: 'Прогер',
          stage: 'stage_prog1'
        },
        {
          text: '???',
          stage: 'stage_who'
        }
      ]
    }
  ],
  stage5: [
    {
      questions: ['Как знаешь', 'Ладно, я добрый, держи стикерпак за честность', adc_bubbles]
    }
  ],
//designer quiz
  stage_diz1: [
    {
      questions: ['Ок, давай проверим', 'Что за меню?', `<img src=${imgAlt}>`],
      answers: [
        {
          text: 'alt burger',
          stage: 'stage_diz2'
        },
        {
          text: 'cmd burger',
          stage: 'stage_diz1',
          correct: 'false'
        },
        {
          text: 'ctrl burger',
          stage: 'stage_diz1',
          correct: 'false'
        },
        {
          text: 'shift burger',
          stage: 'stage_diz1',
          correct: 'false'
        }
      ]
    }
  ],
  stage_diz2: [
    {
      questions: ['А это?', `<img src=${imgBurger}>`],
      answers: [
        {
          text: 'сендвич',
          stage: 'stage_diz2',
          correct: 'false'
        },
        {
          text: 'гамбургер',
          stage: 'stage_diz3',
          correct: 'false'
        },
        {
          text: 'шифт',
          stage: 'stage_diz2',
          correct: 'false'
        },
        {
          text: 'бургер',
          stage: 'stage_diz3'
        },
        {
          text: 'капкейк',
          stage: 'stage_diz2',
          correct: 'false'
        },
        {
          text: 'пирожок',
          stage: 'stage_diz2',
          correct: 'false'
        }
      ]
    }
  ],
  stage_diz3: [
    {
      questions: ['А это?', `<img src=${imgKebab}>`],
      answers: [
        {
          text: 'митбол',
          stage: 'stage_diz3',
          correct: 'false'
        },
        {
          text: 'кебаб',
          stage: 'stage_diz4'
        },
        {
          text: 'онигири',
          stage: 'stage_diz3',
          correct: 'false'
        }
      ]
    }
  ],
  stage_diz4: [
    {
      questions: ['Ещё не проголодался? Тогда давай ещё парочку', `<img src=${imgMitball}>`],
      answers: [
        {
          text: 'кебаб',
          stage: 'stage_diz4',
          correct: 'false'
        },
        {
          text: 'митбол(шашлык)',
          stage: 'stage_diz5'
        },
        {
          text: 'шарики',
          stage: 'stage_diz4',
          correct: 'false'
        },
        {
          text: 'бенто',
          stage: 'stage_diz4',
          correct: 'false'
        }
      ]
    }
  ],
  stage_diz5: [
    {
      questions: [`<img src=${imgOnigiri}>`],
      answers: [
        {
          text: 'это что, меню?',
          stage: 'stage_diz6'
        },
        {
          text: 'онигири',
          stage: 'stage_diz6'
        },
        {
          text: 'бенто',
          stage: 'stage_diz6'
        }
      ]
    }
  ],
  stage_diz6: [
    {
      questions: ['С меню разобрались, ещё такой вопрос', 'Какого графического формата не существует?'],
      answers: [
        {
          text: '.jpg',
          stage: 'stage_diz6',
          correct: 'false'
        },
        {
          text: '.svg',
          stage: 'stage_diz6',
          correct: 'false'
        },
        {
          text: '.tiff',
          stage: 'stage_diz6',
          correct: 'false'
        },
        {
          text: '.dip',
          stage: 'stage_diz7'
        },
        {
          text: '.gif',
          stage: 'stage_diz6',
          correct: 'false'
        }
      ]
    }
  ],
  stage_diz7: [
    {
      questions: ['Сейчас будет сложнее', 'Что это, иконка или символ?', `<img src=${imgMusic}>`],
      answers: [
        {
          text: 'символ',
          stage: 'stage_diz_true'
        },
        {
          text: 'иконка',
          stage: 'stage_diz_false'
        }
      ]
    }
  ],
  stage_diz_true: [
    {
      questions: ['Ты вау!'],
      stage: 'stage6'
    }
  ],
  stage_diz_false: [
    {
      questions: ['Не, не угадал! Объясню:', 'Правильно: символ. Иконка показывает нам визуальное представление вещи, которая выглядит реалистично по ношению к изображаемому предмету. А символ не обязательно выглядит как то, что он представляет. Иконка иллюстративна, а символ изображает предмет более абстрактно. Сложно представить что-то настолько широкое и абстрактное, как музыка,  фиксированным единым визуальным образом'],
      stage: 'stage6'
    }
  ],
  stage6: [
    {
      questions: ['Молодец! Ты дошёл до конца, а это я дарю тебе набор стикеров!', adc_bubbles],
      stage: 'stage_media'
    }
  ],
//proger quiz
  stage_prog1: [
    {
      questions: ['Что делать, если не работает код?'],
      answers: [
        {
          text: 'бежать на stackoverflow',
          stage: 'stage_prog2',
        },
        {
          text: 'спросить маму',
          stage: 'stage_prog1',
          correct: 'false'
        },
        {
          text: 'спросить папу',
          stage: 'stage_prog1',
          correct: 'false'
        }
      ]
    }
  ],
  stage_prog2: [
    {
      questions: ['Мне надоело сидеть в левом углу, помоги мне сгонять в правый угол:'],
      answers: [
        {
          text: 'flex-start',
          stage: 'stage_prog2',
          correct: 'false'
        },
        {
          text: 'flex-end',
          stage: 'stage_prog3',
        },
        {
          text: 'space-around',
          stage: 'stage_prog2',
          correct: 'false'
        }
      ]
    }
  ],
  stage_prog3: [
    {
      questions: ['Р‘РµР»РёР±РµСЂРґР° РІРјРµСЃС‚Рѕ С‚РµРєСЃС‚Р°, РєРѕРіРґР° СЃР»РµС‚РµРІС€РёР№ UTF'],
      answers: [
        {
          text: 'UTF-8',
          stage: 'stage_prog4',
        },
        {
          text: 'UTF-16',
          stage: 'stage_prog3',
          correct: 'false'
        },
        {
          text: 'UTF-32',
          stage: 'stage_prog3',
          correct: 'false'
        },
        {
          text: 'BOM',
          stage: 'stage_prog3',
          correct: 'false'
        }
      ]
    }
  ],
  stage_prog4: [
    {
      questions: ['Спасибо тебе, человек, что поправил мой слетевший юникод! Можем болтать дальше.'],
      stage: 'stage6'
    }
  ],
//quiz ???
  stage_who: [
  {
    questions: [`<img src=${imgMem1}>`],
    stage: 'stage_who1'
    }
  ],
  stage_who1: [
  {
    questions: ['Что было раньше: скетч или фигма?'],
    answers: [
        {
          text: 'скетч',
          stage: 'stage_who2'
        },
        {
          text: 'фигма',
          stage: 'stage_who1',
          correct: 'false'
        }
      ]
    }
  ],
  stage_who2: [
  {
    questions: ['Что было раньше: HTML или Photoshop?'],
    answers: [
        {
          text: 'HTML',
          stage: 'stage_who3'
        },
        {
          text: 'Photoshop',
          stage: 'stage_who3'
        }
      ]
    }
  ],
  stage_who3: [
  {
    questions: ['Что было раньше: GUI или TUI?'],
    answers: [
        {
          text: 'GUI',
          stage: 'stage_who4'
        },
        {
          text: 'TUI',
          stage: 'stage_who4'
        }
      ]
    }
  ],
  stage_who4: [
  {
    questions: ['Я голоден( Покорми меня?', 'А когда я ем, я расту, а ещё я дам тебе подарок за это', 'Если что, питаюсь я  контентом, поэтому поскидывай мне ссылки на что-нибудь интересненькое'],
    answers: [
        {
          text: '*скинуть ссылку*',
          stage: 'stage_who5'
        }
      ]
    }
  ],
  stage_who5: [
  {
    questions: ['Держи, я обещал'],
    stage: 'stage_media'
    }
  ],
//next: social media
  stage_media: [
    {
      questions: [
        'Блин, а ты мне нравишься!',
        'А где чаще зависаешь?'
      ],
      answers: [
        {
          text: 'instagram',
          stage: 'stage_inst'
        },
        {
          text: 'vk',
          stage: 'stage_vk'
        },
        {
          text: 'fb',
          stage: 'stage_fb'
        },
        {
          text: 'twitter',
          stage: 'stage_twi'
        },
        {
          text: 'youtube',
          stage: 'stage_youtube'
        }
      ]
    }
  ],
  stage_inst: [
    {
      questions: [
        'Я люблю смотреть в Instagram видосы про готовку еды...',
        'А что обычно смотришь ты?',
        'Напиши или скинь ссылку, а я пришлю тебе за это подарок)'
      ],
      answers: [
        {
          text: '*cсылка*',
          stage: 'stage7'
        }
      ]
    }
  ],
  stage_vk: [
    {
      questions: [
        'Даа, вконтакте — тема',
        'Тоже мемасы смотришь?',
        'Скинь свой любимый, а я пришлю тебе за это в подарок стикеры для телеграма'
      ],
      answers: [
        {
          text: '*cсылка*',
          stage: 'stage7'
        }
      ]
    }
  ],
  stage_fb: [
    {
      questions: [
        'Facebook, ох, кажется, нужно обращаться к Вам на «Вы»',
        'Не поделитесь интересным мероприятием или обсуждением?',
        'А я в ответ подарю стикеры'
      ],
      answers: [
        {
          text: '*cсылка*',
          stage: 'stage7'
        }
      ]
    }
  ],
  stage_twi: [
    {
      questions: [
        'А я помню времена, когда посты там были по 140 знаков',
        'Ретвитни мне что-нибудь из свежих новостей, а я сделаю тебе подарок?'
      ],
      answers: [
        {
          text: '*cсылка*',
          stage: 'stage7'
        }
      ]
    }
  ],
  stage_youtube: [
    {
      questions: [
        'О, я сам провожу там не один час в день... ',
        'Смотрю туториалы, конечно! Образовываюсь',
        'А ты видел видео, где ребята привязали санки к машине и разъезжали по центру города?',
        'Упс',
        'Хочешь скинуть мне пару интересных видео взамен на клёвые стикеры для телеграмма?',
        'Соглашайся, хороший обмен)'
      ],
      answers: [
        {
          text: '*cсылка*',
          stage: 'stage7'
        }
      ]
    }
  ],
  stage7: [
    {
      questions: [
        'Вот спасибочки!'
      ],
      stage: 'stage8'
    },
    {
      questions: [
        'Cпасибо!'
      ],
      stage: 'stage8'
    },
    {
      questions: [
        'Ого, как круто!!'
      ],
      stage: 'stage8'
    },
    {
      questions: [
        'Ммм, очень вкусный контент'
      ],
      stage: 'stage8'
    },
    {
      questions: [
        'Класс, очень интересно'
      ],
      stage: 'stage8'
    },
    {
      questions: [
        'Посмотрю перед сном'
      ],
      stage: 'stage8'
    }
  ],
  stage8: [
    {
      questions: [
        'Лови свой стикерпак', 'ccылка на стикерпак'
      ],
      stage: 'stage9'
    },
    {
      questions: [
        'Приятно было пообщаться, дарю тебе стикеры!', 'ccылка на стикерпак'
      ],
      stage: 'stage9'
    },
    {
      questions: [
        'Телеграмм без стикеров скукотища, верно? Поэтому лови новый пак!', 'ccылка на стикерпак'
      ],
      stage: 'stage9'
    },
    {
      questions: [
        'Пополни свою коллекцию стикеров ещё одним набором', 'ccылка на стикерпак'
      ],
      stage: 'stage9'
    },
    {
      questions: [
        'Надеюсь тебе было весело так же, как мне. Держи стикеры!', 'ccылка на стикерпак'
      ],
      stage: 'stage9'
    }
  ],
  stage9: [
    {
      questions: [
        'А хочешь получить настоящие наклейки?'
      ],
      stage: 'stage10'
    },
    {
      questions: [
        'Псс, а как насчёт бумажных наклеек?'
      ],
      stage: 'stage10'
    },
    {
      questions: [
        'У меня есть ещё сюрприз, ты можешь получить настоящие наклейки! Супер?'
      ],
      stage: 'stage10'
    }
  ],
  stage10: [
    {
      questions: [
        'Ищи на Д-в. моих коллег, сотрудников Школы Дизайна!'
      ]
    }
  ]
}

const wrong = [
  'Нет, не так',
  'А вот и не угадал!',
  'Попробуй ещё раз',
  'НепРаВилЬнО! &#x2600; &#9733; &#9732;',
  'И это неправильный ответ!',
  'Oh no'
]

export { speed, stages, wrong }
