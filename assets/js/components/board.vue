<template>
    <div class="container">
        <h1>Board</h1>

        <div class="container">

            <router-link to="/boards" tag="p"><a class="btn btn-danger">Return</a></router-link>

            <form @submit.prevent="saveBoard">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Name" v-model="model.name">
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea class="form-control" id="description" v-model="model.description" rows="3"></textarea>
                </div>
                <div class="form-group">
                    <label for="tag">Tag</label>
                    <input type="text" class="form-control" id="tag" placeholder="Name" v-model="model.model_tag">
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
                this.fetchBoard(this.$route.params.id)
            }
        },

        methods: {
            async fetchBoard (id) {
                this.loading = true;
                this.model = await api.getBoard(id);
                this.loading = false;
            },
            async saveBoard () {
                let res;

                if (this.model.board_id) {
                    res = await api.updateBoard(this.model.board_id, this.model);
                } else {
                    res = await api.createBoard(this.model);
                }

                if (res !== undefined) {
                    this.$router.push("/boards")
                }
            }
        }
    }
</script>