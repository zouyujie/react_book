import React, { Component } from 'react';
import {
  Table,
  Tag,
  Space,
  Form,
  Input,
  Button,
  Popconfirm,
  message,
  Modal,
} from 'antd';
import {
  UserOutlined,
  WhatsAppOutlined,
  SearchOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import './user.scss';
import { getUserListData, delUserRecord } from '../../api/index';
import UserAdd from './UserAdd.jsx';
const moment = require('moment');

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false, //是否是编辑
      winVisible: false, //窗体是否显示
      winLoading: false, //窗体loading
      //表单查询参数
      searchForm: { username: '', email: '' },
      //分页参数
      pagination: {
        current: 1, //当前页面
        pageSize: 10, //每页显示记录数
      },
      loading: false,
      tableData: [], //列表数据
      columns: [
        {
          title: '序号',
          render: (text, record, index) => {
            // console.log('columns', index, this.state.pagination);
            return (
              (this.state.pagination.current - 1) *
                this.state.pagination.pageSize +
              index +
              1
            );
          },
        },
        {
          title: '用户名',
          dataIndex: 'username',
        },
        {
          title: '邮箱',
          dataIndex: 'email',
        },
        {
          title: '角色',
          dataIndex: 'role',
        },
        {
          title: '用户状态',
          dataIndex: 'status',
          render: (status) => {
            let txt = status === 0 ? '启用' : '禁用';
            let color = status === 0 ? 'green' : 'red';
            return <>{<Tag color={color}>{txt}</Tag>}</>;
          },
        },
        {
          title: '创建时间',
          dataIndex: 'createTime',
          render: (createTime) => moment(createTime).format('YYYY-MM-DD HH:mm'),
        },
        {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <a href="/#" onClick={(event) => this.doEdit(event, record)}>
                编辑
              </a>
              <Popconfirm
                title="确定要删除这条记录吗?"
                onConfirm={(e) => this.delConfirm(record)}
                okText="确定"
                cancelText="取消"
              >
                <a href="/#" className="del">
                  删除
                </a>
              </Popconfirm>
            </Space>
          ),
        },
      ],
      //当前选中项
      curItem: {
        username: '',
        email: '',
        password: '',
        role: 'normal',
        status: 0,
      },
    };
  }
  //弹窗标题--类似vue中的计算属性
  get winTitle() {
    let { isEdit } = this.state;
    return isEdit ? '编辑用户' : '新增用户';
  }
  // componentWillMount() {
  UNSAFE_componentWillMount() {
    this.refreshData();
    // for (let i = 0; i < 46; i++) {
    //   this.state.tableData.push({
    //     key: i,
    //     username: `Edward King ${i}`,
    //     age: 32,
    //     email: `London, Park Lane no. ${i}`,
    //   });
    // }
  }
  //刷新数据
  refreshData = () => {
    const { pagination, searchForm } = this.state;
    let params = { pagination, ...searchForm };
    this.onSearch(params);
  };
  //查询提交
  submitForm = (params) => {
    const pagination = this.state.pagination;
    this.onSearch({
      username: params.username,
      email: params.email,
      pagination,
    });
  };
  //查询
  onSearch = (params = {}) => {
    this.setState({ loading: true });
    getUserListData(params)
      .then((res) => {
        // console.log('res :>> ', res);
        if (res.code === 200) {
          this.setState({
            loading: false,
            tableData: res.data.records,
            pagination: {
              ...params.pagination,
              total: res.data.total,
            },
          });
        }
      })
      .catch((res) => {
        this.setState({
          loading: false,
        });
      });
  };
  //表格变化
  handleTableChange = (pagination, filters, sorter) => {
    this.onSearch({
      pagination,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  };
  //编辑
  doEdit = (e, record) => {
    e.preventDefault();
    let obj = {
      isEdit: true,
      curItem: { ...record },
    };
    this.setState(obj, () => {
      console.log('this.state :>> ', obj, this.state);
      this.setState({
        winVisible: true,
      });
    });
  };
  //删除确认
  delConfirm = async (e) => {
    let res = await delUserRecord(e._id);
    if (res.code === 200) {
      message.success('删除成功');
      this.refreshData(); //重新查询数据
    }
  };
  //确定
  handleOk = (e) => {
    //调用子组件函数
    this.userAdd.onSubmitForm();
  };
  //取消
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      winVisible: false,
    });
  };
  render() {
    const {
      tableData,
      pagination,
      loading,
      columns,
      winVisible,
      winLoading,
      isEdit,
      curItem,
    } = this.state;
    return (
      <div>
        <div className="search-bar">
          <Form
            name="horizontal_login"
            layout="inline"
            onFinish={this.submitForm}
          >
            <Form.Item name="username" label="用户名">
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="用户名"
                allowClear
              />
            </Form.Item>
            <Form.Item name="email" label="邮箱">
              <Input
                prefix={<WhatsAppOutlined className="site-form-item-icon" />}
                placeholder="邮箱"
                allowClear
              />
            </Form.Item>
            <Form.Item shouldUpdate={true}>
              {() => (
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<SearchOutlined />}
                >
                  查 询
                </Button>
              )}
            </Form.Item>
            <Button
              type="primary"
              danger
              icon={<PlusCircleOutlined />}
              onClick={() =>
                this.setState({
                  winVisible: true,
                  isEdit: false,
                })
              }
            >
              新增
            </Button>
          </Form>
        </div>
        <Table
          columns={columns}
          dataSource={tableData}
          pagination={pagination}
          loading={loading}
          onChange={this.handleTableChange}
          rowKey="_id"
        />
        <Modal
          title={this.winTitle}
          visible={winVisible}
          onOk={this.handleOk}
          confirmLoading={winLoading}
          onCancel={this.handleCancel}
          cancelText="取消"
          okText="确定"
        >
          <UserAdd
            winVisible={winVisible}
            isEdit={isEdit}
            onRef={(ref) => {
              this.userAdd = ref;
            }}
            curItem={curItem}
            handleCancel={this.handleCancel}
            refreshData={this.refreshData}
          ></UserAdd>
        </Modal>
      </div>
    );
  }
}

export default User;
