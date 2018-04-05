<script>
    import CSRF from 'components/shared/csrf.vue';
    export default {
        components: {
            csrf: CSRF
        },
        props: {
            errors: Array
        },
        data: function() {
            return ({
                user: {
                    name: '',
                    email: '',
                    password: ''
                },
                rules: {
                    email: [
                        {type: 'email', trigger: 'blur,change'}
                    ]
                }
            });
        }
    }
</script>

<template>
    <div class="">
        <el-alert v-for="error in errors"
                  type="error"
                  :title="error"
                  :closable="false"
        >
        </el-alert>
        <el-container class="bg-light" style="height: 100vh;">
            <el-main>
                <el-row type="flex" justify="center">
                    <el-col :xs="24" :sm="12">
                        <el-card class="box-card" style="width: 100%">
                            <div slot="header" class="clearfix">
                                <h3>Signup</h3>
                            </div>
                            <el-form :model="user" :rules="rules" label-position="top" method="post" action="/users">
                                <csrf></csrf>
                                <el-form-item label="Name" prop="name" required>
                                    <el-input name="user[name]" v-model="user.name" >
                                    </el-input>
                                </el-form-item>

                                <el-form-item label="Email" prop="email" required>
                                    <el-input name="user[email]" v-model="user.email" type="email">
                                    </el-input>
                                </el-form-item>

                                <el-form-item label="Password" prop="password" required>
                                    <el-input v-model="user.password" name="user[password]" type="password" autocomplete="off">
                                    </el-input>
                                </el-form-item>

                                <el-form-item>
                                    <el-button native-type="submit" type="primary" class="m-t-10">
                                        Create
                                    </el-button>
                                </el-form-item>
                            </el-form>

                            <a href="/users/sign_in">
                                <el-button type="text" style="margin-left: 10px">
                                    Sign In
                                </el-button>
                            </a>

                        </el-card>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<style scoped>
    .box-card {
        margin-top: 30px;
    }
</style>