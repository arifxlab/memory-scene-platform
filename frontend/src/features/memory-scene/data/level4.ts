import type { MemorySceneLevel } from "../types";

export const level4Scene = {
    id: "garden-04",
    level: 4,
    title: "باغ شلوغ",

    objects: [
        {
            id: "red-flower",
            name: "گل قرمز",
            category: "nature",
            icon: "🌷",
            position: {
                x: 12,
                y: 22,
            },
        },
        {
            id: "yellow-flower",
            name: "گل زرد",
            category: "nature",
            icon: "🌼",
            position: {
                x: 78,
                y: 22,
            },
        },
        {
            id: "orange",
            name: "پرتقال",
            category: "food",
            icon: "🍊",
            position: {
                x: 42,
                y: 30,
            },
        },
        {
            id: "apple",
            name: "سیب",
            category: "food",
            icon: "🍎",
            position: {
                x: 22,
                y: 48,
            },
        },
        {
            id: "book",
            name: "کتاب",
            category: "school",
            icon: "📚",
            position: {
                x: 62,
                y: 45,
            },
        },
        {
            id: "ball",
            name: "توپ",
            category: "toy",
            icon: "⚽",
            position: {
                x: 80,
                y: 58,
            },
        },
        {
            id: "pen",
            name: "خودکار",
            category: "school",
            icon: "✏️",
            position: {
                x: 40,
                y: 65,
            },
        },
        {
            id: "blue-cup",
            name: "لیوان آبی",
            category: "object",
            icon: "🥤",
            position: {
                x: 15,
                y: 70,
            },
        },
        {
            id: "green-leaf",
            name: "برگ سبز",
            category: "nature",
            icon: "🍃",
            position: {
                x: 65,
                y: 75,
            },
        },
    ],

    questions: [
        {
            text: "کدام گل زرد بود؟",
            hint: "رنگ گل‌ها را به خاطر داری؟",
            answers: ["گل قرمز", "گل زرد", "برگ سبز"],
            correctAnswer: "گل زرد",
            type: "attribute",
            targetObjectId: "yellow-flower",
        },
        {
            text: "کتاب و خودکار هر دو مربوط به چه چیزی بودند؟",
            hint: "به نوع وسایل فکر کن.",
            answers: ["مدرسه", "بازی", "میوه"],
            correctAnswer: "مدرسه",
            type: "relationship",
            targetObjectId: "book",
        },
        {
            text: "پرتقال کجا بود؟",
            hint: "جای پرتقال را به خاطر داری؟",
            answers: ["سمت چپ", "وسط", "سمت راست"],
            correctAnswer: "وسط",
            type: "location",
            targetObjectId: "orange",
        },
        {
            text: "کدام شیء آبی بود؟",
            hint: "به رنگ وسایل دقت کرده بودی.",
            answers: ["لیوان آبی", "توپ", "کتاب"],
            correctAnswer: "لیوان آبی",
            type: "attribute",
            targetObjectId: "blue-cup",
        },
        {
            text: "سیب و پرتقال چه شباهتی داشتند؟",
            hint: "به نوع این دو چیز فکر کن.",
            answers: ["هر دو میوه بودند", "هر دو وسیله مدرسه بودند", "هر دو اسباب‌بازی بودند"],
            correctAnswer: "هر دو میوه بودند",
            type: "relationship",
            targetObjectId: "apple",
        },
        {
            text: "توپ کجا بود؟",
            hint: "جای توپ را به خاطر داری؟",
            answers: ["سمت چپ", "وسط", "سمت راست"],
            correctAnswer: "سمت راست",
            type: "location",
            targetObjectId: "ball",
        },
    ],
} satisfies MemorySceneLevel;