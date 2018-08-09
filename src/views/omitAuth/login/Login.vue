<template>
	<div class="login-container" $keyup.enter="handleSubmit">

		<!-- 标题（项目名称） -->
		<el-row id="login-title-area">

			<el-col :span="24">
				<!--<img class="headPicture" src="../../static/common/img/main/logo.png">-->
				<div class="projectNameContainer">
					<div class="login-title">大数据平台</div>

				</div>
			</el-col>
		</el-row>

		<!-- 表单和图标 -->
		<el-row id="login-content">
			<!-- 左侧图片-地球 -->
			<el-col :span="9" id="right-form-area" :offset="15">
				<el-form :model="loginForm" :rules="formRules" ref="loginForm" id="login-form">
					<el-form-item >
						<div id="user-login-title">用户登录</div>
					</el-form-item>
					<el-form-item prop="username" class="input-self-defined">
						<el-input type="text" size="large" v-model="loginForm.username" auto-complete="off" placeholder="用户名"></el-input>
					</el-form-item>

					<el-form-item prop="password"  class="input-self-defined">
						<el-input type="password"  size="large" v-model="loginForm.password" id="my-password">
								  auto-complete="off" placeholder="密码"></el-input>
					</el-form-item>
					<!--<el-checkbox class="remember-password">记住密码</el-checkbox>-->

					<el-form-item >
						<div class="buttonGroup">
							<el-button :plain="true"  $click.native.prevent="handleSubmit" :loading="logining">
								登录
							</el-button>
							<el-button :plain="true" $click.native.prevent="handleReset">
									重置
							</el-button>
						</div>
					</el-form-item>
				</el-form>

			</el-col>
		</el-row>
  		<Footer></Footer>
	</div>
</template>

<script>
import { requestLogin, getUsers } from "../../../api/api";
var routers = [];
export default {
  data() {
    return {
      logining: false,
      loginForm: {
        username: "test001",
        password: "111111"
      },
      formRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 2,
            max: 18,
            message: "用户名长度在2~18位之间",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 18, message: "密码长度在2~18位之间", trigger: "blur" }
        ]
      },
      checked: true
    };
  },
  methods: {
    handleReset() {
      this.$refs.loginForm.resetFields();
    },
    handleSubmit(ev) {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.logining = true;

          let loginParams = {
            username: this.loginForm.username,
            password: this.loginForm.password
          };

          //检查用户是否存在，真实环境无需如此
          getUsers().then(data => {
            if (data && data.length > 0) {
              if ( data.some(item =>item.username === this.loginForm.username &&item.password === this.loginForm.password) ) {
                requestLogin(loginParams).then(data => {
                  if (data.success && data.success.toString() === "true") {
                    this.logining = false;
                    sessionStorage.setItem("username", this.loginForm.username);
                    this.$router.push("/others/about");
                  } else {
                    this.logining = false;
                    this.$message({ message: "权限不足", type: "error" });
                  }
                });
              } else {
                this.logining = false;
                this.$message({ message: "用户名或密码错误", type: "error" });
              }
            } else {
              this.$message("该系统尚无用户");
            }
          });
        } else {
          return false;
        }
      });
    },
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
/**----------------定义变量-------------------*/
$n-color-white-font: #ffffff;
//** 项目标题在垂直方向所占百分比
$project-height-percent : 17%;
$border-color: #13c9dc;
$input-border-color: #2a84c7;
$font-color: #fafdfd;
$n-color-input-border: #7f8f99;
//** 反色按钮--边框颜色
$n-color-btn-border-reverse: #dc6813;
$n-color-btn-bg-reverse: #dc6813;

/**----------------书写样式-------------------*/
.login-container {
  background-color: #000;
  //background-image: url(../common/img/login-bg.png);
  background-repeat: round;
  background-size: 100%, 100%;
  height: 100%;
  line-height: 58px;

  background-image: radial-gradient(
      1px at 20px 30px,
      #fff,
      rgba(255, 255, 255, 0)
    ),
    radial-gradient(2px at 30px 80px, #fff, rgba(255, 255, 255, 0)),
    radial-gradient(3px at 80px 160px, #fff, rgba(255, 255, 255, 0)),
    radial-gradient(1px at 160px 70px, #fff, rgba(255, 255, 255, 0)),
    radial-gradient(2px at 80px 100px, #fff, rgba(255, 255, 255, 0));
  background-size: 200px 200px;
  background-repeat: repeat;
}
#login-title-area {
  background-color: rgba(66, 86, 95, 0.3);
  height: 64px;
  display: flex;
  align-items: flex-end;
  //height: $project-height-percent;
}
.headPicture {
  margin-left: 182px;
  margin-right: 10px;
  width: 80px;
  /*height:60px;*/
  padding-bottom: 6px;
  float: left;
}
.login-title {
  margin-left: 100px;
  color: #d2e2ef;
  font-size: 24px;
  /*padding-bottom: -20px;*/
  /*margin-bottom: 10px;*/
  /*float: left;*/
  /*&:after{
			content: '';
			height:10px;
			//background: $border-color;
			//display: block;
			//margin-left: 50px;
			margin-top: 5px;
		}*/
}
.login-English {
  margin-left: 254px;
  color: #55b6ff;
  font-size: 10px;
  /*padding-bottom: 4px;*/
  /*margin-bottom: -10px;*/
  /*float: left;*/
}
#login-content {
  position: absolute;
  width: 100%;
  bottom: 0;
  top: $project-height-percent;
}

#left-img-area {
  height: 100%;
}

#right-form-area {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
#login-form {
  /*background-image: url(../common/img/login-form-bg.png);*/
  //background-repeat: round;
  height: 400px;
  width: 400px;
  min-width: 400px;
  min-height: 300px;
  margin-left: 25px; /*使表单框和地球伸出的触手有一点距离*/
  //padding-right: 200px;
  background-color: rgba(72, 93, 104, 0.25);
  opacity: 5;
  margin-top: -135px;
  border-radius: 20px;
  box-shadow: inset 0 0 2px rgb(110, 129, 138);
}

/*登录、重置 按钮*/
.buttonGroup {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin-top: 10px;
  margin-left: 10%;

  button {
    height: 38px;
    width: 128px;
    font-size: 20px;
    color: $font-color;
    background: none;
    border: 1px solid $border-color;
    border-radius: 8px;
    background-color: #000;
    line-height: 0;
    box-shadow: 0 0 1px rgba(10, 44, 65, 0.7);
    &:hover,
    &active,
    &:focus {
      color: darken($n-color-white-font, 10%);
      border-color: lighten($border-color, 10%);
      background-color: #111;
    }
  }
}

.input-self-defined {
  height: 60px;
  margin-top: 34px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.remember-password {
  width: 80%;
  margin-left: 40px;
  margin-top: 5px;
  font-size: 24px;
  color: $font-color;
  padding-bottom: 50px;
}

#user-login-title {
  font-size: 24px;
  color: $font-color;
  margin: 30px auto auto auto;
  text-align: center;
  //border-bottom: 3px solid $border-color;
  padding: 5px;
  width: 100px;
}

.copyright {
  color: $font-color;
  position: absolute;
  bottom: 15px;
  left: 26px;
}
</style>

<!-- 下面为不要作用域的元素-->
<style >
#right-form-area input {
  border: 1px solid #8aa0a2; /**注意：这里的颜色和上面的$border-color一致，由于不在同一作用域内，故不使用变量*/
  height: 48px;
  background: none;
  color: #fafdfd; /**注意：这里的颜色和上面的$font-color一致，由于不在同一作用域内，故不使用变量*/
}
</style>
