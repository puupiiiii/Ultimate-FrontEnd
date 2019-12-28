$(function () {
    'use strict';
    
    //toggle sidebar
    $('.toggle-sidebar').on('click', function () {
        $('.content-area, .sidebar').toggleClass('no-sidebar');
    });

    //toggle submenu /sidebar
    $('.toggleSubmenu').on('click', function () {
        $(this).find('.submenu').toggleClass('fa-angle-up fa-angle-down');
        $(this).next('.child-links').slideToggle();
        
    });







});