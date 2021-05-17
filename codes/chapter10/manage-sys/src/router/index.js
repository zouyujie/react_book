import Main from '../views/home/Main';
import User from '../views/user/User';
import CourseAdd from '../views/courser/CourseAdd';
import CourseCategory from '../views/courser/CourseCategory';
import CourseList from '../views/courser/CourseList';

let routers = [
  {
    path: '/',
    component: Main,
    exact: true,
    strict: true,
    menuName: '首页',
    subMenuName: '仪表盘',
  },
  {
    path: '/user',
    component: User,
    exact: true,
    strict: true,
    menuName: '用户管理',
    subMenuName: '用户列表',
  },
  {
    path: '/course-list',
    component: CourseList,
    exact: true,
    strict: true,
    menuName: '课程管理',
    subMenuName: '课程列表',
  },
  {
    path: '/course-add',
    component: CourseAdd,
    exact: true,
    strict: true,
    menuName: '课程管理',
    subMenuName: '课程添加',
  },
  {
    path: '/course-category',
    component: CourseCategory,
    exact: true,
    strict: true,
    menuName: '课程管理',
    subMenuName: '课程分类',
  },
];
export default routers;
