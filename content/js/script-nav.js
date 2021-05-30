
function showMe(selfCategory, currentCategory, selfCountry, currentCountry) {
    const categoryConstraint =  selfCategory === currentCategory || currentCategory === null
    const countryConstraint = selfCountry === currentCountry || currentCountry === null

    return categoryConstraint && countryConstraint
}

const COUNTRY_PREFIX = '#country_'
const hash = document.location.hash

function isCountry(string) {
    return string.substring(0, COUNTRY_PREFIX.length) === COUNTRY_PREFIX
}

function categoryFromHash() {
    return hash.length > 0 && !isCountry(hash) ? hash.substring(1) : null
}

function countryFromHash() {
    return hash.length > 0 && isCountry(hash) ? hash.substring(COUNTRY_PREFIX.length) : null
}



function openMainNav() {
    var $body = $("body");

    $(document).on('click', function (event) {
        if (!$(event.target).closest('#mainnavigation').length) {
            $body.toggleClass('mainnav-open', false);
        }
    });

    $(".mainnav-trigger").on("click", function (e) {
        $body.toggleClass('mainnav-open');
        e.stopPropagation();
        e.preventDefault();
    });
}

function openDropDownNav() {
    $(".filter-list").on("click", function(e) {
        $(this).toggleClass('open-selectnav');
        e.stopPropagation();
        e.preventDefault();
    });    
}

function showAttributes() {
    $(".project-attributes-toggle").on("click", function (e) {
        $(this).closest('.project-attributes').toggleClass('show-atributes');
        e.stopPropagation();
        e.preventDefault();
    });
}


$(document).ready(function () {
    openMainNav();
    openDropDownNav();
    showAttributes();
});

function setDocHeight() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`);
};

addEventListener('orientationchange', setDocHeight);
    
setDocHeight();
