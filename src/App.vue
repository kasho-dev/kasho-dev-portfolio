<script setup lang="ts">
import { RouterView } from 'vue-router'
import { SpeedInsights } from "@vercel/speed-insights/next"
</script>

<template>
  <RouterView />
  <SpeedInsights />
</template>
