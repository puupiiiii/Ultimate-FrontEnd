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

    //toggle fullscreen
    $('.toggle-fullscreen').on('click',function (){
        $(this).toggleClass('full-screen');
        if($(this).hasClass('full-screen')) { // the page is fullscreen
            openFullscreen(); 
        } else { // the page isn't fullscreen
            closeFullscreen();
        }
    });


    /* Get the documentElement (<html>) to display the page in fullscreen */
    var elem = document.documentElement;

    /* View in fullscreen */
    function openFullscreen() {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
    }

    /* Close fullscreen */
    function closeFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }
    }


    // show/hide settings box toggle settings
    $('.toggle-settings').on('click', function () {
        $(this).find('i').toggleClass('fa-spin');
        $('.settings-box').toggleClass('hide-settings');
    });
    

    //switch color theme
    var themeClasses = [];
    $('.color-options li').each(function () {
        themeClasses.push($(this).data('theme'));
    });

    $('.color-options li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $('body').removeClass(themeClasses.join(" "));
        // $('body').removeClass([...themeClasses]); //same result
        $('body').addClass($(this).data('theme'));
    });

});