$(function () {

    var pokemonSearch;
    var defaultPokemon = '1'
    var defaultPokemonData;

    var initFunction = function () {
        $('.loading-container').addClass('active')
      // https://pokeapi.co/api/v2/pokemon/?limit=811
        defaultPokemonData = $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/" + defaultPokemon,
            method: "GET",
        });

        defaultPokemonData.done(function (data) {
            defaultPokemonData = data;
            $('.loading-container').removeClass('active')
            $('.pokedex h3').text(data.name.toUpperCase());
            $('.logo img').attr('src', data.sprites.front_default)
            console.log(data)
        });

        defaultPokemonData.fail(function (jqXHR, textStatus, error) {
            alert('That Pokedex is not available. Try another one.');
        });

    }

     initFunction();


    $('.button').on('click', function () {
        pokemonSearch = $('.poke input').val()

        var request = $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/" + pokemonSearch,
            method: "GET",
        });

        request.done(function (data) {
            $('.pokedex h3').text(data.name);
            $('.logo img').attr('src', data.sprites.front_default)
            console.log(data)
        });

        request.fail(function (jqXHR, textStatus, error) {
            alert('That Pokedex is not available. Try another one.');
        });

    })

});
