define(['Fuzzyfication', 'KnowledgeBase'], function (Fuzzyfication, KnowledgeBase) {

    class BreakingDistanceProblem {

        constructor(valueData) {
            this.fuzzy = new Fuzzyfication(valueData);
            this.knowledgeBase = new KnowledgeBase(this.fuzzy.numbers, valueData);
        }

        setValue() {
            document.getElementById('output').innerHTML ="System zahamuje z moca: " + this.knowledgeBase.value.toPrecision(4) + "%";
        }
    }

    return BreakingDistanceProblem;
});