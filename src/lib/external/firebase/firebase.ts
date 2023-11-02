export type FirebaseConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
};

import { type Analytics, initializeAnalytics } from 'firebase/analytics';
import { type FirebaseApp, initializeApp } from 'firebase/app';

export let app: FirebaseApp;
export let analyticInstance: Analytics;

export const initFirebase = (config: FirebaseConfig) => {
  app = initializeApp(config);
  analyticInstance = initializeAnalytics(app);
};
