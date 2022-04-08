<script setup lang="ts">
import { RouterView } from 'vue-router';
import UBScheduleHeader from '@organisms/UBScheduleHeader.vue';
</script>

<template>
	<UBScheduleHeader />
	<RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
	max-width: 100vw;
	margin: 1rem;
	font-weight: normal;
}

header {
	line-height: 1.5;
	max-height: 100vh;
}
</style>
