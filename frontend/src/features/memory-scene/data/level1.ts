import type { MemorySceneLevel } from "../types";

export const level1Scene = {
  id: "garden-01",
  level: 1,
  title: "باغ کوچک",

  objects: [
    {
      id: "flower",
      name: "گل",
      category: "nature",
      icon: "🌷",
      position: { x: 20, y: 27 },
    },
    {
      id: "orange",
      name: "پرتقال",
      category: "food",
      icon: "🍊",
      position: { x: 62, y: 38 },
    },
    {
      id: "pen",
      name: "خودکار",
      category: "school",
      icon: "✏️",
      position: { x: 43, y: 65 },
    },
  ],

  questions: [
    {
      text: "گل کجا بود؟",
      hint: "جای گل را به خاطر داری؟",
      answers: ["سمت چپ", "وسط", "سمت راست"],
      correctAnswer: "سمت چپ",
      type: "location",
      targetObjectId: "flower",
    },
    {
      text: "پرتقال چه رنگی بود؟",
      hint: "رنگ پرتقال را به خاطر داری؟",
      answers: ["قرمز", "نارنجی", "سبز"],
      correctAnswer: "نارنجی",
      type: "attribute",
      targetObjectId: "orange",
    },
    {
      text: "کدام وسیله مربوط به مدرسه بود؟",
      hint: "به چیزهایی که در صحنه دیدی فکر کن.",
      answers: ["گل", "پرتقال", "خودکار"],
      correctAnswer: "خودکار",
      type: "relationship",
      targetObjectId: "pen",
    },
  ],
} satisfies MemorySceneLevel;

