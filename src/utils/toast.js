import { inject } from 'vue'

export function useToast() {
  const toast = inject('buefyToast')
  if (!toast) {
    throw new Error('useToast must be used inside a component with Buefy installed')
  }
  return toast
}
