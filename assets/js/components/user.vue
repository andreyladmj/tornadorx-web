<template>
    <div class="container">
        <h1>User</h1>

        <div class="container">

            <router-link to="/boards" tag="p"><a class="btn btn-danger">Return</a></router-link>

            <form @submit.prevent="save">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username" placeholder="Name" v-model="model.username">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="text" class="form-control" id="password" placeholder="Password" v-model="model.password">
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" v-model="model.is_active"> Is Active</label>
                </div>

                <div v-for="board in boards">
                    <div class="checkbox">
                        <label><input type="checkbox">{{board.name}}</label>
                    </div>
                </div>

                <button type="submit" class="btn btn-default">Submit</button>
            </form>
        </div>

    </div>
</template>
<script>
    import api from '../api'
    export default {
        name: 'board',
        data: function() {
            return {
                loading: true,
                model: {}
            }
        },

        created: function () {
            if(this.$route.params.id) {
                this.fetch(this.$route.params.id)
            }
        },

        methods: {
            async fetch (id) {
                this.loading = true;
                this.model = await api.getUser(id);
                this.loading = false;
            },
            async save () {
                if (this.model.user_id) {
                    await api.updateUser(this.model.user_id, this.model);
                } else {
                    await api.createUser(this.model);
                }

                this.$router.push("/users")
            }
        }
    }
</script>