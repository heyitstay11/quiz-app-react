import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [scoreList, setScoreList] = useState([]);

	const handleAnswerClick = (isCorrect) => {
		if(isCorrect){
			setScore(prevScore => prevScore+1)
		}

		if(currentQuestion + 1 < questions.length){
			setCurrentQuestion(prevQ => prevQ + 1 );
		}else setShowScore(true);
	}

	const handleReset = () => {
		setScoreList(prevList => [score, ...prevList]);
		setCurrentQuestion(0);
		setShowScore(false);
		setScore(0);
	}

	return (
		<div className='app'>
			{showScore ? (
				<>
				<div className='score-section'>
					<h4>You scored {score} out of {questions.length}</h4>
				<button  className="reset" onClick={handleReset}> Reset Game </button>
				<div className="score-board">
					<h5>Previous Scores</h5>
					{scoreList.slice(0, 4).map((item, i) =>
					 	<p key={i}> <small>{i+1}</small>.&nbsp; {item}</p>)}
				</div>
				</div>
				</>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion+1}</span>/{questions.length}
						</div>
						<div className='question-text'>{ questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.sort(() => 0.5 - Math.random()).map((answer, i) => 
								<button key={i} onClick={(e) => handleAnswerClick(answer.isCorrect)}>{answer.answerText}</button>
						)}
					</div>
				</>
			)}
		</div>
	);
}
