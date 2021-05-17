import dva from "dva";
import "./index.css";
import router from "./router";
import { createBrowserHistory as createHistory } from "history";
// 1. Initialize
const app = dva({
  history: createHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require("./models/users").default);

// 4. Router
// app.router(require('./router').default);
app.router(router);

// 5. Start
app.start("#root");
