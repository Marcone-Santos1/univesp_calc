import {ChangeEvent, useEffect, useState} from "react";
import {FaCalculator} from "react-icons/fa";
import {FiArrowDown} from "react-icons/fi";
import {GradeInput} from "../components/GradeInput.tsx";
import {Result} from "../components/Result.tsx";
import {
  calcMediaFinal,
  calcMediaFinalExame,
  loadHistoryFromStorage,
  simularExame,
  simularRegular
} from "../utils/functions.ts";
import {GradesProp} from "../Contracts/GradesProp.ts";
import {ResultProp} from "../Contracts/ResultProp.ts";
import {HistoryEntryProp} from "../Contracts/HistoryEntryProp.ts";
import {History} from "../components/History.tsx";

export const GradeCalculator = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [grades, setGrades] = useState<GradesProp>({g1: 0, g2: 0});
  const [result, setResult] = useState<ResultProp>({result: 0});
  const [showResult, setShowResult] = useState(false);

  const [history, setHistory] = useState<HistoryEntryProp[]>(loadHistoryFromStorage);

  useEffect(() => {
    localStorage.setItem('univespCalcHistory', JSON.stringify(history));
  }, [history]);


  const tabs = [
    "Média Final",
    "Média Exame",
    "Simular Média Final",
    "Simular Exame"
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let {value} = e.target;
    const {name, max} = e.target;

    if (Number(value) >= Number(max)) {
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

  const addToHistory = (calcResult: ResultProp) => {
    const newEntry: HistoryEntryProp = {
      id: new Date().toISOString(),
      type: tabs[activeTab],
      result: calcResult.isSimulation ? `Precisa de ${calcResult.result.toFixed(2)}` : calcResult.result.toFixed(2),
      date: new Date().toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'}),
    };
    setHistory(prevHistory => [newEntry, ...prevHistory].slice(0, 10));
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const calculateGrade = () => {
    const gradesInput: GradesProp = {
      g1: grades.g1,
      g2: grades.g2
    }

    let newResult: ResultProp = { result: 0 };

    switch (activeTab) {
      case 0:
        newResult = {result: calcMediaFinal(gradesInput)};
        break;
      case 1:
        newResult = {result: calcMediaFinalExame(gradesInput)};
        break;
      case 2:
        newResult = {result: simularRegular(gradesInput), isSimulation: true};
        break;
      case 3:
        newResult = {result: simularExame(gradesInput), isSimulation: true};
        break;
      default:
        break;
    }
    setResult(newResult);
    setShowResult(true);
    addToHistory(newResult);
  };

  const getInputFields = () => {
    switch (activeTab) {
      case 0:
        return (
          <div className="space-y-4">
            <GradeInput onChange={handleInputChange} name={"g1"}
                        placeholder={"Nota Prova Regular"}/>
            <GradeInput onChange={handleInputChange} name={"g2"}
                        placeholder={"Média final das avaliativas semanais"}/>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <GradeInput onChange={handleInputChange} name={"g1"}
                        placeholder={"Média final regular"} max={4.99}/>
            <GradeInput onChange={handleInputChange} name={"g2"}
                        placeholder={"Prova Exame"}/>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">

            <GradeInput onChange={handleInputChange} name={"g1"}
                        placeholder={"média final das avaliativas semanais"}/>
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <GradeInput onChange={handleInputChange} name={"g1"}
                        placeholder={"média final regular"} max={4.99}/>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-[calc(100vh-67px)]">
      <div
        className="h-[calc(100vh-67px)] flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 relative px-4">
        <div
          className="max-w-screen-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-80">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <FaCalculator className="text-2xl text-blue-500 dark:text-blue-300"/>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Calculadora Univesp</h2>
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

            <History entries={history} onClear={clearHistory} />
          </div>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <FiArrowDown className="text-3xl text-blue-500"/>
        </div>
      </div>
    </div>
  );
};
