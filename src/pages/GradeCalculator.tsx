import {useState} from "react";
import {FaCalculator} from "react-icons/fa";
import {FiArrowDown} from "react-icons/fi";
import {GradeInput} from "../components/GradeInput.tsx";
import {Result} from "../components/Result.tsx";
import {calcMediaFinal, calcMediaFinalExame, simularExame, simularRegular} from "../utils/functions.ts";
import {GradesProp} from "../Contracts/GradesProp.ts";
import {ResultProp} from "../Contracts/ResultProp.ts";

const GradeCalculator = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [grades, setGrades] = useState<GradesProp>({g1: 0, g2: 0});
    const [result, setResult] = useState<ResultProp>({result: 0});
    const [showResult, setShowResult] = useState(false);

    const tabs = [
        "Média Final",
        "Média Exame",
        "Simular Média Final",
        "Simular Exame"
    ];

    const handleInputChange = (e) => {
        let {value} = e.target;
        const {name, max} = e.target;

        if (value >= Number(max)) {
            e.target.value = max;
            value = max
        }

        setGrades((prev) => ({...prev, [name]: value}));
    };

    const cleanInputs = () => {
        const inputs = document.getElementsByTagName('input');
        for (const input of inputs) {
            input.value = "";
        }
    }
    const calculateGrade = () => {
        const gradesInput: GradesProp = {
            g1: grades.g1,
            g2: grades.g2
        }

        switch (activeTab) {
            case 0:
                setResult({result: calcMediaFinal(gradesInput)});
                break;
            case 1:
                setResult({result: calcMediaFinalExame(gradesInput)});
                break;
            case 2:
                setResult({result: simularRegular(gradesInput), isSimulation: true});
                break;
            case 3:
                setResult({result: simularExame(gradesInput), isSimulation: true});
                break;
            default:
                break;
        }
        setShowResult(true);
    };

    const getInputFields = () => {
        switch (activeTab) {
            case 0:
                return (
                    <div className="space-y-4">
                        <GradeInput grades={grades.g1} onChange={handleInputChange} name={"g1"}
                                    placeholder={"Nota Prova Regular"}/>
                        <GradeInput grades={grades.g2} onChange={handleInputChange} name={"g2"}
                                    placeholder={"Média final das avaliativas semanais"}/>
                    </div>
                );
            case 1:
                return (
                    <div className="space-y-4">
                        <GradeInput grades={grades.g1} onChange={handleInputChange} name={"g1"}
                                    placeholder={"Média final regular"} max={4.99}/>
                        <GradeInput grades={grades.g2} onChange={handleInputChange} name={"g2"}
                                    placeholder={"Prova Exame"}/>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-4">

                        <GradeInput grades={grades.g1} onChange={handleInputChange} name={"g1"}
                                    placeholder={"média final das avaliativas semanais"}/>
                    </div>
                )
            case 3:
                return (
                    <div className="space-y-4">
                        <GradeInput grades={grades.g1} onChange={handleInputChange} name={"g1"}
                                    placeholder={"média final regular"} max={4.99}/>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen">
            <div
                className="h-[calc(100vh-67px)] flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 relative px-4">
                <div
                    className="max-w-screen-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-80">
                    <div className="flex items-center justify-center space-x-2 mb-6">
                        <FaCalculator className="text-2xl text-blue-500 dark:text-blue-300"/>
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Calculadora Univesp</h1>
                    </div>

                    <div className="mb-6">
                        <div className="flex justify-center flex-wrap gap-2">
                            {tabs.map((tab, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setActiveTab(index);
                                        setShowResult(false);
                                        setGrades({g1: 0, g2: 0});
                                        cleanInputs()
                                    }}
                                    className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                                        activeTab === index
                                            ? "bg-blue-500 dark:bg-blue-700 text-white"
                                            : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                                    }`}
                                    role="tab"
                                    aria-selected={activeTab === index}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        {getInputFields()}

                        <div className="flex align-middle justify-center">
                            <button
                                onClick={calculateGrade}
                                className="w-1/2 py-3 bg-blue-500 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                            >
                                <FaCalculator/>
                                <span>Calcular</span>
                            </button>
                        </div>


                        <Result showResult={showResult} result={result.result} isSimulation={result.isSimulation}/>
                    </div>
                </div>
                <div className="absolute bottom-8 animate-bounce">
                    <FiArrowDown className="text-3xl text-blue-500"/>
                </div>
            </div>

            <div className="min-h-screen bg-white dark:bg-gray-900 py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">Como funciona</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Calculadora de Média Final</h3>
                            <p className="text-gray-700 dark:text-gray-400 mb-4">Quer saber sua média final com base nas notas do
                                semestre? Nossa ferramenta faz o cálculo para você!</p>
                            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                                <li>Média final de provas e atividades</li>
                                <li>Considera o peso de cada avaliação</li>
                                <li>Resultado imediato</li>
                            </ul>
                        </div>
                        <div className="p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Simulador de Nota Final</h3>
                            <p className="text-gray-700 dark:text-gray-400 mb-4">Precisa tirar uma nota mínima no exame final de
                                recuperação para
                                passar? Descubra qual é a nota necessária com nosso simulador.</p>
                            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                                <li>Simulação da nota mínima</li>
                                <li>Vários cenários de aprovação</li>
                                <li>Fácil de usar</li>
                            </ul>
                        </div>

                        <div className="p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Cálculo da Média com Exame</h3>
                            <p className="text-gray-700 dark:text-gray-400 mb-4">Se sua instituição permite exames finais de recuperação,
                                nossa
                                ferramenta faz o cálculo da média considerando o exame.</p>
                            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                                <li>Considera notas e o exame final</li>
                                <li>Cálculos automáticos</li>
                                <li>Resultados rápidos e precisos</li>
                            </ul>
                        </div>

                        <div className="p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Ferramenta Gratuita e Simples</h3>
                            <p className="text-gray-700 dark:text-gray-400 mb-4">Nossa calculadora é 100% gratuita, disponível a
                                qualquer hora e fácil de usar. Ideal para estudantes de todos os níveis!</p>
                            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                                <li>Grátis para sempre</li>
                                <li>Acessível de qualquer dispositivo</li>
                                <li>Sem necessidade de login</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Disciplinas bimestrais regulares</h3>

                        <p className="text-gray-700 dark:text-gray-400 mb-4">
                            Nas disciplinas bimestrais regulares, existem três instrumentos independentes e
                            articulados para verificação da aprendizagem das habilidades e conteúdos propostos:
                        </p>
                        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 mb-4">
                            <li>40% da nota é composta por atividades avaliativas propostas ao longo do bimestre e
                                realizadas no próprio AVA.
                            </li>
                            <li>Os outros 60% são da prova presencial, realizada ao fim do bimestre no polo,
                                conforme o Calendário Acadêmico de cada curso e o horário da turma. No AVA, os
                                professores informam, na última semana da disciplina, se há necessidade de levar
                                algum material específico para a realização da prova.
                            </li>
                            <li>Estudantes que não obtiverem a média necessária para a aprovação poderão realizar o
                                exame final da disciplina.
                            </li>
                        </ul>


                        <p className="text-gray-700 dark:text-gray-400 mb-4">
                            <strong>Observação</strong>: A pontuação do exame varia de 0 (zero) a 10 (dez). Para
                            calcular a média final após a prova de exame, soma-se a nota de exame à média obtida
                            anteriormente (Média final na disciplina no bimestre, composta pela prova regular e
                            atividades realizadas no AVA); esse total é dividido por dois e o resultado será a média
                            final do aluno na respectiva disciplina, após exame.
                        </p>

                        <p className="text-gray-700 dark:text-gray-400 mb-4">Conheça termos e alguns detalhes sobre sua prova: <a
                            href="https://apps.univesp.br/glossario-de-provas/">Glossário de provas</a></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GradeCalculator;
