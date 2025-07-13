<template>
  <Transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black bg-opacity-80 z-50 overflow-y-auto p-4 md:p-8"
      @click.self="close"
    >
      <div class="relative bg-gray-900 rounded-lg max-w-6xl mx-auto my-12 overflow-hidden border border-gray-700">
        <!-- Close Button -->
        <button
          @click="close"
          class="absolute right-4 top-4 text-gray-400 hover:text-white z-10"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div v-if="project" class="grid grid-cols-1 lg:grid-cols-2 h-full">
          <!-- Left Column - Project Images -->
          <div class="relative h-64 md:h-[600px] bg-gray-800 overflow-hidden">
            <div v-if="project.images && project.images.length > 0" class="h-full relative">
              <!-- Main Image with Transition -->
              <transition :name="slideDirection" mode="out-in">
                <img
                  :key="currentImageIndex"
                  :src="project.images[currentImageIndex]"
                  :alt="`${project.title} - Image ${currentImageIndex + 1}`"
                  class="w-full h-full object-contain bg-black"
                  @click="nextImage"
                />
              </transition>

              <!-- Navigation Arrows -->
              <template v-if="project.images.length > 1">
                <button
                  @click.stop="prevImage"
                  class="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all z-10"
                  aria-label="Previous image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  @click.stop="nextImage"
                  class="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all z-10"
                  aria-label="Next image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </template>

              <!-- Image Navigation Dots -->
              <div v-if="project.images.length > 1" class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
                <button
                  v-for="(img, index) in project.images"
                  :key="index"
                  @click.stop="goToImage(index)"
                  :class="{
                    'bg-green-400 w-8': currentImageIndex === index,
                    'bg-gray-600 w-3': currentImageIndex !== index
                  }"
                  class="h-3 rounded-full transition-all duration-300 hover:bg-green-400"
                  :aria-label="`View image ${index + 1} of ${project.images.length}`"
                ></button>
              </div>

              <!-- Image Counter -->
              <div class="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded z-10">
                {{ currentImageIndex + 1 }} / {{ project.images.length }}
              </div>
            </div>
          </div>

          <!-- Right Column - Project Details -->
          <div class="p-6 md:p-8 overflow-y-auto max-h-[80vh]">
            <h2 class="text-3xl font-bold text-green-400 mb-2">{{ project.title }}</h2>

            <p class="text-gray-300 mb-6">{{ project.description }}</p>

            <div class="mb-6">
              <h3 class="text-lg font-semibold text-green-400 mb-3">Tech Stack</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(tech, index) in project.techStack"
                  :key="index"
                  class="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="flex flex-wrap gap-4 mt-8">
              <template v-if="project.id === 2">
                <!-- Unavailable buttons for project 2 -->
                <button
                  class="px-6 py-2 bg-gray-600 text-gray-400 rounded cursor-not-allowed font-medium"
                  disabled
                >
                  View Live (Unavailable)
                </button>
                <button
                  class="px-6 py-2 border border-gray-600 text-gray-600 rounded cursor-not-allowed font-medium"
                  disabled
                >
                  View Code (Unavailable)
                </button>
              </template>
              <template v-else>
                <!-- Normal buttons for other projects -->
                <a
                  v-if="project.liveUrl"
                  :href="project.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-6 py-2 bg-green-400 text-gray-900 rounded hover:bg-green-300 transition-colors font-medium"
                >
                  View Live
                </a>
                <a
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-6 py-2 border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-gray-900 transition-colors font-medium"
                >
                  View Code
                </a>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, watch, type PropType } from 'vue';

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  project: {
    type: Object as PropType<Project | null>,
    default: null
  }
});

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const currentImageIndex = ref(0);
const slideDirection = ref('slide-right');

const nextImage = (): void => {
  slideDirection.value = 'slide-left';
  currentImageIndex.value = (currentImageIndex.value + 1) % props.project!.images.length;
};

const prevImage = (): void => {
  slideDirection.value = 'slide-right';
  currentImageIndex.value = (currentImageIndex.value - 1 + props.project!.images.length) % props.project!.images.length;
};

const goToImage = (index: number): void => {
  slideDirection.value = index > currentImageIndex.value ? 'slide-left' : 'slide-right';
  currentImageIndex.value = index;
};

const close = (): void => {
  emit('close');
  currentImageIndex.value = 0;
};

// Reset current image index when project changes
watch(() => props.project, () => {
  if (props.project) {
    currentImageIndex.value = 0;
  }
}, { immediate: true });
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide animations */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease-in-out;
  position: absolute;
  width: 100%;
  height: 100%;
}

.slide-left-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-right-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .project-overlay {
    padding: 1rem;
  }
}
</style>
