// Структура сайдбара: главы и подпункты
const navigation = [
  {
    id: 'basics',
    icon: '🐍',
    name: 'Основы Python',
    topics: ['Установка и запуск','Переменные и типы','Операторы','Условия if/else','Циклы for/while','Функции'],
  },
  {
    id: 'data-structures',
    icon: '📦',
    name: 'Структуры данных',
    topics: ['Списки (list)','Кортежи (tuple)','Словари (dict)','Множества (set)','Генераторы'],
  },
  {
    id: 'oop',
    icon: '🔄',
    name: 'ООП',
    topics: ['Классы и объекты','Наследование','Инкапсуляция','Полиморфизм','Магические методы','Декораторы','Метаклассы'],
  },
  {
    id: 'files',
    icon: '📂',
    name: 'Файлы и IO',
    topics: ['Чтение файлов','Запись файлов','JSON и CSV','Pathlib'],
  },
  {
    id: 'exceptions',
    icon: '🔧',
    name: 'Исключения',
    topics: ['try/except','Свои исключения','Context managers'],
  },
];

export default navigation;
