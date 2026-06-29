// Food comparison database. Each comparison references two foods by name from foods.js.
// The nutrition table is built automatically from the food data.
// Adding a comparison = add an object here.

import { foods } from './foods.js';

const byName = Object.fromEntries(foods.map((f) => [f.name, f]));

export const comparisons = [
  {
    slug: 'salmon-vs-tuna',
    title: 'Salmon vs Tuna',
    foodA: 'Salmon',
    foodB: 'Tuna steak (fresh)',
    labelA: 'Salmon',
    labelB: 'Tuna',
    description: 'Salmon vs tuna compared: calories, protein, omega-3 and more per 100 g, plus which fish is better for weight loss, heart health and muscle.',
    intro: 'Salmon and tuna are two of the most popular fish, both excellent sources of lean protein. The main difference comes down to fat: salmon is an oily fish rich in omega-3, while tuna is leaner and lower in calories. Here is how they compare and when to choose each.',
    verdict: 'Tuna is leaner, higher in protein per calorie, and richer in vitamin B12, making it ideal when you want maximum protein for minimum calories. Salmon is higher in calories but delivers far more omega-3 fats, making it the better choice for heart and brain health. Neither is "better" overall; they simply suit different goals.',
    chooseA: 'Choose salmon for omega-3 fats, heart and brain health, and a more satisfying, richer meal.',
    chooseB: 'Choose tuna for the highest protein per calorie, weight loss, and a leaner, lighter option.',
    related: {
      lists: ['high-protein-foods', 'omega-3-foods'],
      recipes: ['salmon-roasted-vegetables', 'tuna-avocado-rice-bowl'],
      article: { name: 'How much protein do you need a day?', href: '/blog/how-much-protein-per-day/' },
      calculator: { name: 'Protein Calculator', href: '/calculators/protein/' },
    },
    faqs: [
      { q: 'Is salmon or tuna healthier?', a: 'Both are very healthy. Salmon is richer in omega-3 fats, which support heart and brain health, while tuna is leaner and higher in protein per calorie. The healthier choice depends on your goal: salmon for omega-3, tuna for lean protein.' },
      { q: 'Which has more protein, salmon or tuna?', a: 'Tuna is slightly higher in protein and notably lower in calories, so it offers more protein per calorie. Salmon still provides plenty of protein, with the added benefit of omega-3 fats.' },
      { q: 'Which is better for weight loss?', a: 'Tuna is generally better for weight loss because it is leaner and lower in calories while staying very high in protein. Salmon is still a great choice but is more calorie-dense due to its healthy fats.' },
      { q: 'Is tinned tuna as good as fresh?', a: 'Tinned tuna in water is a convenient, affordable, high-protein option with similar protein to fresh. Fresh tuna and salmon offer more omega-3, and tinned salmon with bones adds extra calcium.' },
    ],
  },
  {
    slug: 'brown-vs-white-rice',
    title: 'Brown vs White Rice',
    foodA: 'Brown rice (cooked)',
    foodB: 'White rice (cooked)',
    labelA: 'Brown rice',
    labelB: 'White rice',
    description: 'Brown rice vs white rice compared: calories, carbs, fiber and nutrients per 100 g, plus which is better for weight loss, energy and health.',
    intro: 'Rice is a staple worldwide, and the brown vs white debate is one of the most common nutrition questions. Both come from the same grain; brown rice keeps its bran and germ, while white rice has them removed. That single difference changes the fiber and nutrient content.',
    verdict: 'Brown rice is the more nutritious choice, with more fiber, magnesium and other nutrients, and a gentler effect on blood sugar thanks to that fiber. White rice is lighter, quicker to cook and easier to digest, which some people prefer around training. Calories and carbs are very similar, so the main advantage of brown rice is fiber and micronutrients.',
    chooseA: 'Choose brown rice for more fiber, magnesium and steadier energy, and for everyday meals.',
    chooseB: 'Choose white rice for easier digestion, faster cooking, and a lighter option around workouts.',
    related: {
      lists: ['high-fiber-foods', 'complex-carbs-foods'],
      recipes: ['teriyaki-salmon-rice', 'chicken-burrito-bowl'],
      article: { name: 'Foods that keep you full', href: '/blog/foods-that-keep-you-full/' },
      calculator: { name: 'TDEE Calculator', href: '/calculators/tdee/' },
    },
    faqs: [
      { q: 'Is brown rice healthier than white rice?', a: 'Brown rice is generally more nutritious, with more fiber, magnesium and other nutrients because it keeps the bran and germ. White rice has these removed, making it lighter but less nutrient-dense. Both can fit a healthy diet.' },
      { q: 'Which has fewer calories, brown or white rice?', a: 'Cooked brown and white rice have very similar calories, around 110 to 130 per 100 g. The bigger difference is fiber, where brown rice comes out ahead, helping you feel fuller for longer.' },
      { q: 'Which is better for weight loss?', a: 'Brown rice has a slight edge for weight loss because its extra fiber improves fullness and steadies blood sugar. That said, portion size matters far more than the type of rice you choose.' },
      { q: 'Is white rice bad for you?', a: 'No. White rice is a perfectly fine energy source, easy to digest and quick to cook. It simply has less fiber and fewer micronutrients than brown rice. Pair it with protein and vegetables for a balanced meal.' },
    ],
  },
  {
    slug: 'greek-yogurt-vs-skyr',
    title: 'Greek Yogurt vs Skyr',
    foodA: 'Greek yogurt (0% fat)',
    foodB: 'Skyr',
    labelA: 'Greek yogurt',
    labelB: 'Skyr',
    description: 'Greek yogurt vs skyr compared: protein, calories, calcium and more per 100 g, plus which high-protein dairy is best for your goals.',
    intro: 'Greek yogurt and skyr are both thick, high-protein dairy products that have become staples for healthy eating. Skyr is technically a strained cheese from Iceland, while Greek yogurt is a strained yogurt, but they are used in much the same way. Their nutrition is very close, with a few small differences.',
    verdict: 'Both are excellent high-protein, low-fat choices, and the differences are small. Skyr is often slightly higher in protein and calcium, while Greek yogurt is widely available and comes in more varieties. For most people the best choice is simply whichever they prefer and will eat regularly. Choose plain versions to keep added sugar low.',
    chooseA: 'Choose Greek yogurt for wide availability, more flavour varieties, and versatile everyday use.',
    chooseB: 'Choose skyr for a slightly higher protein and calcium hit in a similar creamy texture.',
    related: {
      lists: ['high-protein-foods', 'high-calcium-foods'],
      recipes: ['greek-yogurt-protein-bowl', 'cottage-cheese-fruit-bowl'],
      article: { name: 'High-protein breakfast ideas', href: '/blog/high-protein-breakfast-ideas/' },
      calculator: { name: 'Protein Calculator', href: '/calculators/protein/' },
    },
    faqs: [
      { q: 'Is skyr or Greek yogurt higher in protein?', a: 'They are very close, but skyr is often marginally higher in protein. Both are excellent high-protein dairy choices, typically providing around 10 to 11 g of protein per 100 g in their plain, fat-free forms.' },
      { q: 'What is the difference between skyr and Greek yogurt?', a: 'Skyr is technically a strained fresh cheese from Iceland, while Greek yogurt is a strained yogurt. In practice they look, taste and are used similarly. Both are thick, high in protein and low in fat when plain.' },
      { q: 'Which is better for weight loss?', a: 'Both are great for weight loss thanks to their high protein and low fat, which help control hunger. Choose whichever you prefer, and pick plain versions to avoid the added sugar found in flavoured varieties.' },
      { q: 'Can I use skyr and Greek yogurt interchangeably?', a: 'Yes. In recipes, smoothies, bowls and as a topping, they work the same way. Their similar thickness and protein content make them easy to swap for one another.' },
    ],
  },
  {
    slug: 'sweet-potato-vs-potato',
    title: 'Sweet Potato vs Potato',
    foodA: 'Sweet potato',
    foodB: 'Potato (with skin)',
    labelA: 'Sweet potato',
    labelB: 'White potato',
    description: 'Sweet potato vs white potato compared: calories, carbs, fiber and nutrients per 100 g, plus which is better for weight loss and health.',
    intro: 'Sweet potatoes have a health-food reputation, while regular potatoes are often unfairly cast as less healthy. In reality both are nutritious, filling whole foods. They differ mainly in their vitamins and their effect on blood sugar, rather than in calories.',
    verdict: 'The two are closer than most people think. Sweet potatoes are rich in vitamin A (beta-carotene) and have a slightly gentler effect on blood sugar, while white potatoes are higher in potassium and a little higher in some minerals. Calories are similar. Both are healthy; the best choice depends on the nutrients you want and your taste.',
    chooseA: 'Choose sweet potato for vitamin A, a touch more fiber, and a gentler blood sugar response.',
    chooseB: 'Choose white potato for more potassium, a neutral flavour, and a filling, budget-friendly staple.',
    related: {
      lists: ['complex-carbs-foods', 'high-potassium-foods'],
      recipes: ['baked-cod-sweet-potato', 'sweet-potato-lentil-curry'],
      article: { name: 'Foods that keep you full', href: '/blog/foods-that-keep-you-full/' },
      calculator: { name: 'Calorie Deficit Calculator', href: '/calculators/calorie-deficit/' },
    },
    faqs: [
      { q: 'Is sweet potato healthier than white potato?', a: 'Both are healthy whole foods. Sweet potato is richer in vitamin A and has a slightly lower glycaemic impact, while white potato is higher in potassium. Neither is clearly superior; they offer different nutrients.' },
      { q: 'Which has fewer calories?', a: 'They are similar, with both providing roughly 75 to 90 calories per 100 g when cooked plainly. The bigger difference is in their vitamins rather than their calorie content.' },
      { q: 'Which is better for weight loss?', a: 'Both work well for weight loss as filling, nutrient-rich carbs. Sweet potato has a slight edge for blood sugar, but how you cook them matters far more; baked or boiled beats fried for either one.' },
      { q: 'Is sweet potato good for blood sugar?', a: 'Sweet potato has a slightly lower glycaemic index than white potato, meaning a gentler effect on blood sugar, especially when boiled rather than baked. Pairing either with protein and fiber further steadies the response.' },
    ],
  },
  {
    slug: 'peanut-vs-almond-butter',
    title: 'Peanut Butter vs Almond Butter',
    foodA: 'Peanut butter',
    foodB: 'Almond butter',
    labelA: 'Peanut butter',
    labelB: 'Almond butter',
    description: 'Peanut butter vs almond butter compared: calories, protein, fats and nutrients per 100 g, plus which nut butter is the healthier choice.',
    intro: 'Peanut butter and almond butter are both popular, nutrient-dense spreads packed with healthy fats and protein. Peanut butter is cheaper and higher in protein, while almond butter is richer in certain vitamins and minerals. Calories are almost identical, so the choice comes down to nutrients, taste and budget.',
    verdict: 'The two are nutritionally close, with almost identical calories. Peanut butter is higher in protein and far more affordable, making it the practical everyday choice. Almond butter is richer in vitamin E, magnesium and calcium, with a milder flavour, but costs more. Both are healthy; choose plain versions with no added sugar or palm oil.',
    chooseA: 'Choose peanut butter for more protein, lower cost, and a classic rich flavour.',
    chooseB: 'Choose almond butter for more vitamin E, magnesium and calcium, and a milder taste.',
    related: {
      lists: ['healthy-fats-foods', 'high-magnesium-foods'],
      recipes: ['peanut-butter-energy-balls', 'overnight-oats-protein'],
      article: { name: 'High-protein snacks', href: '/blog/high-protein-snacks/' },
      calculator: { name: 'Protein Calculator', href: '/calculators/protein/' },
    },
    faqs: [
      { q: 'Is almond butter healthier than peanut butter?', a: 'Almond butter is richer in vitamin E, magnesium and calcium, while peanut butter is higher in protein and much cheaper. Both are healthy, nutrient-dense choices. The best pick depends on whether you prioritise certain nutrients or value and protein.' },
      { q: 'Which has more protein?', a: 'Peanut butter has slightly more protein than almond butter, which is part of why it remains so popular for active people. Both provide a useful protein boost alongside healthy fats.' },
      { q: 'Which has fewer calories?', a: 'They are almost identical, both around 580 to 600 calories per 100 g, since both are nut-based spreads rich in healthy fats. Portion size matters more than the choice between them.' },
      { q: 'What should I look for when buying?', a: 'Choose versions with just nuts and perhaps a little salt. Avoid those with added sugar and palm oil. A natural, no-added-sugar nut butter gives you the best nutrition from either option.' },
    ],
  },
];

export function getComparison(slug) {
  return comparisons.find((c) => c.slug === slug);
}

// Get the full food objects for a comparison's two foods
export function comparisonFoods(comparison) {
  return {
    a: byName[comparison.foodA] || null,
    b: byName[comparison.foodB] || null,
  };
}

// Nutrients shown in the comparison table, in order, with labels and units
export const COMPARE_ROWS = [
  { key: 'cal', label: 'Calories', unit: 'kcal' },
  { key: 'protein', label: 'Protein', unit: 'g' },
  { key: 'carbs', label: 'Carbs', unit: 'g' },
  { key: 'fat', label: 'Fat', unit: 'g' },
  { key: 'fiber', label: 'Fiber', unit: 'g' },
  { key: 'sugar', label: 'Sugar', unit: 'g' },
  { key: 'omega3', label: 'Omega-3', unit: 'g' },
  { key: 'iron', label: 'Iron', unit: 'mg' },
  { key: 'calcium', label: 'Calcium', unit: 'mg' },
  { key: 'potassium', label: 'Potassium', unit: 'mg' },
  { key: 'magnesium', label: 'Magnesium', unit: 'mg' },
  { key: 'vitaminC', label: 'Vitamin C', unit: 'mg' },
  { key: 'zinc', label: 'Zinc', unit: 'mg' },
  { key: 'b12', label: 'Vitamin B12', unit: 'mcg' },
];
