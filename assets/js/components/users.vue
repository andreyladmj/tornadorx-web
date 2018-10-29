<template>
    <div class="container">
        <h1>Users</h1>

        <div class="container">
            <p :show="loading" class="info">Loading...</p>
            <div v-for="user in users">
                <div>
                    <h3>User: {{user.id}}</h3>
                </div>
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
                axios.get('http://127.0.0.1:8000/users').then((response) => {
                    this.users = response.data;
                    this.loading = false;
                });
            },
        }
    }
</script>