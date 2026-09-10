import { useState } from "react";
import {
  level1Scene,
  level2Scene,
  level3Scene,
  level4Scene,
  level5Scene,
} from "../features/memory-scene/data";
import { createMemorySceneSession } from "../features/memory-scene/lib/randomize";
import type { MemorySceneLevel } from "../features/memory-scene/types";

const levels: MemorySceneLevel[] = [
  level1Scene,
  level2Scene,
  level3Scene,
  level4Scene,
  level5Scene,
];

export default function MemoryScene() {
  const [levelIndex, setLevelIndex] = useState(0);
  const [session, setSession] = useState(() =>
      createMemorySceneSession(levels[0]),
  );
  const [started, setStarted] = useState(false);
  const [showScene, setShowScene] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState<boolean | null>(
      null,
  );

  const currentLevel = session.level;
  const questions = session.questions;

  const sceneVisible = started && showScene;

  const finished =
      currentQuestion >= questions.length;

  const questionVisible =
      started && !showScene && !answered && !finished;

  const handleAnswer = (answer: string) => {
    const question = questions[currentQuestion];
    const isCorrect = answer === question.correctAnswer;

    if (isCorrect) {
      setScore((current) => current + 1);
    }

    setLastAnswerCorrect(isCorrect);
    setAnswered(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((current) => current + 1);
    setAnswered(false);
    setLastAnswerCorrect(null);
  };

  const startLevel = (nextLevelIndex: number) => {
    const nextSession = createMemorySceneSession(
        levels[nextLevelIndex],
        session,
    );

    setLevelIndex(nextLevelIndex);
    setSession(nextSession);
    setStarted(true);
    setShowScene(true);
    setCurrentQuestion(0);
    setScore(0);
    setAnswered(false);
    setLastAnswerCorrect(null);
  };

  const startNextLevel = () => {
    startLevel(levelIndex + 1);
  };

  const restartLevel = () => {
    startLevel(levelIndex);
  };

  const startGame = () => {
    startLevel(levelIndex);
  };

  const startQuestions = () => {
    setShowScene(false);
    setCurrentQuestion(0);
  };

  return (
      <main className="memory-page">
        <div className="memory-container">
          <header className="memory-header">
          <span className="level-badge">
            مرحله {currentLevel.level}
          </span>

            <h1>صحنه‌ی حافظه</h1>

            <p>
              با دقت نگاه کن و چیزهایی را که می‌بینی به خاطر بسپار.
            </p>
          </header>

          {!started ? (
              <section className="intro-card">
                <div className="intro-icon">🧠</div>

                <h2>آماده‌ای؟</h2>

                <p>
                  به {currentLevel.title} نگاه کن و جای چیزها و
                  ویژگی‌های آن‌ها را به خاطر بسپار.
                </p>

                <button
                    className="primary-button"
                    onClick={startGame}
                >
                  شروع مرحله
                </button>
              </section>
          ) : finished ? (
              <section className="result-card">
                <div className="result-icon">
                  {score === questions.length ? "🏆" : "🌟"}
                </div>

                <h2>مرحله تمام شد!</h2>

                <p>
                  امتیاز تو: {score} از {questions.length}
                </p>

                <p>
                  {score === questions.length
                      ? "عالی بود! همه‌ی پاسخ‌ها درست بودند."
                      : "آفرین! با تمرین می‌توانی بهتر هم بشوی."}
                </p>

                {levelIndex < levels.length - 1 ? (
                    <button
                        className="primary-button"
                        onClick={startNextLevel}
                    >
                      رفتن به مرحله بعد
                    </button>
                ) : (
                    <button
                        className="primary-button"
                        onClick={restartLevel}
                    >
                      دوباره بازی کن
                    </button>
                )}
              </section>
          ) : sceneVisible ? (
              <section className="scene-card">
                <div className="scene-topbar">
                  <h2>🌳 {currentLevel.title}</h2>
                </div>

                <div className="memory-scene">
                  {currentLevel.objects.map((object) => (
                      <div
                          key={object.id}
                          className="scene-object"
                          style={{
                            left: `${object.position.x}%`,
                            top: `${object.position.y}%`,
                          }}
                      >
                  <span className="object-icon">
                    {object.icon ?? "🔹"}
                  </span>

                        <span>{object.name}</span>
                      </div>
                  ))}
                </div>

                <p className="scene-hint">
                  👀 همه‌ی چیزها را با دقت به خاطر بسپار.
                </p>

                <button
                    className="primary-button"
                    onClick={startQuestions}
                >
                  آماده‌ام، سؤال‌ها را شروع کن
                </button>
              </section>
          ) : questionVisible ? (
              <section className="question-card">
                <div className="question-icon">🤔</div>

                <p className="question-progress">
                  سؤال {currentQuestion + 1} از {questions.length}
                </p>

                <h2>{questions[currentQuestion].text}</h2>

                <p>{questions[currentQuestion].hint}</p>

                <div className="answer-grid">
                  {questions[currentQuestion].answers.map((answer) => (
                      <button
                          key={answer}
                          onClick={() => handleAnswer(answer)}
                      >
                        {answer}
                      </button>
                  ))}
                </div>
              </section>
          ) : (
              <section className="result-card">
                <div className="result-icon">
                  {lastAnswerCorrect ? "🌟" : "🌱"}
                </div>

                <h2>
                  {lastAnswerCorrect
                      ? "آفرین! پاسخ درست بود."
                      : "اشکالی ندارد!"}
                </h2>

                <p>
                  {lastAnswerCorrect
                      ? "آفرین! چیزی که به خاطر سپرده بودی درست بود. 🌟"
                      : `اشکالی ندارد! پاسخ درست «${questions[currentQuestion].correctAnswer}» بود. دوباره با دقت نگاه کن و امتحان کن. 🌱`}
                </p>

                <button
                    className="primary-button"
                    onClick={handleNextQuestion}
                >
                  {currentQuestion === questions.length - 1
                      ? "دیدن نتیجه"
                      : "سؤال بعدی"}
                </button>
              </section>
          )}
        </div>
      </main>
  );
}