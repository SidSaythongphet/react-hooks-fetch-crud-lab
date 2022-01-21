import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, setQuestions }) {

  function handleDeleteQuestion(deletedQuestion) {
    const updatedQuestions = questions.filter(question => question.id !== deletedQuestion.id)
    setQuestions(updatedQuestions)  
  }

  const populateQuestions = questions.map(question => {
    return(    
      <QuestionItem key={question.id} question={question} onDeleteQuestion={handleDeleteQuestion}/>
    )
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{ populateQuestions }</ul>
    </section>
  );
}

export default QuestionList;
