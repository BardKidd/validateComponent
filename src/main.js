import Vue from "vue";
import App from "./App.vue";
import "./router.js";
import { ValidationProvider, extend, localize } from "vee-validate";
import { required, email, excluded } from "vee-validate/dist/rules";

import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
import tw from "vee-validate/dist/locale/zh_TW.json";

Vue.config.productionTip = false;
// Vue.use(VueRouter);

localize(tw);

extend("email", {
  ...email,
  message: tw.messages.email,
});

extend("excluded", {
  ...excluded,
  message: tw.messages.excluded,
});

extend("availabletest", {
  ...required,
  message: "此欄位為必填",
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

extend("min", {
  validate: (value, { targetLength }) => {
    console.log("value", value);
    // console.log("args", args);
    return value.length >= targetLength;
  },
  message: "我需要更大的值!!",
  params: ["targetLength"],
});

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

new Vue({
  render: (h) => h(App),
}).$mount("#app");
