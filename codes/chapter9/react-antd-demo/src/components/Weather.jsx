import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as weatherActions from '../actions/weather';
import { Button } from 'antd';

class Weather extends Component {
  render() {
    console.log('props', this.props);
    return (
      <div>
        <Button onClick={() => this.props.weatherActions.yesterdayWeather()}>
          昨日天气
        </Button>
        {this.props.yesterday.date ? (
          <div>
            日期：{this.props.yesterday.date}，最高温度：
            {this.props.yesterday.high}，最低温度：
            {this.props.yesterday.low}，状态：{this.props.yesterday.type}
          </div>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  //   console.log('state', state);
  return {
    yesterday: state.weather.yesterday,
  };
};
const mapDispatchProps = (dispatch) => {
  return {
    weatherActions: bindActionCreators(weatherActions, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchProps)(Weather);
