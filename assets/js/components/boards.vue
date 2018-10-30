<template>
    <div class="container">
        <h1>Boards</h1>

        <div class="container">

            <p v-if="loading" class="alert alert-warning">Loading...</p>
            <router-link :to="'/board/add'" tag="p"><a class="btn btn-success">Add Board</a></router-link>
            <div v-for="board in boards">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        {{board.name}}
                    </div>
                    <div class="panel-body">
                        {{board.description}}
                    </div>
                    <div class="panel-footer">
                        Tag: {{board.model_tag}}, {{board.date_created}}
                        <router-link :to="'/board/edit/'+board.board_id"><span class="glyphicon glyphicon-pencil btn-lg" aria-hidden="true"></span></router-link>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import api from '../api'
    //https://developer.okta.com/blog/2018/02/15/build-crud-app-vuejs-node  - AUTH
    export default {
        name: 'boards',
        data: function() {
            return {
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
                this.loading = true;
                this.boards = await api.getBoards();
                this.loading = false;
            }
        }
    }
</script>