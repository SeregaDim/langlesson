
const MODULES = [
  {
    icon: '🐍',
    iconBg: 'rgba(34,197,94,0.12)',
    name: '1) Linux',
    topics: [
      { label: '1) Знакомство с Linux', to: '/articles', done: true },
      { label: '2) Устройство системы', to: '/a', done: true },
      { label: '3) Терминал и bash', to: '/s', done: true },
      { label: '4) Пользователи и права', to: '/sd', done: true },
      { label: '5) Управление пакетами', to: '/rt', done: true },
    ],
  },
  {
    icon: '📦',
    iconBg: 'rgba(99,102,241,0.12)',
    name: '2) PostgreSQL',
    topics: [
      { label: 'Списки (list)', to: '/dfg', done: true },
      { label: 'Словари (dict)', to: '/fgh', done: true },
      { label: 'Кортежи (tuple)', to: '/err', done: true },
    ],
  },
  {
    icon: '📦',
    iconBg: 'rgba(99,102,241,0.12)',
    name: '3) PHP',
    topics: [
      { label: 'Списки (list)', to: '/fws', done: true },
      { label: 'Словари (dict)', to: '/sqq', done: true },
      { label: 'Кортежи (tuple)', to: '/poo', done: true },
    ],
  },
  {
   icon:'📦',
   iconBg:'rgba(99,102,241,0.12)',
   name: '4) Laravel',
   topics: [
    {label: 'Пользователи и группы: useradd, usermod, passwd', to: '/hh', done: true },
    {label: '01', to: '/jkk', done: true},
    {label: '02', to: '/uio', done: true},
    {label: '03', to: '/vbb', done: true},
    {label: '04', to: '/fddc', done: true},
   ],
  }
];

export default MODULES;