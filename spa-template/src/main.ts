import { createApp, h } from 'vue';
import App from './App';
import singleSpaVue from 'single-spa-vue';
import { BrowserLogColor as logs } from 'browser-log-color';

const appOptions = {
  render() {
    return h(App, {
      // mountParcel: this.mountParcel,
      singleSpa: (this as any).singleSpa,
      widget: (this as any).widget,
      widgetData: (this as any).widgetData
    });
  }
};

logs.bgBlue('[window.singleSpaNavigate]', window.singleSpaNavigate)

// 独立运行
if (!window.singleSpaNavigate) {
  createApp(App).mount('#app');
}

const vueLifecycle = singleSpaVue({
  createApp,
  appOptions,
  handleInstance: (app, props: { widget: any; widgetData: Array<any> }) => {
    console.log('%c[template main.ts app]', 'color:#FFF;background:#000;border-radius: 4px;padding:3px;');
    // console.log('parent props', props);
  }
});

export const bootstrap = vueLifecycle.bootstrap;
export const mount = vueLifecycle.mount;
export const unmount = vueLifecycle.unmount;
