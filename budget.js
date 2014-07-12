document.addEventListener('DOMContentLoaded', function(){

    var $income = document.getElementById('income'),
        $expenses = document.getElementById('expenses'),
        $goal = document.getElementById('goal'),
        $today = document.getElementById('today'),
        _daily = localStorage.getItem('daily'),
        _income = localStorage.getItem('income'),
        _expenses = localStorage.getItem('expenses'),
        _goal = localStorage.getItem('goal');

        $income.value = _income;
        $expenses.value = _expenses;
        $goal.value = _goal;
        $today.textContent = _daily;

    document.getElementById('submit').onclick = function() {
        var income = $income.value,
            expenses = $expenses.value,
            goal = $goal.value,
            budget,
            daily;

        budget = income - expenses - goal;

        daily = (budget / 30).toFixed(2);

        $today.textContent = daily;

        localStorage.setItem('daily', daily);
        localStorage.setItem('income', income);
        localStorage.setItem('expenses', expenses);
        localStorage.setItem('goal', goal);
    };
});
