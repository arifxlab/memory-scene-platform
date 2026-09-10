export type MemorySceneObject = {
  id: string;
  name: string;
  category: string;
  icon?: string;
  position: {
    x: number;
    y: number;
  };
};

export type MemorySceneQuestionType =
    | "location"
    | "attribute"
    | "quantity"
    | "relationship";

export type MemorySceneQuestion = {
  text: string;
  hint: string;
  answers: string[];
  correctAnswer: string;
  type: MemorySceneQuestionType;
  targetObjectId?: string;
};

export type MemorySceneLevel = {
  id: string;
  level: number;
  title: string;
  objects: MemorySceneObject[];
  questions: MemorySceneQuestion[];
};

export type MemorySceneQuestionResult = {
  questionIndex: number;
  questionType: MemorySceneQuestionType;
  isCorrect: boolean;
};

export type MemorySceneSessionResult = {
  levelId: string;
  level: number;
  levelTitle: string;
  totalQuestions: number;
  correctAnswers: number;
  accuracy: number;
  questionResults: MemorySceneQuestionResult[];
};