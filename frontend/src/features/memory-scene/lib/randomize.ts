import type {
  MemorySceneLevel,
  MemorySceneObject,
  MemorySceneQuestion,
} from "../types";

export type MemorySceneSession = {
  level: MemorySceneLevel;
  questions: MemorySceneQuestion[];
};

type ScenePosition = {
  x: number;
  y: number;
};

const POSITION_SLOTS: ScenePosition[] = [
  { x: 12, y: 20 },
  { x: 35, y: 18 },
  { x: 58, y: 20 },
  { x: 80, y: 20 },

  { x: 18, y: 38 },
  { x: 42, y: 38 },
  { x: 65, y: 38 },
  { x: 82, y: 42 },

  { x: 12, y: 58 },
  { x: 35, y: 58 },
  { x: 58, y: 58 },
  { x: 80, y: 60 },

  { x: 20, y: 78 },
  { x: 45, y: 78 },
  { x: 68, y: 78 },
];

const MIN_DISTANCE = 18;

function shuffle<T>(items: T[]): T[] {
  const result = [...items];

  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));

    [result[index], result[randomIndex]] = [
      result[randomIndex],
      result[index],
    ];
  }

  return result;
}

function getLocationLabel(x: number): string {
  if (x < 34) {
    return "سمت چپ";
  }

  if (x > 66) {
    return "سمت راست";
  }

  return "وسط";
}

function getDistance(
  first: ScenePosition,
  second: ScenePosition,
): number {
  const deltaX = first.x - second.x;
  const deltaY = first.y - second.y;

  return Math.sqrt(deltaX ** 2 + deltaY ** 2);
}

function hasSameLayout(
  objects: MemorySceneObject[],
  previousObjects: MemorySceneObject[],
): boolean {
  return objects.every((object) => {
    const previousObject = previousObjects.find(
      (item) => item.id === object.id,
    );

    if (!previousObject) {
      return false;
    }

    return (
      object.position.x === previousObject.position.x &&
      object.position.y === previousObject.position.y
    );
  });
}

function hasCollision(
  position: ScenePosition,
  selectedPositions: ScenePosition[],
): boolean {
  return selectedPositions.some(
    (selectedPosition) =>
      getDistance(position, selectedPosition) < MIN_DISTANCE,
  );
}

function findSafePositions(count: number): ScenePosition[] {
  const shuffledSlots = shuffle(POSITION_SLOTS);
  const selectedPositions: ScenePosition[] = [];

  for (const position of shuffledSlots) {
    if (!hasCollision(position, selectedPositions)) {
      selectedPositions.push(position);
    }

    if (selectedPositions.length === count) {
      break;
    }
  }

  return selectedPositions;
}

function randomizeObjects(
  objects: MemorySceneObject[],
  previousObjects?: MemorySceneObject[],
): MemorySceneObject[] {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    const positions = findSafePositions(objects.length);

    if (positions.length !== objects.length) {
      continue;
    }

    const randomizedObjects = objects.map((object, index) => ({
      ...object,
      position: positions[index],
    }));

    if (
      !previousObjects ||
      !hasSameLayout(randomizedObjects, previousObjects)
    ) {
      return randomizedObjects;
    }
  }

  const fallbackPositions = findSafePositions(objects.length);

  return objects.map((object, index) => ({
    ...object,
    position: fallbackPositions[index],
  }));
}

function randomizeQuestion(
  question: MemorySceneQuestion,
  objects: MemorySceneObject[],
): MemorySceneQuestion {
  if (
    question.type !== "location" ||
    !question.targetObjectId
  ) {
    return {
      ...question,
      answers: shuffle(question.answers),
    };
  }

  const targetObject = objects.find(
    (object) => object.id === question.targetObjectId,
  );

  if (!targetObject) {
    return {
      ...question,
      answers: shuffle(question.answers),
    };
  }

  const correctAnswer = getLocationLabel(
    targetObject.position.x,
  );

  const locationAnswers = [
    "سمت چپ",
    "وسط",
    "سمت راست",
  ];

  return {
    ...question,
    answers: shuffle(locationAnswers),
    correctAnswer,
  };
}

export function createMemorySceneSession(
  level: MemorySceneLevel,
  previousSession?: MemorySceneSession,
): MemorySceneSession {
  const randomizedObjects = randomizeObjects(
    level.objects,
    previousSession?.level.objects,
  );

  const randomizedQuestions = shuffle(level.questions).map(
    (question) =>
      randomizeQuestion(question, randomizedObjects),
  );

  return {
    level: {
      ...level,
      objects: randomizedObjects,
    },
    questions: randomizedQuestions,
  };
}
