<template>
  <div>
    <header>
      <h1>Contentfulブログ</h1>
    </header>
    <div class="article">
      <ul class="article__list"
        v-for="article in articls"
        :key="article.fields.title"
        @click="openLink(article.fields.id)"
      >
        <li class="article__item" >
          <img class="article__item__image" :src="article.fields.topImage.fields.file.url">
          <div class="article__item__title">
            <h2>{{ article.fields.title }}</h2>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  const Articls = require('~/static/json/article.json');

  export default {
    computed: {
      articls(){
        return Articls.items;
      }
    },
    methods: {
      openLink(articleId) {
        this.$router.push(`/articles/${articleId}`);
      }
    }
  }
</script>
<style lang="scss" scoped>
header {
  position: relative;
  background: no-repeat center/100% fixed url("/images/david-hurley-1601558-unsplash.jpg");
  background-position-y: top;
  height: 400px;
  > h1 {
    position: absolute;
    top: 80px;
    left: 80px;
    font-size: 40px;
    margin: 0;

    color: white;
  }
}
.article {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
  max-width: 700px;

  &__list {
    width: 100%;
  }

  &__item {
    display: flex;
    margin-top: 20px;
    padding: 20px 10px;
    border: solid 1px #d1d1d1;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #f4f5ff;
    }

    &__image {
      height: 150px;
      width: 230px;
      border-radius: 4px;
      object-fit: cover;
    }

    &__title {
      margin: 0 20px;
      width: 100%;

      > h2 {
        font-size: 25px;
        border-bottom: solid 2px #eb9d86;
      }
    }
  }
}
</style>

