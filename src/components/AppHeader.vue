<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-[#181818]/90 backdrop-blur-sm flex items-center justify-center px-6 py-5 border-b border-[#2a2a2a]"
  >
    <!-- Back button (left), only when showBack is true -->
    <div class="absolute left-6 top-1/2 -translate-y-1/2">
      <button
        v-if="showBack"
        type="button"
        class="text-sm text-gray-300 hover:text-green-400 transition-colors flex items-center gap-1"
        @click="goBack"
      >
        ← Back
      </button>
    </div>

    <!-- Centered nav links -->
    <ul class="flex items-center justify-center gap-6 sm:gap-8">
      <li>
        <a
          :href="navBase + '#about'"
          class="text-green-400 hover:text-green-300 transition-colors text-sm sm:text-base"
        >
          About
        </a>
      </li>
      <li>
        <a
          :href="navBase + '#projects'"
          class="text-green-400 hover:text-green-300 transition-colors text-sm sm:text-base"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          :href="navBase + '#contact'"
          class="text-green-400 hover:text-green-300 transition-colors text-sm sm:text-base"
        >
          Contact
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    showBack?: boolean
  }>(),
  { showBack: false }
)

const router = useRouter()

// When on a subpage (e.g. design detail), links should go to home hash; on home, use hash only
const navBase = computed(() => (router.currentRoute.value.path === '/' ? '' : '/'))

function goBack() {
  router.back()
}
</script>
