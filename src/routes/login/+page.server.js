import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals ,cookies}) {
    await cookies.delete('jwt');
    if (locals.user) throw redirect(307, '/');
}
//TODO : faire en sorte que le cookie soit détruit seuelement au sign out et pas quand on va sur login forcement
/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();

        const user = {
            username: data.get('username'),
            password: data.get('password')
        };

            const body = await api.post('users/login',
            user);
        console.log(body)
        if (body.errors) {
            return fail(401, body);
        }
        console.log(body)
        cookies.set('jwt', body.jwt, { path: '/' });

        throw redirect(307, '/location');
    }
};
