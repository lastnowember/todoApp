$(document).ready(function() {
	$('.addtask').click(function() {
		var inputTask = $('input[name=newtask]')
		var newTask = $(inputTask).val();
		var place = $('.inputask').attr('placeholder');
		var toAdd = '<div class="taskone"><input type="checkbox" class="checktask" name="checky"><p class="task">' + newTask + '</p></div>';
		$('.wraptask').prepend(toAdd);
		$(inputTask).val('');
	});

	$('input[type="checkbox"]').click(function() {
		var check = $('input[type="checkbox"]').prop('checked');
		if (check == true) {
			$('.task').css("text-decoration","line-through");
		}
	});
});