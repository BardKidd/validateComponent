<template>
  <div class="container">
    <Validate
      rules="required|alpha_num|min:6|max:16"
      name="帳號"
      v-slot="{ errors, failed, valid }"
      tag="div"
      class="row"
    >
      <label>帳號</label>
      <input
        type="text"
        v-model="account"
        class="col-4"
        :class="{
          'is-invalid form-control': failed,
          'form-control is-valid': valid,
        }"
      />
      <span class="text-danger">{{ errors[0] }}</span>
    </Validate>

    <Validate
      vid="password1"
      rules="alpha_num|required|min:6|max:16"
      v-slot="{ errors, failed, valid }"
      name="密碼"
      tag="div"
      class="row"
    >
      <label>密碼</label>
      <input
        type="text"
        v-model="confirmation"
        class="col-4"
        :class="{
          'is-invalid form-control': failed,
          'form-control is-valid': valid,
        }"
      />
      <span class="text-danger">{{ errors[0] }}</span>
    </Validate>
    <Validate :rules="`myConfirmed:${password}`" class="row">
      <label>確認密碼</label>
      <input
        type="text"
        v-model="password"
        class="col-4"
        :class="{
          '': confirmation === '',
          'is-invalid form-control': password !== confirmation,
          'form-control is-valid':
            password === confirmation && confirmation !== '',
        }"
      />
      <span class="text-danger" v-if="password !== confirmation"
        >密碼不一致</span
      >
    </Validate>

    <!-- <Validate
      rules="required|alpha_num|min:6|max:16"
      name="帳號"
      v-slot="{ failedRules, classes }"
      tag="div"
      class="row"
    >
      <label>測試</label>
      <input type="text" v-model="test" class="col-4" :class="classes" />
      <span :class="{ 'text-danger': passed }">{{
        Object.keys(failedRules)
      }}</span>
    </Validate> -->
    <Observer v-slot="{ invalid }">
      <other :invalid="invalid"></other>
    </Observer>

    <Observer v-slot="{ invalid }">
      <div>
        <input type="checkbox" name="no" id="no" v-model="no" />
        <label for="no">不拘</label>
      </div>
      <div v-if="!no">
        <Validate rules="required" v-slot="{ failed }">
          <input type="checkbox" value="o1" v-model="os" />
          <label>高中(職)</label>

          <input type="checkbox" value="o2" v-model="os" />
          <label>學士</label>

          <input type="checkbox" value="o3" v-model="os" />
          <label>碩士</label>

          <input type="checkbox" value="o4" v-model="os" />
          <label>博士</label>

          <input type="checkbox" value="o5" v-model="os" />
          <label>博士後</label>
          <span class="text-danger" v-if="failed">請選擇學歷</span>
        </Validate>
      </div>
      <button :disabled="invalid">送出</button>
    </Observer>

    <!-- <Observer v-for="(item, key) of students" :key="key">
      <button @click="saveStudent(true)">新增</button>
      <div>
        <Validate>
          <input
            type="text"
            placeholder="班級"
            v-model="item.class"
            @blur="saveStudent(false, item, key)"
          />
        </Validate>
        <Validate>
          <input
            type="text"
            placeholder="姓名"
            v-model="item.name"
            @blur="saveStudent(false, item, key)"
          />
        </Validate>
        <Validate>
          <input
            type="text"
            placeholder="學號"
            v-model.lazy="item.number"
            @blur="saveStudent(false, item, key)"
          />
        </Validate>
      </div>
      <p @click="saveStudent(false, item, key)">
        {{ item.class }} / {{ item.name }} /
        {{ item.number }}
      </p>
      <div>
        <strong
          >{{ students[key].class }} / {{ students[key].name }} /
          {{ students[key].number }}</strong
        >
      </div>
    </Observer> -->
  </div>
</template>

<script>
import other from "./other.vue";
export default {
  name: "ok",
  data() {
    return {
      account: "",
      password: "",
      confirmation: "",
      test: "",
      no: false,
      os: [],
      isNew: false,
      student: {
        class: "",
        name: "",
        number: "",
      },
      students: [
        {
          class: "國三勤",
          name: "林霈文",
          number: "10301032",
        },
      ],
    };
  },
  methods: {
    saveStudent(isNew, item, key) {
      console.log("OK");
      const vm = this;
      if (!isNew) {
        this.student = { ...item };
      } else {
        this.student = {};
      }
      vm.$set(this.students, key, this.student);
    },
  },
  // watch: {
  //   'student.class': (n) => {

  //   }
  // },
  // computed: {
  //   students() {
  //     const vm = this;
  //     return this.$set(vm.students, 0, vm.student)
  //   }
  // },
  components: {
    other,
  },
};
</script>
