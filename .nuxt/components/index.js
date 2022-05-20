export { default as Nav } from '../../components/Nav.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as SavedItems } from '../../components/Saved_items.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as Myitemscard } from '../../components/myitemscard.vue'
export { default as PublishingHeader } from '../../components/publishing_header.vue'
export { default as RecipeDetails } from '../../components/recipe_details.vue'
export { default as RecipeFeed } from '../../components/recipe_feed.vue'
export { default as Recipecard } from '../../components/recipecard.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
