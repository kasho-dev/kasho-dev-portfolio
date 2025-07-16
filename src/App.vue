<script setup lang="ts">
import { RouterView } from 'vue-router'
import { SpeedInsights } from "@vercel/speed-insights/vue"
import { inject } from "@vercel/analytics"
</script>

<template>
  <RouterView />
  <SpeedInsights />
  <inject />
</template>
