import 'antd/dist/antd.css';
import './assets/scss/base.scss';
import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';
// 引入路由文件
import routers from './router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// 引入布局组件
import JieHeader from './components/layout/header/JieHeader';
import JieSider from './components/layout/sider/JieSider';
import JieBreadcrumb from './components/layout/nav/JieBreadcrumb';
import { Layout } from 'antd';
const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          {/* <div className="App">轻轻的，我来了</div> */}
          <Layout>
            <JieHeader></JieHeader>
            <Layout>
              <JieSider></JieSider>
              <Layout style={{ padding: '0 24px 24px' }}>
                {/* 再别康桥 */}
                <Content
                  className="site-layout-background"
                  style={{
                    padding: 0,
                    margin: 0,
                    minHeight: 280,
                  }}
                >
                  <Switch>
                    {/* 配置路由 */}
                    {routers.map((m, index) => {
                      return (
                        <Route
                          key={index}
                          path={m.path}
                          exact={m.exact}
                          strict={m.strict}
                          render={(props) => (
                            <Fragment>
                              <JieBreadcrumb
                                menuName={m.menuName}
                                subMenuName={m.subMenuName}
                              ></JieBreadcrumb>
                              <m.component {...props}></m.component>
                            </Fragment>
                          )}
                        ></Route>
                      );
                    })}
                  </Switch>
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
