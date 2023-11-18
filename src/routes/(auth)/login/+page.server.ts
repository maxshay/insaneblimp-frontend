import { error, redirect, fail } from '@sveltejs/kit'
import type { Actions } from './$types'

export const actions: Actions = {
    login: async function ({ locals, request }) {
        const body = Object.fromEntries(await request.formData())
        
        if (!("email" in body) || !("password" in body)) {
            return fail(400, {missing: true})
        }

        try {
            await locals.pb.collection('users').authWithPassword(body.email as string, body.password as string)
            // await locals.pb.collection('users').confirmVerification(body.email as string)
            throw redirect(303, "/")
        } catch (e) {
            console.log(" > error:", e)
            return fail(400, {incorrect: true})
        }
    }
}