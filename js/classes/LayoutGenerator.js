define(['BreakingDistanceProblem'], function (BreakingDistanceProblem) {

    class LayoutGenerator {

        constructor() {
            this.createDiv("Distance:");
            this.createX1();
            this.createDiv("Speed:");
            this.createX2();
            this.createSubmitButton();
            this.createOutput();
        }

        createDiv(name){
            let div = document.createElement('div');
            div.id = 'div1';
            div.innerHTML = name;
            document.body.appendChild(div);
        }

        createX1() {
            let x1 = document.createElement('input');
            x1.id = 'x1';
            x1.value = 1;
            document.body.appendChild(x1);
        }

        createX2() {
            let x2 = document.createElement('input');
            x2.id = 'x2';
            x2.value = 59;
            document.body.appendChild(x2);
        }

        createSubmitButton() {
            let button = document.createElement('BUTTON');
            button.id = 'submit';
            button.innerHTML = "Submit";
            button.onclick = function () {
                this.data = new BreakingDistanceProblem(this.getFieldData());
                this.value = this.data.setValue();
            }.bind(this);
            document.body.appendChild(button);
        }

        createOutput() {
            let output = document.createElement('div');
            output.id = 'output';
            output.innerHTML = "Wynik";
            document.body.appendChild(output)
        }

        getFieldData() {
            return [document.getElementById('x1').value, document.getElementById('x2').value];
        }
    }

    return LayoutGenerator
});