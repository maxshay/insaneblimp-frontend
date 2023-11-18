import { generateUsername } from '$lib/utils.js'
import { error, redirect } from '@sveltejs/kit'
import type { Actions } from './$types'

export const actions: Actions = {
    register: async function ({ locals, request }) {
        const body = Object.fromEntries(await request.formData())

        let username = generateUsername((body.name as string).split(" ").join("")).toLowerCase()

        try {
            await locals.pb.collection('users').create({ username, ...body })
            // await locals.pb.collection('users').confirmVerification(body.email as string)
        } catch (e: any) {
            console.log(" > error:", e.response.data)
            throw error(500, "Something went wrong registering user")
        } finally {
            throw redirect(303, "/login")
        }
    }
}