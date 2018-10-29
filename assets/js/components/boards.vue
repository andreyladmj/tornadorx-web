<template>
    <div class="container">
        <h1>Boards</h1>

        <div class="container">

            <p :show="loading" class="info">Loading...</p>
            <div v-for="board in boards">
                <div>
                    <h3>{{board.name}}</h3>
                    <p>{{board.description}}</p>
                    <p>{{board.tag}}</p>
                    <p>{{board.date_created}}</p>
                </div>
            </div>
            <div>
                <form @submit.prevent="saveBoard">
                    <h3>{{(model.id ? 'Edit Post ID#' + model.id : 'New Post')}}</h3>
                    <input type="text" placeholder="Title" v-model="model.title">
                    <input type="text" placeholder="Description" v-model="model.description">
                    <input type="text" placeholder="Tag" v-model="model.tag">
                    <button>Add Board</button>
                </form>
            </div>
        </div>

    </div>
</template>
<script>
    import api from '@/api'
    //https://developer.okta.com/blog/2018/02/15/build-crud-app-vuejs-node  - AUTH
    export default {
        name: 'boards',
        data: function() {
            return{
                boards: [],
                loading: true,
                model: {}
            }
        },

        created: function () {
            this.fetchBoards();
        },

        methods: {
            async fetchBoards () {
                axios.get('http://127.0.0.1:8000/boards').then((response) => {
                    // this.$set('boards', response.data);
                    this.boards = response.data;
                    this.loading = false;
                });
            },
            async saveBoard () {
                if (this.model.id) {
                    await api.updatePost(this.model.id, this.model)
                } else {
                    await api.createPost(this.model)
                }
            }
        }
    }
</script>