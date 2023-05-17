import { redirect } from '@sveltejs/kit';

export function load({ locals }) {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, "/login")
    } return {
        data: {
            user: locals.user
        }
    }
}