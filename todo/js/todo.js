$(document).ready(function() {
	$('.addtask').click(function() {
		var newTask = $('input[name=newtask]').val();
		var toAdd = '<div class="taskone"><input type="checkbox" class="checktask" name=""><p class="task">' + newTask + '</p></div>';
		$('.wraptask').append(toAdd);
	});
});