import type { MemorySceneLevel } from "../types";

export const level3Scene = {
    id: "garden-03",
    level: 3,
    title: "باغ پر از جزئیات",

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
                x: 76,
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
                x: 20,
                y: 58,
            },
        },
        {
            id: "book",
            name: "کتاب",
            category: "school",
            icon: "📚",
            position: {
                x: 60,
                y: 55,
            },
        },
        {
            id: "ball",
            name: "توپ",
            category: "toy",
            icon: "⚽",
            position: {
                x: 78,
                y: 68,
            },
        },
        {
            id: "pen",
            name: "خودکار",
            category: "school",
            icon: "✏️",
            position: {
                x: 42,
                y: 72,
            },
        },
    ],

    questions: [
        {
            text: "کدام گل زرد بود؟",
            hint: "به رنگ گل‌ها دقت کرده بودی؟",
            answers: ["گل قرمز", "گل زرد", "هر دو گل"],
            correctAnswer: "گل زرد",
            type: "attribute",
            targetObjectId: "yellow-flower",
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
            text: "سیب و کتاب چه تفاوتی داشتند؟",
            hint: "به نوع چیزها فکر کن.",
            answers: [
                "یکی میوه بود و یکی کتاب",
                "هر دو میوه بودند",
                "هر دو وسیله‌ی مدرسه بودند",
            ],
            correctAnswer: "یکی میوه بود و یکی کتاب",
            type: "relationship",
            targetObjectId: "apple",
        },
        {
            text: "چند وسیله یا شیء مربوط به مدرسه در صحنه بود؟",
            hint: "کتاب و خودکار را یادت هست؟",
            answers: ["۱", "۲", "۳"],
            correctAnswer: "۲",
            type: "quantity",
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