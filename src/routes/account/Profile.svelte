<script lang="ts">
	import type { AdminModel, RecordModel } from 'pocketbase';

	export let user: AdminModel | RecordModel | null;
	// https://www.youtube.com/watch?v=mM5sqLUS4nY&t=497s&ab_channel=Huntabyte
</script>

<div class="mt-2 grid grid-cols-3 gap-y-8">
	<div>
		<label for="email" class="mb-3 block text-sm font-medium">Your Email address</label><input
			id="email"
			type="email"
			name="email"
			autocomplete="email"
			value={user?.email}
			readonly={true}
			class="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
		/>
	</div>
</div>
<form action="?/update" method="post" class="grid grid-cols-3 gap-y-8">
	<div>
		<div>
			<label for="avatar" class="mt-4 mb-3 block text-sm font-medium">Picture</label>

			<span class="relative inline-block">
				<img
					src="https://placeimg.com/80/80/people"
					alt="avatar"
					id="avatar-preview"
					class="h-32 w-32 rounded-full"
				/>
				<label for="avatar">
					<span
						class="absolute bottom-0 right-0 block h-8 w-8 rounded-full bg-green-400 ring-2 ring-white hover:cursor-pointer"
					>
						+</span
					>
				</label>
			</span>
			<input id="avatar" type="file" name="avatar" value="" accept="image/*" hidden />
		</div>
		<div>
			<label for="name" class="mt-4 mb-3 block text-sm font-medium">Name</label><input
				id="name"
				type="text"
				name="name"
				autocomplete="name"
				value={user?.name}
				class="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
			/>
		</div>
		<div>
			<label for="username" class="mt-4 mb-3 block text-sm font-medium">Username</label><input
				id="username"
				type="text"
				name="username"
				value={user?.username}
				class="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
			/>
		</div>
	</div>
</form>
