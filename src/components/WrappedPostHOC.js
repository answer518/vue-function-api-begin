import { fecthUserInfo, fetchUserPosts } from '@/api'
const wrappedPostsHOC = WrappedComponent => ({
  props: WrappedComponent.props,
  data() {
    return {
      postsIsLoading: false,
      fetchedPosts: [],
      fetchedProfile: {}
    }
  },
  watch: {
    id: {
      handler: 'fetchData',
      immediate: true
    }
  },
  methods: {
    async fetchData() {
      this.postsIsLoading = true
      this.fetchedPosts = await fetchUserPosts(this.id)
      this.fetchedProfile = await fecthUserInfo(this.id)
      this.postsIsLoading = false
    }
  },
  computed: {
    postsCount() {
      return this.fetchedPosts.length
    }
  },
  render(h) {
    return h(WrappedComponent, {
      props: {
        ...this.$props,
        isLoading: this.postsIsLoading,
        profile: this.fetchedProfile,
        posts: this.fetchedPosts,
        count: this.postsCount
      }
    })
  }
})

export default wrappedPostsHOC
