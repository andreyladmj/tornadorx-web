<template>
    <div class="container">
        <h1>Users</h1>

        <div class="container">
            <p v-if="loading" class="alert alert-warning">Loading...</p>


            <div class="list-group" v-for="user in users">
                <router-link :to="'/board/edit/'+board.board_id" tag="a" class="list-group-item">
                    {{user.username}}
                </router-link>
            </div>

        </div>

    </div>
</template>
<script>
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