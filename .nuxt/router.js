import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _55b9d4f4 = () => interopDefault(import('../pages/my_items.vue' /* webpackChunkName: "pages/my_items" */))
const _7e5301a0 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _6b0e2968 = () => interopDefault(import('../pages/publishing.vue' /* webpackChunkName: "pages/publishing" */))
const _4e77181f = () => interopDefault(import('../pages/recipes/index.vue' /* webpackChunkName: "pages/recipes/index" */))
const _25941f3c = () => interopDefault(import('../pages/settings.vue' /* webpackChunkName: "pages/settings" */))
const _6ada9647 = () => interopDefault(import('../pages/recipes/_id.vue' /* webpackChunkName: "pages/recipes/_id" */))
const _c5625fee = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/my_items",
    component: _55b9d4f4,
    name: "my_items"
  }, {
    path: "/profile",
    component: _7e5301a0,
    name: "profile"
  }, {
    path: "/publishing",
    component: _6b0e2968,
    name: "publishing"
  }, {
    path: "/recipes",
    component: _4e77181f,
    name: "recipes"
  }, {
    path: "/settings",
    component: _25941f3c,
    name: "settings"
  }, {
    path: "/recipes/:id",
    component: _6ada9647,
    name: "recipes-id"
  }, {
    path: "/",
    component: _c5625fee,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
