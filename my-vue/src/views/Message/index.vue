<template>
  <div class="contact-page">
    <h2>联系我们</h2>
    <div class="contact-form">
      <div class="form-group">
        <label for="name">姓名</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div class="form-group">
        <label for="email">电子邮件</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="message">消息</label>
        <textarea id="message" v-model="message"></textarea>
      </div>
      <button @click="sendMessage">发送</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    sendMessage() {
      // 在这里处理发送消息的逻辑，比如将消息发送到后端或执行其他操作
      console.log('发送消息');
      console.log('姓名:', this.name);
      console.log('电子邮件:', this.email);
      console.log('消息:', this.message);
    }
  }
};
</script>

<style>
.contact-page {
  width: 100%;
  background: rgb(29, 35, 42);
  min-height: 98vh;
  margin: 0 auto;
  padding: 20px;
  color: #fff;
}

.contact-page h2 {
  text-align: center;
  margin-bottom: 20px;
}

.contact-form {
  width: 50%;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 10px;
}

textarea {
  height: 100px;
}

button {
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
