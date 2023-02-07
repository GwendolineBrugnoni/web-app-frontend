<script>

    import FilmPreview from "$lib/FilmList/FilmPreview.svelte";
    import { enhance } from '$app/forms';

    /** @type {import('./$types').PageData} */
    export let data;
    let create = false;
    function Create() {
        if(create) create = false
        else create = true
    }

</script>

<svelte:head>
    <title>Conduit</title>
</svelte:head>

<div class="home-page">
    {#if data.token}
        {#if data.user.role === 'admin'}
            <button on:click={Create}>
                Create
            </button>
            {#if create}
                <form use:enhance method="POST" action="?/createLocation" class="card comment-form">
                    <div class="card-block">
                        <textarea  name="lattitute" placeholder="lattitude" rows="1" >0</textarea>
                        <textarea  name="longitude" placeholder="longitude" rows="1" >0</textarea>
                        <textarea  name="filmType" placeholder="filmType" rows="1" >Court métrage</textarea>
                        <textarea  name="filmProducerName" placeholder="filmProducerName" rows="1" >David Goodenough</textarea>
                        <textarea  name="endDate" placeholder="endDate" rows="1" >2020-08-21T00:00:00.000</textarea>
                        <textarea  name="filmName" placeholder="filmName" rows="1" >C'est moche mais fonctionnel</textarea>
                        <textarea  name="district" placeholder="district" rows="1" >95100</textarea>
                        <textarea  name="sourceLocationId" placeholder="sourceLocationId" rows="1" >2020-100</textarea>
                        <textarea  name="filmDirectorName" placeholder="filmDirectorName" rows="1" >David Goodenough</textarea>
                        <textarea  name="address" placeholder="address" rows="1" >Chez michel</textarea>
                        <textarea  name="startDate" placeholder="startDate" rows="1" >2020-07-21T00:00:00.000</textarea>
                        <textarea  name="year" placeholder="year" rows="1" >2020</textarea>
                    </div>

                    <div class="card-footer">
                        <button class="btn btn-sm btn-primary" type="submit">Post location</button>
                    </div>
                </form>
                {/if}

            {/if}
        <ul class="tag-list">
            {#each data.roger as film}
                <li class="tag-default tag-pill tag-outline">{film.filmName}</li>
                    <FilmPreview {film}{data}/>
                {#if data.user.role === 'admin'}
                    <form use:enhance method="POST" action="?/deleteLocation&id={film._id}">
                        <button class="btn btn-outline-danger btn-sm">
                            <i class="ion-trash-a" /> Delete
                        </button>
                    </form>
                    <form use:enhance method="POST" action="?/deleteLocation&id={film._id}">
                    </form>
                    <form use:enhance method="POST" action="?/deleteLocation&id={film._id}">
                        <button class="btn btn-outline-danger btn-sm">
                            <i class="ion-trash-a" /> EDIT
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