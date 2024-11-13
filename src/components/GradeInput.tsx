import {PESOS} from "../utils/Constants.ts";
import {ChangeEvent} from "react";

interface GradeInputProp {
    grade: string|number,
    name: string,
    placeholder: string,
    max?: number,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function GradeInput({grade, placeholder, name, max, onChange}: GradeInputProp) {
    return (
        <input
            type="number"
            name={name}
            placeholder={placeholder}
            value={grade}
            max={max ? max : PESOS.MAX_GRADE}
            onChange={onChange}
            className="w-full p-2 border rounded-lg text-gray-200 focus:ring-2 focus:ring-blue-400 dark:border-gray-500 dark:focus:ring-gray-800 dark:bg-gray-700 dark:placeholder-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
        />
    );
}
