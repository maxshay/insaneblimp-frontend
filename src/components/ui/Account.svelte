<script lang="ts">
	import Avatar from './Avatar.svelte';
	import { clickOutside } from '../../utils/clickOutside';
	import { fade } from 'svelte/transition';

	function handleClickOutside() {
		visible = false;
	}

	let visible = false;
</script>

<div class="relative">
	<div>
		<button
			type="button"
			id="menu-button"
			aria-expanded="true"
			aria-haspopup="true"
			on:click={() => (visible = !visible)}
			use:clickOutside={handleClickOutside}
		>
			<Avatar />
		</button>
	</div>
	{#if visible}
		<div
			class="absolute top-[50px] right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="menu-button"
			tabindex="-1"
			transition:fade
		>
			<div class="py-1" role="none">
				<a
					href="/account"
					class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
					role="menuitem"
					tabindex="-1"
					id="menu-item-0">Account settings</a
				>
				<a
					href="/"
					class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
					role="menuitem"
					tabindex="-1"
					id="menu-item-1">Support</a
				>
				<a
					href="/"
					class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
					role="menuitem"
					tabindex="-1"
					id="menu-item-2">License</a
				>
				<form method="POST" action="/logout" role="none">
					<button
						type="submit"
						class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
						role="menuitem"
						tabindex="-1"
						id="menu-item-3">Sign out</button
					>
				</form>
			</div>
		</div>
	{/if}
</div>
