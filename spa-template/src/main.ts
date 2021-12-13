import { createApp, h } from 'vue';
import App from './App';
import singleSpaVue from 'single-spa-vue';
import { BrowserLogColor as logs } from 'browser-log-color';

// 独立运行
if (!window.singleSpaNavigate) {
  createApp(App).mount('#app');
}

const vueLifecycle = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        props: {
          name: this.name,
          mountParcel: (this as any).mountParcel,
          singleSpa: (this as any).singleSpa
        },
        widget: (this as any).widget,
        widgetData: (this as any).widgetData
      });
    }
  },
  handleInstance: (app, props: { widget: any; widgetData: Array<any> }) => {
    console.log('%c[template main.ts app]', 'color:#FFF;background:#000;border-radius: 4px;padding:3px;', app);
  }
});

logs.bgBlue('vueLifecycle', vueLifecycle);

export const bootstrap = (props: any) => {
  logs.bgGroup(['bootstrap', '启动 spa template'], ['bgBlue', 'bgBlack']);
  return vueLifecycle.bootstrap(props);
};
export const mount = async (props: any) => {
  logs.bgGroup(['mount', '挂载 spa template'], ['bgGreen', 'bgBlack']);
  return vueLifecycle.mount(props);
};
export const unmount = async (props: any) => {
  logs.bgGroup(['unmount', '挂载 spa template'], ['bgOrange', 'bgBlack']);
  return vueLifecycle.unmount(props);
};
