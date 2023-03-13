//declarando constantes
const KEY_UP = 38;//arriba
const KEY_DOWN = 40;//abajo
const KEY_RIGHT = 39;//derecha
const KEY_LEFT = 37;//izquierda
const KEY_SPACE = 32;//espacio

const GAME_WIDTH = 800;//ancho
const GAME_HEIGHT = 600;//alto

const STATE = {
    x_pos : 0,//posiciones
    y_pos : 0,//posiciones
    move_right: false,
    move_left: false,
    shoot: false,//disparos
    lasers: [],//balas
    enemyLasers: [],//disparos de los enemigos
    enemies : [],//
    spaceship_width: 50,//nave espacial
    enemy_width: 50,//ancho del enemigo
    cooldown : 0,//enfriamiento
    number_of_enemies: 16,//numero de enemigos
    enemy_cooldown : 0,// enfriamiento
    gameOver: false//fin del juego
  }
  