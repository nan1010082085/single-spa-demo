import { createApp, h } from 'vue';
import App from './App';
import singleSpaVue from 'single-spa-vue';

const vueLifecycle = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        props: {
          name: this.name,
          // mountParcel: this.mountParcel,
          singleSpa: this.singleSpa,
        },
        widget: this.widget,
        widgetData: this.widgetData,
      });
    }
  },
  handleInstance: (app, props: { widget: any; widgetData: Array<any> }) => {
    console.log('%c[template main.ts app]', 'color:#FFF;background:#000;border-radius: 4px;padding:3px;');
    // console.log('parent props', props);
  }
});

export const bootstrap = vueLifecycle.bootstrap;
export const mount = vueLifecycle.mount;
export const unmount = vueLifecycle.unmount;
