<template>
  <section class="min-h-screen bg-[#181818] text-white flex flex-col">
    <AppHeader />
    <div v-if="isHiddenCase" class="flex-1 flex items-center justify-center px-4 pt-20">
      <div class="text-center">
        <p class="text-gray-400 mb-4">This case study is currently unavailable.</p>
        <a href="/" class="text-green-400 hover:text-green-300 transition-colors">← Back to home</a>
      </div>
    </div>
    <div v-else class="flex-1 w-full">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-10 sm:pb-14">
        <div class="text-center mb-6">
          <!-- <p class="text-white-400 font-medium">Deep Dive</p> -->
          <h1 class="text-4xl sm:text-6xl md:text-7xl font-bold text-green-400">{{ title }}</h1>
        </div>

        <!-- Centered mockup image -->
        <div class="mx-auto rounded-lg overflow-hidden case-study-media-section px-4 py-4 sm:py-6">
          <div class="mx-auto max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
            <img v-if="imageSrc" :src="imageSrc" :alt="title" class="w-full h-auto object-contain" loading="lazy" />
            <div v-else class="text-center px-8 py-16">
              <div class="text-2xl sm:text-3xl font-extrabold tracking-wider">
                {{ primary }}<span class="text-green-400">{{ accent }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Body copy -->
        <div class="mt-8 max-w-3xl mx-auto text-center text-gray-300">

          <p class="text-gray-300 mt-2 sm:mt-3 text-sm sm:text-base">{{ subtitle }}</p>
          <br>

          <!-- WIP message for Cognita (temporarily hide full case study) -->
          <div v-if="isWipCase" class="py-12 sm:py-16">
            <p class="text-lg sm:text-xl text-gray-400 italic">
              Build is in progress as we speak. Thank you for your patience.
            </p>
            <a href="/#projects" class="inline-block mt-6 text-green-400 hover:text-green-300 transition-colors text-sm sm:text-base">
              ← Back to projects
            </a>
          </div>

          <!-- BODY CONTENT (unique per case study) -->
          <template v-else-if="caseStudy">
            <!-- Project Overview -->
            <div class="text-left mb-8">
              <h2 class="text-xl text-center sm:text-2xl md:text-3xl font-bold mb-4">Project Overview</h2>
              <p class="text-sm sm:text-base"><b>Client:</b> <span v-html="caseStudy.overview.client"></span></p>
              <p class="text-sm sm:text-base"><b>Project:</b> <span v-html="caseStudy.overview.project"></span></p>
              <p class="text-sm sm:text-base"><b>Timeline:</b> <span v-html="caseStudy.overview.timeline"></span></p>
              <p class="text-sm sm:text-base"><b>My Role:</b> <span v-html="caseStudy.overview.role"></span></p>
              <a v-if="caseStudy.overview.prototypeUrl" :href="caseStudy.overview.prototypeUrl" target="_blank"
                rel="noopener noreferrer"
                class="inline-block mt-4 text-green-400 hover:text-green-300 font-medium text-sm sm:text-base transition-colors underline">
                View live prototype
              </a>
            </div>
            <div class="case-study-section-divider"></div>

            <!-- The Challenge -->
            <div class="text-left mb-8">
              <h2 class="text-xl text-center sm:text-2xl md:text-3xl font-bold mb-4">{{ caseStudy.challenge.title ??
                'The Challenge' }}</h2>
              <p class="text-sm sm:text-base mb-4" v-html="caseStudy.challenge.intro"></p>
              <p v-for="(goal, i) in caseStudy.challenge.goals" :key="i" class="text-sm sm:text-base mb-4es last:mb-0"
                v-html="goal"> </p>
            </div>
            <div class="case-study-section-divider"></div>

            <!-- My Design Process -->
            <div class="mb-12 text-center">
              <h2 class="text-xl text-center sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-10 text-white">My Design
                Process</h2>
              <div class="design-process-flow">
                <!-- Empathize -->
                <div class="design-process-step">
                  <div class="design-process-circle">
                    <Search :size="iconSize" class="text-white" stroke-width="1.5" />
                  </div>
                  <span class="design-process-label">Empathize</span>
                </div>
                <div class="design-process-arrow" aria-hidden="true">
                  <svg class="design-process-arrow-svg" viewBox="0 0 40 16" fill="none" stroke="currentColor"
                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path class="design-process-arrow-line" d="M0 8 L32 8" />
                    <path class="design-process-arrow-head" d="M32 8 L26 4 L26 12 Z" stroke="none"
                      fill="currentColor" />
                  </svg>
                </div>
                <!-- Analysis -->
                <div class="design-process-step">
                  <div class="design-process-circle">
                    <LineChart :size="iconSize" class="text-white" stroke-width="1.5" />
                  </div>
                  <span class="design-process-label">Analysis</span>
                </div>
                <div class="design-process-arrow" aria-hidden="true">
                  <svg class="design-process-arrow-svg" viewBox="0 0 40 16" fill="none" stroke="currentColor"
                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path class="design-process-arrow-line" d="M0 8 L32 8" />
                    <path class="design-process-arrow-head" d="M32 8 L26 4 L26 12 Z" stroke="none"
                      fill="currentColor" />
                  </svg>
                </div>
                <!-- Ideate -->
                <div class="design-process-step relative">
                  <div class="design-process-circle">
                    <Lightbulb :size="iconSize" class="text-white" stroke-width="1.5" />
                  </div>
                  <span class="design-process-label">Ideate</span>
                  <div
                    class="absolute -right-2 top-0 hidden text-xs text-white opacity-90 lg:block design-process-iterate"
                    style="transform: translate(50%, -80%)">
                    <svg class="h-6 w-12" viewBox="0 0 48 24" fill="none" stroke="currentColor" stroke-width="1"
                      stroke-dasharray="3 2">
                      <path d="M0 20 Q 24 0 48 20" stroke-linecap="round" />
                    </svg>
                    <span class="block -mt-0.5 text-center">Iterate</span>
                  </div>
                </div>
                <div class="design-process-arrow" aria-hidden="true">
                  <svg class="design-process-arrow-svg" viewBox="0 0 40 16" fill="none" stroke="currentColor"
                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path class="design-process-arrow-line" d="M0 8 L32 8" />
                    <path class="design-process-arrow-head" d="M32 8 L26 4 L26 12 Z" stroke="none"
                      fill="currentColor" />
                  </svg>
                </div>
                <!-- Prototype -->
                <div class="design-process-step relative">
                  <div class="design-process-circle">
                    <LayoutTemplate :size="iconSize" class="text-white" stroke-width="1.5" />
                  </div>
                  <span class="design-process-label">Prototype</span>
                  <div
                    class="absolute -right-2 top-0 hidden text-xs text-white opacity-90 lg:block design-process-iterate"
                    style="transform: translate(50%, -80%)">
                    <svg class="h-6 w-12" viewBox="0 0 48 24" fill="none" stroke="currentColor" stroke-width="1"
                      stroke-dasharray="3 2">
                      <path d="M0 20 Q 24 0 48 20" stroke-linecap="round" />
                    </svg>
                    <span class="block -mt-0.5 text-center">Iterate</span>
                  </div>
                </div>
                <div class="design-process-arrow" aria-hidden="true">
                  <svg class="design-process-arrow-svg" viewBox="0 0 40 16" fill="none" stroke="currentColor"
                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path class="design-process-arrow-line" d="M0 8 L32 8" />
                    <path class="design-process-arrow-head" d="M32 8 L26 4 L26 12 Z" stroke="none"
                      fill="currentColor" />
                  </svg>
                </div>
                <!-- Test -->
                <div class="design-process-step">
                  <div class="design-process-circle">
                    <Eye :size="iconSize" class="text-white" stroke-width="1.5" />
                  </div>
                  <span class="design-process-label">Test</span>
                </div>
              </div>
            </div>
            <div class="case-study-section-divider"></div>

            <!-- Research & Insights -->
            <div class="text-left mb-8">
              <h2 class="text-xl text-center sm:text-2xl md:text-3xl font-bold mb-4">Research & Insights</h2>
              <p v-for="(insight, i) in caseStudy.research" :key="i" class="text-sm sm:text-base mb-6 last:mb-0"
                v-html="insight"></p>
            </div>
            <!-- <div class="case-study-section-divider"></div> -->

            <!-- Competitive Market Analysis -->
            <div v-if="caseStudy.competitiveAnalysis?.length" class="mb-8">
              <h2 class="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white text-left">Competitive Market
                Analysis</h2>
              <div class="competitive-analysis-grid">
                <div v-for="(competitor, colIndex) in caseStudy.competitiveAnalysis" :key="colIndex"
                  class="competitive-analysis-column">
                  <!-- Competitor (image + optional name) -->
                  <div class="competitive-analysis-cell competitive-analysis-header">
                    <div v-if="competitor.image" class="competitive-analysis-image-wrap">
                      <img :src="competitor.image" :alt="competitor.name ?? 'Competitor'"
                        class="competitive-analysis-image" loading="lazy" />
                    </div>
                    <span v-if="competitor.name" class="competitive-analysis-name">{{ competitor.name }}</span>
                    <span v-else class="competitive-analysis-label">Competitor</span>
                  </div>
                  <!-- Strengths -->
                  <div class="competitive-analysis-cell">
                    <span class="competitive-analysis-cell-label">Strengths</span>
                    <ul class="competitive-analysis-list">
                      <li v-for="(item, i) in competitor.strengths" :key="i" class="competitive-analysis-list-item"
                        v-html="item"></li>
                    </ul>
                  </div>
                  <!-- Weakness -->
                  <div class="competitive-analysis-cell">
                    <span class="competitive-analysis-cell-label">Weakness</span>
                    <ul class="competitive-analysis-list">
                      <li v-for="(item, i) in competitor.weaknesses" :key="i" class="competitive-analysis-list-item"
                        v-html="item"></li>
                    </ul>
                  </div>
                  <!-- Features -->
                  <div class="competitive-analysis-cell">
                    <span class="competitive-analysis-cell-label">Features</span>
                    <ul class="competitive-analysis-list">
                      <li v-for="(item, i) in competitor.features" :key="i" class="competitive-analysis-list-item"
                        v-html="item"></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="caseStudy.competitiveAnalysis?.length" class="case-study-section-divider"></div>

            <!-- Process & Solution -->
            <div class="text-left mb-8">
              <h2 class="text-xl text-center sm:text-2xl md:text-3xl font-bold mb-4">Process & Solution</h2>
              <div v-for="(section, i) in caseStudy.process" :key="i" class="mb-4">
                <!-- <h3 class="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">{{ section.title }}</h3> -->
                <p v-for="(bullet, j) in section.bullets" :key="j" class="text-sm sm:text-base mb-4 last:mb-0 last:mb-4"
                  v-html="bullet"></p>
              </div>
            </div>
            <div class="case-study-section-divider"></div>

            <!-- Wireframes (blank section above gallery – add image URLs to caseStudy.wireframeImages) -->
            <!-- <div v-if="caseStudy.wireframeImages !== undefined"
              class="mb-8 rounded-lg overflow-hidden case-study-media-section">
              <div class="p-4 sm:p-6 flex flex-col gap-4 sm:gap-6">
                <template v-if="caseStudy.wireframeImages.length">
                  <img v-for="(img, i) in caseStudy.wireframeImages" :key="i" :src="img" :alt="`Wireframe ${i + 1}`"
                    class="w-full h-auto object-contain rounded" loading="lazy" />
                </template>
<div v-else class="min-h-[200px] sm:min-h-[280px] flex items-center justify-center text-gray-500 text-sm">
  Wireframes
</div>
</div>
</div>
<div v-if="caseStudy.wireframeImages !== undefined" class="case-study-section-divider"></div> -->

            <!-- Gallery images (after Process & Solution) -->
            <div v-if="caseStudy.galleryImages?.length"
              class="mb-8 rounded-lg overflow-hidden case-study-media-section">
              <div class="p-4 sm:p-6 flex flex-col gap-4 sm:gap-6">
                <img v-for="(img, i) in caseStudy.galleryImages" :key="i" :src="img" :alt="`Process image ${i + 1}`"
                  class="w-full h-auto object-contain rounded" loading="lazy" />
              </div>
            </div>
            <div v-if="caseStudy.galleryImages?.length" class="case-study-section-divider"></div>

            <!-- UI Kit section -->
            <div v-if="caseStudy.uiKit" class="mb-8">
              <h2 class="text-xl text-left sm:text-2xl md:text-3xl font-bold mb-3 text-white">{{ caseStudy.uiKit.title
              }}</h2>
              <p class="text-sm text-left sm:text-base text-gray-300 mb-6 max-w-3xl"
                v-html="caseStudy.uiKit.description"></p>
              <div class="rounded-lg overflow-hidden case-study-media-section">
                <div class="p-4 sm:p-6">
                  <img :src="caseStudy.uiKit.image" :alt="caseStudy.uiKit.title"
                    class="w-full h-auto object-contain rounded" loading="lazy" />
                  <a v-if="caseStudy.uiKit.buttonLabel" :href="caseStudy.uiKit.buttonUrl ?? '#'"
                    :target="caseStudy.uiKit.buttonUrl ? '_blank' : undefined"
                    :rel="caseStudy.uiKit.buttonUrl ? 'noopener noreferrer' : undefined"
                    class="inline-block mt-4 text-green-400 hover:text-green-300 font-medium text-sm sm:text-base transition-colors underline">
                    {{ caseStudy.uiKit.buttonLabel }}
                  </a>
                </div>
              </div>
            </div>
            <div v-if="caseStudy.uiKit" class="case-study-section-divider"></div>

            <!-- Prototype section -->
            <div v-if="caseStudy.prototype" class="mb-8">
              <h2 class="text-xl text-left sm:text-2xl md:text-3xl font-bold mb-3 text-white">{{
                caseStudy.prototype.title }}</h2>
              <p class="text-sm sm:text-base text-gray-300 mb-6 max-w-3xl" v-html="caseStudy.prototype.description"></p>
              <div class="rounded-lg overflow-hidden case-study-media-section">
                <div class="p-4 sm:p-6">
                  <video v-if="caseStudy.prototype.video" :src="caseStudy.prototype.video"
                    class="w-full h-auto object-contain rounded" autoplay muted loop playsinline />
                  <img v-else-if="caseStudy.prototype.image" :src="caseStudy.prototype.image"
                    :alt="caseStudy.prototype.title" class="w-full h-auto object-contain rounded" loading="lazy" />
                  <div v-else
                    class="min-h-[200px] sm:min-h-[280px] flex items-center justify-center text-gray-500 text-sm rounded">
                    Prototype
                  </div>
                  <a v-if="caseStudy.prototype.buttonLabel" :href="caseStudy.prototype.buttonUrl ?? '#'"
                    :target="caseStudy.prototype.buttonUrl ? '_blank' : undefined"
                    :rel="caseStudy.prototype.buttonUrl ? 'noopener noreferrer' : undefined"
                    class="inline-block mt-4 text-green-400 hover:text-green-300 font-medium text-sm sm:text-base transition-colors underline">
                    {{ caseStudy.prototype.buttonLabel }}
                  </a>
                </div>
              </div>
            </div>
            <div v-if="caseStudy.prototype" class="case-study-section-divider"></div>

            <!-- Impact & Results -->
            <div class="text-left mb-8">
              <h2 class="text-xl text-center sm:text-2xl md:text-3xl font-bold mb-4">Impact & Results</h2>
              <ul class="space-y-4 list-none pl-0">
                <li v-for="(item, i) in caseStudy.impact" :key="i"
                  class="flex gap-3 items-start text-sm sm:text-base text-gray-300">
                  <span class="flex-shrink-0 mt-0.5 text-green-400" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span class="flex-1" v-html="item"></span>
                </li>
              </ul>
            </div>
            <div class="case-study-section-divider"></div>

            <!-- Iterations -->
            <div v-if="caseStudy.iterations" class="mb-8">
              <h2 class="text-lg text-left sm:text-large md:text-large font-bold mb-3 text-white">{{
                caseStudy.iterations.title }}
              </h2>
              <p class="text-sm sm:text-base text-left text-gray-300 mb-6 max-w-3xl"
                v-html="caseStudy.iterations.description"></p>
              <div class="rounded-lg overflow-hidden case-study-media-section">
                <div class="p-4 sm:p-6">
                  <img v-if="caseStudy.iterations.image" :src="caseStudy.iterations.image"
                    :alt="caseStudy.iterations.title" class="w-full h-auto object-contain rounded" loading="lazy" />
                  <div v-else
                    class="min-h-[200px] sm:min-h-[280px] flex items-center justify-center text-gray-500 text-sm rounded">
                    Iterations
                  </div>
                </div>
              </div>
            </div>
            <div v-if="caseStudy.iterations" class="case-study-section-divider"></div>

            <!-- Lessons Learned -->
            <div class="text-left mb-8">
              <h2 class="text-xl text-center sm:text-2xl md:text-3xl font-bold mb-4">Lessons Learned</h2>
              <p class="text-sm sm:text-base" v-html="caseStudy.lessons.join(' ')"></p>
            </div>
            <div class="case-study-section-divider"></div>
          </template>

        </div>

      </div>
    </div>

    <!-- Back to top button (fixed, visible when scrolled) -->
    <Transition name="fade">
      <button v-show="showBackToTop" type="button" aria-label="Back to top"
        class="fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full border-2 border-green-400 bg-[#0f0f0f] text-green-400 shadow-lg transition-colors hover:bg-green-400 hover:text-gray-900"
        @click="scrollToTop">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </Transition>

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
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { Search, LineChart, Lightbulb, LayoutTemplate, Eye } from 'lucide-vue-next'
import AppHeader from '../components/AppHeader.vue'
import InteractifyImage from '../components/icons/interactify/Interactify.svg'
import PuckStreamImage from '../components/icons/PuckStream/Puckstream Mockup 1.png'
import CognitaMockup from '../components/icons/Cognita/Landing Page.png'
import PuckStreamCTA from '../components/icons/PuckStream/CTA.png'
import PuckStreamColorCoded1 from '../components/icons/PuckStream/Color Coded Game States.png'
import PuckStreamColorCoded2 from '../components/icons/PuckStream/Color Coded Game States 2.png'
import PuckStreamUIKit from '../components/icons/PuckStream/UI KIT.png'
import PuckStreamIterations from '../components/icons/PuckStream/Iterations.png'
import PuckStreamPrototypeVid from '../components/icons/PuckStream/PROTOTYPE VID.mkv'

const showBackToTop = ref(false)
const iconSize = 28

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const onScroll = () => {
  showBackToTop.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

interface CompetitorEntry {
  image?: string
  name?: string
  strengths: string[]
  weaknesses: string[]
  features: string[]
}

interface UiKitEntry {
  title: string
  description: string
  image: string
  video?: string
  buttonLabel: string
  buttonUrl?: string
}

interface IterationsEntry {
  title: string
  description: string
  image: string
}

interface CaseStudyContent {
  subtitle: string
  overview: { client: string; project: string; timeline: string; role: string; prototypeUrl?: string }
  challenge: { title?: string; intro: string; goals: string[] }
  research: string[]
  competitiveAnalysis?: CompetitorEntry[]
  process: { title: string; bullets: string[] }[]
  wireframeImages?: string[]
  galleryImages?: string[]
  uiKit?: UiKitEntry
  prototype?: UiKitEntry
  impact: string[]
  iterations?: IterationsEntry
  lessons: string[]
}

const CASE_STUDIES: Record<number, CaseStudyContent> = {
  1: {
    subtitle: 'An app about sharing your music taste while socializing',
    overview: {
      client: 'Personal / Concept',
      project: 'Interactify – social music discovery app',
      timeline: 'Design & prototype phase',
      role: 'UI/UX Designer (end-to-end)',
      prototypeUrl: '#',
    },
    challenge: {
      title: 'The Challenge',
      intro: 'Design a social app that lets people share and discover music without feeling like another feed.',
      goals: [
        'Balance social discovery with personal listening space',
        'Make music taste feel expressive, not performative',
        'Keep onboarding light so users reach “aha” moments fast',
      ],
    },
    research: [
      'Users wanted to share taste without turning listening into a chore',
      'Discovery was strongest when tied to friends’ activity, not algorithms alone',
      'Low-friction sharing (e.g. “what I’m playing now”) beat long reviews',
    ],
    process: [
      {
        title: 'Social-first flows',
        bullets: [
          'Mapped flows for “share a track,” “see what friends play,” and “discover from taste”',
          'Used lightweight components (mini cards, one-tap reactions) to keep focus on music',
        ],
      },
      {
        title: 'Visual system',
        bullets: [
          'Defined a component set for album art, play states, and user avatars',
          'Kept contrast and tap targets accessible (WCAG 2.1 AA)',
        ],
      },
    ],
    impact: [
      'Clear user flows validated in prototype testing',
      'Reusable design system for future social/audio features',
      'Foundation for music + social MVP',
    ],
    lessons: [
      'Social and music need separate “modes” so one doesn’t overwhelm the other',
      'Small, low-commitment actions (like a quick share) drove more engagement in tests',
      'Familiar patterns (stories, activity) helped; novelty worked when it served clarity',
    ],
  },
  2: {
    subtitle: 'A live hockey platform for match schedules, scores, and game details.',
    overview: {
      client: 'Sportality',
      project: 'PuckStream – SHL.se (Swedish Hockey League) modernization',
      timeline: '1-week design sprint',
      role: 'UI/UX Designer (end-to-end)',
      prototypeUrl: '#',
    },
    challenge: {
      title: 'The Challenge',
      intro: 'When I first encountered SHL.se, it felt like stepping into a hockey arena frozen in time—a relic of the 2010s struggling to connect with the modern fan. The experience was fragmented, visually inconsistent, and inaccessible, leaving fans to navigate a digital obstacle course just to find a score or a stream.<br><br>My mission was clear: to lead a design renaissance that would rebuild trust and utility from the ice up. I anchored this transformation on three pillars:',
      goals: [
        '1. <b>To build an inclusive foundation</b>, reconstructing the visual hierarchy with WCAG 2.1 AA standards as the non-negotiable baseline, ensuring no fan was left on the sidelines.<br><br>',
        '2. <b>To design for decisive action</b>, streamlining the critical paths to tickets and live streams to convert passive browsing into confident engagement and direct revenue.<br><br>',
        '3. <b>To create a legacy of clarity</b>, replacing a patchwork of ad-hoc components with a cohesive, scalable design system—a blueprint not just for SHL.se, but for the future of sports digital experiences.',
      ],
    },
    research: [
      'While SHL had already established <b>clear business objectives</b>, my research focused on <b>uncovering the user needs</b> that would ultimately shape the experience. This phase included a <b>competitive analysis</b> to identify <b>industry gaps</b> and <b>opportunities for meaningful improvement.</b>',
      '<b>Component inconsistency was fracturing the fan experience</b>. Essential UI elements such as <b>match cards</b> and <b>stats modules</b> behaved and appeared differently between sections—most notably between the <b>schedule and live match views.</b> These <b>jarring shifts disrupted visual rhythm, increased cognitive load,</b> and ultimately <b>undermined intuitive navigation.</b>',
      'This <b>lack of cohesion</b> didn’t just look messy—it made the platform <b>feel unreliable,</b> pulling users out of the game just when they should have been <b>most immersed.</b>',
    ],
    competitiveAnalysis: [
      {
        name: 'NBA.com',
        strengths: ['<b>Content Depth:</b> Rich with news, stats, and feature articles (e.g., MVP ladder).', '<b>Clear Monetization:</b> Direct promotion of NBA LEAGUE PASS ($74.99) for streaming', '<b>Accessibility:</b> Clear, keyboard-accessible navigation.'],
        weaknesses: ['<b>Content Overload:</b> The homepage can feel busy with multiple "Next" story links.', '<b>Commercial Focus:</b> Heavy emphasis on paid streaming service upfront.'],
        features: ['<b>NBA App Integration:</b> Prominent cross-promotion to their best-in-class mobile app.', '<b>Interactive Stats Pages:</b> Deep-dive statistical tools and leaderboards.', 'Strong Social Media & Video Feed integration directly on the site.'],
      },
      {
        name: 'Arsenal.com',
        strengths: ['<b>Club-Focused Depth:</b> Extensive content for mens, womens, and academy teams.', '<b>Fan Engagement:</b> Interactive elements (quizzes, wallpapers, voting).', '<b>Direct Communication:</b> Provides full club address, phone number, and help center links.'],
        weaknesses: ['<b>Navigation Complexity:</b> Dense mega-menu may be overwhelming for new visitors.', '<b>Visual Hierarchy:</b> Text-heavy layout; less immediate visual impact.'],
        features: ['<b>Arsenal Player (Media Library):</b> A dedicated, often subscription-based vault of exclusive video content.', '<b>Detailed First-Team & Academy Pages:</b> Deep rosters with player profiles, stats, and news.', '<b>Integrated Ticketing Portal:</b> Direct, secure ticket purchase and management.', '<b>Strong emphasis on local (London) community and history.</b>'],
      },
      {
        name: 'PremierLeague.com',
        strengths: ['<b>Unparalleled Data & Statistics:</b> The official stats provider offers incredibly detailed, authoritative, and well-presented data tables, leaderboards, and history.', '<b>Clear Fixture & Results Hub:</b> The match center is a masterclass in presenting complex, concurrent league schedules and outcomes with clarity.'],
        weaknesses: ['<b>Functional over Emotional:</b> Can feel bureaucratic and transactional; lacks the immersive, emotional "wow" factor of NBA.com or the club intimacy of Arsenal.com.', '<b>Navigation Can Be Utilitarian:</b> Information architecture is comprehensive but not always inspired or engaging.'],
        features: ['<b>Official League Table & Fixtures:</b> The definitive, constantly updated core of the site.', '<b>Fantasy Premier League Integration:</b> Deep promotion and linking to their massively popular fantasy game.', '<b>Comprehensive Player & Manager Profiles:</b> Includes detailed career stats, news, and quotes.'],
      },
    ],
    process: [
      {
        title: 'Visual hierarchy restructure',
        bullets: [
          '<b>My mission was to restore structure and clarity to the fan experience.</b> To achieve this, I first restructured the visual hierarchy through wireframes and a content priority matrix, ensuring live scores and streaming CTAs were elevated and unmissable. Next, I created clear visual zoning with deliberate spacing and a purposeful typographic scale, giving each section breathing room and intent. Understanding that fans need instant insight, I introduced color-coded game charts and backgrounds, allowing game status to be understood at a glance. The result was a streamlined interface where fans could focus on the game, not the navigation.',
          'To scale this clarity and ensure consistency, <b>I engineered a modular design system in Figma</b>. This foundational library of reusable components replaced a patchwork of inconsistent UI. I established an 8-point grid, spacing tokens, and an accessible color palette rigorously tested to WCAG 2.1 AA standards, ensuring every interface would be both cohesive and inclusive.',
          '<b>On the front end, this systematic approach is projected to translate directly into a better experience.</b> Fans will interact with dynamic game cards that adapt visually to live, upcoming, or final states; streamlined navigation anchored by intuitive top-level CTAs; and responsive layouts optimized for both performance and accessibility. Each decision—from the foundational token to the interactive component—is a deliberate stitch in the fabric of a more intuitive, reliable, and engaging hockey hub.',
        ],
      },
    ],
    wireframeImages: [],
    galleryImages: [PuckStreamCTA, PuckStreamColorCoded1, PuckStreamColorCoded2],
    uiKit: {
      title: 'UI Kit',
      description: 'I created a structured UI Kit to unify the user interface with a focused color palette, consistent components, and clear visual hierarchy. Using a core primary black and white for actions, a clean neutral system for readability, and carefully defined buttons and cards, I resolved inconsistencies and created a more cohesive, intuitive, and scalable design system.',
      image: PuckStreamUIKit,
      buttonLabel: 'View Full UI Library',
      buttonUrl: 'https://www.figma.com/design/FjDM6KLEBulg08BtQydwEi/PuckStream?node-id=1-3368&t=2C105UHnz28Vd9T8-1',
    },
    prototype: {
      title: 'Prototype',
      description: '',
      image: '',
      video: PuckStreamPrototypeVid,
      buttonLabel: 'View prototype',
      buttonUrl: 'https://www.figma.com/proto/FjDM6KLEBulg08BtQydwEi/PuckStream?node-id=1-700&t=cvIdWIfmyNTIa6KI-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    },
    impact: [
      'Achieved full WCAG 2.1 AA compliance across all key components, ensuring clarity and accessibility for all users, including those with visual or motor impairments.',
      'Projected a <b>+65%</b> increase in click-through rates for streaming and ticket purchase links—driving measurable gains in user engagement and revenue.',
      'Scalable design system for other leagues; component library cut design time by ~40%.',
    ],
    iterations: {
      title: 'Iterations',
      description: 'Through iterative user testing and feedback loops, I refined card and footer designs to optimize information architecture. Each iteration was informed by real user insights, ensuring a clear visual hierarchy that guides attention while maintaining maximum readability across all viewing contexts.',
      image: PuckStreamIterations,
    },
    lessons: [
      'Each insight from this project reinforced that <b>good design is intentional, human, and forward-looking.</b><br><br>',
      'We learned that for sports fans, <b>immediacy is everything</b>—live scores and streaming access must feel instantaneous, or engagement is lost.<br><br>',
      'Our focus on accessibility revealed a universal truth: <b>designing for clarity and contrast didn’t just help users with impairments; it created a cleaner, more legible experience for everyone.</b><br><br> ',
      'And perhaps most powerfully, our investment in a scalable design system proved its worth not just in pixels, but in time—<b>accelerating future projects with consistency and confidence, turning one league’s redesign into a blueprint for many.</b><br><br>',
    ],
  },
  3: {
    subtitle: 'An EdTech platform for seamless online tutoring and progress tracking.',
    overview: {
      client: 'Concept / EdTech',
      project: 'Cognita – online tutoring and learning progress platform',
      timeline: 'Design & prototype phase',
      role: 'UI/UX Designer (end-to-end)',
      prototypeUrl: '#',
    },
    challenge: {
      title: 'The Challenge',
      intro: 'Design a tutoring platform where students and tutors can schedule, meet, and track progress without friction.',
      goals: [
        'Clear scheduling and session management for students and tutors',
        'Progress visibility that motivates without overwhelming',
        'Accessible, trustworthy UI that works for learners of all ages',
      ],
    },
    research: [
      'Students and parents needed a single place for schedules, materials, and progress',
      'Tutors wanted less admin and more time in-session',
      'Progress dashboards worked best when tied to clear goals and milestones',
    ],
    process: [
      {
        title: 'Scheduling and sessions',
        bullets: [
          'Designed calendar and booking flows for one-off and recurring sessions',
          'In-session tools (notes, shared whiteboard) kept in a simple, focused layout',
        ],
      },
      {
        title: 'Progress and accountability',
        bullets: [
          'Dashboard concepts for skills, completion, and streaks',
          'Lightweight reporting so parents/tutors could see progress at a glance',
        ],
      },
      {
        title: 'Design system',
        bullets: [
          'Component set for cards, lists, and forms with consistent spacing and contrast',
          'WCAG 2.1 AA considered for typography and interactive elements',
        ],
      },
    ],
    impact: [
      'Coherent flows for booking, sessions, and progress tracking',
      'Reusable components for future EdTech features',
      'Strong base for user testing with students and tutors',
    ],
    lessons: [
      'EdTech UX should reduce cognitive load so focus stays on learning',
      'Progress visibility increased motivation when it was simple and goal-based',
      'Flexible scheduling (recurring vs one-off) was critical for real-world use',
    ],
  },
}

const route = useRoute()

const id = computed(() => Number(route.params.id))

/** Case studies 1 and 4 are hidden for now. */
const isHiddenCase = computed(() => id.value === 1 || id.value === 4)

/** Cognita case study content is temporarily hidden; show WIP message. */
const isWipCase = computed(() => id.value === 3)

const title = computed(() => {
  switch (id.value) {
    case 1:
      return 'Interactify'
    case 2:
      return 'PuckStream'
    case 3:
      return 'Cognita'
    default:
      return 'Design'
  }
})

const primary = computed(() => (id.value === 1 ? 'INTER' : title.value))
const accent = computed(() => (id.value === 1 ? 'C TIFY' : ''))

const subtitle = computed(() => CASE_STUDIES[id.value]?.subtitle ?? '')

const caseStudy = computed(() => CASE_STUDIES[id.value] ?? null)

const imageSrc = computed(() => {
  switch (id.value) {
    case 1:
      return InteractifyImage
    case 2:
      return PuckStreamImage
    case 3:
      return CognitaMockup
    default:
      return ''
  }
})
</script>

<style scoped>
/* Design process: always one straight horizontal row, scroll on small screens */
.design-process-flow {
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-end;
  justify-content: center;
  gap: 0;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 0.5rem;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x proximity;
  min-width: 0;
}

.design-process-step {
  flex-shrink: 0;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0.25rem;
}

@media (min-width: 640px) {
  .design-process-step {
    margin: 0 0.5rem;
  }
}

@media (min-width: 1024px) {
  .design-process-step {
    margin: 0 0.75rem;
  }
}

.design-process-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  border: 2px solid rgb(74 222 128);
  background-color: #0f0f0f;
}

@media (min-width: 640px) {
  .design-process-circle {
    width: 4rem;
    height: 4rem;
  }
}

@media (min-width: 768px) {
  .design-process-circle {
    width: 4.5rem;
    height: 4.5rem;
  }
}

@media (min-width: 1024px) {
  .design-process-circle {
    width: 5rem;
    height: 5rem;
  }
}

.design-process-label {
  margin-top: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: white;
}

@media (min-width: 640px) {
  .design-process-label {
    font-size: 0.875rem;
  }
}

@media (min-width: 768px) {
  .design-process-label {
    font-size: 1rem;
  }
}

.design-process-arrow {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  align-self: center;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.6);
}

.design-process-arrow-svg {
  width: 1.5rem;
  height: 0.625rem;
  display: block;
}

.design-process-arrow-line {
  stroke-dasharray: 3 3;
}

.design-process-arrow-head {
  opacity: 0.8;
}

/* Section divider after every case study section */
.case-study-section-divider {
  margin: 2rem 0;
  border-top: 1px solid #1f1f1f;
}

/* Shared background for wireframes & gallery (dynamic per case study) */
.case-study-media-section {
  background-color: #1f1f1f;
}

/* Competitive Market Analysis – 3 competitors, responsive */
.competitive-analysis-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  background: #0a0a0a;
  border: 1px solid rgb(74 222 128);
  border-radius: 0.375rem;
  overflow: hidden;
}

@media (min-width: 640px) {
  .competitive-analysis-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .competitive-analysis-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.competitive-analysis-column {
  display: flex;
  flex-direction: column;
  min-width: 0;
  border-right: none;
  border-bottom: 1px solid rgba(74, 222, 128, 0.3);
  text-align: left;
}

.competitive-analysis-column:last-child {
  border-bottom: none;
}

@media (min-width: 640px) {
  .competitive-analysis-column {
    border-right: 1px solid rgb(74 222 128);
    border-bottom: none;
  }

  .competitive-analysis-column:nth-child(2n),
  .competitive-analysis-column:last-child {
    border-right: none;
  }
}

@media (min-width: 768px) {
  .competitive-analysis-column:nth-child(2n) {
    border-right: 1px solid rgb(74 222 128);
  }

  .competitive-analysis-column:last-child {
    border-right: none;
  }
}

.competitive-analysis-cell {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid rgba(74, 222, 128, 0.2);
  color: rgb(229 231 235);
  font-size: 0.8125rem;
  line-height: 1.5;
}

@media (min-width: 640px) {
  .competitive-analysis-cell {
    padding: 1rem;
    font-size: 0.875rem;
  }
}

.competitive-analysis-cell:last-child {
  border-bottom: none;
}

.competitive-analysis-cell-label {
  display: block;
  font-weight: 600;
  color: white;
  margin-bottom: 0.375rem;
  font-size: 0.75rem;
}

@media (min-width: 640px) {
  .competitive-analysis-cell-label {
    margin-bottom: 0.5rem;
    font-size: 0.8125rem;
  }
}

.competitive-analysis-header {
  align-items: center;
  text-align: center;
  padding: 1rem 0.75rem;
  background: rgba(74, 222, 128, 0.06);
}

@media (min-width: 640px) {
  .competitive-analysis-header {
    padding: 1.25rem 1rem;
  }
}

.competitive-analysis-image-wrap {
  width: 100%;
  max-width: 64px;
  aspect-ratio: 1;
  margin: 0 auto 0.375rem;
  border-radius: 0.25rem;
  overflow: hidden;
  background: #1a1a1a;
}

@media (min-width: 640px) {
  .competitive-analysis-image-wrap {
    max-width: 80px;
    margin-bottom: 0.5rem;
  }
}

.competitive-analysis-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.competitive-analysis-name {
  font-weight: 600;
  color: white;
  font-size: 0.875rem;
}

@media (min-width: 640px) {
  .competitive-analysis-name {
    font-size: 0.9375rem;
  }
}

.competitive-analysis-label {
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.75rem;
}

@media (min-width: 640px) {
  .competitive-analysis-label {
    font-size: 0.8125rem;
  }
}

.competitive-analysis-list {
  list-style: disc;
  padding-left: 1rem;
  margin: 0;
}

@media (min-width: 640px) {
  .competitive-analysis-list {
    padding-left: 1.25rem;
  }
}

.competitive-analysis-list-item {
  margin-bottom: 0.2rem;
}

.competitive-analysis-list-item:last-child {
  margin-bottom: 0;
}

.design-process-arrow-svg {
  width: 1.5rem;
  height: 0.625rem;
  display: block;
}

@media (min-width: 640px) {
  .design-process-arrow-svg {
    width: 2rem;
    height: 0.75rem;
  }
}

@media (min-width: 768px) {
  .design-process-arrow-svg {
    width: 2.5rem;
    height: 0.875rem;
  }
}

@media (min-width: 1024px) {
  .design-process-arrow-svg {
    width: 3rem;
    height: 1rem;
  }
}

/* Hide scrollbar on mobile but keep scroll */
.design-process-flow::-webkit-scrollbar {
  height: 4px;
}

.design-process-flow::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

.design-process-flow::-webkit-scrollbar-thumb {
  background: rgba(74, 222, 128, 0.5);
  border-radius: 2px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
