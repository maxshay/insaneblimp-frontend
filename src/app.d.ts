import type PocketBase, { RecordModel, AdminModel } from "pocketbase";

// https://kit.svelte.dev/docs/types#app
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			pb: PocketBase,
			user: RecordModel | AdminModel | null
		}
		// interface PageData {}
		// interface Platform {}
	}
	namespace svelte.JSX {
		interface HTMLProps<T> {
			onclick_outside: (e: CustomEvent) => void;
		}
	}
}

