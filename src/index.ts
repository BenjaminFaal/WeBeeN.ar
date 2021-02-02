import 'carbon-components-svelte/css/white.css';

import App from './App.svelte';

const app = new App({
    target: document.body,
    intro: true,
    props: {}
});

export default app;

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
// @ts-ignore
if (import.meta.hot) {
    // @ts-ignore
    import.meta.hot.accept();
    // @ts-ignore
    import.meta.hot.dispose(() => {
        app.$destroy();
    });
}
