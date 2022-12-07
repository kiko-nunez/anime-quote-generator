// Contants and Variables
const api_character= "https://animechan.vercel.app/api/random/character?name="

// Cache DOM element reference
const $anime = $("#anime");
const $button = $("#button");
const $textBox = $('#anime-text')
const $choice = $('.anime-selection')
let quote, characterName
const $loadingIndicator = $('#load')
// const $spikePicture = $('#spike')
const $characterLabel = $('.character-label')

// Functions


// API function to pull quote

function getQuote(characterName) {
    let requestUrl = api_character + characterName
  $.ajax(requestUrl).then(
    function (data) {
    quote = data.quote
    $($textBox).text(quote)
    $($loadingIndicator).addClass('hidden')
    // $($spikePicture).removeClass('hidden')
    },
    function (error) {
      console.log(error);
    }
  );
}

// jQuery functions to listen for selection and hide dropdowns

    $($anime).on('change', function() {
        let $selectedOption = $('#anime > option:selected')
        $('.anime-selection').addClass('hidden')
        let idSelector = "#" + $selectedOption.val()
        $(idSelector).removeClass('hidden')
        $($characterLabel).removeClass('hidden')
    })

    $('.anime-selection').on('change', function() {
        characterName = this.value
    })

// button listener to send api request

$($button).on('click', function() {
    $($loadingIndicator).removeClass('hidden')
    getQuote(characterName)
})


