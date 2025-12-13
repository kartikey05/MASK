import { Helper } from '@/types/helper';

const STORAGE_KEY = 'helpers_directory';

export const getHelpers = (): Helper[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return [];
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
};

export const addHelper = (helper: Omit<Helper, 'id' | 'createdAt'>): Helper => {
  const helpers = getHelpers();
  const newHelper: Helper = {
    ...helper,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  helpers.push(newHelper);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(helpers));
  return newHelper;
};

export const getHelperById = (id: string): Helper | undefined => {
  const helpers = getHelpers();
  return helpers.find((h) => h.id === id);
};
