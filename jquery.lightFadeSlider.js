(function($){
	"use strict"

	var defaults = {
		pause: 5000,
		speed: 1500,
		height: 650,
		fullHeight: false
	};

	$.fn.lightFadeSlider = function(options){
		if ( this.find(' > div ').length <= 1 )
			return this;

		var settings = $.extend( {}, defaults, options ),
			$el = this;

		$el.addClass('lightFadeSliderWrap');

		$el.find(' > div ').each(function( index, e )
		{
			if ( 0 === index )
				$(e).css('display','block');
			else
				$(e).css('display','none');
		});

		$el.css('height', setHeight());

		function setHeight(){
			var height = settings.height;

			if ( settings.fullHeight ){
				height = $(window).height();

				$(window).resize(function(){
					$el.css('height', $(window).height());
				});
			}

			return height;
		}

		setInterval(function(){

			$el.find(' > div:first')
			.fadeOut(settings.speed)
			.next()
			.fadeIn(settings.speed)
			.end()
			.appendTo($el);

		}, settings.pause);

		return this;
	}

}( jQuery ));