<template>
  <section class="min-h-screen bg-[#0f0f0f] text-white flex flex-col">
    <div class="flex-1 w-full">
      <div class="hidden min-[1366px]:block text-gray-300 text-[15px] xs:text-xs sm:text-sm leading-snug mb-4 pt-4 pl-4">
        Kyle Araña,<br />
        Front-End Software Engineer<br />
        UI/UX Designer
      </div>
        <div class="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <!-- Top-left page label (within layout, not screen-fixed) -->
        <!-- Back + Title centered -->
        <!-- <div class="mb-6 flex items-center justify-center">
          <button class="text-sm text-gray-300 hover:text-white transition-colors" @click="goBack">← Back</button>
        </div> -->

        <div class="text-center mb-6">
          <p class="text-white-400 font-medium">Deep Dive</p>
          <h1 class="text-4xl sm:text-6xl md:text-7xl font-bold text-green-400">{{ title }}</h1>
        </div>

        <!-- Centered mockup image -->
        <div class="mx-auto max-w-xl lg:max-w-lg xl:max-w-md 2xl:max-w-sm px-4">
            <img v-if="imageSrc" :src="imageSrc" :alt="title" class="w-full h-auto object-contain" loading="lazy" />
            <div v-else class="text-center px-8 py-16">
              <div class="text-2xl sm:text-3xl font-extrabold tracking-wider">
                {{ primary }}<span class="text-green-400">{{ accent }}</span>
              </div>
              <div class="text-xs sm:text-sm text-gray-300 mt-2 tracking-widest">{{ tagline }}</div>
            </div>
        </div>

        <!-- Body copy -->
        <div class="mt-8 max-w-3xl mx-auto text-center text-gray-300">
          <p class="text-gray-300 mt-2 sm:mt-3 text-sm sm:text-base">{{ subtitle }}</p>
        <br>
          <p class="text-sm sm:text-base">This page will host a full UI/UX case study: problem, goals, process, and outcomes. Replace the mockup and text with final assets when ready.</p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="border-t border-[#1f1f1f] bg-[#0f0f0f]">
      <div class="max-w-6xl mx-auto px-6 py-8">
        <div class="flex flex-col items-center text-center gap-2">
          <p class="text-gray-400 text-sm">Written, designed, and built by Kyle Arana, a designer who you can find on
            <br>
            <a class="underline" target="_blank" href="https://www.linkedin.com/in/kyle-araña-40746436a/">LinkedIn</a>,
            <a class="underline" target="_blank" href="https://www.linkedin.com/in/kyle-araña-40746436a/">GitHub</a>,
            or good old-fashioned
            <a class="underline" target="_blank" href="https://www.linkedin.com/in/kyle-araña-40746436a/"> Email</a>.
          </p>
        </div>
      </div>
    </footer>
  </section>

</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import InteractifyImage from '../components/icons/interactify/Interactify.svg'

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

// const goBack = () => router.back()

const imageSrc = computed(() => {
  switch (id.value) {
    case 1:
      return InteractifyImage
    default:
      return ''
  }
})
</script>

<style scoped>
</style>


