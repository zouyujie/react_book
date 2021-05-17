import React from 'react';
// import { Button } from 'antd';
import Button from 'antd/es/button';
import 'antd/es/button/style/css';
import FetchDemo from './components/FetchDemo';
import Home from './views/Home';
import My from './views/Home';

function App() {
  return (
    <div className="App">
      {/* <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button> */}
      {/* <FetchDemo></FetchDemo> */}
      <Home></Home>
      <My></My>
    </div>
  );
}

export default App;
