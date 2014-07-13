document.addEventListener('DOMContentLoaded', function(){

    var $income = document.getElementById('income'),
        $expenses = document.getElementById('expenses'),
        $goal = document.getElementById('goal'),
        $daily = document.getElementById('daily'),
        $day = document.getElementById('day'),
        $spent = document.getElementById('spent'),
        $budget = document.getElementById('budget'),
        date = new Date();

    var data = {
        spending: new Array(32),
        income: null,
        daily: null,
        expenses: null,
        goal: null
    };

    function daysInMonth(month,year) {
        return new Date(year, month, 0).getDate();
    }

    var computeValue = function() {
        data.income = $income.value;
        data.expenses = $expenses.value;
        data.goal = $goal.value;
        var budget,
            daily;

        budget = data.income - data.expenses - data.goal;
        data.daily = (budget / totaldays).toFixed(2);
        $daily.textContent = data.daily;
    };

    var saveData = function() {
        localStorage.setItem('data', JSON.stringify(data));
    };

    var addSpending = function() {
        if ($day.value === today.toString())
        {
            console.log('hello');
            $budget.textContent = data.daily - $spent.value;
        }
        data.spending[$day.value] = $spent.value;
        saveData();
    };

    var showSpending = function() {
        $spent.value = data.spending[$day.value];
    };

    var saved = localStorage.getItem('data'),
        totaldays = daysInMonth(date.getMonth(), 2014),
        today = date.getDate();

    if(saved)
        data = JSON.parse(saved);

    $income.value = data.income;
    $expenses.value = data.expenses;
    $goal.value = data.goal;
    $day.value = today;
    $day.setAttribute('max', totaldays);
    $daily.textContent = data.daily;
    $budget.textContent = data.daily - data.spending[today];
    showSpending();

    $income.oninput = computeValue;
    $expenses.oninput = computeValue;
    $goal.oninput  = computeValue;
    $spent.oninput = addSpending;
    $day.oninput = showSpending;

    document.getElementById('save').onclick = saveData;

});
