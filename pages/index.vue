<template>
	<div
		class="flex min-h-screen min-w-full flex-col items-center justify-center"
	>
		<SharedCombobox />
		<div>
			<button @click="counter--">-</button>
			{{ counter }}
			<button @click="counter++">+</button>
		</div>
	</div>
</template>

<script setup>
const config = useRuntimeConfig();
const counter = useCounter();

if (process.server) {
	console.log("API secret:", config.apiSecret);
} else {
	console.log("Public config:", config.public);
}
</script>
