import type { Directive } from 'vue'

export const vMediaRef: Directive = {
  mounted(el, binding) {
    // `el` is the element the directive is bound to
    console.log('vMediaRef mounted', el, binding)
    binding.value(el) // Assuming the value passed is a function to set the ref
  }
}
