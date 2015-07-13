var verticalx = 5;
var horizontaly = 1;
var color = 'red';
var hover = 0;

	$(document).ready(function() {
		$('#info').accordion();
		$('#tile').click(function() {
			$('#tile').css("background-color","black");
		});

		$('.colors').click(function() {
			color = this.id;
		});
		$('#refresh').click(function() {
			gridclear();
			verticalx = $('#gsize').val();
			if(verticalx < 2) {
				verticalx = 2;
				mgrid();
			} else if(verticalx > 20) {
				verticalx = 20;
				mgrid();
			} else {
				mgrid();
			}

		})
		$('#reset').click(function() {
			gridclear();
			verticalx = 5;
			horizontaly = 1;
			mgrid();
		})
		mgrid();
	});	

function mgrid() {
	var x = verticalx;
	var y = 0;
	for (var i = 0; i < x+1; i++) {
		if(i == x){
			bgrid();
		} else if(y < x) {
			agrid();
			y++;
		} else {
			return;
		};
	};
};

function agrid() {
$(document).ready(function() {
	$('#gridhere').append('<div class="tile"></div>');
});

	$(document).on('click','.tile',function() {
			$(this).css("background-color",color);
		});
};

function bgrid() {
	$(document).ready(function() {
		if(horizontaly < verticalx) {
			$('#gridhere').append('<br/>');
			horizontaly += 1;
			mgrid();
		} else {
			horizontaly = 1;
			return;
		}
	});
};

function gridclear() {
	$('#gridhere').empty('.tile');
}

function hoveroption() {
	if($('#hovereffect').is(':checked')) {
		hover = 1;
		hovering();
	} else {
		hover = 0;
		hovering();
	}
}

function hovering() {
		$('.tile').hover(function() {
			if (hover) {
				$(this).css("background-color",color);
			} else{
			};
		});
}
