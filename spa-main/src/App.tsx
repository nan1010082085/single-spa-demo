import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'App',
  setup() {
    const router = useRouter();

    return () => {
      return (
        <div id='app'>
          spa-main-app.tsx
          <div>
            <button onClick={() => router.push('/')}>app</button>
            <button onClick={() => router.push({ path: '/spa-template' })}>micro apps</button>
          </div>
          <router-view />
        </div>
      );
    };
  }
});
