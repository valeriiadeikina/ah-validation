import jest from 'eslint-plugin-jest'; // Импортируем плагин Jest

export default [
  {
    ignores: ['node_modules/**'], // Исключаем node_modules
  },
  {
    files: ['**/*.js'], // Применение к файлам .js
    languageOptions: {
      ecmaVersion: 'latest', // Устанавливаем ECMAScript версию
      sourceType: 'module',  // Тип модулей
      globals: {             // Устанавливаем глобальные переменные
        browser: true,
        node: true,
      },
    },
    plugins: {
      jest, // Подключаем плагин Jest
    },
    rules: {
      // Ваши общие правила
    },
  },
  {
    files: ['**/*.test.js'], // Специфические правила для файлов тестов
    rules: {
      ...jest.configs.recommended.rules, // Явное применение рекомендованных правил Jest
      'jest/prefer-expect-assertions': 'off', // Отключаем правило
    },
  },
];
