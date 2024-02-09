import type { Directive } from 'vue'

export const vMediaRef: Directive = {
  mounted(el, binding) {
    binding.value(el)
  }
}
