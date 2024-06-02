export * from './store';
export * from './hooks';
export * from './api';

declare global {
    interface Window {
      toggleDevtools: () => void;
    }
  }

