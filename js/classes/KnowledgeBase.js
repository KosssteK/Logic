define([], function () {

    class KnowledgeBase {
        constructor(numbers, value) {
            this.valueData = value;
            this.dist = ((40 - Number(value[0]))*100)/40;
            this.speed = (Number(value[1])*100)/60;
            this.value = this.rules(numbers);
            this.setValue();
        }

        setValue(){
            if(this.value > 100) { this.value = 100;}
            if(this.value < 0) {this.value = 0;}
        }

        rules(numbers) {
            let functions = [];
            let balanceArray = [];

            // lewa - 0 - niski 1 - sredni 2 - duzy  - dystans
            // prawa - 0 - niska 1 srednia 2 duza  - predkosc


            if (numbers[0][2] > 0 && numbers[1][0] > 0) {
                let balance = Math.max(numbers[0][2], numbers[1][0]);
                let multi1 = 3;
                let multi2 = 0.2;
                let value = multi1 * this.dist + multi2 * this.speed;
                let valueMax = multi1 * 100 + multi2 * 100;
                value = value / valueMax * 100;
                balanceArray.push(balance);
                functions.push(value);
            }
            if (numbers[0][2] > 0 && numbers[1][1] > 0) {
                let balance = Math.max(numbers[0][2], numbers[1][1]);
                let multi1 = 2;
                let multi2 = 1;
                let value = multi1 * this.dist + multi2 * this.speed;
                let valueMax = multi1 * 100 + multi2 * 100;
                value = value / valueMax * 100;
                balanceArray.push(balance);
                functions.push(value);
            }
            if (numbers[0][1] > 0 && numbers[1][0] > 0) {
                let balance = Math.max(numbers[0][1], numbers[1][0]);
                let multi1 = 1;
                let multi2 = 0.5;
                let value = multi1 * this.dist + multi2 * this.speed;
                let valueMax = multi1 * 100 + multi2 * 100;
                value = value / valueMax * 100;
                balanceArray.push(balance);
                functions.push(value);
            }
            if (numbers[0][2] > 0 && numbers[1][2] > 0) {
                let balance = Math.max(numbers[0][2], numbers[1][2]);
                let multi1 = 2.75;
                let multi2 = 2.25;
                let value = multi1 * this.dist + multi2 * this.speed;
                let valueMax = multi1 * 100 + multi2 * 100;
                value = value / valueMax * 100;
                balanceArray.push(balance);
                functions.push(value);
            }
            if (numbers[0][1] > 0 && numbers[1][1] > 0) {
                let balance = Math.max(numbers[0][1], numbers[1][1]);
                let multi1 = 1;
                let multi2 = 1;
                let value = multi1 * this.dist + multi2 * this.speed;
                let valueMax = multi1 * 100 + multi2 * 100;
                value = value / valueMax * 100;
                balanceArray.push(balance);
                functions.push(value);
            }
            if (numbers[0][0] > 0 && numbers[1][0] > 0) {
                let balance = Math.max(numbers[0][0], numbers[1][0]);
                let multi1 = 2.25;
                let multi2 = 2.75;
                let value = multi1 * this.dist + multi2 * this.speed;
                let valueMax = multi1 * 100 + multi2 * 100;
                value = value / valueMax * 100;
                balanceArray.push(balance);
                functions.push(value);
            }
            if (numbers[0][1] > 0 && numbers[1][2] > 0) {
                let balance = Math.max(numbers[0][1], numbers[1][2]);
                let multi1 = 2;
                let multi2 = 3;
                let value = multi1 * this.dist + multi2 * this.speed;
                let valueMax = multi1 * 100 + multi2 * 100;
                value = value / valueMax * 100;
                balanceArray.push(balance);
                functions.push(value);
            }
            if (numbers[0][0] > 0 && numbers[1][1] > 0) {
                let balance = Math.max(numbers[0][0], numbers[1][1]);
                let multi1 = 1;
                let multi2 = 4;
                let value = multi1 * this.dist + multi2 * this.speed;
                let valueMax = multi1 * 100 + multi2 * 100;
                value = value / valueMax * 100;
                balanceArray.push(balance);
                functions.push(value);
            }
            if (numbers[0][0] > 0 && numbers[1][2] > 0) {
                let balance = Math.max(numbers[0][0], numbers[1][2]);
                let multi1 = 0.2;
                let multi2 = 5;
                let value = multi1 * this.dist + multi2 * this.speed;
                let valueMax = multi1 * 100 + multi2 * 100;
                value = value / valueMax * 100;
                balanceArray.push(balance);
                functions.push(value);
            }

            let upper = 0;
            let lower = 0;
            for(let position = 0; position < functions.length; position++){
                upper += Number(functions[position]) * balanceArray[position];
                lower += balanceArray[position];
            }
            return upper / lower;
        }

    }

    return KnowledgeBase;
});