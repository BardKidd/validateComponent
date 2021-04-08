<template>
  <form @submit="send">
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
      rules="alpha_num|required|min:6|max:16"
      v-slot="{ errors, failed, valid }"
      name="密碼"
      tag="div"
      class="row"
      :vid="`${confirmation}`"
    >
      <label>密碼</label>
      <input
        type="password"
        v-model="confirmation"
        class="col-4"
        :class="{
          'is-invalid form-control': failed,
          'form-control is-valid': valid,
        }"
      />
      <span class="text-danger">{{ errors[0] }}</span>
    </Validate>
    <Validate
      v-slot="{ errors, failed, valid }"
      :rules="`confirmed:${confirmation}|required`"
      class="row"
      name="密碼"
    >
      <label>確認密碼</label>
      <input
        type="password"
        v-model="password"
        class="col-4"
        :class="{
          'is-invalid form-control': failed,
          'form-control is-valid': valid,
        }"
      />
      <span class="text-danger">{{ errors[0] }}</span>
    </Validate>
    <button type="submit" :disabled="invalid">送出</button>
  </form>
</template>

<script>
export default {
  name: "ok",
  props: ["invalid"],
  data() {
    return {
      account: "",
      password: "",
      confirmation: "",
      test: "",
    };
  },
  methods: {
    send() {
      alert("已送出");
    },
  },
};
</script>
