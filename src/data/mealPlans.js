// Meal plan database. Each plan references recipe slugs by meal and day.
// Macros for each day and the whole plan are computed automatically from recipes.js.
// Adding a plan = add an object here. Adding/adjusting days = edit the `days` array.

import { recipes } from './recipes.js';

const bySlug = Object.fromEntries(recipes.map((r) => [r.slug, r]));

// Helper: build a day from meal slugs. Each meal is { type, slug }.
function day(meals) {
  return meals.map((m) => {
    const r = bySlug[m.slug];
    return {
      type: m.type,
      slug: m.slug,
      title: r ? r.title : m.slug,
      cal: r ? r.macros.cal : 0,
      protein: r ? r.macros.protein : 0,
      carbs: r ? r.macros.carbs : 0,
      fat: r ? r.macros.fat : 0,
    };
  });
}

export const mealPlans = [
  {
    slug: '2000-calorie-meal-plan',
    title: '2000 Calorie Meal Plan',
    h1: '7-Day 2000 Calorie Meal Plan',
    description: 'A balanced 7-day 2000 calorie meal plan with simple, healthy recipes. Breakfast, lunch, dinner and a snack each day, with full daily macros.',
    intro: 'This 7-day meal plan sits around 2000 calories a day, a level that suits weight maintenance for many adults. Each day includes a breakfast, lunch, dinner and a snack, built entirely from our recipes so you can click through to the full method and ingredients. It is balanced rather than restrictive, with plenty of protein, fibre and variety to keep things interesting all week.',
    target: '~2000 kcal/day',
    tags: ['Balanced', 'Maintenance'],
    relatedCalculator: { name: 'TDEE Calculator', href: '/calculators/tdee/' },
        extras: { cal: 550, protein: 20, carbs: 70, fat: 20, note: 'To reach ~2000 kcal, add daily extras such as 2 slices of wholegrain toast, a piece of fruit, a handful of nuts and a coffee with milk, adjusted to your needs.' },
    days: [
      day([{ type: 'Breakfast', slug: 'overnight-oats-protein' }, { type: 'Lunch', slug: 'grilled-chicken-quinoa-bowl' }, { type: 'Dinner', slug: 'salmon-roasted-vegetables' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }]),
      day([{ type: 'Breakfast', slug: 'banana-protein-pancakes' }, { type: 'Lunch', slug: 'tuna-avocado-rice-bowl' }, { type: 'Dinner', slug: 'turkey-meatballs-tomato-sauce' }, { type: 'Snack', slug: 'peanut-butter-energy-balls' }]),
      day([{ type: 'Breakfast', slug: 'greek-yogurt-protein-bowl' }, { type: 'Lunch', slug: 'chicken-burrito-bowl' }, { type: 'Dinner', slug: 'baked-cod-sweet-potato' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }]),
      day([{ type: 'Breakfast', slug: 'avocado-egg-toast' }, { type: 'Lunch', slug: 'grilled-chicken-quinoa-bowl' }, { type: 'Dinner', slug: 'teriyaki-salmon-rice' }, { type: 'Snack', slug: 'peanut-butter-energy-balls' }]),
      day([{ type: 'Breakfast', slug: 'chia-pudding-berries' }, { type: 'Lunch', slug: 'greek-chicken-bowl' }, { type: 'Dinner', slug: 'beef-broccoli-stir-fry' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }]),
      day([{ type: 'Breakfast', slug: 'banana-protein-pancakes' }, { type: 'Lunch', slug: 'quinoa-black-bean-bowl' }, { type: 'Dinner', slug: 'tofu-vegetable-buddha-bowl' }, { type: 'Snack', slug: 'peanut-butter-energy-balls' }]),
      day([{ type: 'Breakfast', slug: 'veggie-omelette' }, { type: 'Lunch', slug: 'tuna-white-bean-salad' }, { type: 'Dinner', slug: 'turkey-vegetable-stir-fry' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }]),
    ],
  },
  {
    slug: '1500-calorie-meal-plan',
    title: '1500 Calorie Meal Plan',
    h1: '7-Day 1500 Calorie Meal Plan',
    description: 'A 7-day 1500 calorie meal plan for steady weight loss. Lighter meals with high protein to stay full, plus full daily macros for every day.',
    intro: 'This 7-day plan sits around 1500 calories a day, a level many people use for steady, sustainable weight loss. The focus is on high-protein, high-volume meals that keep you full despite the lower calories, so it feels satisfying rather than restrictive. Each day has a breakfast, lunch, dinner and a light snack, all linking to our full recipes.',
    target: '~1500 kcal/day',
    tags: ['Weight-loss', 'High-protein'],
    relatedCalculator: { name: 'Calorie Deficit Calculator', href: '/calculators/calorie-deficit/' },
        extras: { cal: 340, protein: 15, carbs: 40, fat: 12, note: 'To reach ~1500 kcal, add small daily extras such as a piece of fruit, a yogurt and a small handful of nuts, adjusted to your needs.' },
    days: [
      day([{ type: 'Breakfast', slug: 'egg-white-veggie-scramble' }, { type: 'Lunch', slug: 'chicken-vegetable-soup' }, { type: 'Dinner', slug: 'shrimp-garlic-zucchini-noodles' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }]),
      day([{ type: 'Breakfast', slug: 'greek-yogurt-protein-bowl' }, { type: 'Lunch', slug: 'lemon-herb-chicken-salad' }, { type: 'Dinner', slug: 'turkey-vegetable-stir-fry' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }]),
      day([{ type: 'Breakfast', slug: 'veggie-omelette' }, { type: 'Lunch', slug: 'tuna-white-bean-salad' }, { type: 'Dinner', slug: 'baked-cod-sweet-potato' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }]),
      day([{ type: 'Breakfast', slug: 'egg-white-veggie-scramble' }, { type: 'Lunch', slug: 'greek-chicken-bowl' }, { type: 'Dinner', slug: 'chickpea-spinach-curry' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }]),
      day([{ type: 'Breakfast', slug: 'protein-berry-smoothie' }, { type: 'Lunch', slug: 'chicken-vegetable-soup' }, { type: 'Dinner', slug: 'beef-broccoli-stir-fry' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }]),
      day([{ type: 'Breakfast', slug: 'greek-yogurt-protein-bowl' }, { type: 'Lunch', slug: 'lemon-herb-chicken-salad' }, { type: 'Dinner', slug: 'salmon-roasted-vegetables' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }]),
      day([{ type: 'Breakfast', slug: 'veggie-omelette' }, { type: 'Lunch', slug: 'lentil-vegetable-soup' }, { type: 'Dinner', slug: 'turkey-meatballs-tomato-sauce' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }]),
    ],
  },
  {
    slug: '2500-calorie-meal-plan',
    title: '2500 Calorie Meal Plan',
    h1: '7-Day 2500 Calorie Meal Plan',
    description: 'A 7-day 2500 calorie meal plan for active people and muscle gain. Higher-calorie, high-protein meals with full daily macros.',
    intro: 'This 7-day plan sits around 2500 calories a day, suited to active people, those building muscle, or anyone with higher energy needs. It keeps protein high to support training and recovery, with larger meals and energy-dense snacks. Every meal links to a full recipe, so you can scale and adapt as needed.',
    target: '~2500 kcal/day',
    tags: ['Muscle-gain', 'High-protein'],
    relatedCalculator: { name: 'TDEE Calculator', href: '/calculators/tdee/' },
        extras: { cal: 940, protein: 35, carbs: 110, fat: 35, note: 'To reach ~2500 kcal, add larger daily extras such as extra rice or oats, 2 pieces of fruit, nut butter on toast and a glass of milk, adjusted to your training needs.' },
    days: [
      day([{ type: 'Breakfast', slug: 'banana-protein-pancakes' }, { type: 'Lunch', slug: 'chicken-burrito-bowl' }, { type: 'Dinner', slug: 'teriyaki-salmon-rice' }, { type: 'Snack', slug: 'peanut-butter-energy-balls' }]),
      day([{ type: 'Breakfast', slug: 'overnight-oats-protein' }, { type: 'Lunch', slug: 'grilled-chicken-quinoa-bowl' }, { type: 'Dinner', slug: 'tofu-vegetable-buddha-bowl' }, { type: 'Snack', slug: 'protein-berry-smoothie' }]),
      day([{ type: 'Breakfast', slug: 'avocado-egg-toast' }, { type: 'Lunch', slug: 'tuna-avocado-rice-bowl' }, { type: 'Dinner', slug: 'turkey-meatballs-tomato-sauce' }, { type: 'Snack', slug: 'peanut-butter-energy-balls' }]),
      day([{ type: 'Breakfast', slug: 'banana-protein-pancakes' }, { type: 'Lunch', slug: 'chicken-burrito-bowl' }, { type: 'Dinner', slug: 'beef-broccoli-stir-fry' }, { type: 'Snack', slug: 'protein-berry-smoothie' }]),
      day([{ type: 'Breakfast', slug: 'overnight-oats-protein' }, { type: 'Lunch', slug: 'quinoa-black-bean-bowl' }, { type: 'Dinner', slug: 'teriyaki-salmon-rice' }, { type: 'Snack', slug: 'peanut-butter-energy-balls' }]),
      day([{ type: 'Breakfast', slug: 'avocado-egg-toast' }, { type: 'Lunch', slug: 'grilled-chicken-quinoa-bowl' }, { type: 'Dinner', slug: 'salmon-roasted-vegetables' }, { type: 'Snack', slug: 'protein-berry-smoothie' }]),
      day([{ type: 'Breakfast', slug: 'banana-protein-pancakes' }, { type: 'Lunch', slug: 'tuna-avocado-rice-bowl' }, { type: 'Dinner', slug: 'baked-cod-sweet-potato' }, { type: 'Snack', slug: 'peanut-butter-energy-balls' }]),
    ],
  },
  {
    slug: 'high-protein-meal-plan',
    title: 'High-Protein Meal Plan',
    h1: '7-Day High-Protein Meal Plan',
    description: 'A 7-day high-protein meal plan with at least 120g protein per day. Built for muscle, recovery and staying full, with full daily macros.',
    intro: 'This 7-day plan is built around protein, delivering a high daily intake to support muscle building, recovery and appetite control. Each day combines protein-rich breakfasts, lean lunches and dinners, and a high-protein snack. It is ideal if you train regularly or simply want to feel fuller for longer. Every meal links to its full recipe.',
    target: '120g+ protein/day',
    tags: ['High-protein', 'Muscle-gain'],
    relatedCalculator: { name: 'Protein Calculator', href: '/calculators/protein/' },
        extras: { cal: 300, protein: 25, carbs: 20, fat: 12, note: 'To boost protein further, add daily extras such as a protein shake, extra Greek yogurt or a boiled egg, adjusted to your needs.' },
    days: [
      day([{ type: 'Breakfast', slug: 'protein-berry-smoothie' }, { type: 'Lunch', slug: 'grilled-chicken-quinoa-bowl' }, { type: 'Dinner', slug: 'beef-broccoli-stir-fry' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }]),
      day([{ type: 'Breakfast', slug: 'greek-yogurt-protein-bowl' }, { type: 'Lunch', slug: 'chicken-burrito-bowl' }, { type: 'Dinner', slug: 'teriyaki-salmon-rice' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }]),
      day([{ type: 'Breakfast', slug: 'protein-berry-smoothie' }, { type: 'Lunch', slug: 'greek-chicken-bowl' }, { type: 'Dinner', slug: 'turkey-vegetable-stir-fry' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }]),
      day([{ type: 'Breakfast', slug: 'egg-white-veggie-scramble' }, { type: 'Lunch', slug: 'tuna-white-bean-salad' }, { type: 'Dinner', slug: 'turkey-meatballs-tomato-sauce' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }]),
      day([{ type: 'Breakfast', slug: 'protein-berry-smoothie' }, { type: 'Lunch', slug: 'lemon-herb-chicken-salad' }, { type: 'Dinner', slug: 'baked-cod-sweet-potato' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }]),
      day([{ type: 'Breakfast', slug: 'greek-yogurt-protein-bowl' }, { type: 'Lunch', slug: 'chicken-burrito-bowl' }, { type: 'Dinner', slug: 'shrimp-garlic-zucchini-noodles' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }]),
      day([{ type: 'Breakfast', slug: 'banana-protein-pancakes' }, { type: 'Lunch', slug: 'grilled-chicken-quinoa-bowl' }, { type: 'Dinner', slug: 'salmon-roasted-vegetables' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }]),
    ],
  },
  {
    slug: 'weight-loss-meal-plan',
    title: 'Weight Loss Meal Plan',
    h1: '7-Day Weight Loss Meal Plan',
    description: 'A 7-day weight loss meal plan with lighter, high-protein meals to keep you full in a calorie deficit. Full daily macros included.',
    intro: 'This 7-day plan is designed for weight loss, keeping calories moderate while prioritising protein and fibre to control hunger. The meals are light but filling, so a calorie deficit feels manageable rather than miserable. Each day has a breakfast, lunch, dinner and a snack, all linking to our full recipes so nothing is left to guesswork.',
    target: '~1400 kcal/day',
    tags: ['Weight-loss', 'Low-calorie'],
    relatedCalculator: { name: 'Calorie Deficit Calculator', href: '/calculators/calorie-deficit/' },
        extras: { cal: 250, protein: 12, carbs: 28, fat: 9, note: 'Add small daily extras such as a piece of fruit and a yogurt to round out the day, adjusted to your deficit.' },
    days: [
      day([{ type: 'Breakfast', slug: 'egg-white-veggie-scramble' }, { type: 'Lunch', slug: 'lemon-herb-chicken-salad' }, { type: 'Dinner', slug: 'shrimp-garlic-zucchini-noodles' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }]),
      day([{ type: 'Breakfast', slug: 'greek-yogurt-protein-bowl' }, { type: 'Lunch', slug: 'chicken-vegetable-soup' }, { type: 'Dinner', slug: 'turkey-vegetable-stir-fry' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }]),
      day([{ type: 'Breakfast', slug: 'egg-white-veggie-scramble' }, { type: 'Lunch', slug: 'tuna-white-bean-salad' }, { type: 'Dinner', slug: 'baked-cod-sweet-potato' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }]),
      day([{ type: 'Breakfast', slug: 'veggie-omelette' }, { type: 'Lunch', slug: 'greek-chicken-bowl' }, { type: 'Dinner', slug: 'chickpea-spinach-curry' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }]),
      day([{ type: 'Breakfast', slug: 'protein-berry-smoothie' }, { type: 'Lunch', slug: 'chicken-vegetable-soup' }, { type: 'Dinner', slug: 'beef-broccoli-stir-fry' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }]),
      day([{ type: 'Breakfast', slug: 'egg-white-veggie-scramble' }, { type: 'Lunch', slug: 'lemon-herb-chicken-salad' }, { type: 'Dinner', slug: 'salmon-roasted-vegetables' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }]),
      day([{ type: 'Breakfast', slug: 'greek-yogurt-protein-bowl' }, { type: 'Lunch', slug: 'lentil-vegetable-soup' }, { type: 'Dinner', slug: 'turkey-vegetable-stir-fry' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }]),
    ],
  },
  {
    slug: 'vegetarian-meal-plan',
    title: 'Vegetarian Meal Plan',
    h1: '7-Day Vegetarian Meal Plan',
    description: 'A 7-day vegetarian meal plan with balanced, high-fibre meals and plenty of plant protein. Full daily macros for every day.',
    intro: 'This 7-day vegetarian plan proves that meat-free eating can be varied, filling and high in protein. It draws on eggs, dairy, legumes, tofu and wholegrains to keep protein and fibre high throughout the week. Each day includes a breakfast, lunch, dinner and snack, all linking to our full recipes, with several days that are fully plant-based too.',
    target: 'Meat-free, balanced',
    tags: ['Vegetarian', 'High-fiber'],
    relatedCalculator: { name: 'TDEE Calculator', href: '/calculators/tdee/' },
        extras: { cal: 400, protein: 18, carbs: 50, fat: 15, note: 'To round out the day, add extras such as wholegrain toast, fruit, nuts or extra dairy, adjusted to your needs.' },
    days: [
      day([{ type: 'Breakfast', slug: 'greek-yogurt-protein-bowl' }, { type: 'Lunch', slug: 'mediterranean-chickpea-salad' }, { type: 'Dinner', slug: 'tofu-vegetable-buddha-bowl' }, { type: 'Snack', slug: 'peanut-butter-energy-balls' }]),
      day([{ type: 'Breakfast', slug: 'veggie-omelette' }, { type: 'Lunch', slug: 'quinoa-black-bean-bowl' }, { type: 'Dinner', slug: 'chickpea-spinach-curry' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }]),
      day([{ type: 'Breakfast', slug: 'chia-pudding-berries' }, { type: 'Lunch', slug: 'lentil-vegetable-soup' }, { type: 'Dinner', slug: 'sweet-potato-lentil-curry' }, { type: 'Snack', slug: 'peanut-butter-energy-balls' }]),
      day([{ type: 'Breakfast', slug: 'avocado-egg-toast' }, { type: 'Lunch', slug: 'mediterranean-chickpea-salad' }, { type: 'Dinner', slug: 'tofu-vegetable-buddha-bowl' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }]),
      day([{ type: 'Breakfast', slug: 'banana-protein-pancakes' }, { type: 'Lunch', slug: 'quinoa-black-bean-bowl' }, { type: 'Dinner', slug: 'chickpea-spinach-curry' }, { type: 'Snack', slug: 'peanut-butter-energy-balls' }]),
      day([{ type: 'Breakfast', slug: 'greek-yogurt-protein-bowl' }, { type: 'Lunch', slug: 'lentil-vegetable-soup' }, { type: 'Dinner', slug: 'sweet-potato-lentil-curry' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }]),
      day([{ type: 'Breakfast', slug: 'veggie-omelette' }, { type: 'Lunch', slug: 'mediterranean-chickpea-salad' }, { type: 'Dinner', slug: 'tofu-vegetable-buddha-bowl' }, { type: 'Snack', slug: 'peanut-butter-energy-balls' }]),
    ],
  },
];

export function getMealPlan(slug) {
  return mealPlans.find((p) => p.slug === slug);
}

// Compute daily totals for a day (array of meals)
export function dayTotals(meals) {
  return meals.reduce((t, m) => ({
    cal: t.cal + m.cal,
    protein: t.protein + m.protein,
    carbs: t.carbs + m.carbs,
    fat: t.fat + m.fat,
  }), { cal: 0, protein: 0, carbs: 0, fat: 0 });
}

// Average daily calories across the plan (including any daily extras)
export function planAverage(plan) {
  const extras = plan.extras || { cal: 0, protein: 0, carbs: 0, fat: 0 };
  const totals = plan.days.map((d) => dayTotals(d));
  const sum = totals.reduce((t, d) => ({
    cal: t.cal + d.cal, protein: t.protein + d.protein, carbs: t.carbs + d.carbs, fat: t.fat + d.fat,
  }), { cal: 0, protein: 0, carbs: 0, fat: 0 });
  const n = plan.days.length;
  return {
    cal: Math.round(sum.cal / n) + extras.cal,
    protein: Math.round(sum.protein / n) + extras.protein,
    carbs: Math.round(sum.carbs / n) + extras.carbs,
    fat: Math.round(sum.fat / n) + extras.fat,
  };
}
