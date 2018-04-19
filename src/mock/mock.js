import Mock from 'mockjs'
import isLogin from './login';

Mock.mock('/user','get', isLogin.isLogin);