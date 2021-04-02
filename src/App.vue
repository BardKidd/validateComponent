<template>
  <div id="app">
    <router-link to="./ok">點我</router-link>
    <Validate rules="excluded:選項1" :name="`${option}`" v-slot="{ errors }">
      <select v-model="option">
        <option value="選項1">選項1</option>
        <option value="選項2">選項2</option>
        <option value="選項3">選項3</option>
        <option value="選項4">選項4</option>
      </select>
      <span>{{ errors[0] }}</span>
    </Validate>

    <Validate rules="availabletest|email" v-slot="{ errors }">
      <p>Email 驗證</p>
      <input type="text" v-model="email" name="此欄位" />
      <span v-for="error of errors" :key="error" class="text-danger">{{
        error
      }}</span>
    </Validate>
    <Validate rules="test" v-slot="v">
      <p>測試驗證不重要的東西...</p>
      <input type="text" v-model.number="test" />
      <span>{{ v.errors[0] }}</span>
    </Validate>

    <Validate rules="odd" v-slot="{ errors }">
      <p>偶數驗證器</p>
      <input type="text" v-model="num" />
      <span>{{ errors[0] }}</span>
    </Validate>

    <Validate rules="min:3" v-slot="{ errors }">
      <p>長度驗證器</p>
      <input type="text" v-model="num" />
      <span>{{ errors[0] }}</span>
    </Validate>

    <Validate
      name="num"
      :bails="false"
      :rules="`more:${item}|min:3`"
      v-slot="{ errors }"
    >
      <p>多參數驗證器</p>
      <input type="text" v-model="infinite" />
      <span v-for="error of errors" :key="error">{{ error }}</span>
    </Validate>

    <Validate rules="requirs" v-slot="{ errors }">
      <p>必填項目</p>
      <input type="text" v-model.trim="required" />
      <span>{{ errors[0] }}</span>
    </Validate>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      email: "",
      test: "",
      num: "",
      infinite: "",
      item: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      required: "",
      option: "",
    };
  },
  components: {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
