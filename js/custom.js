$(document).ready(function(){

    // Variables
    let CURRENT_LANGUAGE = "fr";
    let CURRENT_EXAMPLE = 1;
    let CURRENT_STEP = 1;
    let CURRENT_THEME = "light";

    // Initialize texts on page load
    initializeTexts(CURRENT_LANGUAGE);

    // On collapse button click
    $('.collapse-text').on('click', function(){
        swapIcon($(this));
    });

    // On change language button click
    $('#language').on('click', function(){
       CURRENT_LANGUAGE = changeLanguage(CURRENT_LANGUAGE);
        initializeTexts(CURRENT_LANGUAGE);
        changeExampleSubjectText(CURRENT_EXAMPLE, CURRENT_LANGUAGE);
        changeExampleResponseText(CURRENT_EXAMPLE, CURRENT_LANGUAGE, CURRENT_STEP);
    });

    // On change theme button click
    $('#theme').on('click', function(){
        CURRENT_THEME = changeTheme(CURRENT_THEME);
        changeChart(CURRENT_EXAMPLE, CURRENT_STEP, CURRENT_THEME)
    })

    // On introduction button click
    $('#btn-introduction').on('click', function(){
        showIntroductionTab();
    });
    // On example button click
    $('#btn-example-1, #btn-example-2, #btn-example-3').on('click', function(){
        if($(this).hasClass("btn-example-outline")){
            let id = $(this).attr('data-id');
            CURRENT_EXAMPLE = id;
            CURRENT_STEP = 1;
            showExampleTab(id);
            changeChart(CURRENT_EXAMPLE, CURRENT_STEP, CURRENT_THEME);
            changeStepButton(CURRENT_STEP, CURRENT_EXAMPLE);
            changeExampleSubjectText(CURRENT_EXAMPLE, CURRENT_LANGUAGE);
            changeExampleResponseText(CURRENT_EXAMPLE, CURRENT_LANGUAGE, CURRENT_STEP);
        }
    })

    // On step button click
    $(".step-button").on('click', function(){
       if($(this).hasClass("switch-charts-outline")){
           CURRENT_STEP = $(this).attr('data-step');
           changeStepButton(CURRENT_STEP, "NO_CHANGE");
           changeChart(CURRENT_EXAMPLE, CURRENT_STEP, CURRENT_THEME);
           changeExampleResponseText(CURRENT_EXAMPLE, CURRENT_LANGUAGE, CURRENT_STEP);
       }
    });
});

/**
 * Swap the chevron icon of an element depending if it is expanded or not
 *
 * @param element html text
 */
function swapIcon(element){
    if(element.find('i').hasClass('fa-chevron-up')){
        element.find('i').addClass('fa-chevron-down');
        element.find('i').removeClass('fa-chevron-up');
    } else {
        element.find('i').removeClass('fa-chevron-down');
        element.find('i').addClass('fa-chevron-up');
    }
}

/**
 * Change the current language
 *
 * @param language
 * @returns {string}
 */
function changeLanguage(language){
    if(language === "en")
        return "fr";
    return "en";
}

/**
 * Change the current theme
 *
 * @param theme
 * @returns {string}
 */
function changeTheme(theme){
    if(theme === "light"){
        $('body').attr('id', "dark-theme");
        $("#text-theme").html('<i class="far fa-moon"></i>');
        return "dark";
    }
    $('body').removeAttr('id');
    $("#text-theme").html('<i class="fas fa-moon"></i>');
    return "light";
}

/**
 * Display the introduction tab and hide the example tab
 */
function showIntroductionTab(){

    // Editing tabs
    $("#introduction-container").show();
    $('#example-container').hide();

    // Editing buttons
    $('#btn-introduction').addClass('btn-example');
    $('#btn-introduction').removeClass('btn-example-outline');
    $('#btn-example-1').removeClass('btn-example');
    $('#btn-example-1').addClass('btn-example-outline');
    $('#btn-example-2').removeClass('btn-example');
    $('#btn-example-2').addClass('btn-example-outline');
    $('#btn-example-3').removeClass('btn-example');
    $('#btn-example-3').addClass('btn-example-outline');
}

/**
 * Display the example tab and hide the introduction tab
 *
 * @param id example button ID
 */
function showExampleTab(id){

    // Editing tabs
    $("#introduction-container").hide();
    $('#example-container').show();

    // Editing buttons
    $('#btn-introduction').removeClass('btn-example');
    $('#btn-introduction').addClass('btn-example-outline');
    $('#btn-example-1').removeClass('btn-example');
    $('#btn-example-1').addClass('btn-example-outline');
    $('#btn-example-2').removeClass('btn-example');
    $('#btn-example-2').addClass('btn-example-outline');
    $('#btn-example-3').removeClass('btn-example');
    $('#btn-example-3').addClass('btn-example-outline');

    // Setting the right button
    $("#btn-example-" + id).addClass("btn-example");
    $("#btn-example-" + id).removeClass("btn-example-outline");

}

/**
 * Update steps buttons
 *
 * @param step
 * @param CURRENT_EXAMPLE
 */
function changeStepButton(step, CURRENT_EXAMPLE){
    $('.step-button').removeClass('switch-charts');
    $('.step-button').addClass('switch-charts-outline');
    $("body").find("[data-step='" + step + "']").removeClass('switch-charts-outline');
    $("body").find("[data-step='" + step + "']").addClass('switch-charts');

    if(CURRENT_EXAMPLE !== "NO_CHANGE"){
        var nb_steps = eval("TEXTS.fr.example_" + CURRENT_EXAMPLE + ".nb_steps");

        $('[data-show]').hide();
        for (var i = 1; i <= nb_steps; i++){
            $('[data-show="' + i + '"]').show();
        }
    }
}

/**
 * Change the displayed chart depending of the example / step / theme
 *
 * @param CURRENT_EXAMPLE
 * @param CURRENT_STEP
 * @param CURRENT_THEME
 */
function changeChart(CURRENT_EXAMPLE, CURRENT_STEP, CURRENT_THEME){
    $('#chart-img').attr('src', 'img/charts/example' + CURRENT_EXAMPLE + "/" + CURRENT_THEME + "/" + CURRENT_STEP + ".png");
}

/**
 * Initialize most important texts
 *
 * @param CURRENT_LANGUAGE
 */
function initializeTexts(CURRENT_LANGUAGE){
    $('#text-logo').html(eval("TEXTS." + CURRENT_LANGUAGE + ".title"));
    $('#text-language').html(eval("TEXTS." + CURRENT_LANGUAGE + ".switchLanguage"));
    $('#btn-introduction').html(eval("TEXTS." + CURRENT_LANGUAGE + ".buttons.introduction"));
    $('#btn-example-1').html(eval("TEXTS." + CURRENT_LANGUAGE + ".buttons.example1"));
    $('#btn-example-2').html(eval("TEXTS." + CURRENT_LANGUAGE + ".buttons.example2"));
    $('#btn-example-3').html(eval("TEXTS." + CURRENT_LANGUAGE + ".buttons.example3"));
    $('#text-subject').html(eval("TEXTS." + CURRENT_LANGUAGE + ".subject"));
    $('#text-footer').html(eval("TEXTS." + CURRENT_LANGUAGE + ".footer"));
    $('#text-introduction').html(eval("TEXTS." + CURRENT_LANGUAGE + ".introduction"));

    // Render mathjax
    MathJax.typesetPromise();
}

/**
 * Change the subject of the example
 *
 * @param CURRENT_EXAMPLE
 * @param CURRENT_LANGUAGE
 */
function changeExampleSubjectText(CURRENT_EXAMPLE, CURRENT_LANGUAGE){
    $('#text-subject-details').html(eval("TEXTS." + CURRENT_LANGUAGE + ".example_" + CURRENT_EXAMPLE + ".subject"));
}

/**
 * Change the response text of the example
 *
 * @param CURRENT_EXAMPLE
 * @param CURRENT_LANGUAGE
 * @param CURRENT_STEP
 */
function changeExampleResponseText(CURRENT_EXAMPLE, CURRENT_LANGUAGE, CURRENT_STEP){
    $('#text-response').html(eval("TEXTS." + CURRENT_LANGUAGE + ".example_" + CURRENT_EXAMPLE + ".step_" + CURRENT_STEP + ".response"));

    var tip = eval("TEXTS." + CURRENT_LANGUAGE + ".example_" + CURRENT_EXAMPLE + ".step_" + CURRENT_STEP + ".tip");
    if(tip === "NO_TIP"){
        $('#indication').hide();
    }
    else {
        $('#indication').show();
        $('#text-indication').html(tip);
    }

    // Render mathjax
    MathJax.typesetPromise();
}
