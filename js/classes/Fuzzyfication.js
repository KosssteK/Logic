define(['Graph', 'Level'], function (Graph, Level) {

    class Fuzzyfication {
        constructor(valueData) {
            this.valueData = valueData;
            this.createGraphs();
            this.numbers = this.getNumbers();
        }

        createGraphs() {
            this.distanceGraph = new Graph([
                new Level(0, [-1000, 10, 25]),
                new Level(1, [10, 25, 40]),
                new Level(2, [25, 40, 1000])
            ]);

            this.speedGraph = new Graph([
                new Level(0, [-1000, 20, 45]),
                new Level(1, [20, 45, 60]),
                new Level(2, [45, 60, 1000])
            ]);
        }

        getNumbers() {
            return [this.getFirstValue(), this.getSecondValue()]
        }

        getFirstValue() {
            let participation = [-2, -2, -2];
            let firstGraph = this.distanceGraph.charts;
            for (let graph = 0; graph < firstGraph.length; graph++) {
                for (let chart = 0; chart < firstGraph.length - 1; chart++) {
                    if (this.valueData[0] >= firstGraph[graph].nodes[chart] && this.valueData[0] <= firstGraph[graph].nodes[chart + 1]) {
                        firstGraph[graph].value[chart] = this.getNumber(0, firstGraph[graph], chart);
                    } else {
                        firstGraph[graph].value[chart] = -2;
                    }
                }
                participation[graph] = Math.max(firstGraph[graph].value[0],firstGraph[graph].value[1]);
            }
            return participation;
        }

        getSecondValue() {
            let participation = [-2, -2, -2];
            let firstGraph = this.speedGraph.charts;
            for (let graph = 0; graph < firstGraph.length; graph++) {
                for (let chart = 0; chart < firstGraph.length - 1; chart++) {
                    if (this.valueData[1] >= firstGraph[graph].nodes[chart] && this.valueData[1] <= firstGraph[graph].nodes[chart + 1]) {
                        firstGraph[graph].value[chart] = this.getNumber(1, firstGraph[graph], chart);
                    } else {
                        firstGraph[graph].value[chart] = -2;
                    }
                }
                participation[graph] = Math.max(firstGraph[graph].value[0],firstGraph[graph].value[1]);
            }
            return participation;
        }

        getNumber(graphNumber, graph, chart) {
            let value = 0;
            if (chart === 0) {
                value = (this.valueData[graphNumber] - graph.nodes[chart]) / (graph.nodes[chart + 1] - graph.nodes[chart]);
            } else {
                value = (graph.nodes[chart + 1] - this.valueData[graphNumber]) / (graph.nodes[chart + 1] - graph.nodes[chart]);
            }
            return value;
        }


    }

    return Fuzzyfication;
});