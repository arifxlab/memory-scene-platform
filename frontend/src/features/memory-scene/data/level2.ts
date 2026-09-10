import type { MemorySceneLevel } from "../types";

export const level2Scene = {
  id: "garden-02",
  level: 2,
  title: "باغ رنگارنگ",

  objects: [
    {
      id: "flower",
      name: "گل",
      category: "nature",
      icon: "🌷",
      position: { x: 15, y: 25 },
    },
    {
      id: "orange",
      name: "پرتقال",
      category: "food",
      icon: "🍊",
      position: { x: 65, y: 28 },
    },
    {
      id: "book",
      name: "کتاب",
      category: "school",
      icon: "📚",
      position: { x: 40, y: 48 },
    },
    {
      id: "ball",
      name: "توپ",
      category: "toy",
      icon: "⚽",
      position: { x: 78, y: 65 },
    },
    {
      id: "apple",
      name: "سیب",
      category: "food",
      icon: "🍎",
      position: { x: 22, y: 68 },
    },
  ],

  questions: [
    {
      text: "کتاب کجا بود؟",
      hint: "جای کتاب را به خاطر داری؟",
      answers: ["سمت چپ", "وسط", "سمت راست"],
      correctAnswer: "وسط",
      type: "location",
      targetObjectId: "book",
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
      text: "چند میوه در باغ بود؟",
      hint: "سیب و پرتقال را به خاطر داری؟",
      answers: ["۱", "۲", "۳"],
      correctAnswer: "۲",
      type: "quantity",
    },
    {
      text: "کدام وسیله برای بازی بود؟",
      hint: "به چیزهایی که در صحنه دیدی فکر کن.",
      answers: ["کتاب", "توپ", "سیب"],
      correctAnswer: "توپ",
      type: "relationship",
      targetObjectId: "ball",
    },
  ],
} satisfies MemorySceneLevel;
