<template>
	<div
		class="flex min-h-screen min-w-full flex-col items-center justify-center"
	>
		<SharedCombobox />
		<div class="mt-2 text-center">
			<button class="btn-primary" @click="counter--">-</button>
			{{ counter }}
			<button class="btn-primary" @click="counter++">+</button>
			<NuxtLink to="/about" class="btn-primary mt-2 block">
				Go to About page
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
const config = useRuntimeConfig();
const counter = useCounter();
const { getUser } = useUserRepository();
const { data: user } = await useAsyncData("user", () => getUser("defunkt"));
console.log(JSON.stringify(user.value));

if (process.server) {
	console.log("API secret:", config.apiSecret);
} else {
	console.log("Public config:", config.public);
}
</script>
