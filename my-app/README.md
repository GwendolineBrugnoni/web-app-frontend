### Run the project 
cd my-app

npm install

npm run dev -- --open

NOTE : j'ai utiliser le backend fourni 

### Reprise des consignes 
1- Basic Layout
   The frontend is composed of at least:
1. One login page (containing a link to the register page)
2. One register page
3. One “Location” page in which all locations are listed in a paginated array

Il y a les trois pages demandées mais je n'ai pas fait la pagination et en général le projet n'est pas beau.
Il est cependant fonctionnel, il me semble que l'esthétisme n'était pas demandé ^^'...

2- User Stories

   US1: As a random visitor, I want to be able to register an account or log-in, so I can
   access all features

DONE

   US2: As a random visitor, I want to be redirected to the login/register page when I click on
   “location" tab, so that I know I must log-in to see its content

DONE + log out at the bottom (ugly button / link sorry ^^')

   US3: As a logged-in user, I want to see locations and be able to click on one location to
   open a modal containing details, so that the website is useful

DONE plus ou moins... on peut afficher les détails en cliquant sur le bouton mais je n'ai pas reussi à utiliser le modal.
J'ai essayé longtemps mais quand je chargais tout les films le modal retenais que le dernier que j'avais charger. 
et donc affichais toujours les details du dernier film quelque soit le film que je choissisait.

   US4: As an “admin" user, I want to see a “Add Location” button in the location page, so
   that I can create a new location

DONE le bouton create est en haut de la page, par contre puisque je n'affiche pas tout et qu'il se rajoute à
la fin ça ne se verra pas sur la page, je conseille de regarder dans la db.

   US5: As an “admin" user, I want to see a button to edit locations in the array of locations,
   so that I can edit existing locations

DONE 

   US6: As an “admin" user, I want to see a button to delete locations in the array of
   locations so that I can delete existing locations

DONE
   