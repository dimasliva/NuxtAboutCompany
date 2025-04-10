export const useForumTabs = () => {
  const actions = [
    { text: 'UI/UX', value: 'uiux' },
    { text: 'Функциональные', value: 'functional' },
    { text: 'Производительность', value: 'performance' },
    { text: 'Безопасность', value: 'security' },
    { text: 'Ошибки', value: 'errors' },
    { text: 'Совместимость', value: 'compatibility' },
];

  const selectedActions = ref<string[]>([]);

  return {
    actions,
    selectedActions,
  };
};
