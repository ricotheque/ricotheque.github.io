{% include jquery.js %}

$( document ).ready( function() {
    $( '.header-button' ).click( function() {
        $( '.site-menu' ).toggleClass( '-showing' );
        $( this ).toggleClass( '-showing' );
    } );
} );