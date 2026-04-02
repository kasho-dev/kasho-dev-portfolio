import { afterEach } from 'vitest'
import { config } from '@vue/test-utils'

// Configure Vue Test Utils
config.global.stubs = {
  'lucide-*': true
}

// Cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  // Vue Test Utils handles cleanup automatically in Vue 3
})
