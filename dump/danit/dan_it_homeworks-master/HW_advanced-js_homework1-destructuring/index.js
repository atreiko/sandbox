'use strict';

// ========== 1 ===========
{
    const city = ['Kyiv', 'Berlin', 'Dubai', 'Moscow', 'Paris'];
    const [firstCapital, secondCapital, thirdCapital, fourthCapital, fifthCapital] = city;
    console.log(`Ukraine: ${firstCapital}, Germany: ${secondCapital}, UAE: ${thirdCapital}, Russia: ${fourthCapital}, France: ${fifthCapital}`);
}
// ========== 2 ===========
{
    const employee = {
        name: 'Billy',
        salary: 500,
    }

    const { name, salary } = employee;
    console.log(name, salary);
}
// ========== 3 ==========
{
    const array = ['value', 'showValue']
    let [value, showValue] = array;
    alert(value);
    alert(showValue);
}