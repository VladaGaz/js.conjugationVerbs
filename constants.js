// создаю переменную, в которой указаны окончания для спряжений
export const endingOfAVerb = [
   {
      name: 'я',
      '1conjugation': ['у', 'ю'],
      '2conjugation': ['у', 'ю']
   },
   {
      name: 'ты',
      '1conjugation': 'ешь',
      '2conjugation': 'ишь'
   },
   {
      name: 'он',
      '1conjugation': 'ет',
      '2conjugation': 'ит'
   },
   {
      name: 'она',
      '1conjugation': 'ет',
      '2conjugation': 'ит'
   },
   {
      name: 'оно',
      '1conjugation': 'ет',
      '2conjugation': 'ит'
   },
   {
      name: 'мы',
      '1conjugation': 'ем',
      '2conjugation': 'им'
   },
   {
      name: 'вы',
      '1conjugation': 'ете',
      '2conjugation': 'ите'
   },
   {
      name: 'они',
      '1conjugation': ['ут', 'ют'],
      '2conjugation': ['ат', 'ят'],
   }
]

// разноспрягаемые глаголы
export const excludeVerbs = ['хотеть', 'чтить', 'бежать', 'есть', 'дать']

// создаю константу глаголов исключений первого спряжения
export const includeVerbsFirst = ['зиждиться', 'стелить', 'брить']

// создаю константу глаголов исключений второго спряжения
export const includeVerbsSecond = ['видеть', 'обидеть', 'ненавидеть', 'зависеть',
   'терпеть', 'смотреть', 'вертеть', 'дышать', 'слышать', 'гнать', 'держать']
