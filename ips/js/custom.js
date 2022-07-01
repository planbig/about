// parallax.js 錯視
$(document).ready(function() {
	var scene = document.getElementById('scene');
	var parallaxInstance = new Parallax(scene, {
		relativeInput: true,
		scalarX: 0,
		scalarY: 10,
	});
});

// jQuery custom content scroller
(function($) {
	$(window).on("load", function() {
		// 語法寫在前面的權限較高
		// scrollInertia: 300, 滾動時間 毫秒
		$("body").mCustomScrollbar({
			axis: "yx",
			theme: "minimal",
			scrollInertia: 300,
		});
		$(".scroll").mCustomScrollbar({
			axis: "y",
			theme: "minimal",
			scrollInertia: 300,
		});
		$(".scroll-x").mCustomScrollbar({
			axis: "x",
			theme: "minimal",
			scrollInertia: 300,
			alwaysShowScrollbar: 2,
		});
		$(".scroll-yx").mCustomScrollbar({
			axis: "yx",
			theme: "minimal",
			scrollInertia: 300,
		});
	});
})(jQuery);

// Sidebar
$(document).ready(function() {
	$('#dismiss, .overlay').on('click', function() {
		$('#sidebar').removeClass('active');
		$('.overlay').removeClass('active');
	});

	$('#sidebarCollapse').on('click', function() {
		$('#sidebar').addClass('active');
		$('.overlay').addClass('active');
		$('.collapse.in').toggleClass('in');
		$('a[aria-expanded=true]').attr('aria-expanded', 'false');
	});
	// Sidebar 退出選端自動收合
	$("#sidebarCollapse").click(function() {
		$(".list-unstyled.collapse").removeClass("show");
	});
});

// DatePicker
$('#newDate input').datepicker({
	format: "yyyy/mm/dd",
	autoclose: true,
	todayHighlight: true,
});

var fieldDate = new Date()
var dd = fieldDate.getDate();
var mm = fieldDate.getMonth() + 1;
var yyyy = fieldDate.getFullYear();

if (dd < 10) {
	dd = '0' + dd;
}

if (mm < 10) {
	mm = '0' + mm;
}

fieldDate = yyyy + '/' + mm + '/' + dd;

window.onload = function() {
	document.getElementById('newDateInput').value = fieldDate;
};

// List View toggleClass
$(document).ready(function() {
	$('#list').click(function(event) {
		event.preventDefault();
		$('#users .item').addClass('list-group-item');
	});
	$('#grid').click(function(event) {
		event.preventDefault();
		$('#users .item').removeClass('list-group-item');
		$('#users .item').addClass('grid-group-item');
	});
});


// Settings
$('#btn_reset').click(function() {
	alert('RESET!');
	$('#mailSettings input, select').prop('disabled', false);
	$('#btn_reset').prop('disabled', true);
	$('#btn_verify').prop('disabled', false);

});
$('#btn_verify').click(function() {
	alert('VERIFY!');
	$('#mailSettings input, select').prop('disabled', true);
	$('#btn_reset').prop('disabled', false);
	$('#btn_verify').prop('disabled', true);

});


// Settings-search
function myFunction() {
	// Declare variables
	var input, filter, ul, li, a, i, txtValue;
	input = document.getElementById('myInput');
	filter = input.value.toUpperCase();
	ul = document.getElementById("example");
	li = ul.getElementsByTagName('li');

	// Loop through all list items, and hide those who don't match the search query
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("label")[0];
		txtValue = a.textContent || a.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}

