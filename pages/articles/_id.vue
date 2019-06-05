<template>
  <article class="article-detail">
    <img class="article-detail__coverImg" :src="article.fields.topImage.fields.file.url">
    <h1 class="article-detail__title">{{ article.fields.title }}</h1>
    <div class="article-detail__content" v-html="toHtmlString(article.fields.body)"></div>
  </article>
</template>
<script>
  import { BLOCKS } from '@contentful/rich-text-types';
  import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
  const Articls = require('~/static/json/article.json');

  export default {
    async asyncData({params}) {
      return {
        id: params.id
      }
    },
    computed: {
      article(){
        const id = this.$router.params.id;
        return Articls.items.find(i => i.fields.id == id);
      }
    },
    methods: {
      toHtmlString(obj) {
        const options = {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields }}}) =>
            `<img src="${fields.file.url}" class="rich-text__img" alt="${fields.description}"/>`,
          },
        }
        return documentToHtmlString(obj, options);
      }
    },
  }
</script>
<style lang="scss" scoped>
.article-detail {
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &__coverImg{
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  &__title {
    margin-top: 20px;
    font-size: 45px;

    border-bottom: 3px solid skyblue;
  }

  &__content {
    margin-top: 50px;
    width: 70%;
  }
}
</style>
