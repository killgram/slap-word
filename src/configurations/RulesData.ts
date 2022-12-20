import { TournamentConfig } from '@configurations/index'

const RulesData = [
  {
    title: 'О чем приложение:',
    desc: `"Slap Word" - это игра, по мотивам социального эксперимента "Wordle", адаптированная под мобильные устройства.`,
  },
  {
    title: 'Возможности приложения:',
    desc: `"Slap Word" значительно расширяет возможности классического "Wordle", предоставляя возможность не только сыграть в "Слово дня", но и поиграть в "Свободную игру" и режим "Турнир". Так же приложение предоставляет "Список лучших" 25 игроков в "Slap Word".`,
  },
  {
    title: `Как играть:`,
    desc: `Вам необходимо угадать слово с заданным количеством букв. После каждого предположения буквы отмечаются зелёным, жёлтым или серым цветом: зелёный означает, что буква правильная и находится в правильном месте, жёлтый означает, что буква есть в ответе, но на другой позиции, а серый означает, что буквы в загаданном слове нет вообще.`,
  },
  {
    title: `Режим "Слово дня":`,
    desc: `В режиме "Слово дня" Вам необходимо угадать слово, загаданное персонально для Вас системой "Slap Word". Слово всегда имеет длину в 5 букв, всего 1 слово в день. Счетчик сбрасывается каждый день в 00:00 местного времени.`,
  },
  {
    title: `Режим "Обычная игра":`,
    desc: `В режиме "Обычная игра" игроку дается возможность выбрать, слово какой длины он хочет отгадать. В данный режим можно играть сколько угодно раз.`,
  },
  {
    title: `Режим "Турнир":`,
    desc: `В режиме "Турнир" игроку предстоит угадывать слова случайной длины до тех пор, пока он (пользователь) не ошибется и не проиграет. Первое слово всегда имеет длину в ${
      TournamentConfig.BASE_TOURNAMENT_CONFIG.wordLength
    } буквы, все последующие - случайное значение (но не больше ${
      TournamentConfig.MAX_WORD_LENGTH
    }). Очки начисляются по принципу: за каждую букву угаданного слова игрок получает ${
      TournamentConfig.ONE_WORD_IN_SCORE
    } очков, например: за слово из 5 букв игрок получит ${
      TournamentConfig.ONE_WORD_IN_SCORE * 5
    } очков, а за слово из 8 букв уже ${
      TournamentConfig.ONE_WORD_IN_SCORE * 8
    }! По окончанию игры Ваш результат запишется в общую таблицу лучших игроков.`,
  },
]

export { RulesData }