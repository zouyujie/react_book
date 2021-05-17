import React from 'react';
import ReactDOM from 'react-dom';
import ComponentLife from './components/ComponentLife';

let author = '唐-李白';
let clickChange = (data) => {
  author = data;
  renderDom();
};

import SetStateDemo from './components/SetStateDemo';
import FormDemo from './components/FormDemo';
import RefsForm from './components/RefsForm';
import MinxinsDemo from './components/MinxinsDemo';
import PropsTypeDemo from './components/PropsTypeDemo';
function renderDom() {
  ReactDOM.render(
    // <ComponentLife clickChanges={clickChange} author={author} />,
    // <SetStateDemo />,
    // <FormDemo></FormDemo>,
    // <RefsForm />,
    // <MinxinsDemo>暂无工单数据</MinxinsDemo>,
    <PropsTypeDemo title="你在他乡还好吗" />,
    document.getElementById('app')
  );
}
renderDom();
