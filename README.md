# Battle-RedAndBlue

Fighting game between good and evil. 10 shots to kill!!! fun game!!!

Project #2,

Members: Justin Kook, Yoonsub Lee, Maryam Keshavarz, Chan Ho Ahn

"/config/dev.js" is not included. The following is the format for dev.js file.

// add the following to /config/dev.js

module.exports = {
googleClientID:
'',
googleClientSecret: '',
mongoURI: '',
cookieKey: ''
};

There are two data models here.

- User.js : this is for user data storage. GoogleID is main key as googleID is unique key for each google users. This is the way to avoid duplication of user data. displayName is also captured to use it as username in the game.
- Game.js : schema shoudl be created (TBD)

Handlebars:

- We will use only basic part of handlebars. {{}} and {{{}}}
  MaterializeCSS:
-

## Scope

Create a 2-person online game in which players can launch projectiles at each other to win. If a player is hit, their character respawns with a faster projectile speed and the surviving player is given a point. Players should be able to fly in all directions to avoid projectiles. If two projectiles collide, they will explode causing area damage.

## MVP

1. As a user, I want to be able to access a specific game instance with another player.

2. As a user, I want to be able to move in all directions on the screen and fire projectiles at my opponent.

3. As a user, I want my projectile speed to increase with every respawn after being hit.

4. As a user, I want users to die and respawn after they are hit with my projectiles.

5. As a user, I want the game to end when any player is hit with a projectile 10 times.

### Additonal Functionality

6. As a user, I want to be able to play with more than 2 players.

7. As a user, I want to be able to play the game with another person locally, on the same machine.
