import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "@/locales/en";
import ar from "@/locales/ar";

Vue.use(VueI18n);

export default new VueI18n({
    locale: "en",
    fallbackLocale: "en",
    messages: {
        en: en,
        ar: ar
    }
});
