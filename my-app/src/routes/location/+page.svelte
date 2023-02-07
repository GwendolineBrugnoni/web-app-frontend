<script>
    import { page } from '$app/stores';
    import FilmPreview from "$lib/FilmList/FilmPreview.svelte";
    import { enhance } from '$app/forms';

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>Conduit</title>
</svelte:head>

<div class="home-page">
    {#if data.token}
        <ul class="tag-list">
            {#each data.roger as film}
                <li class="tag-default tag-pill tag-outline">{film.filmName}</li>
                    <FilmPreview {film}/>
                {#if data.user.role === 'admin'}
                    <form use:enhance method="POST" action="?/deleteLocation&id={film._id}">
                        <button class="btn btn-outline-danger btn-sm">
                            <i class="ion-trash-a" /> Delete
                        </button>
                    </form>

                {/if}
            {/each}
        </ul>
        <button><li class="nav-item">
            <a href="/login" class="nav-link">Sign in to see your Feed</a>
        </button>

    {:else}
        <button>
            <a href="/login" class="nav-link">Connecte toi avant de vouloir regarder des films !</a>
        </button>
    {/if}


</div>
<style>
button {
    background: none;
    border: 100px;
    padding: 0;
    margin: 0;
    font-size: inherit;
    margin-left: 5px;
    opacity: 0.6;
    cursor: pointer;
}
</style>