// import 'vite/modulepreload-polyfill';
// import path from 'path';
import { registerApplication, start } from 'single-spa';
import { BrowserLogColor as logs } from 'browser-log-color';
import apps from './public/apps.json';
import local from './local.dev.json';

apps.forEach((app) => {
  const appEntry =
    import.meta.env.MODE === 'production'
      ? `/template/${app.name}.system.js`
      : `${(local as any).apps[app.name]}${app.entry}`;
  logs.bgOrange('entry', appEntry);
  const application = {
    name: app.name,
    app: () => (window as any).System.import(/* @vite-ignore */ appEntry),
    activeWhen: `/${app.name}`, //(location: any) => location.pathname.startWith('/app1'),
    customProps: {
      widgetData: [{}],
      widget: { a: 11 }
    }
  };
  logs.bgBlack('application', application);

  registerApplication(application);
});
// base = 'http://localhost:3001/src/main';

start({ urlRerouteOnly: true });
