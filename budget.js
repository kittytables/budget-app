document.addEventListener('DOMContentLoaded', function(){

    var _daily = localStorage.getItem('daily'),
        $income = document.getElementById('income'),
        $expenses = document.getElementById('expenses'),
        $goal = document.getElementById('goal'),
        $today = document.getElementById('today');

        $today.textContent = _daily;

    document.getElementById('submit').onclick = function() {
        var income = $income.value,
            expenses = $expenses.value,
            goal = $goal.value,
            budget,
            daily;

        budget = income - expenses - goal;

        daily = (budget / 30).toFixed(2);

        localStorage.setItem('daily', daily);

        $today.textContent = daily;
    };
});
