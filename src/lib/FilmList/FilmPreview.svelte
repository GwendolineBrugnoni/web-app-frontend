<script>
    import { enhance } from '$app/forms';

    export let film;
    export let data
    let edit = false
    let details = false

    function Details() {
        if(details) details = false
        else details = true
    }
    function Edit() {
        if(edit) edit = false
        else edit = true
    }
</script>

<div class="article-preview">
    <button on:click={Details}>
        Details
    </button>
    {#if details}
        <p>Type de film :              {film.filmType}</p>
        <p>Nom du producteur:          {film.filmProducerName}</p>
        <p>Date de fin du tournage :   {film.endDate}</p>
        <p>Numéro du district :        {film.district}</p>
        <p>geolocation  :              {film.geolocation.coordinates} {film.geolocation.type}</p>
        <p>sourceLocationId :          {film.sourceLocationId}</p>
        <p>Dirigé par :                {film.filmDirectorName}</p>
        <p>Adresse :                   {film.address}</p>
        <p>Date de début du tournage : {film.startDate}</p>
        <p>Année :                     {film.year}</p>
    {/if}
    {#if data.user.role === 'admin'}
        <button on:click={Edit}>
            EDIT
        </button>
    {/if}
    {#if edit}
        <form use:enhance method="POST" action="?/editLocation&id={film._id}" class="card comment-form">
            <p>Lattitude : <textarea  name="lattitute" placeholder="lattitude" rows="1" >{film.geolocation.coordinates[0]}</textarea></p>
            <p>Longitude : <textarea  name="longitude" placeholder="longitude" rows="1" >{film.geolocation.coordinates[1]}</textarea></p>
            <p>Type de film : <textarea  name="filmType" placeholder="filmType" rows="1" >{film.filmType}</textarea></p>
            <p>Nom du producteur : <textarea  name="filmProducerName" placeholder="filmProducerName" rows="1" >{film.filmProducerName}</textarea></p>
            <p>Date de fin : <textarea  name="endDate" placeholder="endDate" rows="1" >{film.endDate}</textarea></p>
            <p>Nom du film : <textarea  name="filmName" placeholder="filmName" rows="1" >{film.filmName}</textarea></p>
            <p>District : <textarea  name="district" placeholder="district" rows="1" >{film.district}</textarea></p>
            <p>Source de l'Id : <textarea  name="sourceLocationId" placeholder="sourceLocationId" rows="1" >{film.sourceLocationId}</textarea></p>
            <p>Nom du directeur du film : <textarea  name="filmDirectorName" placeholder="filmDirectorName" rows="1" >{film.filmDirectorName}</textarea></p>
            <p>Adresse : <textarea  name="address" placeholder="address" rows="1" >{film.address}</textarea></p>
            <p>Date de début : <textarea  name="startDate" placeholder="startDate" rows="1" >{film.startDate}</textarea></p>
            <p>Année : <textarea  name="year" placeholder="year" rows="1" >{film.year}</textarea></p>
            <button>
                EDIT
            </button>
        </form>
    {/if}
</div>

