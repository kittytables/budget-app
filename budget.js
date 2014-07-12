document.addEventListener('DOMContentLoaded', function(){

	var $income = document.getElementById('income'), 
		$expenses = document.getElementById('expenses'),
		$goal = document.getElementById('goal');

	document.getElementById('submit').onclick = function() {
		var income = $income.value,
			expenses = $expenses.value,
			goal = $goal.value, 
			budget,
			daily;

		budget = income - expenses - goal;

		daily = budget / 30;

		document.getElementById('today').textContent = daily;
	};
});