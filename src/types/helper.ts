export interface Helper {
  id: string;
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  age: number;
  workType: string;
  phone: string;
  state: string;
  city: string;
  localArea: string;
  description: string;
  createdAt: string;
}

export const WORK_TYPES = [
  'Cook',
  'Cleaner',
  'Babysitter',
  'Driver',
  'Elder Care',
  'House Maid',
  'Other',
] as const;

export type WorkType = typeof WORK_TYPES[number];
