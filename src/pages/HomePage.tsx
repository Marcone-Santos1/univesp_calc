import { GradeCalculator } from "./GradeCalculator.tsx";
import { Content } from "../components/Content.tsx";

export const HomePage = () => {
  return (
    <>
      <GradeCalculator />
      <Content />
    </>
  );
};