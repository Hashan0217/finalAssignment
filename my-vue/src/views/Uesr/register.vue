<template>
    <div class="box">
        <div class="zhuce">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账号名称" prop="user">
                    <el-input v-model="ruleForm.user" clearable></el-input>
                </el-form-item>

                <el-form-item label="账号密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" clearable></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" clearable></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
                    <el-button @click="returnForm">取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import { register } from '@/api/user'
export default {
    data() {
        let checkUser = (rule, value, callback) => {
            const regUser = /^[a-zA-Z0-9_-]{3,16}$/
            if (regUser.test(value)) {
                return callback()
            }
            callback(new Error('用户名不能为空'))
        }

        let validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'))
            } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass')
                }
                callback()
            }
        }
        let validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'))
            } else if (value !== this.ruleForm.pass) {
                callback(new Error('两次输入密码不一致!'))
            } else {
                callback()
            }
        }
        return {
            ruleForm: {
                user: '',
                pass: '',
                checkPass: ''
            },
            rules: {
                user: [{ validator: checkUser, trigger: 'blur' }],
                pass: [{ validator: validatePass, trigger: 'blur' }],
                checkPass: [{ validator: validatePass2, trigger: 'blur' }]
            }
        }
    },
    methods: {
        returnForm() {
            // 返回login界面
            this.$router.push('/login')
        },
        async submitForm() {
            const user_id = this.ruleForm.user
            const user_pass = this.ruleForm.pass
            const user_pass2 = this.ruleForm.checkPass

            if (!user_pass || !user_pass2) {
                return 0
            }

            const data = { id: user_id, password: user_pass }
            const res = await register(data)
            console.log(res);
            if (res.status == 200) {
                alert('注册成功')
            } else {
                alert('注册失败，更换账号')
            }
        }
    }
}

</script>
<style lang="scss" scoped>
.box {
    width: 100%;
    background: rgb(29, 35, 42);
    min-height: 98vh;
    position: relative;
}

.zhuce {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 450px;
    background-color: #fff;
    border-radius: 3px;
}

.el-form-item {
    margin-top: 30px;
    width: 400px;
}
</style>
  
  