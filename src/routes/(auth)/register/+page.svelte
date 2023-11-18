<script lang="ts">
	import Logo from '../../../components/ui/Logo.svelte';
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>
<a aria-label="Home" href="/">
	<Logo />
</a>
<div class="mt-20">
	<h2 class="text-lg font-semibold text-gray-900">Get started for free</h2>
	<p class="mt-2 text-sm text-gray-700">
		Already registered? <a class="font-medium text-blue-600 hover:underline" href="/login"
			>Sign in</a
		> to your account.
	</p>
</div>

<form action="?/register" class="mt-10 grid grid-cols-1 gap-y-8" method="post">
	<div>
		<label for="name" class="mb-3 block text-sm font-medium text-gray-700">Name</label><input
			id="name"
			type="name"
			name="name"
			autocomplete="name"
			class="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
		/>
	</div>
	<div>
		<label for="name" class="mb-3 block text-sm font-medium text-gray-700">Email address</label
		><input
			id="email"
			type="email"
			name="email"
			autocomplete="email"
			class="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
		/>
	</div>
	<div>
		<label for="password" class="mb-3 block text-sm font-medium text-gray-700">Password</label
		><input
			id="password"
			type="password"
			name="password"
			autocomplete="new-password"
			class="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
		/>
	</div>
	<div>
		<label for="passwordConfirm" class="mb-3 block text-sm font-medium text-gray-700"
			>Confirm Password</label
		><input
			id="passwordConfirm"
			type="password"
			name="passwordConfirm"
			autocomplete="new-password"
			class="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
		/>
	</div>
	<div class="col-span-full">
		<button
			class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 w-full"
			type="submit"><span>Sign up <span aria-hidden="true">→</span></span></button
		>
	</div>
</form>
