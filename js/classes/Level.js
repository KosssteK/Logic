define(['Names'], function (Names) {

    class Level {

        constructor(position, nodes){
            this.name = Names[position];
            this.nodes = nodes;
            this.value = [];
        }

    }

    return Level;
});