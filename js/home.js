---
---

{% include jquery.js %}
{% include rangeslider.js %}

var sellLevels = '.site-content > .sell-levels > .sell-level';
var sellControl = '.site-content > .sell-level-control > .sell-level-slider';
var rangesliderFill = '.site-content > .sell-level-control > .rangeslider > .rangeslider__fill';
var currentLevel = null;

$( document ).ready( function() {
    sellLevels = $( sellLevels );
    sellControl = $( sellControl );
    
    // Sets the slider to the middle, if it exists
    if ( sellLevels.length && sellControl.length == 1 ) {

        sellControl.attr( 'max', sellLevels.length );
        sellControl.rangeslider( { polyfill: false } );
        sellControl.val( sellLevels.length / 2 ).change();

        showLevel( parseInt( sellControl.val() ) - 1 );
    }

} );

$( document ).on( 'input', sellControl, function(e) {
    showLevel( parseInt( e.currentTarget.value ) - 1 );
} );

function showLevel( newLevel ) {
    sellLevels = $( sellLevels );
    track = $( rangesliderFill );

    $( sellLevels.get( currentLevel ) ).hide();
    $( sellLevels.get( newLevel ) ).show();

    currentLevel = newLevel;

    // Change the color of the slider
    max = sellLevels.length - 1;
    min = 0;

    var red = 255;
    var green = 255;
    var blue = 0;

    var mid = parseInt( sellLevels.length / 2 );

    if ( currentLevel <= mid ) {
        red = Math.floor( 255 * ( currentLevel / mid ) );
    } else if ( currentLevel >= mid ) {
        green = Math.floor( 255 * ( ( mid - ( currentLevel - 1 ) % mid ) / mid ) );
    }

    $( rangesliderFill ).css( 'background-color', 'rgb(' + red + ',' + green + ',' + blue );

    // if ( currentLevel == max ) {
    //     $( 'html' ).css( 'background-image', "url('../images/bg_stars.gif')" );
    // } else {
    //     $( 'html' ).css( 'background-image', '' );
    // }
}