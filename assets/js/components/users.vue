<template>
    <div class="container">
        <h1>Users</h1>

        <div class="container">
            <div v-for="user in users">

            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name: 'users',
        data: function() {
            return{
                campaigns: []
            }
        },

        ready: function () {
            this.fetchCampaigns();
        },

        methods: {
            fetchCampaigns: function () {
                var campaigns = [];
                this.$http.get('/retention/getCampaigns')
                    .success(function (campaigns) {
                        this.$set('campaigns', campaigns);

                    })
                    .error(function (err) {
                        campaigns.log(err);
                    });
            },
        }
    }
</script>