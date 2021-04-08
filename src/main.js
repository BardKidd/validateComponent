import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {
  ValidationProvider,
  extend,
  localize,
  ValidationObserver,
  configure,
} from "vee-validate";
import {
  required,
  email,
  excluded,
  alpha_num,
  between,
  min,
  max,
  confirmed,
} from "vee-validate/dist/rules";

import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
import tw from "vee-validate/dist/locale/zh_TW.json";

Vue.config.productionTip = false;
// Vue.use(VueRouter);

localize(tw);

configure({
  classes: {
    valid: "form-control is-valid",
    failed: "is-invalid form-control",
  },
});

extend("confirmed", {
  ...confirmed,
  message: tw.messages.confirmed,
  params: ["target"],
});

extend("myConfirmed", {
  validate: (value, { newvalue }) => {
    console.log(newvalue, value);

    return value === newvalue;
  },
  message: "密碼不一致",
  params: ["newvalue"],
});

extend("min", {
  ...min,
  message: "{_field_}需介於 6~16 個字元之間",
  params: ["length"],
});

extend("max", {
  ...max,
  message: "{_field_}需介於 6~16 個字元之間",
  params: ["length"],
});

extend("between", {
  ...between,
  message: tw.messages.between,
  params: ["min", "max"],
});

extend("alpha_num", {
  ...alpha_num,
  message: "{_field_}欄位只為英數組成",
});

extend("email", {
  ...email,
  message: tw.messages.email,
});

extend("excluded", {
  ...excluded,
  message: tw.messages.excluded,
});

extend("required", {
  ...required,
  message: "不得輸入空白字元",
});

extend("secret", {
  validate: (value) => {
    return value === "example";
  },
  message: "This is not the magic word.",
});

extend("test", {
  validate: (value) => {
    return value >= 0;
  },
  message: "測試中，請勿打擾!!!!",
});

extend("odd", {
  validate: (value) => {
    return value % 2 !== 0;
  },
  message: "這是偶數...",
});

// extend("min", {
//   validate: (value, { targetLength }) => {
//     console.log("value", value);
//     // console.log("args", args);
//     return value.length >= targetLength;
//   },
//   message: "我需要更大的值!!",
//   params: ["targetLength"],
// });

extend("more", (value, values) => {
  console.log(values);
  if (values.indexOf(value) !== -1) {
    return true;
  }
  return `沒有${value}這個值= =`;
});

extend("requirs", {
  validate(value) {
    return {
      requirs: false,
      valid: ["", null, undefined].indexOf(value) === -1,
    };
  },
  computesRequired: true,
});

Vue.component("Validate", ValidationProvider);
Vue.component("Observer", ValidationObserver);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
