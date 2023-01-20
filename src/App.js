import React from "react";
import { useGlobalContext } from "./context";

import Loading from "./Loading";
import Modal from "./Modal";
import Login from "./Login";
import CountDown from "./CountDown";
function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    checkAnswer,
    quiz,
  } = useGlobalContext();

  if (waiting) {
    return <Login />;
  }
  if (loading) {
    return <Loading />;
  }
  const { question, incorrect_answers, correct_answer } = questions[index];
  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }
  return (
    <main>
      <section className="quiz">
        <CountDown seconds={120} />
        <Modal />
        <p className="correct-answers">
          <br /><span>Jumlah Soal : {quiz.amount}</span>
          <br /><span>Jumlah yang dikerjakan : {index}</span>
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className="answer-btn"
                  onClick={() => {
                    checkAnswer(correct_answer === answer);
                  }}
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              );
            })}
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;