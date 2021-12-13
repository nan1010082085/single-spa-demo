import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MicroContainer',
  setup() {
    return () => {
      return <div id='micro-container'>
        spa-main-component/main router-view
        <router-view />
      </div>;
    };
  }
});
