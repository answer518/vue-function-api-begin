<template>
  <div id="app">
      <ArticlePageFunctions
          v-if="functional"
          :id="currentUser"
      />
      <ArticlePageOptions
          v-else
          :id="currentUser"
      />
  </div>
</template>

<script>
import ArticlePageOptions from '@/components/ArticlePageOptions'
import ArticlePageFunctions from '@/components/ArticlePageFunctions'
import wrappedPostsHOC from '@/components/WrappedPostHOC'

export default {
  name: 'app',
  components: {
    ArticlePageOptions: wrappedPostsHOC(ArticlePageOptions),
    ArticlePageFunctions
  },
  data() {
    return {
      currentUser: 1,
      functional: false
    }
  }
}
</script>

<style lang="scss">
body {
    font-family: 'Varela Round', Helvetica, Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 40px 0;
    color: #555;
    background: #f6f5f8;
}
h1,
h2,
h3 {
    color: #333;
}
.container {
    max-width: 40em;
    padding: 0 1.5rem;
    margin: 0 auto;
}
</style>
