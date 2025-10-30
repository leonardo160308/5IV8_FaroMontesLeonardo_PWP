/*
Este es un ejemplo de una api rest urtilizando una llamada fetch, el cual sirve para obtener informacion sobre el tipo de apo,(pokemon)
 y obtener su estructura a partir de crear una funcion call back con una promesa.
*/

const pokeApiURL = 'https://pokeapi.co/api/v2/';
//vamos a crear una  funcion para obtener todos los datos de la pokedex, para esto tenemos que imaginar el orden y la obtencion de los datos

const pokedex = () => {
    //primero necesitamos obtener todas las estadisticas del pokemon, asi que necesitamos crear un diccionario par aobtener cada uno de los elemtntos del frint para despues vaciar los datos
    const pokemonStatsElements = {
        hp: document.getElementById('pokemonStatHP'),
        attack: document.getElementById('pokemonStatAttack'),
        defense: document.getElementById('pokemonStatDefense'),
        specialAttack: document.getElementById('pokemonStatSpecialAttack'),
        specialDefense: document.getElementById('pokemonStatSpecialDefense'),
        speed: document.getElementById('pokemonStatSpeed'),
    };
    //necesitamos un auxiliar que nos permita utilizar la clase del tipo de pokemon  para cambiar la css dependiendo del tipo
    let currentClassType = null;
    //tiene que cambiar los elementos de la imagen, para ellos tenemos que crear un template que se encargue de encadenar los datos
    const imageTemplate = "<img class='pokedisplay' src='{imgSrc}' alt='pokedisplay'/>";

    //necesitamos un objeto que se encargue de guardar las rutas de las imagenes que vamos a cambiar dependiendo de si es una busqueda si lo eencontro, o no al pokemon
    const images = {
        imgPokemonNotFound: "../img/404.png",
        imgLoading: "../img/loading.gif",
    };
    //necesitamoa una variable que guarde todos los pokemones de la pokedex
    const containers = {
        imageContainer: document.getElementById("pokedisplay-container"),
        pokemonTypesContainer: document.getElementById("pokemonTypes"),
        pokemonNameElement: document.getElementById("pokemonNameResult"),
        pokemonAbilitiesElement: document.getElementById("pokemonAbilities"),
        pokemonMovesElement: document.getElementById("pokemonMoves"),
        pokemonIdElement: document.getElementById("pokemonId"),
    };
    //necesitamos un objeto de tipo array con tipo de referencia
    const buttons = {
        all: Array.from(document.getElementsByClassName("btn")),
        search: document.getElementById("btnSearch"),
        next: document.getElementById("btnUp"),
        previous: document.getElementById("btnDown"),
    };
    //vamos a buscar un pokemon necesitamos una variable que guarde el nombre del pokemon
    const pokemonInput = document.getElementById("pokemonName");
    //la agrupacion de los elementos en este objeto debe de ser una estructura que nos permita crear funciones mas pequeñas que sin importar el orden puedan obtener cada uno de los daros solicitados
    const processPokemonTypes = (pokemonData) => {
        //primero necesitamos obtener el tipo de pokemon , el nombre, la clase, y el html, ya que tenemos eso, tendremos que obtener stats,moves, abilities
        let pokemonType = "";
        //utilizo una busqueda de la clase de pokemon, eso se refiere al tipo de contenido
const firstClass = pokemonData.types?.[0]?.type?.name || "";

        pokemonData.types.forEach((pokemonTypeData) => {
            //necesito obtener la etiqueta de cada cambio
            pokemonType += ` <span class="pokemon-type ${pokemonTypeData.type.name}"> ${pokemonTypeData.type.name} </span> `;
        });

        //para poder quitar y cambiar el contenedor dependiendo del tipo tengo que saber a cual pertenece
        if (currentClassType) {
            containers.pokemonMovesElement.classList.remove(currentClassType);
            containers.pokemonAbilitiesElement.classList.remove(currentClassType);
        }
        //ahora tenfo que agregar lo nuevo
        containers.pokemonNameElement.classList.add(firstClass);
        containers.pokemonAbilitiesElement.classList.add(firstClass);
        //debo de agregar las etiquetas creadas del forEach
        containers.pokemonTypesContainer.innerHTML = pokemonType;
        currentClassType = firstClass;
    };

    //necesitamos ontener las estadisticas del pokemon
    const processPokemonStats = (pokemonData) => {
        pokemonData.stats?.forEach((pokemonstatData) => {
            //vamos a evaluar si encuentra el nombre de la estadistica para colocarlo en su contenedor correspondiente
            switch (pokemonstatData.stat.name) {
                case "hp":
                    pokemonStatsElements.hp.innerHTML = pokemonstatData.base_stat;
                    pokemonStatsElements.hp.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonstatData.base_stat}%, rgba(0,0,0,1) ${pokemonstatData.base_stat}%);`;
                    break;
                case "attack":
                    pokemonStatsElements.attack.innerHTML = pokemonstatData.base_stat;
                    pokemonStatsElements.attack.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonstatData.base_stat}%, rgba(0,0,0,1) ${pokemonstatData.base_stat}%);`;
                    break;
                case "defense":
                    pokemonStatsElements.defense.innerHTML = pokemonstatData.base_stat;
                    pokemonStatsElements.defense.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonstatData.base_stat}%, rgba(0,0,0,1) ${pokemonstatData.base_stat}%);`;
                    break;
                case "special-attack":
                    pokemonStatsElements.specialAttack.innerHTML = pokemonstatData.base_stat;
                    pokemonStatsElements.specialAttack.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonstatData.base_stat}%, rgba(0,0,0,1) ${pokemonstatData.base_stat}%);`;
                    break;
                case "special-defense":
                    pokemonStatsElements.specialDefense.innerHTML = pokemonstatData.base_stat;
                    pokemonStatsElements.specialDefense.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonstatData.base_stat}%, rgba(0,0,0,1) ${pokemonstatData.base_stat}%);`;
                    break;
                case "speed":
                    pokemonStatsElements.speed.innerHTML = pokemonstatData.base_stat;
                    pokemonStatsElements.speed.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonstatData.base_stat}%, rgba(0,0,0,1) ${pokemonstatData.base_stat}%);`;
                    break;
            }
        });
    };

    // Procesa los movimientos del pokemon, y los coloca en su respectivo contenedor
    const processPokemonMoves = (pokemonData) => {
        let pokemonMovesContent = "";
        pokemonData.moves?.forEach((pokemonMove) => {
            pokemonMovesContent += `<li>${pokemonMove.move.name}</li>`;
        });
        containers.pokemonMovesElement.innerHTML = pokemonMovesContent;
    };

    // Procesa las habilidades del pokemon, y los coloca en su respectivo contenedor
    const processPokemonAbilities = (pokemonData) => {
        let pokemonAbilitiesContent = "";
        pokemonData.abilities?.forEach((pokemonAbility) => {
            pokemonAbilitiesContent += `<li>${pokemonAbility.ability.name}</li>`;
        });
        containers.pokemonAbilitiesElement.innerHTML = pokemonAbilitiesContent;
    };

    // Pone la imagen de cargando y deshabilita los botones
    const setLoading = () => {
        containers.imageContainer.innerHTML = imageTemplate.replace("{imgSrc}", images.imgLoading);
        buttons.all.forEach(button => button.disabled = true);
    };

    // Vuelve a habilitar los botones
    const setLoadingComplete = () => {
        buttons.all.forEach(button => checkDisabled(button));
    };

    /***********************************************************************************************************/
    // Esta función es la que consulta la pokeapi para obtener la información del pokemon solicitado
    const getPokemonData = async (pokemonName) => fetch(`${pokeApiURL}pokemon/${pokemonName}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.json())
        .catch((error) => ({ requestFailed: true }));

    /***********************************************************************************************************/
    // válida si debe deshabilitar los botones o no
    const checkDisabled = (button) => {
        button.disabled = button.id === "btnDown" && containers.pokemonIdElement.value <= 1;
    };

    // Esta es la función principal
    const setPokemonData = async (pokemonName) => {
        if (pokemonName) {
            setLoading();
            const pokemonData = await getPokemonData(typeof pokemonName === typeof "" ? pokemonName.toLowerCase() : pokemonName);
            if (pokemonData.requestFailed) {
                containers.imageContainer.innerHTML = imageTemplate.replace("{imgSrc}", images.imgPokemonNotFound);
            } else {
                containers.imageContainer.innerHTML = `
                    ${imageTemplate.replace("{imgSrc}", pokemonData.sprites.front_default)}
                    ${imageTemplate.replace("{imgSrc}", pokemonData.sprites.front_shiny)}
                `;
                containers.pokemonNameElement.innerHTML = pokemonData.name;
                containers.pokemonIdElement.value = pokemonData.id;
                processPokemonTypes(pokemonData);
                processPokemonStats(pokemonData);
                processPokemonAbilities(pokemonData);
                processPokemonMoves(pokemonData);
            }
            setLoadingComplete();
        } else {
            Swal.fire({
                title: "Error!",
                text: "Ingresa el nombre de un pokémon primero",
                icon: "error",
                confirmButtonText: "Aceptar.",
            });
        }
    };

    const triggers = () => {
        buttons.search.onclick = () => setPokemonData(pokemonInput.value);
        pokemonInput.onkeyup = (event) => {
            event.preventDefault();
            if (event.key === "Enter") {
                setPokemonData(pokemonInput.value);
            }
        };
        buttons.next.onclick = () => setPokemonData(+containers.pokemonIdElement.value + 1);
        buttons.previous.onclick = () => setPokemonData(+containers.pokemonIdElement.value - 1);
    };

    setLoadingComplete();
    triggers();
};

window.onload = pokedex;
