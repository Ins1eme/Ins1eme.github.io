$(document).ready(function(){
	
	$(".mobile_menu , .category_title").click(function(){
		$(".mobile_menu").toggleClass("close_menu");
	});

	var rangeSlider = $("#range");

	rangeSlider.ionRangeSlider({
		type: "double",
		min: 0,
		max: 200,
		from: 5,
		to: 120,
		hide_min_max: true,
		hide_from_to: true,
	});

	rangeSlider.on("change", function(){
        var value = $(this).prop("value").split(";");
   		$(".value_to").text("$" + value[0]);
   		$(".value_from").text("$" + value[1]);
	});

	$(".content_item__rating").raty();

	$(".pages_item").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});

	$(".toggle_menu").click(function(){
		$(this).find(".sort_item__arrow").toggleClass("rotate_arrow");
		$(this).next().slideToggle(300);
	});

	$(".content_icon").click(function(){
		$(this).toggleClass("favourite");
	});
	
	var asideWidth = $("aside").width();
	var aside = $("aside");
	var boolean = true;
	var asideButton = $(".aside_button__wrapper")

	$(".aside_button__wrapper").click(function(){
		$(this).addClass("aside_button__active");

		aside.animate({
			"left" : 0
		},300).addClass("show_aside");

		$("body").animate({
			"left" : asideWidth
		},300).addClass("hide_body");

		boolean= false;
	});

	$(document).click(function(event){
		if(boolean == true && !aside.is(event.target) && aside.has(event.target).length === 0){

			asideButton.removeClass("aside_button__active");

			aside.animate({
				"left" : -asideWidth
			},300).removeClass("show_aside");

			$("body").animate({
				"left": 0
			}).removeClass("hide_body");

		}
		else{
			boolean= true;
		}
		
	});
});
