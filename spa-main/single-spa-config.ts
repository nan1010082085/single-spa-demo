import { registerApplication, start } from 'single-spa';
const base = 'http://localhost:3001';

const application = {
  name: 'app1',
  app: () => import(/* @vite-ignore */ `${base}/src/main`),
  activeWhen: '/app1',
  customProps: {
    widgetData: [{}],
    widget: { a: 11 }
  }
};

registerApplication(application);

start();
