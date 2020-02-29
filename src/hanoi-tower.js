module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = Math.pow(2, disksNumber) - 1;

    let speed = turnsSpeed / 3600;
    let time =(turns / speed);
    return {
        turns: turns,
        seconds: time
    }
};