import React, { Component } from 'react';
import { Table, Button, Input, Space, Modal } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import qs from 'querystring';
import './fetch.css';

export class FetchDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      searchKey: '',
      userList: [],
      detailData: {},
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '称呼',
          dataIndex: 'nickName',
          key: 'nickName',
        },
        {
          title: '操作',
          key: 'id',
          dataIndex: 'id',
          render: (text, record) => (
            <Space size="middle">
              <a onClick={this.jumptoDetail.bind(this, record.id)}>查看详情</a>
            </Space>
          ),
        },
      ],
    };
  }

  render() {
    const {
      searchKey,
      userList,
      textChange,
      columns,
      visible,
      detailData,
    } = this.state;
    return (
      <div className="fetch-demo">
        <div className="search-bar">
          <Input
            placeholder="请输入用户名"
            value={searchKey}
            onChange={textChange}
            prefix={<UserOutlined />}
          />
          <Button
            icon={<SearchOutlined />}
            onClick={this.searchList.bind(this)}
          >
            搜索
          </Button>
        </div>
        <Table dataSource={userList} columns={columns} rowKey="id" />;
        <Modal
          title="用户详情"
          visible={visible}
          onOk={this.handleCancel}
          onCancel={this.handleCancel}
          cancelText="取消"
          okText="确定"
        >
          <p>用户名：{detailData.name}</p>
          <p>称呼：{detailData.nickName}</p>
          <p>简介：{detailData.msg}</p>
        </Modal>
      </div>
    );
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  textChange = (e) => {
    this.setState({
      searchKey: e.target.value,
    });
  };
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  //查看详情
  jumptoDetail(id, e) {
    e.stopPropagation(); //阻止默认跳转事件
    fetch(`/api/detail?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState(
          {
            detailData: data,
          },
          () => {
            this.showModal();
          }
        );
      });
  }
  //查询数据列表
  searchList() {
    fetch('/api/list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json,text/plain,*/*',
      },
      // 自己字符串拼接方法
      body: qs.stringify({
        username: this.searchKey,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          userList: data,
        });
      });
  }
  //界面加载后自动搜索
  componentDidMount() {
    this.searchList();
  }
}

export default FetchDemo;
