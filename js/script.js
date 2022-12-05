// Contants and Variables
const api_title = "https://animechan.vercel.app/api/random/anime?title=";
const api_character= "https://animechan.vercel.app/api/random/character?name="

// Cache DOM element reference
const $anime = $("#anime");
const $button = $("#button");
const $quote = $('#anime-text')

// Register Event Listeners



// Functions


// API function to pull quote

function getQuote(characterName) {
    let requestUrl = api_character + characterName
  $.ajax(requestUrl).then(
    function (data) {
    $($quote).text(data.quote);
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
    //    $(`#${$selectedOption.val()}`).addClass('hidden')
    })

    $('.anime-selection').on('change', function() {
            let name = this.value
            getQuote(name)
    })

    $.ajax({api_character}).then((data) => {
    console.log('success');
},
(error) => {
    console.log('bad request', error);
}
)

// $button.on('click', function() {
//     let $selectedCharacter = '#' $choice.val()
// })

// Working Code Above
