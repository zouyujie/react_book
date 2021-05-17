import React, { Component } from 'react';
//常量对象
const themes = { light: 'orange', dark: 'lightblue' };
//创建Context组件
const ThemeContext = React.createContext({
  theme: themes.light,
  toggle: () => {}, //向上下文设定一个回调方法
});

//根组件
class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = () => {
      //设定toggle方法，会作为context参数传递
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };

    this.state = {
      theme: themes.light,
      toggle: this.toggle,
    };
  }

  render() {
    return (
      //Provider提供值
      <ThemeContext.Provider value={this.state}>
        <Button />
      </ThemeContext.Provider>
    );
  }
}
//接收组件
function Button() {
  return (
    // Consumer接收值
    <ThemeContext.Consumer>
      {({ theme, toggle }) => (
        <button
          onClick={toggle} //调用回调
          style={{ backgroundColor: theme }}
        >
          切换主题
        </button>
      )}
    </ThemeContext.Consumer>
  );
}
export default App;
