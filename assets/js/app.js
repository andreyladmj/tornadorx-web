require('bootstrap-sass');
window.Vue = require('vue');

import VueRouter from 'vue-router';
//https://github.com/vuejs/vue-router/issues/215

import client from 'socket.io-client';
// const foo = () => import('./Foo.vue');

import foo from './Foo.vue';
import LoginComponent from './components/login.vue';


// const socket = client.connect('http://' + document.domain + ':' + location.port + '/test');
//
// console.log('http://' + document.domain + ':' + location.port);
//
//
// socket.on('connect', function () {
//     console.info('Socket connected !');
// });
// socket.on('message', function (msg) {
//     alert('Got ' + msg);
// });
//
// socket.on('disconnect', function () {
//     console.info('Socket disconnected');
// });
// socket.send('Hello');
// console.log('Hello');
//
// socket.on('connect', function () {
//     console.log('send request to my event');
//     socket.emit('my event', {data: 'I\'m connected!'});
// });
// socket.on('disconnect', function () {
//     console.log('Disconnected');
// });
// socket.on('my response', function (msg) {
//     console.log('<br>Received: ' + msg.data);
// });



const data = {
    items: [
        '1',
        '12',
        '13',
        '14',
    ]
};

const ItemsComponents = Vue.extend({
    data: () => {return data},
    delimiters: ['{(', ')}'],
    template: `<ul><li v-for="item in items">{(item)}</li></ul>`
});


Vue.use(VueRouter);
Vue.component('items-component', ItemsComponents);




const Home = {template: '<h1>Home</h1>'};
const Registration = {template: '#register-template'};
// const Login = {template: '#login-template'};
// const Login = {template: require('login.html')};
// const Foo = () => import('./Foo.vue');

const routes = [
    { path: '/', component: Home },
    { path: '/registration', component: Registration },
    { path: '/login', component: LoginComponent },
    { path: '/foo', component: foo }
];

const router = new VueRouter({
    routes: routes
});

new Vue({
    el: '#app',
    data: data,
    router: router,
});

// const NotFound = { template: '<p>Страница не найдена</p>' };
// const Home = { template: '<p>главная</p>' };
// const About = { template: '<p>о нас</p>' };
//
// const routes = {
//     '/': Home,
//     '/about': About
// };
//
// new Vue({
//     el: '#app',
//     data: {
//         currentRoute: window.location.pathname
//     },
//     computed: {
//         ViewComponent () {
//             return routes[this.currentRoute] || NotFound
//         }
//     },
//     render (h) { return h(this.ViewComponent) }
// });

// var ws = new WebSocket("ws://localhost:8000/websocket");
// ws.onopen = function() {
//     ws.send("Hello, world");
// };
// ws.onmessage = function (evt) {
//     alert(evt.data);
// };