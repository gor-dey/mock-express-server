const mock_db = {
  posts: [
    {
      id: 1,
      title: "Александр Сергеевич Пушкин",
      body: "Мой дядя самых честных правил, когда не в шутку занемог, он уважать себя заставили и лучше выдумать не мог.",
      likes: 0,
    },
    {
      id: 2,
      title: "Толстой и его мысли",
      body: "Война и мир - великое произведение, отражающее глубокие размышления о человеческой сущности",
      likes: 0,
    },
    {
      id: 3,
      title: "Моя любовь к природе",
      body: "Закаты над горами заставляют меня задуматься о бескрайних возможностях мира вокруг нас",
      likes: 0,
    },
    {
      id: 4,
      title: "Философия жизни",
      body: "Искусство находить радость в мелочах делает нашу жизнь насыщенной и счастливой",
      likes: 0,
    },
    {
      id: 5,
      title: "Музыка в моей душе",
      body: "Ноты могут выразить эмоции глубже, чем слова. Музыка - ключ к моей душе",
      likes: 0,
    },
    {
      id: 6,
      title: "Путешествие в прошлое",
      body: "История - это уроки, которые мы должны запомнить, чтобы не повторять ошибки прошлого",
      likes: 0,
    },
    {
      id: 7,
      title: "Вдохновение в повседневности",
      body: "Иногда самые обыденные вещи могут принести вдохновение и радость",
      likes: 0,
    },
    {
      id: 8,
      title: "Загадки Вселенной",
      body: "Звезды в ночном небе напоминают нам о том, как малы мы перед бескрайней Вселенной",
      likes: 0,
    },
    {
      id: 9,
      title: "Искусство терпения",
      body: "Терпение - ключ к достижению целей. Всегда стоит помнить об этом",
      likes: 0,
    },
    {
      id: 10,
      title: "Секрет счастливых отношений",
      body: "Взаимопонимание и уважение - основа крепких отношений. Никогда не забывайте об этом",
      likes: 0,
    },
  ],

  answers: [
    {
      id: 1,
      postId: 1,
      comment: "Отличный пост",
      username: "ЛучшийКомментатор",
    },
    {
      id: 2,
      postId: 1,
      comment: "Ну такое",
      username: "Разногласия",
    },
    {
      id: 3,
      postId: 2,
      comment: "Интересное мнение",
      username: "ОстрыйЧитатель",
    },
    {
      id: 4,
      postId: 2,
      comment: "Классика всегда актуальна",
      username: "ЛюбительКлассики",
    },
    {
      id: 5,
      postId: 3,
      comment: "Прекрасное место",
      username: "Путешественник",
    },
    {
      id: 6,
      postId: 3,
      comment: "Жизнь прекрасна с такими видами",
      username: "ИсследовательЖизни",
    },
    {
      id: 7,
      postId: 4,
      comment: "Согласен на все 100%",
      username: "ЦелеСердцем",
    },
    {
      id: 8,
      postId: 4,
      comment: "Мудрые слова",
      username: "ПоклонникМудрости",
    },
    {
      id: 9,
      postId: 5,
      comment: "Какие жанры предпочитаешь?",
      username: "ЛюбительЖанров",
    },
    {
      id: 10,
      postId: 5,
      comment: "Музыка объединяет нас",
      username: "ГармонияМузыки",
    },
    {
      id: 11,
      postId: 6,
      comment: "Важное напоминание",
      username: "МастерНапоминаний",
    },
    {
      id: 12,
      postId: 6,
      comment: "История нашего мира",
      username: "ЦенительИстории",
    },
    {
      id: 13,
      postId: 7,
      comment: "Где ты находишь вдохновение?",
      username: "ИскательВдохновения",
    },
    {
      id: 14,
      postId: 7,
      comment: "Простые радости жизни",
      username: "ЛюбительПростыхРадостей",
    },
    {
      id: 15,
      postId: 8,
      comment: "Глубокие мысли",
      username: "Мыслитель",
    },
    {
      id: 16,
      postId: 8,
      comment: "Космос вдохновляет",
      username: "МечтательОКосмосе",
    },
    {
      id: 17,
      postId: 9,
      comment: "Терпение и труд всё перетрут",
      username: "ТерпеливыйТруженик",
    },
    {
      id: 18,
      postId: 9,
      comment: "Мудрость",
      username: "ЛюбительМудрости",
    },
    {
      id: 19,
      postId: 10,
      comment: "Согласен на все сто",
      username: "СТоПроцентовСогласен",
    },
  ],
};

module.exports = mock_db;
