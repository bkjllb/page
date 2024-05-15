$(document).ready(function(){
	
	$('input[type=submit]').addClass('fancyButton');
	$('input[type=button]').addClass('fancyButton');
	
	/* Place the contents of the "title" attribute inside the div tags */
	if ($('div.pageTitle').length)
	{
		var title = $('div.pageTitle').attr('title');
		$('div.pageTitle').append(title);
	}

	/* Wrap the contents of the small box heading inside 2 spans so that the "tab" effect works */
	if ($('div.smallBox h3').length)
	{
		$('div.smallBox h3').each(function (){
			if (!($(this).has('span').length) && !$(this).parent().hasClass('expandableBox'))
				$(this).wrapInner('<span><span></span></span>');
		});
	}

	/* 
	 * Checks if the navList containing the active menu item is shown.
	 * If not, the menu will be "scrolled" until that navList is visible.
	 */
	if ($('div.navOuterContainer div.navList a span.active').length > 0)
	{
		var navList = $('div.navOuterContainer div.navList a span.active').parent().parent();
		if (!$(navList).hasClass('shown'))
		{
			var menuDiv = $(navList).parent();
			$('div.navList.shown', menuDiv).removeClass('shown');
			$('div.navList.first', menuDiv).removeClass('first');
			
			if ($(navList).next('div.navList').length <= 0)
				$('.navRightButton', menuDiv).removeClass('enabled');
			
			$('.navLeftButton', menuDiv).addClass('enabled');
			
			$(navList).addClass('shown');
			navList = $(navList).prev('div.navList');
			$(navList).addClass('shown');
			navList = $(navList).prev('div.navList');
			$(navList).addClass('shown');
			$(navList).addClass('first');
		}
	}
	
	/* Handles the menu navigation and highlighting */
	$('a.menuTab, a.menuTabActive').click(function(event) {
		event.preventDefault();
		if ($('.showMenuContainer', this).val() == 'true')
		{
			$('a.menuTabActive').addClass('menuTab');
			$('a.menuTabActive').removeClass('menuTabActive');
			$(this).addClass('menuTabActive');
			$(this).removeClass('menuTab');
			
			$('div.navMenuActive').removeClass('navMenuActive');
			$('div.navOuterContainer').removeClass('shown');
		
			var menuKey = $(this).attr('id');
			menuKey = menuKey.substring(0, menuKey.length - 'MenuTab'.length);
			
			$('#'+menuKey+'MenuContainer').addClass('navMenuActive');
			$('div.navOuterContainer').addClass('shown');
		}
		else
		{
			window.location = $(this).attr('href');
		}
	});
	
	/* Click handler for the "right arrow" menu navigation button. Scrolls the menu to the left. */
	$('.navRightButton').click(function() {
		if ($(this).hasClass('enabled'))
		{
			var menuDiv = $(this).parent();
			$('div.navList.shown', menuDiv).removeClass('shown');
			var navList = $('div.navList.first', menuDiv);
			$(navList).removeClass('first');
			
			navList = $(navList).next('div.navList');
			$(navList).addClass('first');
			$(navList).addClass('shown');
			navList = $(navList).next('div.navList');
			$(navList).addClass('shown');
			navList = $(navList).next('div.navList');
			$(navList).addClass('shown');
			
			if ($(navList).next('div.navList').length == 0)
			{
				$(this).removeClass('enabled');
			}
			$('.navLeftButton', menuDiv).addClass('enabled');
		}
	});

	/* Click handler for the "left arrow" menu navigation button. Scrolls the menu to the right. */
	$('.navLeftButton').click(function() {
		if ($(this).hasClass('enabled'))
		{
			var menuDiv = $(this).parent();
			$('div.navList.shown', menuDiv).removeClass('shown');
			var navList = $('div.navList.first', menuDiv);
			$('div.navList.first', menuDiv).removeClass('first');
			
			navList = $(navList).prev('div.navList');
			$(navList).addClass('first');
			$(navList).addClass('shown');
			navList = $(navList).next('div.navList');
			$(navList).addClass('shown');
			navList = $(navList).next('div.navList');
			$(navList).addClass('shown');
			
			$(this).removeClass('enabled');
			if ($('div.navList.first', menuDiv).prev('div.navList').length > 0)
			{
				$(this).addClass('enabled');
			}
			$('.navRightButton', menuDiv).addClass('enabled');
		}
	});

	/* On click event handler for back buttons */
	if ($('.backButton').length)
	{
		$('.backButton').click(function(eventObj) {
			if (!$(this).hasClass('noAutoBack'))
			{
				eventObj.preventDefault();
				window.history.back();
			}
		});
	}
	
	/* Portal Changes */
	/* On click event handler for back link buttons */
	if ($('.backLinkButton').length)
	{
		$('.backLinkButton').click(function(eventObj) {
			if (!$(this).hasClass('noAutoBack'))
			{
				eventObj.preventDefault();
				window.history.back();
			}
		});
	}
	
	/* On click form submission for href tags with class submitFormLink*/
	$('.submitFormLink').click(function (eventObj){
		eventObj.preventDefault();
        $(this).parents('form').submit();
    });
	
	/*
	 * Generic expandable functionality
	 */
	$('div.expandable.hideOnLoad div.expandableContent').hide();
	$('div.expandable').click(function() {
		$('div.expandableContent', this).toggle(200);
        var accordion = $(this).find('h4 span.accordion');
        if (accordion.hasClass('down'))
            accordion.removeClass('down');
        else
            accordion.addClass('down');
	});

	/* 
	 * Expandable box script.
	 * Adds the clickable class to the heading to change to pointer to a hand.
	 */
	$('div.expandableBox h3').addClass('clickable');
	/* Adds the "minimize" image to the heading */
	$('div.expandableBox h3').append('<div class="expandableIcon upArrow"></div>');
	/* Hides those boxes where "hideOnLoad" is specified, and switches the image to an expand image */
	$('div.expandableBox.hideOnLoad div.expandableBoxContent').hide();
	$('div.expandableBox.hideOnLoad h3 div.expandableIcon').removeClass('upArrow');
	$('div.expandableBox.hideOnLoad h3 div.expandableIcon').addClass('downArrow');
	/* Click event handler for the expandable box heading. Toggles the expansion and contraction */
	$('div.expandableBox h3').click(function() {
		$('div.expandableBoxContent', $(this).parent()).toggle(200);
		
		if ($('div.expandableIcon', this).hasClass('upArrow'))
		{
			$('div.expandableIcon', this).removeClass('upArrow');
			$('div.expandableIcon', this).addClass('downArrow');
		}
		else
		{
			$('div.expandableIcon', this).removeClass('downArrow');
			$('div.expandableIcon', this).addClass('upArrow');
		}
	});

	/*
	 * Initialise any chosen plugin drop down lists.
	 */
	if ($(".chzn-select").length)
	{
		$(".chzn-select").chosen({search_contains: true});
	}
	
	/*
	 * Opens any pdf file links in a new window.
	 */
	$('.pdfFileLink').click(function(eventObj) {
		eventObj.preventDefault();
		window.open($(this).attr('href'), 'PdfDocument' , 'height=630,width=795,resizable,scrollbars,status');
	});

	/* This doesn't always work for all browsers, but it will attempt to disable autocomplete on input fields */
	$('input.disableAutocomplete').attr('autocomplete','off');
	
	/*
	 * On click event handler for popup links.
	 * Pops up a new window.
	 */
	$('a.popupLink').click(function (eventObj) {
		eventObj.preventDefault();
		window.open($(this).attr('href'), $(this).attr('name') , 'height=630,width=795,resizable,scrollbars,status');
	});
	/*
	 * On click event handler for florbit service links.
	 * Pops up a new window.
	 */
	$('a.florbitPopupLink').click(function (eventObj) {
		eventObj.preventDefault();
		window.open($(this).attr('href'), 'FlorbitService' , 'height=630,width=795,resizable,scrollbars,status');
	});
	
	/*
	 * If there is a florbit service link, then attempt to automatically pop up a new window.
	 */
	if ($('a.florbitPopupLink').length)
	{
		var linkUrl = $('a.florbitPopupLink').attr('href');
		window.open(linkUrl, 'FlorbitService' , 'height=630,width=795,resizable,scrollbars,status');
	}
	
	/* If the page has a service account selector, then add the title attribute as an html div element. */
	if ($('#servicePageTitleContainer').length)
	{
		var title = $('#servicePageTitleContainer').attr('title');
		var newText = '<div class="titleText">'+title+'</div>';
		$('#servicePageTitleContainer').prepend(newText);
	}
	
	/*
	 * On change event handler for the service account selector widget.
	 * Submits the service account selector form.
	 */
	$('#serviceAccountSelector').change(function() {
		$('#serviceAccountSelectorForm').submit();
	});
	
	/*
	 * Create the service account selector dialog box.
	 */
	$('#serviceAccountSelectorDialog').dialog({
		autoOpen: false,
		height: 400,
		width: 700,
		modal: true,
		buttons: {
			Close: function() {
				$(this).dialog("close");
			}
		}
	});
	
	/*
	 * Event handler for the select service account button.
	 */
	$('#selectServiceAccountBtn').click(function() {
		$('#serviceAccountSelectorDialog').dialog("open");
	});
	
	/*
	 * Event handler for when the user selects a service account from the table in the dialog.
	 */
	$('#serviceAccountSelectorTable tr.clickable').click(function() {
		$('#serviceAccountSelectorDialog').dialog("close");
		var serviceAccountUsername = $('input[type="hidden"]', $(this)).val();
		$('#serviceAccountSelectorForm #serviceAccountSelector').val(serviceAccountUsername);
		$('#serviceAccountSelectorForm').submit();
	});
	

	/* Click handler for the CPA terms and conditions checkbox - enables or disables the accept button. */
	if ($('#chkCpaAcceptTerms').length)
	{
		$('#chkCpaAcceptTerms').click(function() {
			var checked = $('#chkCpaAcceptTerms').is(':checked');
			$('#btnCpaTermsAccept').attr('disabled',!checked);
		});
	}
	/* works with the truncatable function declared below */
	$('a.truncanator').live("click", function(event) {
		event.preventDefault();
		var truncateTolines = parseInt($(this).attr("data-desired-lines"));
	    var controlElement = $(this).prevAll('.truncate');
	    var lineheight = parseInt(controlElement.css('line-height'))
	    var height = parseInt(controlElement.css('height'));
	    var originalheight = parseInt($(this).attr("data-original-height"));
	    if (height <= lineheight*truncateTolines) {
	    	controlElement.animate({
	            height: originalheight
	        }, 500);
	       $(this).text('-Less')
	    } else {
	    	controlElement.animate({
	            height: lineheight*truncateTolines
	       }, 500);
	       $(this).text('+More')
	    }
	});
});

/* Extend the model a bit with some helper functions */
/* Center an element horizonatally relative to parent, offset by siblings to the left. */
$.fn.centerhorizontalwithoffset = function(offset) { 
    this.css({
    	'margin-left': (((this.parent().innerWidth() - this.outerWidth()) / 2) - offset) + 'px'
    });

    return this;
};
/* Center an element horizontally relative to its parent element */
$.fn.centerhorizontal = function() { 
    this.css({
    	'margin-left': ((this.parent().innerWidth() - this.outerWidth()) / 2) + 'px'
    });

    return this;
};
/* Center an element vertically relative to its parent element, offset by sibbling elements to the top */
$.fn.centerverticalwithoffset = function(offset) {
    this.css({
    	'margin-top': (((this.parent().innerHeight() - this.outerHeight()) / 2) - offset) + 'px'
    });

    return this;
};
/* Center an element vertically relative to its parent element */
$.fn.centervertical = function() {
    this.css({
    	'margin-top': ((this.parent().innerHeight() - this.outerHeight()) / 2) + 'px'
    });

    return this;
};
/* Center an element both vertically and horizontally relative to its parent element */
$.fn.center  = function() {
	this.centerhorizontal();
	this.centervertical();
	
	return this;
};

/* Center an element both vertically and horizontally relative to its parent element, with top and left sibbling offsets */
$.fn.centerwithoffsets  = function(horizonaloffset, verticaloffset) {
	this.centerhorizontalwithoffset(horizonaloffset);
	this.centerverticalwithoffset(verticaloffset);
	return this;
};

/* Truncates an element to the desired number of lines ... note, you need to have the following css to make this work:
 * 
 *  line-height: 15px; -- used to calculate the end size given the number of lines ... make this just slightly bigger than your font size
	overflow: hidden;  -- hides the text when we size the element down
	height: auto;      -- allows the initial height of the element to accommodate all the content and gives me an original height to work with to incorporate some animation
 *  */
$.fn.truncatable = function(desiredlinelines)
{
	var elementToTruncate = this;
	var lineheight = parseInt(elementToTruncate.css('line-height'));
	var height = parseInt(elementToTruncate.css('height'));
	if (height > lineheight*desiredlinelines)
	{
		elementToTruncate.css('height',lineheight*desiredlinelines+'px');
		elementToTruncate.after('<br /><a href="#" data-desired-lines="'+ desiredlinelines +'" data-original-height="' + height + '" class="truncanator">+More</a>');
		elementToTruncate.addClass('truncate');
	}
}

	

