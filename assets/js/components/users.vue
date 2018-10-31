<template>
    <div class="container">
        <h1>Users</h1>

        <div class="container">
            <p v-if="loading" class="alert alert-warning">Loading...</p>
            <router-link :to="'/user/add'" tag="p"><a class="btn btn-success">Add User</a></router-link>


            <div class="list-group" >
                <router-link :to="'/user/edit/'+user.user_id" tag="a" class="list-group-item list-group-item-action" v-for="user in users">
                    <b>{{user.user_id}}</b>: {{user.username}}, Access: {{user.access_level_id}}
                    <!--<router-link :to="'/user/edit/'+user.user_id" class="pull-right"><span class="glyphicon glyphicon-pencil btn-lg" aria-hidden="true"></span></router-link>-->
                    <!--<router-link :to="'/user/delete/'+user.user_id" class="pull-right"><span class="glyphicon glyphicon-trash btn-lg" aria-hidden="true"></span></router-link>-->
                </router-link>
            </div>

        </div>

    </div>
</template>
<script>
    import api from '../api'

    export default {
        name: 'users',
        data: function() {
            return {
                loading: true,
                users: [],
                model: {}
            }
        },

        created: function () {
            this.fetchUsers();
        },

        methods: {
            async fetchUsers () {
                this.loading = true;
                this.users = await api.getUsers();
                this.loading = false;
            },
        }
    }
</script>