requirejs.config({
    paths: {
        script: 'js/script',
        BreakingDistanceProblem: 'js/classes/BreakingDistanceProblem',
        LayoutGenerator: 'js/classes/LayoutGenerator',
        Level: 'js/classes/Level',
        Names: 'js/classes/Names',
        Fuzzyfication: 'js/classes/Fuzzyfication',
        Graph: 'js/classes/Graph',
        KnowledgeBase: 'js/classes/KnowledgeBase'
    }
});
require(['script']);