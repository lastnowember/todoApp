$(document).ready(function() {
	$('.addtask').click(function() {
		var newTask = $('input[name=newtask]').val();
		var toAdd = '<div class="taskone"><input type="checkbox" class="checktask" name="checky"><p class="task">' + newTask + '</p></div>';
		$('.wraptask').prepend(toAdd);
	});

	$('input[type="checkbox"]').click(function() {
		var check = $('input[type="checkbox"]').prop('checked');
		if (check == true) {
			$('.task').css("text-decoration","line-through");
		}
	});
});