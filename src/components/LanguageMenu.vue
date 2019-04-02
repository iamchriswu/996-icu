<template>
    <div class="language-menu">
      <div @click="handleToOpen" class="current-language">
        {{ currentLanguage }}
      </div>
      <ul v-if="menuShow" class="other-languages">
        <router-link :to=" '/' + item.name " tag="li" v-for="(item, index) in otherLanguages" :key="index">{{ item.text }}</router-link>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "LanguageMenu",
      data() {
        return {
          menuShow: false,
          languages: [
            { name: 'zh_CN', text: '简体中文' },
            { name: 'en_US', text: 'English' },
            { name: 'es_MX', text: 'Español' },
            { name: 'de_DE', text: 'Deutsch' },
            { name: 'fr_FR', text: 'Français' },
            { name: 'it_IT', text: 'Italiano' },
            { name: 'ja_JP', text: '日本語' },
            { name: 'ru_RU', text: 'Русский' }
          ]
        }
      },
      methods: {
        handleToOpen() {
          this.menuShow = !this.menuShow;
        }
      },
      mounted() {
        console.log(this.$route.matched[0].name);
      },
      computed: {
        currentLanguage() {
          return this.languages.filter((item) => item.name === this.$route.matched[0].name)[0].text || '';
        },
        otherLanguages() {
          return this.languages.filter((item) => item.name !== this.$route.matched[0].name);
        }
      }
    }
</script>

<style scoped>
  .language-menu {
    position: absolute;
    user-select: none;
    top: 15px;
    text-align: right;
    right: 10px;
    list-style: none;
    cursor: pointer;
    background-color: #de335e;
    padding: 0 2px;
  }
  .other-languages {
    margin: 5px 0;
  }
  .other-languages li {
    padding: 3px 0;
  }
</style>
