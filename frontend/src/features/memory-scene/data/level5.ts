import type { MemorySceneLevel } from "../types";

export const level5Scene = {
    id: "garden-05",
    level: 5,
    title: "باغ شگفت‌انگیز",

    objects: [
        {
            id: "red-flower",
            name: "گل قرمز",
            category: "nature",
            icon: "🌷",
            position: {
                x: 12,
                y: 20,
            },
        },
        {
            id: "yellow-flower",
            name: "گل زرد",
            category: "nature",
            icon: "🌼",
            position: {
                x: 78,
                y: 20,
            },
        },
        {
            id: "orange",
            name: "پرتقال",
            category: "food",
            icon: "🍊",
            position: {
                x: 42,
                y: 27,
            },
        },
        {
            id: "apple",
            name: "سیب",
            category: "food",
            icon: "🍎",
            position: {
                x: 20,
                y: 45,
            },
        },
        {
            id: "book",
            name: "کتاب",
            category: "school",
            icon: "📚",
            position: {
                x: 62,
                y: 42,
            },
        },
        {
            id: "ball",
            name: "توپ",
            category: "toy",
            icon: "⚽",
            position: {
                x: 82,
                y: 55,
            },
        },
        {
            id: "pen",
            name: "خودکار",
            category: "school",
            icon: "✏️",
            position: {
                x: 40,
                y: 62,
            },
        },
        {
            id: "blue-cup",
            name: "لیوان آبی",
            category: "object",
            icon: "🥤",
            position: {
                x: 14,
                y: 68,
            },
        },
        {
            id: "green-leaf",
            name: "برگ سبز",
            category: "nature",
            icon: "🍃",
            position: {
                x: 66,
                y: 70,
            },
        },
        {
            id: "yellow-star",
            name: "ستاره زرد",
            category: "object",
            icon: "⭐",
            position: {
                x: 50,
                y: 80,
            },
        },
    ],

    questions: [
        {
            text: "چند میوه در باغ بود؟",
            hint: "سیب و پرتقال را یادت هست؟",
            answers: ["۱", "۲", "۳"],
            correctAnswer: "۲",
            type: "quantity",
        },
        {
            text: "کدام گل زرد بود؟",
            hint: "رنگ گل‌ها را به خاطر داری؟",
            answers: ["گل قرمز", "گل زرد", "برگ سبز"],
            correctAnswer: "گل زرد",
            type: "attribute",
            targetObjectId: "yellow-flower",
        },
        {
            text: "کتاب و خودکار چه ارتباطی با هم داشتند؟",
            hint: "به کاربرد آن‌ها فکر کن.",
            answers: ["هر دو مربوط به مدرسه بودند", "هر دو میوه بودند", "هر دو اسباب‌بازی بودند"],
            correctAnswer: "هر دو مربوط به مدرسه بودند",
            type: "relationship",
            targetObjectId: "book",
        },
        {
            text: "توپ کجا بود؟",
            hint: "جای توپ را به خاطر داری؟",
            answers: ["سمت چپ", "وسط", "سمت راست"],
            correctAnswer: "سمت راست",
            type: "location",
            targetObjectId: "ball",
        },
        {
            text: "کدام چیز آبی بود؟",
            hint: "رنگ وسایل را به خاطر بیاور.",
            answers: ["لیوان آبی", "ستاره زرد", "گل قرمز"],
            correctAnswer: "لیوان آبی",
            type: "attribute",
            targetObjectId: "blue-cup",
        },
        {
            text: "سیب و پرتقال چه شباهتی داشتند؟",
            hint: "هر دو چه نوع چیزی بودند؟",
            answers: ["هر دو میوه بودند", "هر دو وسیله مدرسه بودند", "هر دو اسباب‌بازی بودند"],
            correctAnswer: "هر دو میوه بودند",
            type: "relationship",
            targetObjectId: "apple",
        },
        {
            text: "پرتقال کجا بود؟",
            hint: "جای پرتقال را به خاطر داری؟",
            answers: ["سمت چپ", "وسط", "سمت راست"],
            correctAnswer: "وسط",
            type: "location",
            targetObjectId: "orange",
        },
    ],
} satisfies MemorySceneLevel;