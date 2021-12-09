import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    return () => {
      return (
        <div id='app'>
          spa-main-app.tsx
          <div>
            <router-link to='/'> [ back ]</router-link>
            <router-link to='/app1'> [ app1 ]</router-link>
          </div>
          <router-view />
        </div>
      );
    };
  }
});
