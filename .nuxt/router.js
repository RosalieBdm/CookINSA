import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _08850d4e = () => interopDefault(import('../pages/my_items.vue' /* webpackChunkName: "pages/my_items" */))
const _45c3576d = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _97ecb342 = () => interopDefault(import('../pages/publishing.vue' /* webpackChunkName: "pages/publishing" */))
const _e01dbfa8 = () => interopDefault(import('../pages/recipes/index.vue' /* webpackChunkName: "pages/recipes/index" */))
const _4c2e830f = () => interopDefault(import('../pages/settings.vue' /* webpackChunkName: "pages/settings" */))
const _993d84d8 = () => interopDefault(import('../pages/recipes/_id.vue' /* webpackChunkName: "pages/recipes/_id" */))
const _5c843516 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _08850d4e,
    name: "my_items"
  }, {
    path: "/profile",
    component: _45c3576d,
    name: "profile"
  }, {
    path: "/publishing",
    component: _97ecb342,
    name: "publishing"
  }, {
    path: "/recipes",
    component: _e01dbfa8,
    name: "recipes"
  }, {
    path: "/settings",
    component: _4c2e830f,
    name: "settings"
  }, {
    path: "/recipes/:id",
    component: _993d84d8,
    name: "recipes-id"
  }, {
    path: "/",
    component: _5c843516,
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
