import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV);
// in development env not use Lazy Loading,because Lazy Loading large page will cause webpack hot update too slow.so only in production use Lazy Loading

/* layout */
import Layout from '../views/layout/Layout';

/* login */
const Login = _import('login/index');
/*const authRedirect = _import('login/authredirect');*/


import Index from 'views/index'


import GroupDetail from 'views/group/detail'
import GroupCreate from 'views/group/create'

import Inform from 'views/inform'

import Collection from 'views/collection'

import Register from 'views/register'

import CanvasTest from 'views/hjpaint'

/* Introduction */
const Introduction = _import('introduction/index');


/* error page */
const Err404 = _import('error/404');
const Err401 = _import('error/401');

/* error log */
const ErrorLog = _import('errlog/index');


/* permission */
const Permission = _import('permission/index');

Vue.use(Router);

 /**
  * icon : the icon show in the sidebar
  * hidden : if hidden:true will not show in the sidebar
  * redirect : if redirect:noredirect will not redirct in the levelbar
  * noDropdown : if noDropdown:true will not has submenu
  * meta : { role: ['admin'] }  will control the page role
  **/

export const constantRouterMap = [
  /*{ path: '/authredirect', component: authRedirect, hidden: true },*/
  { 
    path: '/test', 
    component: CanvasTest,
  },
  { path: '/404', component: Err404, hidden: true },
  { path: '/401', component: Err401, hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    name: '首页',
    hidden: true,
    children: [{ path: 'index', component: Index }]
  },
  { 
    path: '/login',
    name: 'login',
    component: Layout,
    hidden: true,
    children: [{ path: '', component: Login }]
  },
  {
    path: '/group',
    name: 'group',
    component: Layout,
    children: [{ path: 'create', component: GroupCreate }, { path: ':id', component: GroupDetail}],
  },
  {
    path: '/inform',
    name: 'inform',
    component: Layout,
    redirect: '/inform/index',
    hidden: true,
    children: [{ path: 'index', component: Inform}],
  },
  {
    path: '/collection',
    name: 'collection',
    component: Layout,
    redirect: '/collection/index',
    hidden: true,
    children: [{ path: 'index', component: Collection}],
  },
  {
    path: '/register',
    name: 'register',
    component: Layout,
    redirect: '/register/index',
    hidden: true,
    children: [{ path: 'index', component: Register}],
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});

export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    name: '权限测试',
    icon: 'quanxian',
    meta: { role: ['admin'] },
    noDropdown: true,
    children: [{ path: 'index', component: Permission, name: '权限测试页', meta: { role: ['admin'] } }]
  },
  {
    path: '/errorpage',
    component: Layout,
    redirect: 'noredirect',
    name: '错误页面',
    icon: '404',
    children: [
      { path: '401', component: Err401, name: '401' },
      { path: '404', component: Err404, name: '404' }
    ]
  },
  {
    path: '/errlog',
    component: Layout,
    redirect: 'noredirect',
    name: 'errlog',
    icon: 'bug',
    noDropdown: true,
    children: [{ path: 'log', component: ErrorLog, name: '错误日志' }]
  },
  { path: '*', redirect: '/404', hidden: true }
];
