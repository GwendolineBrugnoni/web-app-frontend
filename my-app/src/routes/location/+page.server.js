import * as api from '$lib/api';
import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, cookies }) {
    let token = cookies.get('jwt')
    console.log(token)
    if (token) {
        const articles = await api.get(`locations`, token);
        return {
            roger: articles,
            token
        };
    }
    else {
        throw redirect(307, '/login');
    }
}