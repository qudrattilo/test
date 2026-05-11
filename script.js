
// ===================== БАЗА ТЕСТОВ (80 вопросов) =====================
const testBank = [
  // ---------- ОДИНОЧНЫЙ ВЫБОР (30) ----------
  { id: 1, type: 'single', question: 'Как называется основной компонент компьютера, выполняющий вычисления?', options: ['Оперативная память', 'Центральный процессор (CPU)', 'Жесткий диск', 'Блок питания'], correct: 1 },
  { id: 2, type: 'single', question: 'Какое устройство используется для ввода текста?', options: ['Монитор', 'Клавиатура', 'Принтер', 'Колонки'], correct: 1 },
  { id: 3, type: 'single', question: 'Какой тип программного обеспечения управляет аппаратными ресурсами компьютера?', options: ['Прикладное ПО', 'Операционная система', 'Антивирус', 'Браузер'], correct: 1 },
  { id: 4, type: 'single', question: 'Что из перечисленного является примером операционной системы?', options: ['Microsoft Word', 'Google Chrome', 'Windows 11', 'Adobe Photoshop'], correct: 2 },
  { id: 5, type: 'single', question: 'Как называется хранилище данных, доступное через интернет?', options: ['Локальный диск', 'Облачное хранилище', 'Флеш-накопитель', 'SSD'], correct: 1 },
  { id: 6, type: 'single', question: 'Какой протокол используется для отображения веб-страниц?', options: ['FTP', 'HTTP/HTTPS', 'SMTP', 'POP3'], correct: 1 },
  { id: 7, type: 'single', question: 'Какое расширение файла обычно связано с текстовыми документами Microsoft Word?', options: ['.xlsx', '.pptx', '.docx', '.pdf'], correct: 2 },
  { id: 8, type: 'single', question: 'Какой символ используется для обозначения адреса электронной почты?', options: ['#', '@', '&', '$'], correct: 1 },
  { id: 9, type: 'single', question: 'Что такое "фишинг"?', options: ['Вид компьютерного вируса', 'Метод мошенничества для получения личных данных', 'Программа для ускорения интернета', 'Тип файрвола'], correct: 1 },
  { id: 10, type: 'single', question: 'Какое действие рекомендуется выполнять для защиты от вредоносного ПО?', options: ['Отключать брандмауэр', 'Регулярно обновлять антивирус и ОС', 'Использовать один пароль для всех сайтов', 'Открывать вложения от незнакомых отправителей'], correct: 1 },
  { id: 11, type: 'single', question: 'Какой из этих компонентов является энергозависимой памятью?', options: ['Жесткий диск (HDD)', 'SSD', 'Оперативная память (RAM)', 'Flash-накопитель'], correct: 2 },
  { id: 12, type: 'single', question: 'Для чего используется программа "Проводник" в Windows?', options: ['Для выхода в интернет', 'Для управления файлами и папками', 'Для редактирования текста', 'Для просмотра видео'], correct: 1 },
  { id: 13, type: 'single', question: 'Что означает аббревиатура "URL"?', options: ['Единый указатель ресурсов', 'Универсальный язык разметки', 'Программа для чтения почты', 'Тип компьютерной сети'], correct: 0 },
  { id: 14, type: 'single', question: 'Какой браузер по умолчанию установлен в Windows 10/11?', options: ['Google Chrome', 'Mozilla Firefox', 'Microsoft Edge', 'Safari'], correct: 2 },
  { id: 15, type: 'single', question: 'Для чего нужен файрвол (брандмауэр)?', options: ['Для ускорения работы компьютера', 'Для защиты сети от несанкционированного доступа', 'Для создания резервных копий', 'Для очистки реестра'], correct: 1 },
  { id: 16, type: 'single', question: 'Что из перечисленного является антивирусным ПО?', options: ['Microsoft Excel', 'Adobe Reader', 'Kaspersky', 'WinRAR'], correct: 2 },
  { id: 17, type: 'single', question: 'Какое устройство вывода отображает визуальную информацию?', options: ['Сканер', 'Микрофон', 'Монитор', 'Веб-камера'], correct: 2 },
  { id: 18, type: 'single', question: 'Какая комбинация клавиш копирует выделенный элемент в буфер обмена Windows?', options: ['Ctrl + V', 'Ctrl + X', 'Ctrl + C', 'Ctrl + Z'], correct: 2 },
  { id: 19, type: 'single', question: 'Какой тип сети охватывает большое географическое пространство (город, страна)?', options: ['LAN', 'WAN', 'PAN', 'VPN'], correct: 1 },
  { id: 20, type: 'single', question: 'Что такое "спам" в контексте электронной почты?', options: ['Вирусное сообщение', 'Нежелательная массовая рассылка', 'Зашифрованное письмо', 'Письмо с подтверждением'], correct: 1 },
  { id: 21, type: 'single', question: 'Какое расширение имеют исполняемые файлы в Windows?', options: ['.txt', '.exe', '.dll', '.sys'], correct: 1 },
  { id: 22, type: 'single', question: 'Что такое "кэш" браузера?', options: ['Пароли, сохраненные в браузере', 'Временные файлы для ускорения загрузки сайтов', 'История посещений', 'Расширения браузера'], correct: 1 },
  { id: 23, type: 'single', question: 'Что из перечисленного является облачным сервисом?', options: ['Microsoft Word (настольный)', 'Google Диск', 'Paint', 'Блокнот'], correct: 1 },
  { id: 24, type: 'single', question: 'Какая программа является электронной таблицей?', options: ['Microsoft Word', 'Microsoft PowerPoint', 'Microsoft Excel', 'Microsoft Outlook'], correct: 2 },
  { id: 25, type: 'single', question: 'Что такое "парольная фраза"?', options: ['Логин пользователя', 'Секретный вопрос', 'Последовательность слов для аутентификации', 'Адрес электронной почты'], correct: 2 },
  { id: 26, type: 'single', question: 'Что из перечисленного является поисковой системой?', options: ['Wikipedia', 'Google', 'Facebook', 'Amazon'], correct: 1 },
  { id: 27, type: 'single', question: 'Какой тип подключения к интернету использует оптоволоконный кабель?', options: ['Dial-up', 'DSL', 'Широкополосное оптоволоконное соединение', 'Спутниковое'], correct: 2 },
  { id: 28, type: 'single', question: 'Какая клавиша используется для удаления символа справа от курсора?', options: ['Backspace', 'Delete', 'Enter', 'Shift'], correct: 1 },
  { id: 29, type: 'single', question: 'Что из перечисленного является примером вредоносного ПО?', options: ['Microsoft Word', 'Троян', 'Google Chrome', 'Adobe Photoshop'], correct: 1 },
  { id: 30, type: 'single', question: 'Что такое "SSD"?', options: ['Тип оперативной памяти', 'Программное обеспечение', 'Твердотельный накопитель', 'Сетевой протокол'], correct: 2 },

  // ---------- МНОЖЕСТВЕННЫЙ ВЫБОР (20) ----------
  { id: 31, type: 'multiple', question: 'Какие из следующих устройств являются устройствами ВВОДА? (Выберите 2)', options: ['Клавиатура', 'Монитор', 'Мышь', 'Принтер'], correct: [0, 2] },
  { id: 32, type: 'multiple', question: 'Какие из перечисленных расширений относятся к графическим файлам? (Выберите 3)', options: ['.jpg', '.mp3', '.png', '.gif', '.docx'], correct: [0, 2, 3] },
  { id: 33, type: 'multiple', question: 'Какие меры помогут защитить вашу конфиденциальность в интернете? (Выберите 2)', options: ['Использование одинакового пароля везде', 'Включение двухфакторной аутентификации', 'Публикация домашнего адреса', 'Использование надёжных, уникальных паролей'], correct: [1, 3] },
  { id: 34, type: 'multiple', question: 'Какие из перечисленных программ являются веб-браузерами? (Выберите 3)', options: ['Microsoft Edge', 'Mozilla Firefox', 'Adobe Reader', 'Google Chrome', 'WinRAR'], correct: [0, 1, 3] },
  { id: 35, type: 'multiple', question: 'Какие действия могут помочь ускорить работу компьютера? (Выберите 2)', options: ['Удаление неиспользуемых программ', 'Установка большего количества виджетов', 'Увеличение объёма оперативной памяти', 'Отключение антивируса'], correct: [0, 2] },
  { id: 36, type: 'multiple', question: 'Что из перечисленного является операционной системой? (Выберите 3)', options: ['Windows', 'Microsoft Word', 'macOS', 'Linux', 'Adobe Photoshop'], correct: [0, 2, 3] },
  { id: 37, type: 'multiple', question: 'Какие из следующих элементов являются частью интерфейса окна в Windows? (Выберите 2)', options: ['Строка заголовка', 'Панель задач', 'Полоса прокрутки', 'Рабочий стол'], correct: [0, 2] },
  { id: 38, type: 'multiple', question: 'Какие из перечисленных форматов используются для видеофайлов? (Выберите 2)', options: ['.mp4', '.djvu', '.avi', '.csv'], correct: [0, 2] },
  { id: 39, type: 'multiple', question: 'Какие угрозы относятся к сетевым угрозам безопасности? (Выберите 2)', options: ['Вирус', 'Перегрев процессора', 'Фишинговая атака', 'Разбитый экран'], correct: [0, 2] },
  { id: 40, type: 'multiple', question: 'Какие устройства могут использоваться для подключения к интернету? (Выберите 3)', options: ['Модем', 'Принтер', 'Смартфон', 'Планшет', 'Сканер'], correct: [0, 2, 3] },
  { id: 41, type: 'multiple', question: 'Какие программы обычно предустановлены в Windows? (Выберите 2)', options: ['Microsoft Edge', 'Adobe Photoshop', 'Блокнот (Notepad)', 'Spotify'], correct: [0, 2] },
  { id: 42, type: 'multiple', question: 'Что из перечисленного является социальной сетью? (Выберите 2)', options: ['Facebook', 'Google', 'Wikipedia', 'Instagram'], correct: [0, 3] },
  { id: 43, type: 'multiple', question: 'Какие носители информации являются перезаписываемыми? (Выберите 2)', options: ['CD-R', 'CD-RW', 'DVD-R', 'Flash-накопитель'], correct: [1, 3] },
  { id: 44, type: 'multiple', question: 'Какие методы используются для резервного копирования данных? (Выберите 2)', options: ['Копирование на внешний жёсткий диск', 'Отправка по электронной почте самому себе', 'Использование облачного хранилища', 'Удаление старых файлов'], correct: [0, 2] },
  { id: 45, type: 'multiple', question: 'Какие файловые системы используются в Windows? (Выберите 2)', options: ['NTFS', 'ext4', 'FAT32', 'HFS+'], correct: [0, 2] },
  { id: 46, type: 'multiple', question: 'Какие из следующих действий являются безопасными в интернете? (Выберите 2)', options: ['Переход по подозрительным ссылкам', 'Проверка адреса сайта перед вводом пароля', 'Использование антивируса', 'Скачивание программ с неизвестных сайтов'], correct: [1, 2] },
  { id: 47, type: 'multiple', question: 'Какие элементы входят в состав системного блока компьютера? (Выберите 3)', options: ['Процессор', 'Монитор', 'Материнская плата', 'Блок питания', 'Клавиатура'], correct: [0, 2, 3] },
  { id: 48, type: 'multiple', question: 'Какие из перечисленных сервисов предоставляют облачное хранилище? (Выберите 2)', options: ['Google Диск', 'Microsoft Paint', 'Dropbox', 'Notepad++'], correct: [0, 2] },
  { id: 49, type: 'multiple', question: 'Какие функции выполняет операционная система? (Выберите 2)', options: ['Управление файлами', 'Создание веб-сайтов', 'Управление аппаратными ресурсами', 'Редактирование фотографий'], correct: [0, 2] },
  { id: 50, type: 'multiple', question: 'Какие протоколы используются для получения электронной почты? (Выберите 2)', options: ['SMTP', 'POP3', 'HTTP', 'IMAP'], correct: [1, 3] },

  // ---------- ВЕРНО / НЕВЕРНО (20) ----------
  { id: 51, type: 'truefalse', question: 'Оперативная память (RAM) сохраняет данные после выключения компьютера.', options: ['Верно', 'Неверно'], correct: 1 },
  { id: 52, type: 'truefalse', question: 'Windows является операционной системой.', options: ['Верно', 'Неверно'], correct: 0 },
  { id: 53, type: 'truefalse', question: 'Вирус — это легальная программа для защиты данных.', options: ['Верно', 'Неверно'], correct: 1 },
  { id: 54, type: 'truefalse', question: 'HTTPS обеспечивает более безопасное соединение, чем HTTP.', options: ['Верно', 'Неверно'], correct: 0 },
  { id: 55, type: 'truefalse', question: 'Файлы можно удалить безвозвратно, минуя корзину, используя Shift + Delete.', options: ['Верно', 'Неверно'], correct: 0 },
  { id: 56, type: 'truefalse', question: 'В адресе электронной почты обязательно присутствует символ "@".', options: ['Верно', 'Неверно'], correct: 0 },
  { id: 57, type: 'truefalse', question: 'Пароль "123456" считается надёжным.', options: ['Верно', 'Неверно'], correct: 1 },
  { id: 58, type: 'truefalse', question: 'Cookies — это файлы, хранящие информацию о предпочтениях пользователя на сайте.', options: ['Верно', 'Неверно'], correct: 0 },
  { id: 59, type: 'truefalse', question: 'Брандмауэр полностью заменяет антивирус.', options: ['Верно', 'Неверно'], correct: 1 },
  { id: 60, type: 'truefalse', question: 'Wi-Fi — это технология беспроводной передачи данных.', options: ['Верно', 'Неверно'], correct: 0 },
  { id: 61, type: 'truefalse', question: 'PDF-файлы можно открыть только в программе Adobe Acrobat.', options: ['Верно', 'Неверно'], correct: 1 },
  { id: 62, type: 'truefalse', question: 'В macOS можно запускать файлы .exe без дополнительных программ.', options: ['Верно', 'Неверно'], correct: 1 },
  { id: 63, type: 'truefalse', question: 'Облачное хранилище требует подключения к интернету для доступа к файлам.', options: ['Верно', 'Неверно'], correct: 0 },
  { id: 64, type: 'truefalse', question: 'Компьютерная мышь — это устройство вывода.', options: ['Верно', 'Неверно'], correct: 1 },
  { id: 65, type: 'truefalse', question: 'Файлы с расширением .tmp обычно являются временными и могут быть удалены.', options: ['Верно', 'Неверно'], correct: 0 },
  { id: 66, type: 'truefalse', question: 'Спам-фильтры электронной почты всегда блокируют все нежелательные письма без ошибок.', options: ['Верно', 'Неверно'], correct: 1 },
  { id: 67, type: 'truefalse', question: 'Для подключения к проводной сети используется Ethernet-кабель.', options: ['Верно', 'Неверно'], correct: 0 },
  { id: 68, type: 'truefalse', question: 'Приложения из Microsoft Store гарантированно не содержат вирусов.', options: ['Верно', 'Неверно'], correct: 1 },
  { id: 69, type: 'truefalse', question: 'Кэш-память процессора работает медленнее оперативной памяти.', options: ['Верно', 'Неверно'], correct: 1 },
  { id: 70, type: 'truefalse', question: 'USB-накопители можно использовать для переноса файлов между компьютерами.', options: ['Верно', 'Неверно'], correct: 0 },

  // ---------- СОПОСТАВЛЕНИЕ (10) ----------
  { id: 71, type: 'matching', question: 'Сопоставьте расширение файла с типом данных:', pairs: [
    { left: '.docx', right: 'Текстовый документ' },
    { left: '.xlsx', right: 'Электронная таблица' },
    { left: '.pptx', right: 'Презентация' },
    { left: '.pdf', right: 'Документ для чтения' }
  ]},
  { id: 72, type: 'matching', question: 'Сопоставьте термин с определением:', pairs: [
    { left: 'Браузер', right: 'Программа для просмотра веб-страниц' },
    { left: 'Поисковая система', right: 'Сервис для поиска информации' },
    { left: 'Электронная почта', right: 'Обмен сообщениями через интернет' },
    { left: 'Файрвол', right: 'Защита сети от несанкционированного доступа' }
  ]},
  { id: 73, type: 'matching', question: 'Сопоставьте устройство с его функцией:', pairs: [
    { left: 'Сканер', right: 'Оцифровка документов' },
    { left: 'Принтер', right: 'Печать документов' },
    { left: 'Монитор', right: 'Отображение информации' },
    { left: 'Микрофон', right: 'Запись звука' }
  ]},
  { id: 74, type: 'matching', question: 'Сопоставьте ОС с производителем:', pairs: [
    { left: 'Windows', right: 'Microsoft' },
    { left: 'macOS', right: 'Apple' },
    { left: 'Android', right: 'Google' },
    { left: 'iOS', right: 'Apple' }
  ]},
  { id: 75, type: 'matching', question: 'Сопоставьте термин безопасности с описанием:', pairs: [
    { left: 'Фишинг', right: 'Мошенничество для получения данных' },
    { left: 'Вирус', right: 'Вредоносная саморазмножающаяся программа' },
    { left: 'Спам', right: 'Массовая нежелательная рассылка' },
    { left: 'Двухфакторная аутентификация', right: 'Два способа подтверждения личности' }
  ]},
  { id: 76, type: 'matching', question: 'Сопоставьте комбинацию клавиш с действием в Windows:', pairs: [
    { left: 'Ctrl+C', right: 'Копировать' },
    { left: 'Ctrl+V', right: 'Вставить' },
    { left: 'Alt+Tab', right: 'Переключение между окнами' },
    { left: 'Win+D', right: 'Показать рабочий стол' }
  ]},
  { id: 77, type: 'matching', question: 'Сопоставьте тип сети с её масштабом:', pairs: [
    { left: 'LAN', right: 'Локальная сеть (здание)' },
    { left: 'WAN', right: 'Глобальная сеть (страна)' },
    { left: 'PAN', right: 'Персональная сеть (до 10 м)' },
    { left: 'MAN', right: 'Городская сеть (город)' }
  ]},
  { id: 78, type: 'matching', question: 'Сопоставьте облачный сервис с его функцией:', pairs: [
    { left: 'Google Диск', right: 'Хранение файлов' },
    { left: 'Google Docs', right: 'Онлайн работа с текстом' },
    { left: 'Dropbox', right: 'Синхронизация файлов' },
    { left: 'OneDrive', right: 'Хранилище Microsoft' }
  ]},
  { id: 79, type: 'matching', question: 'Сопоставьте формат файла с типом контента:', pairs: [
    { left: '.mp3', right: 'Аудио' },
    { left: '.jpg', right: 'Изображение' },
    { left: '.mp4', right: 'Видео' },
    { left: '.txt', right: 'Текст' }
  ]},
  { id: 80, type: 'matching', question: 'Сопоставьте компонент ПК с его ролью:', pairs: [
    { left: 'Процессор', right: 'Обработка данных' },
    { left: 'ОЗУ', right: 'Временное хранение программ' },
    { left: 'Жёсткий диск', right: 'Долговременное хранение' },
    { left: 'Блок питания', right: 'Электропитание компонентов' }
  ]}
];

// ===================== ЛОГИКА ТЕСТА =====================
let selectedQuestions = [];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startTest() {
  selectedQuestions = shuffle([...testBank]).slice(0, 45);
  document.getElementById('startBlock').classList.add('hidden');
  document.getElementById('testBlock').classList.remove('hidden');
  document.getElementById('resultBlock').classList.add('hidden');
  renderTest();
}

function renderTest() {
  const form = document.getElementById('testForm');
  form.innerHTML = '';

  selectedQuestions.forEach((q, idx) => {
    const block = document.createElement('div');
    block.className = 'question-block';
    block.dataset.index = idx;
    block.dataset.type = q.type;
    block.dataset.id = q.id;

    const qText = document.createElement('div');
    qText.className = 'question-text';
    qText.textContent = `${idx + 1}. ${q.question}`;
    block.appendChild(qText);

    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options';

    if (q.type === 'single') {
      q.options.forEach((opt, optIdx) => {
        const label = document.createElement('label');
        label.className = 'option';
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = `q_${idx}`;
        radio.value = optIdx;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(opt));
        optionsDiv.appendChild(label);
      });
    } else if (q.type === 'multiple') {
      q.options.forEach((opt, optIdx) => {
        const label = document.createElement('label');
        label.className = 'option';
        const check = document.createElement('input');
        check.type = 'checkbox';
        check.name = `q_${idx}`;
        check.value = optIdx;
        label.appendChild(check);
        label.appendChild(document.createTextNode(opt));
        optionsDiv.appendChild(label);
      });
    } else if (q.type === 'truefalse') {
      q.options.forEach((opt, optIdx) => {
        const label = document.createElement('label');
        label.className = 'option';
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = `q_${idx}`;
        radio.value = optIdx;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(opt));
        optionsDiv.appendChild(label);
      });
    } else if (q.type === 'matching') {
      const rightItems = q.pairs.map(p => p.right);
      const shuffledRights = shuffle([...rightItems]);
      q.pairs.forEach(pair => {
        const row = document.createElement('div');
        row.className = 'matching-row';
        const leftSpan = document.createElement('span');
        leftSpan.className = 'matching-left';
        leftSpan.textContent = pair.left;
        const select = document.createElement('select');
        select.name = `match_${idx}_${pair.left}`;
        select.dataset.left = pair.left;
        const defaultOption = document.createElement('option');
        
