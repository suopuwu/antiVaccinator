var counter = 1800;
var counter2 = 0;
$(function () {
    function changeCounter() {
        counter--;
        counter2++;
        $('#countDown').html(counter);
        setTimeout(changeCounter, 300 * Math.sin(counter2) + 200);
    }
    changeCounter();
});
