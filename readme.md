### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

### 1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll:

-   **getElementById:** একটি এলিমেন্টের ইউনিক আইডি ব্যবহার করে ঐ নির্দিষ্ট এলিমেন্ট খুঁজে বের করে।
-   **getElementsByClassName:** এটি ব্যবহার করে এক বা একাধিক নির্দিষ্ট ক্লাসের এলিমেন্ট খুঁজে বের করা যায়।
-   **querySelector / querySelectorAll:**
    -   **querySelector:** শুধুমাত্র **প্রথম** ম্যাচিং এলিমেন্টটি রিটার্ন করে।
    -   **querySelectorAll:** সব ম্যাচিং এলিমেন্টগুলো একটি **static NodeList** হিসেবে রিটার্ন করে।

---

### 2. **Create and insert a new element into the DOM**

-   **এলিমেন্ট তৈরি:** `document.createElement()` ব্যবহার করে একটি নতুন এলিমেন্ট তৈরি করা যায়।
    -   উদাহরণ: `const newDiv = document.createElement('div');`
-   **DOM-এ ইনসার্ট করা:** `appendChild()`, `insertBefore()`, বা `insertAdjacentElement()` ব্যবহার করে নতুন এলিমেন্টটিকে DOM-এর কোনো বিদ্যমান এলিমেন্টের মধ্যে ইনসার্ট করা যায়।
    -   উদাহরণ: `document.body.appendChild(newDiv);`

---
