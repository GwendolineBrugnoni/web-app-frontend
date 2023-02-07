<script>
    import { enhance } from '$app/forms';

    export let film;

    let details = false
    function Details() {
        if(details) details = false
        else details = true
    }

</script>

<div class="article-preview">
    <button on:click={Details}>
        Details
    </button>
    {#if details}
        <p>Type de film :            {film.filmType}</p>
        <p>Nom du producteur:        {film.filmProducerName}</p>
        <p>Date de fin du tournage : {film.endDate}</p>
        <p>Numéro du district :      {film.district}</p>
        <p>geolocation  : {film.geolocation.coordinates} {film.geolocation.type}</p>
        <p>sourceLocationId : {film.sourceLocationId}</p>
        <p>Dirigé par : {film.filmDirectorName}</p>
        <p>Adresse : {film.address}</p>
        <p>Date de début du tournage : {film.startDate}</p>
        <p>Année : {film.year}</p>
    {/if}
</div>

