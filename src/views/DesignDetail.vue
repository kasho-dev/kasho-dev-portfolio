<template>
  <section class="min-h-screen bg-[#0f0f0f] text-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div class="mb-6 flex items-center gap-3">
        <button
          class="text-sm text-gray-300 hover:text-white transition-colors"
          @click="goBack"
        >
          ← Back
        </button>
        <span class="text-gray-600">/</span>
        <h1 class="text-xl sm:text-2xl font-semibold">{{ title }}</h1>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-[#151515] border border-[#2a2a2a] rounded-xl p-5">
          <div class="relative bg-black rounded-[2.4rem] p-3 border border-gray-700/60 shadow-inner mx-auto w-[300px] sm:w-[360px]">
            <div class="absolute left-1/2 -translate-x-1/2 top-2 h-4 w-28 rounded-b-2xl bg-[#0a0a0a]"></div>
            <div class="rounded-3xl overflow-hidden aspect-[9/19] bg-[#0a0a0a] flex items-center justify-center">
              <div class="text-center px-4">
                <div class="text-2xl sm:text-3xl font-extrabold tracking-wider">
                  {{ primary }}<span class="text-green-400">{{ accent }}</span>
                </div>
                <div class="text-xs sm:text-sm text-gray-300 mt-2 tracking-widest">{{ tagline }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-[#151515] border border-[#2a2a2a] rounded-xl p-5 flex items-center">
          <div>
            <h2 class="text-2xl font-bold mb-2">{{ title }}</h2>
            <p class="text-gray-300 mb-4">{{ subtitle }}</p>
            <p class="text-gray-400 text-sm">This page is a placeholder for the detailed UI/UX case study. You can expand it with flows, additional screens, and notes as you finalize assets.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const id = computed(() => Number(route.params.id))

const title = computed(() => {
  switch (id.value) {
    case 1:
      return 'Interactify'
    case 2:
      return 'Eventra (Concept)'
    case 3:
      return 'Tracker+'
    default:
      return 'Design'
  }
})

const subtitle = computed(() => {
  switch (id.value) {
    case 1:
      return 'An app about sharing your music taste while socializing'
    case 2:
      return 'Catering management system mobile concept'
    case 3:
      return 'Document tracking mobile redesign'
    default:
      return ''
  }
})

const primary = computed(() => (id.value === 1 ? 'INTER' : title.value))
const accent = computed(() => (id.value === 1 ? 'C TIFY' : ''))
const tagline = computed(() => {
  switch (id.value) {
    case 1:
      return 'MUSIC MEETS SOCIAL'
    case 2:
      return 'PLAN • COORDINATE • DELIVER'
    case 3:
      return 'FAST • RELIABLE • SECURE'
    default:
      return ''
  }
})

const goBack = () => router.back()
</script>

<style scoped>
</style>


