var jugador1
var jugador2
var pgj1 = 0
var pgj2 = 0
var nombre1=prompt('Jugador 1, ¿cómo te llamás?')
var nombre2=prompt('Jugador 2, ¿cómo te llamás?')

while (pgj1 < 2 && pgj2 < 2) {
    jugador1 = prompt(nombre1+': ¿piedra, papel o tijera?');
    jugador2 = prompt(nombre2+': ¿piedra, papel o tijera?');
    
    jugador1=jugador1.toLowerCase();
    jugador2=jugador2.toLowerCase();


    if ( (jugador1 === 'piedra' || jugador1 === 'papel' || jugador1 === 'tijera')
    && (jugador2 === 'piedra' || jugador2 === 'papel' || jugador2 === 'tijera')
    )
    
if (jugador1 == jugador2) {
    console.log("Empate");
    document.write("Empate");
    document.write('<br>');
} else if ((jugador1 == 'piedra') && (jugador2 == 'papel')) {
     console.log('Ganó '+nombre2);
     document.write('Ganó '+nombre2);
     document.write('<br>');
     pgj2 = pgj2+1
} else if ((jugador1 == 'piedra') && (jugador2 == 'tijera')) {
    console.log('Ganó '+ nombre1);
    document.write('Ganó '+ nombre1);
    document.write('<br>');
    pgj1 = pgj1+1
} else if ((jugador1 == 'papel') && (jugador2 == 'tijera')) {
    console.log('Ganó '+nombre2);
    document.write('Ganó '+nombre2);
    document.write('<br>');
    pgj2 = pgj2+1
} else if ((jugador1 == 'papel') && (jugador2 == 'piedra')) {
    console.log('Ganó '+ nombre1);
    document.write('Ganó '+ nombre1);
    document.write('<br>');
    pgj1 = pgj1+1
} else if ((jugador1 == 'tijera') && (jugador2 == 'piedra')) {
    console.log('Ganó '+nombre2);
    document.write('Ganó '+nombre2);
    document.write('<br>');
    pgj2 = pgj2+1
} else if ((jugador1 == 'tijera') && (jugador2 == 'papel')) {
    console.log('Ganó '+ nombre1);
    document.write('Ganó '+ nombre1);
    document.write('<br>');
    pgj1 = pgj1+1
};
}



 if (pgj1==2) {
    console.log("¡Ganaste dos partidas! ¡Felicitaciones, ",nombre1+'!')
    document.write("¡Ganaste dos partidas! ¡Felicitaciones, ",nombre1+'!')
    alert("¡Ganaste dos partidas! ¡Felicitaciones, "+nombre1+'!')
} else if (pgj1!==2) { console.log("¡Ganaste dos partidas! ¡Felicitaciones, "+nombre2,'!')
 document.write("¡Ganaste dos partidas! ¡Felicitaciones, ",nombre2+'!')
 alert("¡Ganaste dos partidas! ¡Felicitaciones, "+nombre2+'!')
 ;
}

