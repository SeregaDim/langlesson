import { useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const METHODS = [
  { icon: '🔍', name: '.get(key)',   sub: 'Безопасное чтение' },
  { icon: '🗝️', name: '.keys()',     sub: 'Все ключи' },
  { icon: '📋', name: '.values()',   sub: 'Все значения' },
  { icon: '🔗', name: '.items()',    sub: 'Пары ключ-значение' },
  { icon: '🔄', name: '.update()',   sub: 'Обновление данных' },
  { icon: '🗑️', name: '.pop(key)',   sub: 'Удаление элемента' },
];

const TABS = ['📖 Теория', '💻 Примеры', '🎯 Задача', '❓ Тест', '🗺️ Шпаргалка'];

export default function DemoTeme(){

    const [activeTab, setActiveTab] = useState('📖 Теория');
    const [quizState, setQuizState] = useState({});   // { optIndex: 'correct'|'wrong' }

  function checkAnswer(idx, correct) {
    if (Object.keys(quizState).length > 0) return;  // уже отвечено
    const next = {};
    [false, false, true, false].forEach((c, i) => {
      if (i === idx) next[i] = correct ? 'correct' : 'wrong';
      else if (c)    next[i] = 'correct';
    });
    setQuizState(next);
  }

    return(
        <>
         {/* Заголовок */}
          <div className="topic-hero">
            <div className="topic-tag">📦 Структуры данных · Тема 3 из 5</div>
            <div className="topic-title">Словари (dict)</div>
            <div className="topic-desc">
              Словарь — это изменяемая коллекция пар «ключ: значение». Один из самых мощных
              типов данных в Python, используется повсюду: от хранения конфигураций до работы с JSON.
            </div>
            <div className="tags">
              {['dict','hashable','key-value','O(1) lookup','mutable'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Табы */}
          <div className="subtopic-cards">
            {TABS.map(tab => (
              <div
                key={tab}
                className={`stcard${activeTab === tab ? ' active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* ── ТЕОРИЯ ── */}
          <div className="section">
            <div className="section-title">Создание словаря</div>
            <p className="prose">
              Словари создаются с помощью фигурных скобок{' '}
              <code style={{ color: 'var(--accent)' }}>{ '{ }' }</code> или функции{' '}
              <code style={{ color: 'var(--accent)' }}>dict()</code>.
              Ключи должны быть неизменяемыми (строки, числа, кортежи). Значения — любого типа.
            </p>

            <div className="code-block">
              <div className="code-header">
                <div className="code-dots"><i /><i /><i /></div>
                <span className="code-lang">python</span>
                
              </div>
              <pre>
                <span className="cm"># Создание словаря</span>{'\n'}
                {'user = {\n'}
                {'    '}<span className="st">"name"</span>{': '}<span className="st">"Алексей"</span>{',\n'}
                {'    '}<span className="st">"age"</span>{':  '}<span className="nm">25</span>{',\n'}
                {'    '}<span className="st">"city"</span>{': '}<span className="st">"Москва"</span>{',\n'}
                {'}'}
              </pre>
            </div>
            <div className="output-block">
              <div className="output-label">OUTPUT</div>
              Алексей<br />25
            </div>
          </div>

          {/* Методы */}
          <div className="section">
            <div className="section-title">Основные методы</div>
            <p className="prose">
              Самые важные —{' '}
              <code style={{ color: 'var(--accent)' }}>.get()</code>,{' '}
              <code style={{ color: 'var(--accent)' }}>.keys()</code>,{' '}
              <code style={{ color: 'var(--accent)' }}>.values()</code>,{' '}
              <code style={{ color: 'var(--accent)' }}>.items()</code> и{' '}
              <code style={{ color: 'var(--accent)' }}>.update()</code>.
            </p>

            <div className="cards-grid">
              {METHODS.map(m => <Card key={m.name} {...m} />)}
            </div>

            <div className="code-block">
              <div className="code-header">
                <div className="code-dots"><i /><i /><i /></div>
                <span className="code-lang">python</span>
                <Button variant="green">▶ Запустить</Button>
              </div>
              <pre>
                {'scores = {'}<span className="st">"Alice"</span>{': '}<span className="nm">95</span>{', '}<span className="st">"Bob"</span>{': '}<span className="nm">80</span>{'}\n\n'}
                <span className="cm"># .get() — не вызывает ошибку если ключа нет</span>{'\n'}
                <span className="fn">print</span>{'(scores.'}<span className="fn">get</span>{'('}<span className="st">"Dave"</span>{', '}<span className="nm">0</span>{'))   '}<span className="cm"># 0</span>{'\n\n'}
                <span className="kw">for</span>{' name, score '}<span className="kw">in</span>{' scores.'}<span className="fn">items</span>{'():\n'}
                {'    '}<span className="fn">print</span>{'('}<span className="bi">f</span><span className="st">"{'{'}name{'}'}: {'{'}score{'}'} очков"</span>{')'}
              </pre>
            </div>
            <div className="output-block">
              <div className="output-label">OUTPUT</div>
              0<br />Alice: 95 очков<br />Bob: 80 очков
            </div>
          </div>

          {/* Квиз */}
          <div className="section">
            <div className="section-title">Проверь себя</div>
            <div className="quiz-block">
              <div className="quiz-q">
                Что выведет код?<br />
                <code style={{ color: 'var(--accent)' }}>
                  {'d = {"a": 1, "b": 2}\nprint(d.get("c", 99))'}
                </code>
              </div>
              <div className="quiz-opts">
                {['None', 'KeyError', '99', '0'].map((opt, i) => (
                  <button
                    key={opt}
                    className={`qopt${quizState[i] ? ' ' + quizState[i] : ''}`}
                    onClick={() => checkAnswer(i, i === 2)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div></>
    )
}