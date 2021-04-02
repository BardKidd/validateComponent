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
      rules="confirmed:password1"
      v-slot="{ errors, failed, valid }"
      tag="div"
      name="密碼"
      class="row"
    >
      <label>確認密碼</label>
      <input
        type="text"
        v-model="password"
        class="col-4"
        :class="{
          'is-invalid form-control': failed,
          'form-control is-valid': valid,
        }"
      />
      <span class="text-danger">{{ errors[0] }}</span>
    </Validate> -->
  </div>
</template>

<script>
export default {
  name: "ok",
  data() {
    return {
      account: "",
      password: "",
      confirmation: "",
    };
  },
};
</script>
