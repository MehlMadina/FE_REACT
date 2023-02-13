import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";

const App = () => {
  const course = "Frontend Pro";
  const part1 = "Вводные занятия по React ";
  const tasks1 = 10;
  const part2 = "Использование React хуков ";
  const tasks2 = 5;
  const part3 = "Использование библиотеки react-router-dom ";
  const tasks3 = 15;

  return (
    <div className="App">
      <Header course={course} />
      <Content
        part1={part1}
        tasks1={tasks1}
        part2={part2}
        tasks2={tasks2}
        part3={part3}
        tasks3={tasks3}
      />
      <Total total={tasks1 + tasks2 + tasks3} />
    </div>
  );
};

export default App;
