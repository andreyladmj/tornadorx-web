<template>
    <div class="container">
        <h1>Boards</h1>

        <div class="container">

            <p v-if="loading" class="alert alert-warning">Loading...</p>
            <router-link :to="'/board/add'" tag="p"><a class="btn btn-success">Add Board</a></router-link>
            <div class="bs-docs-container">
                <div class="bs-callout" v-bind:class="getClass(board)" v-for="board in boards">
                    <h4>
                        {{board.name}}
                        <a href="javascript:void(0);" class="pull-right" v-on:click="remove(board.board_id)"><span class="glyphicon glyphicon-trash btn-lg" aria-hidden="true"></span></a>
                        <router-link :to="'/board/edit/'+board.board_id" class="pull-right"><span class="glyphicon glyphicon-pencil btn-lg" aria-hidden="true"></span></router-link>
                    </h4>
                    <p>{{board.description}}</p>
                    <p>Tag: {{board.model_tag}} <span class="pull-right">{{board.date_created}}</span></p>
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
            },
            getClass (board) {
                return board.is_active ? 'bs-callout-success' : 'bs-callout-danger';
            },
            remove (id) {
                if(confirm('Are you sure?')) {
                    api.deleteBoard(id);
                    this.boards = this.boards.filter((item) => item.board_id !== id)
                }
            }
        }
    }
</script>