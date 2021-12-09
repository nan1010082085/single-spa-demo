// import 'vite/modulepreload-polyfill';
// import path from 'path';
import { registerApplication, start } from 'single-spa';
import { BrowserLogColor as logs } from 'browser-log-color';

let base = '';

if (import.meta.env.MODE === 'production') {
  fetch('/micro/app1/manifest.json')
    .then((response) => {
      logs.bgBlack('[micro manifest]', response);
      return response.json();
    })
    .then((json) => {
      logs.bgBlue('json', json);
      base = `/micro/app1/${json['index.html'].file}`
      logs.bgGreen('base', base)
    });
} else {
  base = 'http://localhost:3001/src/main';
}

const application = {
  name: 'app1',
  app: () => import(/* @vite-ignore */ base),
  activeWhen:  '/app1', //(location: any) => location.pathname.startWith('/app1'),
  customProps: {
    widgetData: [{}],
    widget: { a: 11 }
  }
};
logs.bgBlue('base', base);
logs.bgBlack('application', application);

registerApplication(application);

start();
