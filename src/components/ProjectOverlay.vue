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
          <div class="relative h-64 md:h-auto bg-gray-800">
            <div v-if="project.images && project.images.length > 0" class="h-full">
              <img 
                :src="project.images[currentImageIndex]" 
                :alt="project.title"
                class="w-full h-full object-cover"
              />
              
              <!-- Image Navigation -->
              <div v-if="project.images.length > 1" class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                <button 
                  v-for="(img, index) in project.images" 
                  :key="index"
                  @click.stop="currentImageIndex = index"
                  :class="{
                    'bg-green-400': currentImageIndex === index,
                    'bg-gray-600': currentImageIndex !== index
                  }"
                  class="w-3 h-3 rounded-full transition-colors"
                  :aria-label="`View image ${index + 1} of ${project.images.length}`"
                ></button>
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
</style>
