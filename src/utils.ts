export const shuffle = <T>(items: T[]): T[] => 
  items
    .slice()
    .sort(() => Math.random() - 0.5);
