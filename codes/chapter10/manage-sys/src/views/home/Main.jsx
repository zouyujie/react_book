import React, { Component } from 'react';
import './main.scss';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import { getHomeDataAction } from '../../store/actionCreators';

class Main extends Component {
  render() {
    console.log('this.props.homeData :>> ', this.props.homeData);
    const { homeData } = this.props;
    if (!homeData) return <div></div>;
    return (
      <div className="main">
        {/*个人资料*/}
        <Row gutter={25}>
          <Col span={8}>
            <div className="cell s1">
              <i className="iconfont icon-yonghu"></i>
              <h4>登录用户</h4>
              <h5>{homeData.login_user}</h5>
            </div>
          </Col>
          <Col span={8}>
            <div className="cell s2">
              <i className="iconfont icon-zhuce"></i>
              <h4>新增注册</h4>
              <h5>{homeData.new_register}</h5>
            </div>
          </Col>
          <Col span={8}>
            <div className="cell s3">
              <i className="iconfont icon-xinzeng"></i>
              <h4>课程新增学员</h4>
              <h5>{homeData.new_stu_course}</h5>
            </div>
          </Col>
        </Row>
        <Row gutter={25}>
          <Col span={8}>
            <div className="cell s4">
              <i className="iconfont icon-banjiguanli"></i>
              <h4>班级新增学员</h4>
              <h5>{homeData.new_stu_classes}</h5>
            </div>
          </Col>
          <Col span={8}>
            <div className="cell s5">
              <i className="iconfont icon-huiyuan"></i>
              <h4>新增会员</h4>
              <h5>{homeData.new_member}</h5>
            </div>
          </Col>
          <Col span={8}>
            <div className="cell s6">
              <i className="iconfont icon-yiwen"></i>
              <h4>未回复问答</h4>
              <h5>{homeData.not_reply}</h5>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
  //组件渲染完成之后就去发起获取数据的请求
  componentDidMount() {
    this.props.reqHomeData();
  }
}
const mapStateToProps = (state) => {
  return {
    homeData: state.homeData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    reqHomeData: () => {
      const action = getHomeDataAction();
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
