import React, { Component } from 'react';
import { Form, Input, Radio, Select, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './user-add.scss';
import { addUser, editUser } from '../../api/index';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
export class UserAdd extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }
  componentDidMount() {
    console.log('componentDidMount ', this.props.winVisible);
    this.initData();
    this.props.onRef(this);
  }
  //初始化表单数据
  initData() {
    if (this.props.isEdit) {
      this.formRef.current.setFieldsValue({ ...this.props.curItem });
      this.formRef.current.setFieldsValue({ password: '' });
    }
  }
  componentDidUpdate() {
    console.log('componentDidUpdate ', this.props.winVisible);
    if (!this.props.winVisible) {
      this.onReset();
    } else {
      this.initData();
    }
  }
  //重置表单
  onReset = () => {
    this.formRef.current.resetFields();
  };
  //提交表单操作
  onFinish = async (values) => {
    console.log('onSubmitForm', values);
    let res = null;
    let operateFlag = '编辑';
    if (this.props.isEdit) {
      //编辑
      res = await editUser({ ...values, id: this.props.curItem._id });
    } else {
      //新增
      operateFlag = '新增';
      res = await addUser(values);
    }
    if (res && res.code === 200) {
      message.success(`${operateFlag}用户成功`);
      this.props.handleCancel(); //操作成功-关闭弹窗
      this.props.refreshData(); //刷新界面数据
    } else {
      //操作失败
      message.error(`${operateFlag}用户失败`);
    }
  };
  //提交表单-父组件调用
  onSubmitForm = () => {
    this.formRef.current.submit();
  };
  render() {
    return (
      <div>
        <Form
          {...layout}
          layout="horizontal"
          onFinish={this.onFinish}
          ref={this.formRef}
          initialValues={{ role: 'normal', status: 0 }}
        >
          <Form.Item
            name="username"
            label="用户名"
            rules={[
              { required: true, message: '请输入用户名' },
              {
                min: 4,
                message: '用户名长度少于4个字符',
              },
              {
                max: 20,
                message: '用户名长度大于20个字符',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="用户名"
            />
          </Form.Item>
          <Form.Item
            name="email"
            label="邮箱"
            rules={[
              { required: true, message: '请输入邮箱' },
              { type: 'email', message: '请输入正确的邮箱格式' },
            ]}
          >
            <Input placeholder="邮箱" />
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item label="角色" name="role">
            <Select>
              <Select.Option value="normal">普通用户</Select.Option>
              <Select.Option value="admin">超级管理员</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="状态" name="status">
            <Radio.Group onChange={this.onChangeStatus}>
              <Radio.Button value={0}>启用</Radio.Button>
              <Radio.Button value={1}>禁用</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default UserAdd;
