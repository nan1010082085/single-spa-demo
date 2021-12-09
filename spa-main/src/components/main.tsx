import { defineComponent } from 'vue';

export default defineComponent({
  name: 'main',
  setup() {
    return () => {
      return <div id='main-template'>
        spa-main-component/main router-view
        <router-view />
      </div>;
    };
  }
});
