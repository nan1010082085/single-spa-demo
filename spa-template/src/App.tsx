import { defineComponent, watch } from 'vue';

export default defineComponent({
  name: 'App',
  props: {
    widget: Object,
    widgetData: Array
  },
  setup(props) {
    console.log('[app.tsx]', props.widget);

    // watch(
    //   () => props.widget,
    //   (widget) => console.log('[app.tsx]', widget),
    //   {
    //     immediate: true,
    //     deep: true
    //   }
    // );

    return () => {
      return <div id='app'>spa-template/App.tsx</div>;
    };
  }
});
