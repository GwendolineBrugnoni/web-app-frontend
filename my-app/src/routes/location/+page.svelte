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
                        <p>Lattitude : <textarea  name="lattitute" placeholder="lattitude" rows="1" >0</textarea></p>
                        <p>Longitude : <textarea  name="longitude" placeholder="longitude" rows="1" >0</textarea></p>
                        <p>Type de film : <textarea  name="filmType" placeholder="filmType" rows="1" >Court métrage</textarea></p>
                        <p>Nom du producteur : <textarea  name="filmProducerName" placeholder="filmProducerName" rows="1" >David Goodenough</textarea></p>
                        <p>Date de fin : <textarea  name="endDate" placeholder="endDate" rows="1" >2020-08-21T00:00:00.000</textarea></p>
                        <p>Nom du film : <textarea  name="filmName" placeholder="filmName" rows="1" >C'est moche mais fonctionnel</textarea></p>
                        <p>District : <textarea  name="district" placeholder="district" rows="1" >95100</textarea></p>
                        <p>ID de la source : <textarea  name="sourceLocationId" placeholder="sourceLocationId" rows="1" >2020-100</textarea></p>
                        <p>Nom du directeur : <textarea  name="filmDirectorName" placeholder="filmDirectorName" rows="1" >David Goodenough</textarea></p>
                        <p>Adresse : <textarea  name="address" placeholder="address" rows="1" >Chez michel</textarea></p>
                        <p>Date de début : <textarea  name="startDate" placeholder="startDate" rows="1" >2020-07-21T00:00:00.000</textarea></p>
                        <p>Année : <textarea  name="year" placeholder="year" rows="1" >2020</textarea></p>
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
                {/if}
            {/each}
        </ul>
        <button><li class="nav-item">
            <a href="/login" class="nav-link">Sign out</a>
        </button>

    {:else}
        <button>
            <a href="/login" class="nav-link">Connecte toi avant de vouloir regarder des films !</a>
        </button>
    {/if}
</div>
<style>
button {
    text-decoration-color: black;
    background: bisque;
    border: 100px;
    padding: 5px;
    margin: 0;
    font-size: inherit;
    opacity: 0.6;
    cursor: pointer;
}
</style>