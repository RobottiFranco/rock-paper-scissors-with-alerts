function random(min, max)
{
    return Math.floor( Math.random() * (max - min + 1) + min)
}

function alerta(jugador)
{
    if(jugador == "1" || jugador == "piedra" || jugador == "roca")
    {
        resultado = "🪨🪨"

    }
    else if(jugador == "2" || jugador == "papel")
    {
        resultado = ("🧻🧻")

    }
    else if(jugador == "3" || jugador == "tijera")
    {
        resultado = "✂️✂️"

    }
    else
    {
        resultado = "opcion invalida"
    }

    return resultado
}

function eleccion(jugador)
{
    if(jugador == "1" || jugador == "piedra" || jugador == "roca")
    {
        jugador = "1"

    }
    else if(jugador == "2" || jugador == "papel")
    {
        jugador = "2"
    }
    else if(jugador == "3" || jugador == "tijera")
    {
        jugador = "3"
    }
    else
    {
        jugador = "opcion invalida"
    }

    return jugador
}

function game()
{
    let ganaste = 0
    let perdidas = 0
    let empate = 0
    
    while((ganaste < 3) && (perdidas < 3))
    {
        //eleccion

        let tu = "" + prompt("1- 🪨🪨 2- 🧻🧻 o 3- ✂️✂️")
        tu = eleccion(tu)
        alert("elegiste " + alerta(tu))
        
        //juego

        if((tu == "1") || (tu == "2") || (tu == "3"))
        {
            const bot = random(1,3)
            alert("🤖 eligio " + alerta(bot))

            if (tu == bot)
            {
                empate ++
                alert("Empate.  Empatadas: " + empate)
            }
            else if ((tu == 1 && bot == 3) || (tu == 2 && bot == 1) || (tu == 3 && bot == 2))
            {
                ganaste ++
                alert("Ganaste!!🏆🥇 Gandas:" + ganaste)
            }
            else{
                perdidas ++
                alert("Perdiste😭😭 Perdiste: " + perdidas)
            }
        }
        else
        {
            alert("Comando incorrecto")
        }
    }

    // resultados de partida

    alert("Ganadas: " + ganaste + " Perdiste: " + perdidas + " Empates: " + empate)
    
    if (ganaste == 3)
    {
        alert("Felicidades!!! Eres el ganador del encuentro. Ganaste " + ganaste + " veces")
    }
    else
    {
        alert("La proxima sera... El ganador del encuentro es el bot.  Perdiste: " + perdidas + " veces" )
    }
}

//programa principal

game()