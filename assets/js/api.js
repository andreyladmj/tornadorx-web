import Vue from 'vue'
import axios from 'axios'

const client = axios.create({
    baseURL: 'http://172.17.0.5:8000',
    json: true
});

export default {
    async execute (method, resource, data) {
        // inject the accessToken for each request
        // let accessToken = await Vue.prototype.$auth.getAccessToken()
        return client({
            method,
            url: resource,
            data,
            // headers: {
            //     Authorization: `Bearer ${accessToken}`
            // }
        }).then(req => {
            return req.data
        })
    },
    getUsers () {
        return this.execute('get', '/users')
    },
    getBoards () {
        return this.execute('get', '/boards')
    },
    getBoard (id) {
        return this.execute('get', `/board/${id}`)
    },
    createBoard (data) {
        return this.execute('post', '/boards', data)
    },
    createUser (data) {
        return this.execute('post', '/users', data)
    },
    updateBoard (id, data) {
        return this.execute('put', `/board/${id}`, data)
    },
    updateUser (id, data) {
        return this.execute('put', `/user/${id}`, data)
    },
    deleteBoard (id) {
        return this.execute('delete', `/posts/${id}`)
    },
    deleteUser (id) {
        return this.execute('delete', `/posts/${id}`)
    }
}