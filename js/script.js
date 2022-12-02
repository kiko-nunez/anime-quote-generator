// Contants and Variablesconst api_title = "https://animechan.vercel.app/api/random/anime?title=";
const api_character= "https://animechan.vercel.app/api/random/character?name="

// Cache DOM element reference
const $anime = $("#anime");
const $character = $("#character");
const $quote = $("#quote");
const $button = $(".qbutton");

// Register Event Listeners

// let quoteData;
// $('form').on('submit', animeGetData)
// $button.on("click", animeGetData);

// Functions

function getQuote(characterName) {
    let requestUrl = api_character + characterName
    console.log("sending a request to this url", requestUrl);
  $.ajax(requestUrl).then(
    function (data) {
    $('#anime-text').text(data.quote);
    },
    function (error) {
      console.log(error);
    }
  );
}
    $('#anime').on('change', function() {
        let $selectedOption = $('#anime > option:selected')
        $('.anime-selection').addClass('hidden')
        let idSelector = "#" + $selectedOption.val()
       $(idSelector).removeClass('hidden')
    //    $(`#${$selectedOption.val()}`).addClass('hidden')
    })

    $('.anime-selection').on('change', function() {
        let name = this.value
        getQuote(name)
    })



