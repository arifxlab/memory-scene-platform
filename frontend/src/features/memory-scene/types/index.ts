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