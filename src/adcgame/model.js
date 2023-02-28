const speed = 3000

const stages = {
  stage1: [
    {
      questions: [
        'Ghbdtn! Rfr ltkf?',
        'Ой',
        'Привет! Как дела?',
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
      questions: ['Вау! Круто! Мама, я знаменитость'],
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
          stage: 'stage_who1'
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
          stage: ' stage_who1'
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
          stage: 'stage_who1'
        }
      ]
    }
  ],
  stage5: [
    {
      questions: ['Как знаешь', 'Ладно, я добрый, держи стикерпак за честность']
    }
  ],
//designer quiz
  stage_diz1: [
    {
      questions: ['Ок, давай проверим', 'Что за меню?', '<img src="./burger.png">'],
      answers: [
        {
          text: 'alt burger',
          stage: 'stage_diz2'
        },
        {
          text: 'cmd burger',
          stage: 'stage_diz2'
        },
        {
          text: 'ctrl burger',
          stage: 'stage_diz2'
        },
        {
          text: 'shift burger',
          stage: 'stage_diz2'
        }
      ]
    }
  ],
  stage_diz2: [
    {
      questions: ['А это?', '*здесь будет картинка*'],
      answers: [
        {
          text: 'сендвич',
          stage: 'stage_diz3'
        },
        {
          text: 'гамбургер',
          stage: 'stage_diz3'
        },
        {
          text: 'шифт',
          stage: 'stage_diz3'
        },
        {
          text: 'бургер',
          stage: 'stage_diz3'
        },
        {
          text: 'капкейк',
          stage: 'stage_diz3'
        },
        {
          text: 'пирожок',
          stage: 'stage_diz3'
        }
      ]
    }
  ],
  stage_diz3: [
    {
      questions: ['А это?', '*здесь будет картинка*'],
      answers: [
        {
          text: 'митбол',
          stage: 'stage_diz4'
        },
        {
          text: 'кебаб',
          stage: 'stage_diz4'
        },
        {
          text: 'онигири',
          stage: 'stage_diz4'
        }
      ]
    }
  ],
  stage_diz4: [
    {
      questions: ['Ещё не проголодался? Тогда давай ещё парочку', '*здесь будет картинка*'],
      answers: [
        {
          text: 'кебаб',
          stage: 'stage_diz5'
        },
        {
          text: 'митбол(шашлык)',
          stage: 'stage_diz5'
        },
        {
          text: 'шарики',
          stage: 'stage_diz5'
        },
        {
          text: 'бенто',
          stage: 'stage_diz5'
        }
      ]
    }
  ],
  stage_diz5: [
    {
      questions: ['*здесь будет картинка*'],
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
        },
        {
          text: 'бенто',
          stage: 'stage_diz5'
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
          stage: 'stage_diz7'
        },
        {
          text: '.svg',
          stage: 'stage_diz7'
        },
        {
          text: '.tiff',
          stage: 'stage_diz7'
        },
        {
          text: '.dip',
          stage: 'stage_diz7'
        },
        {
          text: '.gif',
          stage: 'stage_diz7'
        }
      ]
    }
  ],
  stage_diz7: [
    {
      questions: ['Сейчас будет сложнее', 'Что это, иконка или символ?', '*здесь будет иконка. или символ?*'],
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
      questions: ['Молодец! Ты дошёл до конца, а это я дарю тебе набор стикеров!'],
      stage: 'stage1'
    }
  ],
//proger quiz
  stage_prog1: [
    {
      questions: ['Что делать, если не работает код?'],
      answers: [
        {
          text: 'бежать на stackoverflow',
          stage: 'stage_prog2'
        },
        {
          text: 'спросить маму',
          stage: 'stage_prog2'
        },
        {
          text: 'спросить папу',
          stage: 'stage_prog2'
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
          stage: 'stage_prog3'
        },
        {
          text: 'flex-end',
          stage: 'stage_prog3'
        },
        {
          text: 'space-around',
          stage: 'stage_prog3'
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
          stage: 'stage_prog4'
        },
        {
          text: 'UTF-16',
          stage: 'stage_prog3'
        },
        {
          text: 'UTF-32',
          stage: 'stage_prog3'
        },
        {
          text: 'BOM',
          stage: 'stage_prog3'
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
          stage: 'stage_who2'
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
          stage: 'stage1'
    }
  ],
}

export { speed, stages }
