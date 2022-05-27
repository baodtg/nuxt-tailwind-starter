<template>
	<div
		class="flex min-h-screen min-w-full flex-col items-center justify-center"
	>
		<div class="mt-2">
			<button class="btn-primary" @click="counter--">-</button>
			{{ counter }}
			<button class="btn-primary" @click="counter++">+</button>
		</div>
	</div>
</template>

<script setup>
const counter = useCounter();
</script>
