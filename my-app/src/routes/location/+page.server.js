import * as api from '$lib/api';
import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, cookies }) {
    //TODO: pagination
    let token = cookies.get('jwt')
    console.log(token)
    if (token) {
        //const articles = await api.get(`locations`, token);
        //const user = await api.get('users/me',token);

        const [articles, user] = await Promise.all([
            api.get(`locations`, token),
            api.get('users/me',token)
        ]);
        console.log(user)
        return {
            roger: articles,
            token,
            user
        };
    }
    else {
        throw redirect(307, '/login');
    }
}
export const actions = {
    createLocation: async ({ cookies, request }) => {

        let token = cookies.get('jwt')
        const data = await request.formData();

        await api.post(
            `articles/${params.slug}/comments`,
            {
                comment: {
                    body: data.get('comment')
                }
            },
            locals.user.token
        );
    },

    deleteLocation: async ({ cookies,url }) => {
        const id = url.searchParams.get('id');
        console.log('-------------------')
        console.log('id : ',id)
        console.log('cookies: ',cookies.get("jwt"))
        console.log('------------')

        await api.del(`locations/${id}`, cookies.get('jwt'));
        //throw redirect(307, '/');
    },

    deleteArticle: async ({ locals, params }) => {
        if (!locals.user) throw error(401);

        await api.del(`articles/${params.slug}`, locals.user.token);
        throw redirect(307, '/');
    },
};