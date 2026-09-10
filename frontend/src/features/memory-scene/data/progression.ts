export type MemorySceneDifficulty = {
    level: number;
    objectCount: number;
    focus: string[];
};

export const memorySceneProgression: MemorySceneDifficulty[] = [
    {
        level: 1,
        objectCount: 3,
        focus: ["location", "color"],
    },
    {
        level: 2,
        objectCount: 5,
        focus: ["location", "color", "quantity"],
    },
    {
        level: 3,
        objectCount: 7,
        focus: ["similarity", "attributes", "quantity"],
    },
    {
        level: 4,
        objectCount: 9,
        focus: ["location", "relationships", "attributes"],
    },
    {
        level: 5,
        objectCount: 10,
        focus: ["mixed-memory", "relationships", "detailed-recall"],
    },
];