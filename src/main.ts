import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import { store } from "./store/store";

createApp(App)
  .use(store)
  .mount("body");
