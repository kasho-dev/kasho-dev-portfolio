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
                <!-- {{ primary }}<span class="text-green-400">{{ accent }}</span> -->
              </div>
            </div>
          </div>
        </div>

        <!-- Body copy -->
        <div ref="caseStudyBodyRef" class="mt-8 max-w-3xl mx-auto text-center text-gray-300">

          <p class="text-gray-300 mt-2 sm:mt-3 text-sm sm:text-base">{{ subtitle }}</p>
          <br>

          <!-- BODY CONTENT (unique per case study) -->
          <template v-if="caseStudy">
            <!-- Project Overview -->
            <div class="case-study-section text-left mb-8">
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
            <div class="case-study-section text-left mb-8">
              <h2 class="text-xl text-center sm:text-2xl md:text-3xl font-bold mb-4">{{ caseStudy.challenge.title ??
                'The Challenge' }}</h2>
              <p class="text-sm sm:text-base mb-4" v-html="caseStudy.challenge.intro"></p>
              <p v-for="(goal, i) in caseStudy.challenge.goals" :key="i" class="text-sm sm:text-base mb-4es last:mb-0"
                v-html="goal"> </p>
            </div>
            <div class="case-study-section-divider"></div>

            <!-- My Design Process -->
            <div class="case-study-section mb-12 text-center">
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
                <div class="design-process-arrow-group">
                  <div class="design-process-arrow design-process-arrow-back design-process-arrow-curve" aria-hidden="true" title="Iterate back to Ideate">
                    <span class="design-process-iterate-label">Iterate</span>
                    <svg class="design-process-arrow-svg design-process-arrow-curve-svg" viewBox="0 -6 48 24" fill="none" stroke="currentColor"
                      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path class="design-process-arrow-curve-line" d="M48 6 C 32 -6 16 6 0 6" />
                      <path class="design-process-arrow-head" d="M0 6 L5 3 L5 9 Z" stroke="none" fill="currentColor" />
                    </svg>
                  </div>
                  <div class="design-process-arrow" aria-hidden="true">
                    <svg class="design-process-arrow-svg" viewBox="0 0 40 16" fill="none" stroke="currentColor"
                      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path class="design-process-arrow-line" d="M0 8 L32 8" />
                      <path class="design-process-arrow-head" d="M32 8 L26 4 L26 12 Z" stroke="none"
                        fill="currentColor" />
                    </svg>
                  </div>
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
                <div class="design-process-arrow-group">
                  <div class="design-process-arrow design-process-arrow-back design-process-arrow-curve" aria-hidden="true" title="Iterate back to Prototype">
                    <span class="design-process-iterate-label">Iterate</span>
                    <svg class="design-process-arrow-svg design-process-arrow-curve-svg" viewBox="0 -6 48 24" fill="none" stroke="currentColor"
                      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path class="design-process-arrow-curve-line" d="M48 6 C 32 -6 16 6 0 6" />
                      <path class="design-process-arrow-head" d="M0 6 L5 3 L5 9 Z" stroke="none" fill="currentColor" />
                    </svg>
                  </div>
                  <div class="design-process-arrow" aria-hidden="true">
                    <svg class="design-process-arrow-svg" viewBox="0 0 40 16" fill="none" stroke="currentColor"
                      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path class="design-process-arrow-line" d="M0 8 L32 8" />
                      <path class="design-process-arrow-head" d="M32 8 L26 4 L26 12 Z" stroke="none"
                        fill="currentColor" />
                    </svg>
                  </div>
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
            <div v-if="caseStudy.prototype" class="case-study-section-divider"></div>

            <!-- Research & Insights -->
            <div class="case-study-section text-left mb-8">
              <h2 class="text-xl text-center sm:text-2xl md:text-3xl font-bold mb-4">Research & Insights</h2>
              <div v-if="caseStudy.prototype" class="case-study-section-divider"></div>
              <p v-for="(insight, i) in caseStudy.research" :key="i" class="text-sm sm:text-base mb-6 last:mb-0"
                v-html="insight"></p>
            </div>


            <!-- <div class="case-study-section-divider"></div> -->

            <!-- Competitive Market Analysis -->
            <div v-if="caseStudy.competitiveAnalysis?.length" class="case-study-section mb-8">
              <h2 class="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white text-left">Market Competitive
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

            <!-- Goals and Key Features (side-by-side: Goals, Features) -->
            <div v-if="caseStudy.goalsAndFeatures" class="case-study-section mb-8">
              <h2 class="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white text-left">Goals and Key Features
              </h2>
              <div class="goals-features-grid">
                <div class="goals-features-box">
                  <h3 class="goals-features-box-title">Goals</h3>
                  <ul class="goals-features-list">
                    <li v-for="(item, i) in caseStudy.goalsAndFeatures.goals" :key="i" class="goals-features-list-item"
                      v-html="item"></li>
                  </ul>
                </div>
                <div class="goals-features-box">
                  <h3 class="goals-features-box-title">Features</h3>
                  <ul class="goals-features-list">
                    <li v-for="(item, i) in caseStudy.goalsAndFeatures.features" :key="i"
                      class="goals-features-list-item" v-html="item"></li>
                  </ul>
                </div>
              </div>
            </div>
            <div v-if="caseStudy.goalsAndFeatures" class="case-study-section-divider"></div>

            <!-- Design & Development -->
            <div class="case-study-section text-left mb-8">
              <h2 class="text-xl text-center sm:text-2xl md:text-3xl font-bold mb-4">Design & Development</h2>
              <div class="case-study-section-divider"></div>
              <!--   <div v-for="(section, i) in caseStudy.process" :key="i" class="mb-4">
              <h3 class="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">{{ section.title }}</h3>
                <p v-for="(bullet, j) in section.bullets" :key="j" class="text-sm sm:text-base mb-4 last:mb-0 last:mb-4"
                  v-html="bullet"></p>
              </div>-->

            </div>

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

            <!-- Iterations (below Wireframes) – image + description -->
            <div v-if="caseStudy.iterationsBelowWireframes" class="case-study-section mb-8">
              <h2 class="text-xl text-left sm:text-2xl md:text-3xl font-bold mb-3 text-white">
                {{ caseStudy.iterationsBelowWireframes.title ?? 'Iterations' }}
              </h2>
              <p class="text-sm sm:text-base text-left text-gray-300 mb-6 max-w-3xl"
                v-html="caseStudy.iterationsBelowWireframes.description"></p>
              <div class="rounded-lg overflow-hidden case-study-media-section">
                <div class="p-4 sm:p-6">
                  <img :src="caseStudy.iterationsBelowWireframes.image"
                    :alt="caseStudy.iterationsBelowWireframes.title ?? 'Iterations'"
                    class="w-full h-auto object-contain rounded" loading="lazy" />
                </div>
              </div>
            </div>
            <div v-if="caseStudy.iterationsBelowWireframes" class="case-study-section-divider"></div>

            <!-- Gallery images -->
            <div v-if="caseStudy.galleryImages?.length"
              class="case-study-section mb-8 rounded-lg overflow-hidden case-study-media-section">
              <div class="p-4 sm:p-6 flex flex-col gap-4 sm:gap-6">
                <img v-for="(img, i) in caseStudy.galleryImages" :key="i" :src="img" :alt="`Process image ${i + 1}`"
                  class="w-full h-auto object-contain rounded" loading="lazy" />
              </div>
            </div>
            <div v-if="caseStudy.galleryImages?.length" class="case-study-section-divider"></div>

            <!-- UI Kit section -->
            <div v-if="caseStudy.uiKit" class="case-study-section mb-8">
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
            <div v-if="caseStudy.prototype" class="case-study-section mb-8">
              <h2 class="text-xl text-left sm:text-2xl md:text-3xl font-bold mb-3 text-white">{{
                caseStudy.prototype.title }}</h2>
              <p class="text-sm sm:text-base text-gray-300 mb-6 max-w-3xl text-left" v-html="caseStudy.prototype.description"></p>
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

            <!-- Design Refinements (hidden on case study 3) -->
            <template v-if="id !== 3">
              <div v-if="caseStudy.prototype" class="case-study-section-divider"></div>

              <div class="case-study-section text-left mb-8">
                <h2 class="text-xl text-center sm:text-2xl md:text-3xl font-bold mb-4">Design Refinements</h2>
              </div>
              <div class="case-study-section-divider"></div>
            </template>

            <!-- User Feedback (two side-by-side boxes: User 1, User 2) -->
            <div v-if="caseStudy.userFeedback" class="case-study-section mb-8">
              <h2 class="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white text-left">User Feedback</h2>
              <div class="user-feedback-grid">
                <div class="user-feedback-box">
                  <h3 class="user-feedback-box-title">User 1</h3>
                  <ul class="user-feedback-list">
                    <li v-for="(item, i) in caseStudy.userFeedback.user1" :key="i" class="user-feedback-list-item"
                      v-html="item">
                    </li>
                  </ul>
                </div>
                <div class="user-feedback-box">
                  <h3 class="user-feedback-box-title">User 2</h3>
                  <ul class="user-feedback-list">
                    <li v-for="(item, i) in caseStudy.userFeedback.user2" :key="i" class="user-feedback-list-item"
                      v-html="item">
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div v-if="caseStudy.userFeedback" class="case-study-section-divider"></div>

            <!-- Final Iterations & Refinements -->
            <div v-if="caseStudy.iterations" class="case-study-section mb-8">
              <h2 class="text-xl text-left sm:text-2xl md:text-3xl font-bold mb-3 text-white">Iterations & Refinements
              </h2>
              <p class="text-sm sm:text-base text-left text-gray-300 mb-6 max-w-3xl"
                v-html="caseStudy.iterations.description"></p>
              <div class="rounded-lg overflow-hidden case-study-media-section">
                <div class="p-4 sm:p-6">
                  <img v-if="caseStudy.iterations.image" :src="caseStudy.iterations.image"
                    alt="Final Iterations & Refinements" class="w-full h-auto object-contain rounded" loading="lazy" />
                  <div v-else
                    class="min-h-[200px] sm:min-h-[280px] flex items-center justify-center text-gray-500 text-sm rounded">
                    Iterations & Refinements
                  </div>
                </div>
              </div>
            </div>

            <div v-if="caseStudy.impact" class="case-study-section-divider"></div>
            <div class="case-study-section text-left mb-8">
              <h2 class="text-xl text-center sm:text-2xl md:text-3xl font-bold mb-4">Outcome and Learnings</h2>
            </div>
            <div v-if="caseStudy.impact" class="case-study-section-divider"></div>

            <!-- Impact & Results -->
            <div class="case-study-section text-left mb-8">
              <h2 class="text-xl text-center sm:text-2xl md:text-3xl font-bold mb-4">Results & Impact</h2>
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

            <!-- Lessons Learned -->
            <div class="case-study-section text-left mb-8">
              <h2 class="text-xl text-center sm:text-2xl md:text-3xl font-bold mb-4">Lessons Learned</h2>
              <p class="text-sm sm:text-base" v-html="caseStudy.lessons.join(' ')"></p>
            </div>
            <div class="case-study-section-divider"></div>

            <!-- Explore other designs CTA -->
            <div class="case-study-section text-center mt-10 mb-8">
              <p class="text-lg sm:text-xl text-gray-400 italic">
                Feel free to explore my <a href="/#figma-designs"
                  class="text-green-400 hover:text-green-300 transition-colors">other design projects</a>.
              </p>
            </div>
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
import { computed, ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { Search, LineChart, Lightbulb, LayoutTemplate, Eye } from 'lucide-vue-next'
import AppHeader from '../components/AppHeader.vue'
// import SpendlyImage from '../components/icons/Spendly/Intro.png'
import PuckStreamImage from '../components/icons/PuckStream/Puckstream Mockup 1.png'
import CognitaMockup from '../components/icons/Cognita/Landing Page.png'
import PuckStreamCTA from '../components/icons/PuckStream/CTA.png'
import PuckStreamColorCoded1 from '../components/icons/PuckStream/Color Coded Game States.png'
import PuckStreamColorCoded2 from '../components/icons/PuckStream/Color Coded Game States 2.png'
import PuckStreamUIKit from '../components/icons/PuckStream/UI KIT.png'
import PuckStreamIterations from '../components/icons/PuckStream/Iterations.png'
import PuckStreamPrototypeVid from '../components/icons/PuckStream/PROTOTYPE VID.mkv'
import Image1 from '../components/icons/Cognita/Image1.png'
import CognitaUIKit from '../components/icons/Cognita/UI KIT.png'
import CognitaPrototypeVid from '../components/icons/Cognita/PROTOTYPE VID COGNITA.mkv'

import SpendlyCover from '../components/icons/Spendly/Cover.png'
import LowMedFidelity from '../components/icons/Spendly/LowMedFidelity.png'
import SpendlyMockup1 from '../components/icons/Spendly/Mockup1.png'
import SpendlyMockup2 from '../components/icons/Spendly/Mockup2.png'
import SpendlyUIKit from '../components/icons/Spendly/SpendlyUIKit.png'
import SpendlyWireframeIterations from '../components/icons/Spendly/WireframeIteration.png'
import SpendlyFinalIteration from '../components/icons/Spendly/FinalIterations.png'

const showBackToTop = ref(false)
const iconSize = 28
const caseStudyBodyRef = ref<HTMLElement | null>(null)
let sectionObserver: IntersectionObserver | null = null

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const onScroll = () => {
  showBackToTop.value = window.scrollY > 300
}

function setupSectionFadeObserver() {
  sectionObserver?.disconnect()
  const el = caseStudyBodyRef.value
  if (!el) return
  const sections = el.querySelectorAll<HTMLElement>('.case-study-section')
  if (!sections.length) return
  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('case-study-section-visible')
        } else {
          entry.target.classList.remove('case-study-section-visible')
        }
      })
    },
    { rootMargin: '0px 0px -40px 0px', threshold: 0.1 }
  )
  sections.forEach((section) => sectionObserver!.observe(section))
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  nextTick(setupSectionFadeObserver)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  sectionObserver?.disconnect()
  sectionObserver = null
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

/** Goals and Key Features – side-by-side boxes with bullet lists */
interface GoalsAndFeaturesEntry {
  goals: string[]
  features: string[]
}

/** Iterations block (e.g. below wireframes) – image + description */
interface IterationsBlockEntry {
  title?: string
  description: string
  image: string
}

/** User Feedback – two side-by-side boxes (user 1 & user 2) with bullet text */
interface UserFeedbackEntry {
  user1: string[]
  user2: string[]
}

interface CaseStudyContent {
  subtitle: string
  overview: { client: string; project: string; timeline: string; role: string; prototypeUrl?: string }
  challenge: { title?: string; intro: string; goals: string[] }
  research: string[]
  competitiveAnalysis?: CompetitorEntry[]
  goalsAndFeatures?: GoalsAndFeaturesEntry
  // process: { title: string; bullets: string[] }[]
  wireframeImages?: string[]
  iterationsBelowWireframes?: IterationsBlockEntry
  galleryImages?: string[]
  uiKit?: UiKitEntry
  prototype?: UiKitEntry
  userFeedback?: UserFeedbackEntry
  impact: string[]
  iterations?: IterationsEntry
  lessons: string[]
}

const CASE_STUDIES: Record<number, CaseStudyContent> = {
  1: {
    subtitle: 'A budget tracking app for your personal finances.',
    overview: {
      client: 'Personal / Concept',
      project: 'Spendly',
      timeline: '5 Days',
      role: 'UI/UX Designer (end-to-end)',
      prototypeUrl: 'https://www.figma.com/proto/OPa8p9BTtOCgc77YdiIesk/Spendly---Budget-Smarter--Live-Better?page-id=114%3A1040&node-id=166-8405&viewport=-3569%2C-850%2C0.14&t=0BCiKbfcdjIJxxCo-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=166%3A8405',
    },
    challenge: {
      title: 'The Challenge',
      intro: 'Create a user-friendly budget tracking app that stands out from the competition—not just through features, but through its visual identity.',
      goals: [
        '• <b>Establish a unique visual identity</b> that sets Spendly apart in a crowded market<br><br>',
        '• <b>Create a comforting, approachable first impression</b> through thoughtful visual design<br><br>',
        '• <b>Build an immersive "environment"</b> that puts users at ease with a clear visual hierarchy<br><br>',
        '• <b>Use an easy-on-the-eyes color scheme</b> for long-term usability and comfort<br><br>',
        '• <b>Deliver simple yet powerful budgeting features</b> — without hiding them behind paywalls',
      ],
    },
    research: [
      'Before starting the design, I studied the current budget tracking market to understand what works, whats missing, and where Spendly could carve out its own space — both functionally and visually.<br><br> <b>Key insight:</b> Most apps force users to choose between simplicity without depth or power with complexity. Theres a clear opportunity for a middle ground.',
    ],
    competitiveAnalysis: [
      {
        name: 'Simplifi',
        strengths: ['Excellent UX/UI', 'Innovative "Spending Plan"', ' Strong transaction rules'],
        weaknesses: ['<b>Paywall:</b> Users must pay to access core budgeting features.'],
        features: ['Spending Plan', 'Refund Tracker', 'Spending Watchlists'],
      },
      {
        name: 'NerdWallet',
        strengths: ['Completely free', 'Excellent educational content', 'Strong net worth tracking'],
        weaknesses: ['<b>No Budgeting Tools:</b> Cannot create or manage a budget; Transaction editing is basic.'],
        features: ['Financial education library', 'Credit score simulator', 'Integrated investing accounts'],
      },
      {
        name: 'Quicken Classic',
        strengths: ['Unmatched feature depth', 'Superior investment tools (Morningstar)', 'Integrated bill pay; Robust tax planning'],
        weaknesses: ['<b>Cost & Complexity:</b> High subscription cost and steep learning curve exclude casual users.'],
        features: ['Morningstar X-Ray', 'Tax Planner & Deduction Finder', 'Lifetime Planner'],
      },
    ],
    goalsAndFeatures: {
      goals: [
        'Create a free budgeting tool that actually helps users spend wisely',
        'Stand out visually in a crowded market',
        'Offer premium-tier features without hiding essentials behind paywalls',
        'Simplify complex budgeting into an intuitive, calming flow',
      ],
      features: [
        'Wallet overview with total balance',
        'Recent transactions',
        'Weekly & daily spending insights',
        'Budgeting tips',
        'Goal tracker',
        'Bill & subscription tracking',
        'Daily/monthly spending limits',
        'Card balance tracker',
        'Monthly cost analysis',
      ],
    },
    // process: [
    //   {
    //     title: 'Social-first flows',
    //     bullets: [
    //       'Mapped flows for “share a track,” “see what friends play,” and “discover from taste”',
    //       'Used lightweight components (mini cards, one-tap reactions) to keep focus on music',
    //     ],
    //   },
    //   {
    //     title: 'Visual system',
    //     bullets: [
    //       'Defined a component set for album art, play states, and user avatars',
    //       'Kept contrast and tap targets accessible (WCAG 2.1 AA)',
    //     ],
    //   },
    // ],
    wireframeImages: [],
    iterationsBelowWireframes: {
      title: 'Wireframes & Iterations',
      description: 'Early wireframes were refined based on feedback: the goals tracker was changed to display a progress bar to highlight the goals percentage.',
      image: LowMedFidelity,
    },
    galleryImages: [SpendlyWireframeIterations],
    uiKit: {
      title: 'UI Kit',
      description: 'A scalable design system built in Figma — focused on visual comfort, clarity, and consistency.',
      image: SpendlyUIKit,
      buttonLabel: 'View Full UI Library',
      buttonUrl: 'https://www.figma.com/design/OPa8p9BTtOCgc77YdiIesk/Spendly---Budget-Smarter--Live-Better?node-id=4-244&t=hzfeCK5EPIbKw6dv-1',
    },
    prototype: {
      title: 'Prototype',
      description: 'Prototype covering all screens main flows: Checking card, wallet, savings balance, adding a transaction, and viewing a budget category insights.',
      image: SpendlyMockup2,
      buttonLabel: 'View prototype',
      buttonUrl: 'https://www.figma.com/proto/OPa8p9BTtOCgc77YdiIesk/Spendly---Budget-Smarter--Live-Better?page-id=114%3A1040&node-id=166-8405&viewport=-3569%2C-850%2C0.14&t=0BCiKbfcdjIJxxCo-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=166%3A8405',
    },
    userFeedback: {
      user1: [
        'Add a filter option in the transaction history to separate income from expenses.<br><br>',
        '<b>Likes:</b> The ability to track both income and expenses makes the app feel like a true all-in-one solution.',
      ],
      user2: [
        'It would be nice if expenses from linked cards updated live within the app.',
        'The "View All Goals" section could feel more engaging—right now, it looks similar to other apps.',
        'All "View All" pages currently feel a bit bland and lack visual interest.',
        'The inputs and success pages could also use more personality—they currently feel flat.<br><br>',
        '<b>Likes:</b> The Home, Wallet, Insights, and Settings pages feel lively, welcoming, and well-designed.',
      ],
    },
    impact: [
      '<b>87%</b> of testers completed all key tasks without assistance',
      '<b>100%</b> described the visual design as "inviting" or "peaceful',
      'Users completed core actions like adding expenses in <b>under 15 seconds</b>',
    ],
    iterations: {
      title: 'Iterations',
      description: 'After testing, the cards visual design was refined to be more engaging and visually appealing. The lists and goals tracker were adjusted to be more scannable and the input pages were refined to be more user-friendly.',
      image: SpendlyFinalIteration,
    },
    lessons: [
      '• <b>Visual comfort matters—especially in finance.</b> Users responded emotionally to the calming palette, proving that aesthetics can drive engagement. <br><br>',
      '• <b>Free doesnt mean feature-light.</b> Spendly proves you can offer genuine value without a paywall. <br><br>',
      '• <b>Test early, test often.</b> Early feedback saved me time by redesigning pages that was unclearly designed or lacked personality. <br><br>',
      '• <b>Balance is everything.</b> Spendlys sweet spot is between Simplifis simplicity and Quickens depth—and finding that balance required constant refinement. <br><br>',
    ],
  },
  2: {
    subtitle: 'A live hockey platform for match schedules, scores, and game details.',
    overview: {
      client: 'Sportality',
      project: 'PuckStream – SHL.se (Swedish Hockey League) modernization',
      timeline: '1-week design sprint',
      role: 'UI/UX Designer (end-to-end)',
      prototypeUrl: 'https://www.figma.com/proto/FjDM6KLEBulg08BtQydwEi/PuckStream?node-id=1-700&t=cvIdWIfmyNTIa6KI-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    },
    challenge: {
      title: 'The Challenge',
      intro: 'When I first encountered SHL.se, it felt like stepping into a hockey arena frozen in time—a relic of the 2010s struggling to connect with the modern fan. The experience was fragmented, visually inconsistent, and inaccessible, leaving fans to navigate a digital obstacle course just to find a score or a stream.<br><br>My mission was clear: to lead a design renaissance that would rebuild trust and utility from the ice up. I anchored this transformation on three pillars:',
      goals: [
        '1. <b>To design for decisive action</b>, streamlining the critical paths to tickets and live streams to convert passive browsing into confident engagement and direct revenue.<br><br>',
        '2. <b>To create a legacy of clarity</b>, replacing a patchwork of ad-hoc components with a cohesive, scalable design system—a blueprint not just for SHL.se, but for the future of sports digital experiences.',
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
    // process: [
    //   {
    //     title: 'Visual hierarchy restructure',
    //     bullets: [
    //       '<b>My mission was to restore structure and clarity to the fan experience.</b> To achieve this, I first restructured the visual hierarchy through wireframes and a content priority matrix, ensuring live scores and streaming CTAs were elevated and unmissable. Next, I created clear visual zoning with deliberate spacing and a purposeful typographic scale, giving each section breathing room and intent. Understanding that fans need instant insight, I introduced color-coded game charts and backgrounds, allowing game status to be understood at a glance. The result was a streamlined interface where fans could focus on the game, not the navigation.',
    //       'To scale this clarity and ensure consistency, <b>I engineered a modular design system in Figma</b>. This foundational library of reusable components replaced a patchwork of inconsistent UI. I established an 8-point grid, spacing tokens, and an accessible color palette rigorously tested to WCAG 2.1 AA standards, ensuring every interface would be both cohesive and inclusive.',
    //       '<b>On the front end, this systematic approach is projected to translate directly into a better experience.</b> Fans will interact with dynamic game cards that adapt visually to live, upcoming, or final states; streamlined navigation anchored by intuitive top-level CTAs; and responsive layouts optimized for both performance and accessibility. Each decision—from the foundational token to the interactive component—is a deliberate stitch in the fabric of a more intuitive, reliable, and engaging hockey hub.',
    //     ],
    //   },
    // ],
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
      'Our focus on accessibility revealed a universal truth: <b>designing for clarity and contrast created a cleaner, more legible experience for everyone.</b><br><br> ',
      'And perhaps most powerfully, our investment in a scalable design system proved its worth not just in pixels, but in time—<b>accelerating future projects with consistency and confidence, turning one league’s redesign into a blueprint for many.</b><br><br>',
    ],
  },
  3: {
    subtitle: 'An EdTech platform for seamless online tutoring and progress tracking.',
    overview: {
      client: 'Concept / EdTech',
      project: 'Cognita – online tutoring and learning progress platform',
      timeline: '1-week design sprint',
      role: 'UI Designer (end-to-end)',
      prototypeUrl: 'https://www.figma.com/proto/7V6kimv3WblaJjYEclJX8q/Cognita?page-id=0%3A1&node-id=1-501&viewport=504%2C901%2C0.21&t=ipJWazWCGafxSNW7-1&scaling=min-zoom&content-scaling=fixed',
    },
    challenge: {
      title: 'The Challenge',
      intro: 'Create a modern, feature-heavy landing page with three key goals:',
      goals: [
        '1. <b>Improve Value Prop Clarity:</b> Immediately communicate who its for and the problem it solves.',
        '2. <b>Increase Conversion Rates:</b> Boost sign-ups for students and tutors.',
        '3. <b>Establish Trust & Credibility:</b> Visually position Cognita as a professional, effective platform in a crowded market.',
      ],
    },
    research: [
      'To guide this concept project, I analyzed common pain points across EdTech platforms and reviewed user session recordings. Three key opportunities emerged:',
      '<b>Impersonal First Impressions:</b> Generic stock imagery fails to make students feel welcome or represented from the start.',
      '<b>Buried Social Proof:</b> Testimonials and tutor credentials are often hidden, missing the chance to build early trust.',
      '<b>Overwhelming Content Flow:</b> Dense information and scattered CTAs cause confusion—leading many users to leave before scrolling past the first fold.',
      'These insights shaped a concept focused on emotional connection, early trust signals, and intuitive guidance from the very first click.',
    ],
    competitiveAnalysis: [
      {
        name: 'Coursera',
        strengths: ['<b>Credibility:</b> Strong university and industry partnerships (e.g., Google, Meta) build trust and perceived quality.', '<b>Structured Learning Paths:</b> Clear specializations and degree programs help learners see progression and outcomes.', '<b>Certificates & Credentials:</b> Recognized certificates and professional certificates add tangible value and motivation.'],
        weaknesses: ['<b>Less 1:1 Tutoring:</b> Focus is on self-paced or cohort courses; live tutoring and personalized sessions are not the core offering.', '<b>Higher Price Point:</b> Specializations and degrees can feel out of reach for users seeking quick, affordable tutoring.'],
        features: ['<b>Course Catalog & Search:</b> Robust filtering by subject, level, and credential type.', '<b>Progress Tracking:</b> Built-in dashboards for course completion, grades, and certificates.', '<b>Mobile App:</b> Strong mobile experience for learning on the go; less emphasis on real-time tutor scheduling.'],
      },
      {
        name: 'Udemy',
        strengths: ['<b>Breadth & Affordability:</b> Huge catalog with frequent sales; low barrier to try many topics.', '<b>Instructor-Led Feel:</b> Video courses feel personal and instructor-driven even though they are asynchronous.', '<b>Lifetime Access:</b> One-time purchase for ongoing access appeals to self-paced learners.'],
        weaknesses: ['<b>No Live Tutoring:</b> Purely on-demand video; no scheduling, sessions, or real-time Q&A with tutors.', '<b>Variable Quality:</b> Open marketplace can make it harder to trust consistency and outcomes.', '<b>Progress Visibility:</b> Progress is per-course; no unified view for parents or multi-subject goals.'],
        features: ['<b>Course Preview & Reviews:</b> Preview videos and ratings help learners choose; no equivalent for "book a tutor."', '<b>Q&A & Resources:</b> Per-course Q&A and resources; not designed for ongoing tutor–student relationships.', '<b>Wishlist & Sales:</b> Strong discovery and purchase flow; no scheduling or session management.'],
      },
      {
        name: 'Preply',
        strengths: ['<b>1:1 Live Tutoring:</b> Direct booking and video sessions with tutors; strong fit for language and academic tutoring.', '<b>Tutor Discovery:</b> Profiles, reviews, intro videos, and filters (price, availability, subject) help learners find a match.', '<b>Flexible Scheduling:</b> Calendar and lesson packages support recurring or one-off sessions.'],
        weaknesses: ['<b>Discovery Overload:</b> Large tutor marketplace can feel overwhelming; harder to quickly see "best fit" for a specific goal.', '<b>Progress & Accountability:</b> Progress tracking and learning dashboards are less prominent than scheduling and payments.'],
        features: ['<b>Booking & Sessions:</b> In-app scheduling, reminders, and video calls; session notes and materials live alongside the calendar.', '<b>Payments & Packages:</b> Lesson packages and subscription options; pricing is per-tutor rather than per-course.', '<b>Tutor Tools:</b> Tutors get a dashboard for students, schedule, and earnings; less emphasis on shared progress reports for parents or multi-subject views.'],
      },
    ],
    // process: [
    //   {
    //     title: 'Scheduling and sessions',
    //     bullets: [
    //       'To establish immediate trust and emotional resonance, I began by redesigning the hero section with authentic, audience-specific imagery that aligns with the brand while making students feel seen and at ease from their first click. ',
    //       'I introduced a dedicated "Learn from the Worlds Top University Experts" module to visually communicate tutor credibility, giving potential users a tangible sense of security and aspiration. ',
    //       'Beneath the surface, I restructured the pages information architecture using a content priority map that guides users logically from benefits to functionality, social proof, and finally to conversion. This hierarchy is reinforced by distinct visual zones, a consistent 8-point grid, and deliberate white space—creating a calm, scannable experience that builds confidence and drives action.',
    //     ],
    //   },
    // ],
    wireframeImages: [],
    galleryImages: [Image1],
    uiKit: {
      title: 'UI Kit',
      description: 'To support this renewed structure and maintain consistency across the platform, I developed a structured UI Kit that unified the interface through a focused color palette, reusable components, and a clear visual hierarchy. Rooted in the calm, trustworthy experience established in the hero section, the kit uses core blue, black, and white for primary actions, a clean neutral system for optimal readability, and carefully defined buttons and minimal cards. This resolved prior inconsistencies and laid the foundation for a more cohesive, intuitive, and scalable design system—strengthening visual harmony while empowering future growth across the platform.',
      image: CognitaUIKit,
      buttonLabel: 'View Full UI Library',
      buttonUrl: 'https://www.figma.com/design/7V6kimv3WblaJjYEclJX8q/Cognita?node-id=10-329&t=tkRyI71p8EFwTgyQ-1',
    },
    prototype: {
      title: 'Prototype',
      description: '',
      image: '',
      video: CognitaPrototypeVid,
      buttonLabel: 'View prototype',
      buttonUrl: 'https://www.figma.com/proto/7V6kimv3WblaJjYEclJX8q/Cognita?page-id=0%3A1&node-id=1-501&viewport=504%2C901%2C0.21&t=ipJWazWCGafxSNW7-1&scaling=min-zoom&content-scaling=fixed',
    },
    impact: [
      '<b>Clarity & Engagement:</b> User testing showed a 90% faster understanding of Cognitas offering.',
      '<b>Conversion Uplift:</b> Projected a +50% increase in demo requests/sign-ups from the refined, audience-specific CTAs.',
      '<b>Reduced Bounce Rate:</b> The clearer hierarchy is expected to decrease the bounce rate by ~30%.',
      '<b>Scalable Foundation:</b> The modular sections and component library built in Figma allow for easy A/B testing and future campaigns.',
    ],
    // iterations: {
    //   title: 'Iterations',
    //   description: 'Through user feedback, iterations were done for the “How it works section” allowing better conversion rates and clearer visual hierarchy that guides the user how and what the platform can offer.',
    //   // image: CognitaIterations,
    // },
    lessons: [
      '<b>You Cant Be Everything to Everyone on Page One:</b> Directly addressing separate audiences immediately reduces cognitive load and increases relevance.<br><br>',
      '<b>Trust is a Top-Fold Element:</b> Social proof and credentials are not "footer content"; they are critical for converting skeptical visitors.<br><br>',
      '<b>A Landing Page is a Funnel, Not a Brochure:</b> Every element must guide users toward one of two clear primary actions with relentless focus.<br><br>',
    ],
  },
}

const route = useRoute()

const id = computed(() => Number(route.params.id))

/** Case study 4 is hidden for now. */
const isHiddenCase = computed(() => id.value === 4)

const title = computed(() => {
  switch (id.value) {
    case 1:
      return 'Spendly'
    case 2:
      return 'PuckStream'
    case 3:
      return 'Cognita'
    default:
      return 'Design'
  }
})

const subtitle = computed(() => CASE_STUDIES[id.value]?.subtitle ?? '')

const caseStudy = computed(() => CASE_STUDIES[id.value] ?? null)

watch(
  () => caseStudy.value,
  (val) => {
    if (val) nextTick(setupSectionFadeObserver)
  },
  { immediate: true }
)

const imageSrc = computed(() => {
  switch (id.value) {
    case 1:
      return SpendlyCover
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

.design-process-arrow-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  flex-shrink: 0;
  align-self: center;
  margin-bottom: 1.5rem;
}

.design-process-arrow {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  align-self: center;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.6);
}

.design-process-arrow-group .design-process-arrow {
  margin-bottom: 0;
}

.design-process-arrow-group .design-process-arrow-back {
  margin-top: 0;
  margin-bottom: 0.15rem;
  color: rgba(255, 255, 255, 0.45);
}

/* Curved back arrow (above the forward arrow) */
.design-process-arrow-curve .design-process-arrow-curve-svg {
  width: 2.5rem;
  height: 1.25rem;
  display: block;
}

.design-process-arrow-curve-line {
  stroke-dasharray: 3 2;
}

.design-process-arrow-curve {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.125rem;
}

.design-process-iterate-label {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  line-height: 1;
}

@media (min-width: 640px) {
  .design-process-iterate-label {
    font-size: 0.6875rem;
  }
}

@media (min-width: 768px) {
  .design-process-iterate-label {
    font-size: 0.75rem;
  }
}

@media (min-width: 640px) {
  .design-process-arrow-curve .design-process-arrow-curve-svg {
    width: 3rem;
    height: 1.5rem;
  }
}

@media (min-width: 768px) {
  .design-process-arrow-curve .design-process-arrow-curve-svg {
    width: 3.5rem;
    height: 1.75rem;
  }
}

@media (min-width: 1024px) {
  .design-process-arrow-curve .design-process-arrow-curve-svg {
    width: 4rem;
    height: 2rem;
  }
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

/* Fade-in animation for case study sections (triggered when scrolling into view) */
.case-study-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.case-study-section.case-study-section-visible {
  opacity: 1;
  transform: translateY(0);
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

/* Goals and Key Features – side-by-side boxes */
.goals-features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .goals-features-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

.goals-features-box {
  background-color: #1f1f1f;
  border: 1px solid #2a2a2a;
  border-radius: 0.5rem;
  padding: 1.25rem 1.5rem;
}

.goals-features-box-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: rgb(74 222 128);
  margin-bottom: 0.75rem;
}

.goals-features-list {
  list-style: disc;
  padding-left: 1.25rem;
  margin: 0;
}

.goals-features-list-item {
  font-size: 0.875rem;
  line-height: 1.5;
  color: rgb(209 213 219);
  margin-bottom: 0.375rem;
  text-align: left;
}

.goals-features-list-item:last-child {
  margin-bottom: 0;
}

/* User Feedback – two side-by-side boxes */
.user-feedback-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .user-feedback-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

.user-feedback-box {
  background-color: #1f1f1f;
  border: 1px solid #2a2a2a;
  border-radius: 0.5rem;
  padding: 1.25rem 1.5rem;
}

.user-feedback-box-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: rgb(74 222 128);
  margin-bottom: 0.75rem;
}

.user-feedback-list {
  list-style: disc;
  padding-left: 1.25rem;
  margin: 0;
}

.user-feedback-list-item {
  font-size: 0.875rem;
  line-height: 1.5;
  color: rgb(209 213 219);
  margin-bottom: 0.375rem;
  text-align: left;
}

.user-feedback-list-item:last-child {
  margin-bottom: 0;
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

<!-- Debug Tests -->
