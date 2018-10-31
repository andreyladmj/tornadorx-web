<template>
    <div class="container">
        <h1>User</h1>

        <div class="container">

            <router-link to="/users" tag="p"><a class="btn btn-danger">Return</a></router-link>

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

                <div class="form-group">
                    <label for="access_level_id">Access level id</label>
                    <select class="form-control" id="access_level_id" v-model="model.access_level_id">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>

                <div>
                    <h3>Boards</h3>
                    <div class="checkbox" v-for="board in boards">
                        <label><input type="checkbox" :value="board.board_id" v-model="model.boards">{{board.name}}</label>
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
                model: {
                    is_active: true,
                    access_level_id: 1,
                    boards: []
                },
                boards: [],
            }
        },

        created: function () {
            this.fetchBoards();

            if(this.$route.params.id) {
                this.fetch(this.$route.params.id)
            }
        },

        methods: {
            async fetchBoards() {
                this.loading = true;
                this.boards = await api.getBoards();
                this.loading = false;
            },
            async fetch (id) {
                this.loading = true;
                this.model = await api.getUser(id);
                this.loading = false;
            },
            async save () {
                let res;

                if (this.model.user_id) {
                    res = await api.updateUser(this.model.user_id, this.model);
                } else {
                    res = await api.createUser(this.model);
                }

                if (res !== undefined) {
                    this.$router.push("/users")
                }
            }
        }
    }
</script>