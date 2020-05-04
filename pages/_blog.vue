<!-- eslint-disable -->
<template>
  <div>
    <div class="hidden lg:block lg:ml-14 xl:ml-36">
      <div class="w-18 fixed flex flex-col justify-center rounded-lg shadow-lg" 
        data-aos="fade-right"
        data-aos-anchor="#trigger-left"
        data-aos-anchor-placement="top-top">
      <div class="">
        <img class="w-18" src="~assets/img/abdelcircle.png" alt="">
      </div>
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="Hey, j&#39;ai trouvé cet article super cool !" data-show-count="false"></a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
    </div>
  <article class="max-w-screen-sm sm:mx-auto px-6 my-18">
    <div class="blog flex flex-col">
      <h1 class="font-title font-bold text-3xl mb-1">{{ blogPost.title }}</h1>
      <p class="content font-dosis font-medium text-gray-700 sm:text-xl">
        {{ blogPost.description }}
      </p>
      <v-lazy-image class="max-w-screen mt-5" :src="blogPost.img" alt=""></v-lazy-image>
      <div
        class="content font-dosis sm:text-xl mt-5"
        id="trigger-left"
        v-html="$md.render(blogPost.body)"
      ></div>
    </div>
  </article>
  </div>
</template>
<!-- eslint-disable -->

<script>
import VLazyImage from 'v-lazy-image'

export default {
  components: {
    VLazyImage
  },
  async asyncData({ params, payload }) {
    if (payload) return { blogPost: payload }
    else
      return {
        blogPost: await require(`~/assets/content/blog/${params.blog}.json`)
      }
  }
}
</script>

<style scoped>
.content {
  margin: 5px 0;
}  
</style>
