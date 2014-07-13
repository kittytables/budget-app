document.addEventListener('DOMContentLoaded', function(){

    var $income = document.getElementById('income'),
        $expenses = document.getElementById('expenses'),
        $goal = document.getElementById('goal'),
        $today = document.getElementById('today');

    var data = {
        spending: new Array(31),
        income: null,
        daily: null,
        expenses: null,
        goal: null
    };

    var computeValue = function() {
        data.income = $income.value;
        data.expenses = $expenses.value;
        data.goal = $goal.value;
        var budget,
            daily;

        budget = data.income - data.expenses - data.goal;

        daily = (budget / 30).toFixed(2);

        $today.textContent = daily;
        data.daily = daily;
    };

    var saveData = function() {
        localStorage.setItem('data', JSON.stringify(data));
    };

    var saved = localStorage.getItem('data');

    if(saved)
        data = JSON.parse(saved);

    $income.value = data.income;
    $expenses.value = data.expenses;
    $goal.value = data.goal;
    $today.textContent = data.daily;

    $income.oninput = computeValue;
    $expenses.oninput = computeValue;
    $goal.oninput  = computeValue;

    document.getElementById('save').onclick = saveData;

});
