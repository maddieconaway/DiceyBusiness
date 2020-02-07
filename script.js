document.addEventListener('DOMContentLoaded', function () {
    let diceCnt = 1;
    let diceArr = [];
    class Die {
        constructor(id) {
            this.id = id;
            this.roll();
        }

        diceValue() {
            return this.value;
        }

        id() {
            return this.id;
        }

        roll() {
            this.value = Math.floor(Math.random() * 6) + 1;
            return this.value;
        }
    }

    let btnGenerateDie = document.getElementById('btnGenerateDie');
    let btnRollDice = document.getElementById('btnRollDice');
    let btnSumDice = document.getElementById('btnSumDice');

    let groupDiv = document.createElement('div');
    groupDiv.className = 'group-div';
    document.body.appendChild(groupDiv);

    btnRollDice.addEventListener('click', (e) => {
        const dice = document.getElementsByClassName('dice');
        for (i = 0; i < dice.length; i++) {
            diceArr[i].roll();
            dice[i].innerText = diceArr[i].value;
        }
    });

    btnGenerateDie.addEventListener('click', (e) => {
        let dice = new Die(diceArr.length + 1);
        diceArr.push(dice);
        let div = document.createElement('div');
        div.id = dice.id;
        div.className = 'dice';
        div.innerText = dice.value;
        div.addEventListener('click', rollSingleDie);

        groupDiv.appendChild(div);
        div.addEventListener('dblclick', deleteSingleDie);
    });

    btnSumDice.addEventListener('click', (e) => {
        sumDice();
    });

    function rollSingleDie(e) {
        for (i = 0; i < diceArr.length; i++) {
            let dice = diceArr[i];
            if (dice.id == e.target.id) {
                dice.roll();
                e.target.innerText = dice.value;
                break;
            }
        }
    }

    function deleteSingleDie(e) {
        let t = e.target.id;
        e.target.parentNode.removeChild(e.target);
        for (i = 0; i < diceArr.length; i++) {
            if (diceArr[i].id == t) {
                diceArr.splice(i, 1);
                break;
            }
        }
    }

    function sumDice() {
        let t = 0;
        for (i = 0; i < diceArr.length; i++) {
            t += diceArr[i].value;
        }
        alert(`Sum: ${t}`);
    }
});