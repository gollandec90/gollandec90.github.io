var rangeValues;
var results;
$(document).ready(function(){

    /*variables*/
    var countries = [];

    var yellowBlockActive = false;

    var preventionActiveStep = '';

    //stores opened news and quality block
    var activeNewsBlock = '';   //currently active newsBlock
    var activeNewsBlockContent = '';
    var visibleQualityBlock = false;

    var openedServiceDesc = false; //stores opened serviceDesc DOM

    var mapSwitchDispleyedObject  = 'list';     // 'list' or 'map' may be displayed
    /*make it via httpPost to get data from DB*/
    rangeValues = {
        "1": "Very simple",
        "2": "Relatively simple",
        "3": "Normal",
        "4": "Quite complex",
        "5": "Intricate"
    };
    var requestObj = {
        name:'',
        surname:'',
        email:'',
        company:'',
        country:'',
        city:'',
        MSPA:'',
        service : '',
        evaluation: '',
        industry:'',
        languages: [],
        cover: [],
        location:'',
        reporting:'',
        qtlength:'',
        complexity:'',
        verrequirm:[],
        othercheckbox:'',
        othercomment:'',
        comment:''
    };

    /*on scroll actions*/
    $(document).scroll(function(){
        if (yellowBlockActive) {
            var yellowBlock = $('#yellow-block');
            yellowBlock.fadeOut('fast', function(){
                yellowBlock.removeClass('active');
                yellowBlock.addClass('unactive');
                yellowBlock.fadeIn();
                yellowBlockActive = false;
            })
        }
    });

	var _ringback = $('#ringback');
	_ringback.find('.submit-btn').click(function(){
		var _this = $(this),
			_name = _ringback.find('#usr_name'),
			_email= _ringback.find('#usr_adress');
		_this.fadeOut();
		console.log(_name);
		$.ajax({
			"method": "POST",
			"url": "/site/ringback",
			"data": {
				"name" : _name.val(),
				"email": _email.val(),
				"_csrf": $('meta[name="csrf-token"]').attr("content"),
			}, 
			"success": function(data){
				if(data.status){
					_name.val('');
					_email.val('');
				}
				alert(data.message);
				_this.fadeIn();
			},
			"error": function(data){
				alert("An iternal server error occured");
				_this.fadeIn();
			}
		})
	});
	
	var _askquestion = $('#askquestion');
	_askquestion.find('.submit-btn').click(function(){
		var _this = $(this),
			_name = _askquestion.find('#usr_name2'),
			_email= _askquestion.find('#usr_adress2'),
			_question = _askquestion.find('#usr_question2');
		_this.fadeOut();
		console.log(_name);
		$.ajax({
			"method": "POST",
			"url": "/site/askquestion",
			"data": {
				"name" : _name.val(),
				"email": _email.val(),
				"question": _question.val(),
				"_csrf": $('meta[name="csrf-token"]').attr("content"),
			}, 
			"success": function(data){
				if(data.status){
					_name.val('');
					_email.val('');
					_question.val('');
				}
				alert(data.message);
				_this.fadeIn();
			},
			"error": function(data){
				alert("An iternal server error occured");
				_this.fadeIn();
			}
		})
	});

    /*Open-close modals*/
    $('a[href="#pricing-modal"]').click(function(event) {
        $('#question-selection').addClass('hide');
        event.preventDefault();
        $('#pricing-modal').modal({
            fadeDuration: 300,
        });
    });
    $('a[href="#ver-pricing-modal"]').click(function(event) {
        event.preventDefault();
        $('#ver-pricing-moda').modal({
            fadeDuration: 300,
        });
    });
    $('#pricing-presubmit').click(function(){
        serializePricingForm(requestObj);
        fillVerifyForm(requestObj, rangeValues);
        $('#pricing-modal').modal('close');
        $('#ver-pricing-modal').modal({
            fadeDuration: 300,
        });
    });
    $('#pricing-submit').click(function(){
	    $.ajax({
		    "method" : "POST",
		    "url"    : "/site/send-email",
		    "data"   : results,
		    "success": function(data){
			    if(data.status == true){
				    window.location.reload();
//				    $('#pricing-modal').modal('close');
			    } else {
				    console.log(data);
				    alert('An internal server error occured');
			    }
		    }
	    });
    });
    $('#change-pricing').click(function(){
        $('#ver-pricing-modal').modal('close');
        //$('.blocker').remove()
        //$('#pricing-modal').modal('open');
        $('#pricing-modal').modal({
            fadeDuration: 300,
        });
    });

    /*question selection animation*/
    $('#question-selection').addClass('hide');

    $("#yellow-block").click(function(){
        if($(this).hasClass('active')){
            transitionIn($('#question-selection'), $('#yellow-block'));
        }
        else{
            $(this).fadeOut('fast', function() {
                $(this).removeClass('unactive');
                $(this).addClass('active');
                $(this).fadeIn();
                yellowBlockActive = true;
            });
        }
    });

    $(".close-question-selection").click(function(){
        transitionIn($('#yellow-block'), $(this).closest(".question-selection"));
    });
    $(".open-child").click(function(){
        var childView = $(this).attr("child-view");
        transitionIn($('#'+childView), $('#question-selection'));
    });
    /* END question selection animation */




    /*Country selection and removing*/
    $('.modal-country').click(function(){
        var countryName = $(this).text();
        var punctuation = ' ';
        if(requestObj.cover.length > 0){
            //punctuation += ', ';
        }
        requestObj.cover.push(countryName);
        $('#countries-box').append(getSelectedHtml(punctuation,countryName));
        $(this).addClass('selected-text');
    });

    $('#modal-specification').on('click','.delete', function(){
        var countryName = $(this).siblings('.name').text();
        $(this).closest('.selected-box').remove();
        requestObj.cover.splice($.inArray(countryName,requestObj.cover) ,1);
        $('div:contains("'+countryName+'").modal-country').removeClass('selected-text');
    });
    /*END country selection and removing*/


    /*lang selection*/
    $('#lang-select').on('change', function(){
        var dataObj = $(this).select2('data');
        if (dataObj.constructor === Array) {
            var lang = dataObj[0].text;
        }
        else{
            var lang =  dataObj.text;
        }
        $('#lang-box').append(getSelectedHtml('',lang));
        requestObj.languages.push(lang);
    });
    $('#modal-details').on('click','.delete', function(){
        var langName = $(this).siblings('.name').text();
        $(this).closest('.selected-box').remove();
        requestObj.languages.splice($.inArray(langName,requestObj.languages) ,1);
    });
    /*END lang selection*/

    /*Input number */
    $('.btn-plus').on('click', function(){
        input = $(this).siblings('.input-number');
        var currentVal = parseInt(input.val());
        if (isNaN(currentVal)) {
            input.val('1');
        }
        else{
            input.val(currentVal + 1);
        }
        input.trigger('change');
    });
    $('.btn-minus').on('click', function(){
        var input = $(this).siblings('.input-number');
        var currentVal = parseInt(input.val());
        if (isNaN(currentVal) || currentVal == 0) {
            input.val('0');
        }
        else{
            input.val(currentVal - 1);
        }
        input.trigger('change');
    });
    /*END Input number*/



    /* input range */
    $("input[type='range']").change(function() {
        var el = $(this);
        el.next("output").text(rangeValues[el.val()]);
    })
        .trigger('change');
    /*END input range*/



    /*Verification requirments*/
    $('[name=user-requirments]').change(function(){
        var checkFor = $(this).attr('check-for');
        var requirment = $(this).siblings('[name='+checkFor+']').text();

        if($(this).prop('checked') === true){
            //if checked none checkbox all others are unchecked and
            //array of values is cleared
            if (checkFor == 'none') {
                $('[name=user-requirments]').each(function(){
                    $(this).prop('checked', false);
                });
                $(this).prop('checked', true);
                requestObj.verrequirm = [];
                requestObj.verrequirm.push
                return;
            }
            else{
                $('[check-for=none]').prop('checked', false);
            }
            //checkFor other has its own handler
            if (checkFor == 'other') {
                return
            }
            requestObj.verrequirm.push(requirment);
        }
        else{
            requestObj.verrequirm.splice($.inArray(requirment, requestObj.verrequirm) ,1);
        }
    });

    /*News block*/
    $('.news-block').click(function(){
        var adjustableHeight = $('.border-news').parents().height();
        var clickedBlock = $(this);
        if (clickedBlock[0] == activeNewsBlock[0]) { //compare DOM objects as arrays
            //active block is clicked. Current block should be hidden
            activeNewsBlock.parent().removeClass('news-active');
            activeNewsBlock.html(activeNewsBlockContent);
            activeNewsBlock = '';
            activeNewsBlockContent = '';

            //hiding active news
            $('#active_news').fadeOut();
            return;
        }
        else{
            if (activeNewsBlock != '') {
                //some block is active, but other block is clicked
                activeNewsBlock.parent().removeClass('news-active');
                activeNewsBlock.html(activeNewsBlockContent);
                activeNewsBlock = clickedBlock;
                activeNewsBlock.parent().addClass('news-active');
                activeNewsBlockContent = activeNewsBlock.html();
                activeNewsBlock.html(getActvNewsContensSubstitute());

                $('.active-news-content').fadeOut('fast', function(){
                    $('.active-news-content').fadeIn();
                });
                return;
            }
            //no block is active, some is clicked
            activeNewsBlock = clickedBlock;
            activeNewsBlock.parent().addClass('news-active');
            activeNewsBlockContent = activeNewsBlock.html();
            activeNewsBlock.html(getActvNewsContensSubstitute());
            activeNewsBlock.height(adjustableHeight);
            //showing active news section
            $('#active_news').fadeIn();
            return;
        }
    });
    /*END news block*/


    /*Unzipp text block*/
    $('.unzipper').click(function(){
        var objectOpen = $(this).parent().siblings('.zipped');
        var objectClose = $(this);
        transitionIn(objectOpen, objectClose);
    });
    $('.zipper').click(function(){
        //zip text block and transition in an arrow
        var objectClose = $(this).parent().parent('.zipped');
        var zipperN = $(this).attr('zipper-n');
        var objectOpen = $('.unzipper[zipper-n='+zipperN+']');
        console.log(zipperN);
        transitionIn(objectOpen, objectClose);
    });
    /*END text zippers*/

    /*Service desciption animation*/
    $('[content=service-icon]').click(function(){
        openedServiceDesc = animateServDesc($(this), openedServiceDesc);
    });

    $('.service-desc').click(function(){
        openedServiceDesc = animateServIcon($(this));
    });
    /*END Service desciption animation*/


    /*Quality detail description*/
    $('[content=quality-desc]').click(function() {
        var block = $(this).children().children('.arrow-unactive');
        var blockID = block.attr('content-value');

        visibleQualityBlock = qualityDesc(visibleQualityBlock, blockID);
    });

    /**
     * When app is luanched, gets max height of news block
     * In order to make all blocks the same height.
     *
     * This is done to make white border line to be equal on all news' blocks
     */
    var maxH = 0;
    setTimeout(function () {
        $('.news-block').each(function () {
            maxH = $(this).height() > maxH ? $(this).height() : maxH;
        });
        $('.news-block').each(function () {
            $(this).height(maxH);
        });
        $('.border-news').each(function () {
            $(this).height(maxH);
        });
    }, 1000);

    /**
     * When user clicks on icon block, text in this block gets class active
     * which adds yellow underline
     */
    $('.prev-icon-block').click(function () {
        if(preventionActiveStep != false){
            preventionActiveStep.children('.prev-icon-text').removeClass('active');
        }
        $(this).children('.prev-icon-text').addClass('active');

        preventionActiveStep = $(this);
    });

    /**
     * When user clicks on icon block, scrolls prev-step-slider to specified slide
     */
    $('.prev-icon-block[data-slide]').click(function(e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.prevention-steps-slider').slick('slickGoTo', slideno - 1);
    });

    /**
     * Scroll to animation
     *
     * When user clicks on link which
     */
    $('a[href*="#"]:not([href="#"])').click(function() {
        if($(this).attr('href') ==  '#navPanel'){
            return;
        }
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 100    //because we have fixed header
                }, 1000);
                return false;
            }
        }
    });

    /**
     * Switches display of map and list of countries on click
     */

    $('#switch-icon-list').hide();
    $('#map-switch').click(function () {
        if(mapSwitchDispleyedObject == 'list') {
            var objectToDisplay = $('#map-section');
            var objectToHide = $('#countries-list');
            mapSwitchDispleyedObject = 'map';
            $('#switch-icon-map').fadeOut('slow');
            $('#switch-icon-list').fadeIn('slow');

        } else {
            var objectToDisplay = $('#countries-list');
            var objectToHide =$('#map-section');
            mapSwitchDispleyedObject = 'list';
            $('#switch-icon-list').fadeOut('slow');
            $('#switch-icon-map').fadeIn('slow');
        }
        objectToHide.fadeOut('slow', function () {
            objectToDisplay.fadeIn();
        });
    })

});

/**
 * made for adjusting height/width params for screen resolution
 *
 * currently not used because of how to change width/height of :befor :after elements?
 * @param screenWidth
 * @returns {{}}
 */
function countHexagonParams(screenWidth){
    var hexagon = {};
    hexagon.width = screenWidth*0.1882 + 74.57;
    hexagon.height = hexagon.width*0.577 + 0.11;
    hexagon.margin = hexagon.width*0.289 - 0.1;
    hexagon.border = hexagon.width*0.5;
    return hexagon;
}

function setHexagonParams (screenWidth) {
    var hexagon = countHexagonParams(screenWidth);
    console.log(hexagon);
    $('.hexagon').each(function () {
        $(this).width(hexagon.width);
        $(this).height(hexagon.height);
        $(this).css('margin',hexagon.margin);
        console.log($(this).first().css('position'));
        $(this).first().css('border-bottom', hexagon.margin);
        $(this).first().css('border-left', hexagon.border);
        $(this).first().css('border-right', hexagon.border);

        $(this).last().css('border-top', hexagon.margin);
        $(this).last().css('border-left', hexagon.border);
        $(this).last().css('border-right', hexagon.border);
    });
}



function animateServDesc(thisObj, openedObj) {
    //this function hides icon and fades in description
    // var thisObj - icon object, on which user clicked
    // var openedObj - desc object, currently open
    if (openedObj) {
        openedObj.hide();
        var openedObjIcon = openedObj.siblings('[content=service-icon]');
        openedObjIcon.fadeIn();
    }
    thisObj.hide();
    thisDesc = thisObj.siblings('.service-desc');
    thisDesc.fadeIn();
    return thisDesc;
}

function qualityDesc(visibleQualityBlock, blockID){
    if (visibleQualityBlock == false) {
        //no block is visible
        $('#active_quality').fadeIn();
        $('.quality-block[content-value='+blockID+']').fadeIn();

        $('.arrow-unactive[content-value='+blockID+']').fadeOut('fast', function () {
            $('.arrow-active[content-value='+blockID+']').fadeIn();
        });
        return blockID;
    }
    if ( (visibleQualityBlock != blockID) && (visibleQualityBlock != false) ) {
        //some block is visible, but other is clicked
        $('.arrow-active[content-value='+visibleQualityBlock+']').fadeOut('fast', function () {
            $('.arrow-unactive[content-value='+visibleQualityBlock+']').fadeIn();
        });

        $('.quality-block[content-value='+visibleQualityBlock+']').fadeOut('fast', function () {
            $('.quality-block[content-value='+blockID+']').fadeIn();
        });

        $('.arrow-unactive[content-value='+blockID+']').fadeOut('fast', function () {
            $('.arrow-active[content-value='+blockID+']').fadeIn();
        });

        return blockID;
    }
    if (visibleQualityBlock == blockID) {
        //active block is clicked

        $('.arrow-active[content-value='+visibleQualityBlock+']').fadeOut('fast', function () {
            $('.arrow-unactive[content-value='+visibleQualityBlock+']').fadeIn();
        });

        $('#active_quality').fadeOut();
        $('.quality-block[content-value='+blockID+']').fadeOut();
        return false;
    }
}

function animateServIcon(openedObj) {
    //function fades icon back and hides description
    // var openedObj - currently opened desc DOM
    openedObj.hide();
    openedObj.siblings('[content=service-icon]').fadeIn();
    return false;
}


function getSelectedHtml(punctuation,name) {
    var html = '<span class="selected-box">'+punctuation+'<span><span class="name">'+name+'</span><i class="fa fa-times delete" aria-hidden="true"></i></span></span>';
    return html;
}

function transitionIn(objectOpen, objectClose) {
    if (objectClose) {
        objectClose.addClass('visualHide');
        objectClose.addClass('hide');
    }
    objectOpen.removeClass('hide');
    setTimeout(function () {
        objectOpen.removeClass('visualHide');
    }, 20);
    return true;
}

function transitionOut(objectClose) {
    objectClose.addClass('visualHide');
    objectClose.one('transitionend', function(e){
        objectClose.addClass('hide');
    });
    objectClose.addClass('hide');
}

function serializePricingForm(requestObject) {
    requestObject.name =        $('[name=user-name]').val();
    requestObject.surname =     $('[name=user-surname]').val();
    requestObject.email =       $('[name=user-email]').val();
    requestObject.company =     $('[name=user-company]').val();
    requestObject.country =     $('[name=user-country]').select2('data')[0].text;
    requestObject.city =        $('[name=user-city]').select2('data')[0].text;
    requestObject.service =     $('[name=user-service]').select2('data')[0].text;
    requestObject.industry =    $('[name=user-industry]').select2('data')[0].text;
    requestObject.evaluation =  $('[name=user-evaluation]').find('option:selected').text();
    requestObject.location =    $('[name=user-location]').select2('data')[0].text;
    requestObject.reporting =   $('[name=user-reporting]').select2('data')[0].text;
    requestObject.qtlength =    $('[name=user-qtlength]').val();

    requestObject.othercomment =$('[name=user-othercomment]').val();
    requestObject.othercheckbox=$('[check-for=other]').prop('checked');
    requestObject.comment =     $('[name=user-comment]').val();
    requestObject.complexity =  rangeValues[$('[name=user-complexity]').val()];

    var mspaCheckbox = $('[name=user-mspa]');
    if (mspaCheckbox.prop('checked') === true) {
        requestObject.MSPA = mspaCheckbox.siblings('label').text();
    }
    else{
        requestObject.MSPA = '';
    }
}

function fillVerifyForm(requestObject, rangeValues) {
//    console.log(requestObject);
    $('[name=ver-user-name]').text(requestObject.name);
    $('[name=ver-user-surname]').text(requestObject.surname);
    $('[name=ver-user-email]').text(requestObject.email);
    $('[name=ver-user-company]').text(requestObject.company);
    $('[name=ver-user-industry]').text(requestObject.industry);
    $('[name=ver-user-service]').text(requestObject.service);
    $('[name=ver-user-evaluation]').text(requestObject.evaluation);
    $('[name=ver-user-location]').text(requestObject.location);
    $('[name=ver-user-reporting]').text(requestObject.reporting);
    $('[name=ver-user-complexity]').text(requestObject.complexity);
    $('[name=ver-user-qtlength]').text(requestObject.qtlength);
    $('[name=ver-user-othercomment]').text(requestObject.othercomment);
    $('[name=ver-user-comment]').text(requestObject.comment);
    //requestObject.MSPA ? $('[name=ver-user-mspa]').text('MSPA member') : $('[name=ver-user-mspa]').text('');
    $('[name=ver-user-mspa]').text(requestObject.MSPA);

    $('[name=ver-user-cover]').text('');
    $.each(requestObject.cover, function(index, value){
        $('[name=ver-user-cover]').append(' '+value);
    });

    $('[name=ver-user-language]').text('');
    $.each(requestObject.languages, function(index, value){
        $('[name=ver-user-language]').append(' '+value);
    });

    $('[name=ver-user-verrequirm]').text('');
    $.each(requestObject.verrequirm, function(index, value){
        $('[name=ver-user-verrequirm]').append('- '+value+'<br>');
    });
    if (requestObject.othercheckbox === true) {
        $('[name=ver-user-verrequirm]').append('- Other: '+requestObject.othercomment+'<br>');
    }
    
    results = requestObject;
    $("#submit-form-data-storage").val( decodeURIComponent( $.param(requestObject) ) );
    
}


function getActvNewsContensSubstitute() {
    return '<img src="images/Main_1/arrow-down.png" style="width:38px; height:15px; margin-left:3%; bottom: 20%; position: absolute"><br><br><br>';
}



