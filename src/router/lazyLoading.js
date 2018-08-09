// export default (name) => () => import(`@/views/${name}.vue`)
export default (name) => () => import(`@/${name}`)
// export default (name) => () => import(`@/views/guide/guide.vue`)
