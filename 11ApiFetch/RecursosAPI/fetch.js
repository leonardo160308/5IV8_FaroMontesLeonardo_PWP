/*
Este es un ejemplo de una api rest urtilizando una llamada fetch, el cual sirve para obtener informacion sobre el tipo de apo,(pokemon)
 y obtener su estructura a partir de crear una funcion call back con una promesa.*/

const pokeApiURL = 'https://pokeapi.co/api/v2/';
//vamos a crear una  funcion para obtener todos los datos de la pokedex, para esto tenemos que imaginar el orden y la obtencion de los datos

const pokedex = () => {
    //primero necesitamos obtener todas las estadisticas del pokemon, asi que necesitamos crear un diccionario par aobtener cada uno de los elemtntos del frint para despues vaciar los datos
    const pokemonStatsElements= {
        hp: document.getElementById('pokemonStatHP'),
        attack: document.getElementById('pokemonStatAttack'),
        defense: document.getElementById('pokemonStatDefense'),
        specialAttack: document.getElementById('pokemonStatSpecialAttack'),
        specialDefense: document.getElementById('pokemonStatSpecialDefense'),
        speed: document.getElementById('pokemonStatSpeed'),
    }
    //necesitamos un auxiliar que nos permita utilizar la clase del tipo de pokemon  para cambiar la css dependiendo del tipo
    let currentClassType = null;
    //tiene que cambiar los elementos de la imagen, para ellos tenemos que crear un template que se encargue de encadenar los datos
    const imageTemplate ="<img class='pokedisplay' src '{imgSrc}' alt='pokedisplay'/>";

    //necesitamos un objeto que se encargue de guardar las rutas de las imagenes que vamos a cambiar dependiendo de si es una busqueda si lo eencontro, o no al pokemon
    const images={
        imgPokemonNotFound:"../img/404.png", 
        imgLoading:"../img/loading.gift",

    };
    //necesitamoa una variable que guarde todos los pokemones de la pokedex
    const containers={
        imageContainer: document.getElementById("pokedisplay-container"), 
        pokemonTypesContainer:document.getElementById("pokemonTypes"),
        pokemonNameElement : document.getElementById("pokemoNameResult"),


    };
    //necesitamos un objeto de tipo array con tipo de referencia
    const button ={
       all : Array.from(document.getElementsByClassName("btn")),
       search : document.getElementById("btnSearch"),
       next: document.getElemtBy
    }
    //vamos a buscar un pokemon necesitamos una variable que guarde el nombre del pokemon
    const pokemonInput=document.getElementById("pokemonName");
    //la agrupacion de los elementos en este objeto debe de ser una estructura que nos permita crear funciones mas pequeñas que sin importar el orden puedan obtener cada uno de los daros solicitados
    const processPokemonType =(pokemonData)=>{
    //primero necesitamos obtener el tipo de pokemon , el nombre, la clase, y el html, ya que tenemos eso, tendremos que obtener stats,moves, abilities
    let pokemonType= "";
    //utilizo una busqueda de la clase de pokemon, eso se refiere al tipo de contenido
    const firstClass=pokemonData.types[0].type.name;
    pokemonData.types.forEach((pokemonTypeData)=>{
        //necesito obtener la etiqueta de cada cambio
        pokemonType+=`<span class="pokemon-type${pokemonData.type.name}">${pokemonTypeData.type.name} </span>`;
    });
    //para poder quitar y cambiar el contenedor dependiendo del tipo tengo que saber a cual pertenece
    if(currentClassType){
        containers.pokemonMovesElement.
        classlist.remove(currentClassType);
        containers.pokemonAbilitiesElement.
        classlist.remove(currentClassType);
    }//ahora tenfo que agregar lo nuevo
    containers.pokemonNameElement.classList.add(firstClass);
    containers.pokemonAbilitiesElement.classList.add(firstClass);
    //debo de agregar las etiquetas creadas del forEach
    containers.pokemonTypesContainer.innerHTML=pokemonType;
    };
    //necesitamos ontener las estadisticas del pokemon
    const processPokemonStats=(pokemonData)=>{
        pokemonData.stats?.forEach((pokemonstatData)=>{
            //vamos a evaluar si encuentra el nombre de la estadistica para colocarlo en su contenedor correspondiente
            switch(pokemonstatData.stat.name){
                 case"hp":
                 pokemonStatsElements.hp.
                 innerHTML= pokemonData.base_stat;
                 pokemonStatsElements.hp.style=
                 `background:linear-gradient (0deg, rgba(0,118,255,1) ${pokemonstatData.base_stat}%),rgba(0,0,0,1)`
            }
        })
    }




};