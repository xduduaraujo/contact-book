
<template>
	<RouterView />
</template>

<script lang="ts">
import { RouterView } from 'vue-router';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'App',
	components: { RouterView },
})
</script>


<style lang="scss">
@import '@/assets/base.css';
@import '@/assets/overrides.scss';

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
