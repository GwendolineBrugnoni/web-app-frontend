<script>
  import { enhance } from '$app/forms';
  /** @type {import('./$types').ActionData} */
  export let form;
</script>

<slevte:head>
    <title>Register</title>
</slevte:head>

<form  use:enhance method="POST">

  <span id="forms-titre"> Créer un compte</span>
  <br/>
  <fieldset class="form-group">
    <input
            class="form-control form-control-lg"
            name="username"
            type="text"
            required
            placeholder="Your Name"
    />
  </fieldset>
  <fieldset class="form-group">
    <input
            class="form-control form-control-lg"
            name="email"
            type="email"
            required
            placeholder="Email"
    />
  </fieldset>
  <fieldset class="form-group">
    <input
            class="form-control form-control-lg"
            name="password"
            type="password"
            required
            placeholder="Password"
    />
  </fieldset>
  <button class="btn btn-lg btn-primary pull-xs-right">Sign up</button>
  <br/>

  <p><a href="../login/+page.svelte">Déjà un compte?</a></p>
  <br><br>
  <button>
    <a href="/" class="nav-link">Retour à l'acceuil</a>
  </button>
</form>
