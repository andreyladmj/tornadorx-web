<template>
    <div class="container">
        <h1>Login</h1>

        <div class="container">
            <form method="post" class="form-signin">

                form.csrf_token

                <div class="form-group">
                    <label for="email">Email address</label>

                    <div class="alert alert-danger" role="alert">error</div>

                    <input type="email" class="form-control" id="email" placeholder="Email" name="email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>

                    <div class="alert alert-danger" role="alert">error</div>

                    <input type="password" class="form-control" id="password" placeholder="Password" name="password">
                </div>

                <div class="alert alert-danger" role="alert">error</div>

                <button type="submit" class="btn btn-lg btn-primary btn-block">Submit</button>
            </form>
        </div>

    </div>
</template>
<script>
    export default {
        name: 'login',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>