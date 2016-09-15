$(document).ready(function() { /*
		 */
	var n = 1;
	$('.addtask').click(function() {
		var inputTask = $('input[name=newtask]')
		var newTask = $(inputTask).val();
		var place = $('.inputask').attr('placeholder');
		var toAdd = '<div id="taskdata" class="taskone" data-tasks="' + n + '"><a href="#" id="checklink" class="checki"><img src="./img/check.png" id="icheck" aria-hidden="true"></a><p class="task">' + newTask + '</p></div>';
		$('.wraptask').prepend(toAdd);
		$(inputTask).val('');
		n = n + 1;
	});

	var idTask = $('#taskdata').data('tasks');

	$('.wraptask', this).on('click', 'img', function() {
		var linkCheck = $('#checklink', this).attr('class');
		var idTask = $('#taskdata').data('tasks');
		if (linkCheck == 'checky') {
			$('#icheck', this).attr('src','./img/check.png');
			$('.task', this).css('text-decoration','none');
			$('.task', this).css('color','#000000');
			$('#checklink', this).attr('class', 'checki');
		} else {
			$('#icheck', this).attr('src','./img/check_2.png');
			$('.task', this).css('text-decoration','line-through');
			$('.task', this).css('color','#cccccc');
			$('#checklink', this).attr('class', 'checky');
		}
		
	});


});