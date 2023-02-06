<script>
    import { page } from '$app/stores';
    import ArticleList from '$lib/ArticleList/index.svelte';

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
            {/each}
        </ul>
        <button><li class="nav-item">
            <a href="/login" class="nav-link">Sign in to see your Feed</a></button>

    {:else}
        <button>
            <a href="/login" class="nav-link">Connecte toi avant de vouloir regarder des films !</a>
        </button>
    {/if}


</div>
