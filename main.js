// Using jQuery DOM loaded function
// Deprecated way
/*
$(document).ready(function () {
    
});
*/
// New way
$(function(){
    // JS selector vs jQuery selector
    // and innerHTML
    
    // Tag
    // document.querySelector('h1').innerHTML = 'Tag Selector'
    $('h1').html('Tag Selector');
    
    // Class
    // document.querySelector('.display-4').innerHTML = 'Class Selector'
    $('.display-4').html('Class Selector');

    // ID
    // document.querySelector('#idH1').innerHTML = 'ID Selector'
    $('#idH1').html('ID Selector');

    // Add and remove classes JS vs jQuery
    // Add
    $('#idH2').addClass('display-8');
    // document.querySelector('#idH2').classList.add('display-8');

    // Remove
    $('#idH2').removeClass('display-6');
    // document.querySelector('#idH2').classList.remove('display-6');

    // Append children to an element
    $('#content').prepend('<p class="display-6 blue">This text will appear at the start of the div');
    $('#content').append('<p class="display-6" blue>This text will appear at the end of the div');

    // Add css to an element
    // there's 2 ways to add css separated by comas
    // $('.blue').css('color', '#00f');
    // Or like we do in css archives
    $('.blue').css(
        {
            color: '#00f',
            background: 'salmon'
        });

    // You can also remove elements from the DOM
    $('#idH2').remove();

    // You can do a display:none
    $('#idH3').hide();

    
});