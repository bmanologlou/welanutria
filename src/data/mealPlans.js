// Meal plan database. Each plan references recipe slugs by meal and day.
// Macros for each day and the whole plan are computed automatically from recipes.js.
// Per-day extras are drawn from a palette of whole foods to round out calories.

import { recipes } from './recipes.js';

const bySlug = Object.fromEntries(recipes.map((r) => [r.slug, r]));

// Palette of extra food items (with macros) used to round out daily calories.
const EXTRAS = {
  banana: { label: '1 banana', cal: 105, protein: 1, carbs: 27, fat: 0 },
  apple: { label: '1 apple', cal: 95, protein: 0, carbs: 25, fat: 0 },
  berries: { label: 'a handful of berries', cal: 50, protein: 1, carbs: 12, fat: 0 },
  orange: { label: '1 orange', cal: 62, protein: 1, carbs: 15, fat: 0 },
  pear: { label: '1 pear', cal: 100, protein: 1, carbs: 27, fat: 0 },
  almonds: { label: 'a handful of almonds (25g)', cal: 145, protein: 5, carbs: 5, fat: 13 },
  walnuts: { label: 'a handful of walnuts (25g)', cal: 165, protein: 4, carbs: 3, fat: 16 },
  peanuts: { label: 'a handful of peanuts (25g)', cal: 145, protein: 6, carbs: 4, fat: 12 },
  pumpkinSeeds: { label: '2 tbsp pumpkin seeds', cal: 90, protein: 5, carbs: 3, fat: 7 },
  greekYogurt: { label: 'a small pot of Greek yogurt (150g)', cal: 90, protein: 15, carbs: 6, fat: 0 },
  cheese: { label: '30g cheese', cal: 120, protein: 7, carbs: 1, fat: 10 },
  milk: { label: 'a glass of milk (250ml)', cal: 125, protein: 8, carbs: 12, fat: 5 },
  cottageCheese: { label: '100g cottage cheese', cal: 98, protein: 11, carbs: 3, fat: 4 },
  toast: { label: '2 slices wholegrain toast', cal: 160, protein: 8, carbs: 28, fat: 2 },
  toastPB: { label: '1 slice wholegrain toast with peanut butter', cal: 180, protein: 7, carbs: 16, fat: 10 },
  oatcakes: { label: '3 oatcakes', cal: 130, protein: 3, carbs: 20, fat: 4 },
  hummus: { label: 'carrot sticks with hummus (60g)', cal: 130, protein: 4, carbs: 12, fat: 8 },
  riceExtra: { label: 'an extra portion of rice (100g cooked)', cal: 130, protein: 3, carbs: 28, fat: 0 },
  oatsExtra: { label: 'an extra serving of oats (40g)', cal: 150, protein: 5, carbs: 27, fat: 3 },
  proteinShake: { label: 'a protein shake', cal: 160, protein: 30, carbs: 5, fat: 2 },
  boiledEgg: { label: '2 boiled eggs', cal: 155, protein: 13, carbs: 1, fat: 11 },
  avocadoHalf: { label: 'half an avocado', cal: 160, protein: 2, carbs: 9, fat: 15 },
  darkChocolate: { label: '2 squares dark chocolate', cal: 110, protein: 1, carbs: 9, fat: 8 },
  oliveOil: { label: '1 tbsp olive oil on salad', cal: 120, protein: 0, carbs: 0, fat: 14 },
  trailMix: { label: 'a small handful of trail mix', cal: 150, protein: 4, carbs: 14, fat: 9 },
};

// Build a day's extras from a list of EXTRAS keys, returning items + summed macros.
function ex(keys) {
  const items = keys.map((k) => EXTRAS[k]).filter(Boolean);
  const totals = items.reduce((t, i) => ({
    cal: t.cal + i.cal, protein: t.protein + i.protein, carbs: t.carbs + i.carbs, fat: t.fat + i.fat,
  }), { cal: 0, protein: 0, carbs: 0, fat: 0 });
  return { items, ...totals };
}

// Helper: build a day from meal slugs and optional extras.
function day(meals, dayExtras) {
  const builtMeals = meals.map((m) => {
    const r = bySlug[m.slug];
    return {
      type: m.type, slug: m.slug,
      title: r ? r.title : m.slug,
      cal: r ? r.macros.cal : 0,
      protein: r ? r.macros.protein : 0,
      carbs: r ? r.macros.carbs : 0,
      fat: r ? r.macros.fat : 0,
    };
  });
  return { meals: builtMeals, extras: dayExtras || null };
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
    days: [
      day([{ type: 'Breakfast', slug: 'overnight-oats-protein' }, { type: 'Lunch', slug: 'grilled-chicken-quinoa-bowl' }, { type: 'Dinner', slug: 'salmon-roasted-vegetables' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['banana', 'almonds', 'milk', 'apple', 'oatcakes'])),
      day([{ type: 'Breakfast', slug: 'banana-protein-pancakes' }, { type: 'Lunch', slug: 'tuna-avocado-rice-bowl' }, { type: 'Dinner', slug: 'turkey-meatballs-tomato-sauce' }, { type: 'Snack', slug: 'peanut-butter-energy-balls' }], ex(['greekYogurt', 'berries', 'walnuts', 'orange', 'oatcakes'])),
      day([{ type: 'Breakfast', slug: 'greek-yogurt-protein-bowl' }, { type: 'Lunch', slug: 'chicken-burrito-bowl' }, { type: 'Dinner', slug: 'baked-cod-sweet-potato' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['toast', 'apple', 'almonds', 'milk', 'darkChocolate'])),
      day([{ type: 'Breakfast', slug: 'avocado-egg-toast' }, { type: 'Lunch', slug: 'grilled-chicken-quinoa-bowl' }, { type: 'Dinner', slug: 'teriyaki-salmon-rice' }, { type: 'Snack', slug: 'peanut-butter-energy-balls' }], ex(['banana', 'greekYogurt', 'pumpkinSeeds', 'pear', 'oatcakes'])),
      day([{ type: 'Breakfast', slug: 'chia-pudding-berries' }, { type: 'Lunch', slug: 'greek-chicken-bowl' }, { type: 'Dinner', slug: 'beef-broccoli-stir-fry' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['riceExtra', 'orange', 'walnuts', 'milk', 'darkChocolate'])),
      day([{ type: 'Breakfast', slug: 'banana-protein-pancakes' }, { type: 'Lunch', slug: 'quinoa-black-bean-bowl' }, { type: 'Dinner', slug: 'tofu-vegetable-buddha-bowl' }, { type: 'Snack', slug: 'peanut-butter-energy-balls' }], ex(['greekYogurt', 'berries', 'almonds', 'apple', 'oatcakes'])),
      day([{ type: 'Breakfast', slug: 'veggie-omelette' }, { type: 'Lunch', slug: 'tuna-white-bean-salad' }, { type: 'Dinner', slug: 'turkey-vegetable-stir-fry' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['toast', 'banana', 'riceExtra', 'milk', 'darkChocolate'])),
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
    days: [
      day([{ type: 'Breakfast', slug: 'egg-white-veggie-scramble' }, { type: 'Lunch', slug: 'chicken-vegetable-soup' }, { type: 'Dinner', slug: 'shrimp-garlic-zucchini-noodles' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['toast', 'apple', 'greekYogurt'])),
      day([{ type: 'Breakfast', slug: 'greek-yogurt-protein-bowl' }, { type: 'Lunch', slug: 'lemon-herb-chicken-salad' }, { type: 'Dinner', slug: 'turkey-vegetable-stir-fry' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['banana', 'almonds', 'orange'])),
      day([{ type: 'Breakfast', slug: 'veggie-omelette' }, { type: 'Lunch', slug: 'tuna-white-bean-salad' }, { type: 'Dinner', slug: 'baked-cod-sweet-potato' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['apple', 'pumpkinSeeds', 'berries'])),
      day([{ type: 'Breakfast', slug: 'egg-white-veggie-scramble' }, { type: 'Lunch', slug: 'greek-chicken-bowl' }, { type: 'Dinner', slug: 'chickpea-spinach-curry' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['toast', 'orange', 'greekYogurt'])),
      day([{ type: 'Breakfast', slug: 'protein-berry-smoothie' }, { type: 'Lunch', slug: 'chicken-vegetable-soup' }, { type: 'Dinner', slug: 'beef-broccoli-stir-fry' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['apple', 'almonds', 'pear'])),
      day([{ type: 'Breakfast', slug: 'greek-yogurt-protein-bowl' }, { type: 'Lunch', slug: 'lemon-herb-chicken-salad' }, { type: 'Dinner', slug: 'salmon-roasted-vegetables' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['banana', 'orange', 'pumpkinSeeds'])),
      day([{ type: 'Breakfast', slug: 'veggie-omelette' }, { type: 'Lunch', slug: 'lentil-vegetable-soup' }, { type: 'Dinner', slug: 'turkey-meatballs-tomato-sauce' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['toast', 'apple', 'greekYogurt'])),
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
    days: [
      day([{ type: 'Breakfast', slug: 'banana-protein-pancakes' }, { type: 'Lunch', slug: 'chicken-burrito-bowl' }, { type: 'Dinner', slug: 'teriyaki-salmon-rice' }, { type: 'Snack', slug: 'peanut-butter-energy-balls' }], ex(['oatsExtra', 'milk', 'almonds', 'banana', 'greekYogurt', 'apple', 'toastPB', 'orange'])),
      day([{ type: 'Breakfast', slug: 'overnight-oats-protein' }, { type: 'Lunch', slug: 'grilled-chicken-quinoa-bowl' }, { type: 'Dinner', slug: 'tofu-vegetable-buddha-bowl' }, { type: 'Snack', slug: 'protein-berry-smoothie' }], ex(['toastPB', 'banana', 'walnuts', 'milk', 'riceExtra', 'orange', 'cheese', 'apple'])),
      day([{ type: 'Breakfast', slug: 'avocado-egg-toast' }, { type: 'Lunch', slug: 'tuna-avocado-rice-bowl' }, { type: 'Dinner', slug: 'turkey-meatballs-tomato-sauce' }, { type: 'Snack', slug: 'peanut-butter-energy-balls' }], ex(['oatsExtra', 'milk', 'almonds', 'banana', 'cheese', 'apple', 'toastPB', 'orange'])),
      day([{ type: 'Breakfast', slug: 'banana-protein-pancakes' }, { type: 'Lunch', slug: 'chicken-burrito-bowl' }, { type: 'Dinner', slug: 'beef-broccoli-stir-fry' }, { type: 'Snack', slug: 'protein-berry-smoothie' }], ex(['toastPB', 'milk', 'walnuts', 'riceExtra', 'banana', 'orange', 'greekYogurt', 'apple'])),
      day([{ type: 'Breakfast', slug: 'overnight-oats-protein' }, { type: 'Lunch', slug: 'quinoa-black-bean-bowl' }, { type: 'Dinner', slug: 'teriyaki-salmon-rice' }, { type: 'Snack', slug: 'peanut-butter-energy-balls' }], ex(['greekYogurt', 'banana', 'almonds', 'milk', 'toast', 'apple', 'cheese', 'orange'])),
      day([{ type: 'Breakfast', slug: 'avocado-egg-toast' }, { type: 'Lunch', slug: 'grilled-chicken-quinoa-bowl' }, { type: 'Dinner', slug: 'salmon-roasted-vegetables' }, { type: 'Snack', slug: 'protein-berry-smoothie' }], ex(['oatsExtra', 'milk', 'walnuts', 'banana', 'riceExtra', 'pear', 'toastPB', 'apple'])),
      day([{ type: 'Breakfast', slug: 'banana-protein-pancakes' }, { type: 'Lunch', slug: 'tuna-avocado-rice-bowl' }, { type: 'Dinner', slug: 'baked-cod-sweet-potato' }, { type: 'Snack', slug: 'peanut-butter-energy-balls' }], ex(['toastPB', 'milk', 'almonds', 'banana', 'greekYogurt', 'apple', 'cheese', 'orange'])),
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
    days: [
      day([{ type: 'Breakfast', slug: 'protein-berry-smoothie' }, { type: 'Lunch', slug: 'grilled-chicken-quinoa-bowl' }, { type: 'Dinner', slug: 'beef-broccoli-stir-fry' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['greekYogurt', 'almonds', 'apple'])),
      day([{ type: 'Breakfast', slug: 'greek-yogurt-protein-bowl' }, { type: 'Lunch', slug: 'chicken-burrito-bowl' }, { type: 'Dinner', slug: 'teriyaki-salmon-rice' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['proteinShake', 'banana'])),
      day([{ type: 'Breakfast', slug: 'protein-berry-smoothie' }, { type: 'Lunch', slug: 'greek-chicken-bowl' }, { type: 'Dinner', slug: 'turkey-vegetable-stir-fry' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['boiledEgg', 'orange', 'milk'])),
      day([{ type: 'Breakfast', slug: 'egg-white-veggie-scramble' }, { type: 'Lunch', slug: 'tuna-white-bean-salad' }, { type: 'Dinner', slug: 'turkey-meatballs-tomato-sauce' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['greekYogurt', 'almonds', 'apple', 'milk'])),
      day([{ type: 'Breakfast', slug: 'protein-berry-smoothie' }, { type: 'Lunch', slug: 'lemon-herb-chicken-salad' }, { type: 'Dinner', slug: 'baked-cod-sweet-potato' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['proteinShake', 'banana', 'riceExtra'])),
      day([{ type: 'Breakfast', slug: 'greek-yogurt-protein-bowl' }, { type: 'Lunch', slug: 'chicken-burrito-bowl' }, { type: 'Dinner', slug: 'shrimp-garlic-zucchini-noodles' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['boiledEgg', 'milk', 'apple'])),
      day([{ type: 'Breakfast', slug: 'banana-protein-pancakes' }, { type: 'Lunch', slug: 'grilled-chicken-quinoa-bowl' }, { type: 'Dinner', slug: 'salmon-roasted-vegetables' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['greekYogurt', 'walnuts', 'orange'])),
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
    days: [
      day([{ type: 'Breakfast', slug: 'egg-white-veggie-scramble' }, { type: 'Lunch', slug: 'lemon-herb-chicken-salad' }, { type: 'Dinner', slug: 'shrimp-garlic-zucchini-noodles' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['apple', 'greekYogurt'])),
      day([{ type: 'Breakfast', slug: 'greek-yogurt-protein-bowl' }, { type: 'Lunch', slug: 'chicken-vegetable-soup' }, { type: 'Dinner', slug: 'turkey-vegetable-stir-fry' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['orange', 'berries'])),
      day([{ type: 'Breakfast', slug: 'egg-white-veggie-scramble' }, { type: 'Lunch', slug: 'tuna-white-bean-salad' }, { type: 'Dinner', slug: 'baked-cod-sweet-potato' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['apple', 'pumpkinSeeds'])),
      day([{ type: 'Breakfast', slug: 'veggie-omelette' }, { type: 'Lunch', slug: 'greek-chicken-bowl' }, { type: 'Dinner', slug: 'chickpea-spinach-curry' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['orange', 'greekYogurt'])),
      day([{ type: 'Breakfast', slug: 'protein-berry-smoothie' }, { type: 'Lunch', slug: 'chicken-vegetable-soup' }, { type: 'Dinner', slug: 'beef-broccoli-stir-fry' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['apple', 'berries'])),
      day([{ type: 'Breakfast', slug: 'egg-white-veggie-scramble' }, { type: 'Lunch', slug: 'lemon-herb-chicken-salad' }, { type: 'Dinner', slug: 'salmon-roasted-vegetables' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['orange', 'greekYogurt'])),
      day([{ type: 'Breakfast', slug: 'greek-yogurt-protein-bowl' }, { type: 'Lunch', slug: 'lentil-vegetable-soup' }, { type: 'Dinner', slug: 'turkey-vegetable-stir-fry' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['apple', 'pumpkinSeeds'])),
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
    days: [
      day([{ type: 'Breakfast', slug: 'greek-yogurt-protein-bowl' }, { type: 'Lunch', slug: 'mediterranean-chickpea-salad' }, { type: 'Dinner', slug: 'tofu-vegetable-buddha-bowl' }, { type: 'Snack', slug: 'peanut-butter-energy-balls' }], ex(['banana', 'walnuts', 'milk', 'apple'])),
      day([{ type: 'Breakfast', slug: 'veggie-omelette' }, { type: 'Lunch', slug: 'quinoa-black-bean-bowl' }, { type: 'Dinner', slug: 'chickpea-spinach-curry' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['toast', 'orange', 'almonds', 'milk'])),
      day([{ type: 'Breakfast', slug: 'chia-pudding-berries' }, { type: 'Lunch', slug: 'lentil-vegetable-soup' }, { type: 'Dinner', slug: 'sweet-potato-lentil-curry' }, { type: 'Snack', slug: 'peanut-butter-energy-balls' }], ex(['cheese', 'apple', 'walnuts', 'milk'])),
      day([{ type: 'Breakfast', slug: 'avocado-egg-toast' }, { type: 'Lunch', slug: 'mediterranean-chickpea-salad' }, { type: 'Dinner', slug: 'tofu-vegetable-buddha-bowl' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['banana', 'greekYogurt', 'pumpkinSeeds', 'orange'])),
      day([{ type: 'Breakfast', slug: 'banana-protein-pancakes' }, { type: 'Lunch', slug: 'quinoa-black-bean-bowl' }, { type: 'Dinner', slug: 'chickpea-spinach-curry' }, { type: 'Snack', slug: 'peanut-butter-energy-balls' }], ex(['greekYogurt', 'berries', 'almonds', 'milk'])),
      day([{ type: 'Breakfast', slug: 'greek-yogurt-protein-bowl' }, { type: 'Lunch', slug: 'lentil-vegetable-soup' }, { type: 'Dinner', slug: 'sweet-potato-lentil-curry' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['toast', 'cheese', 'apple', 'milk'])),
      day([{ type: 'Breakfast', slug: 'veggie-omelette' }, { type: 'Lunch', slug: 'mediterranean-chickpea-salad' }, { type: 'Dinner', slug: 'tofu-vegetable-buddha-bowl' }, { type: 'Snack', slug: 'peanut-butter-energy-balls' }], ex(['banana', 'walnuts', 'milk', 'orange'])),
    ],
  },
  {
    slug: 'high-protein-high-fiber-meal-plan',
    title: 'High-Protein High-Fiber Meal Plan',
    h1: '7-Day High-Protein High-Fibre Meal Plan',
    description: 'A 7-day high-protein high-fibre meal plan built around the two most filling nutrients, with legumes, wholegrains and lean protein at every meal.',
    intro: 'This 7-day plan pairs the two nutrients that keep you fullest: protein and fibre. Every day combines lean protein with legumes, wholegrains, vegetables and seeds, so you stay satisfied on fewer calories while supporting muscle and gut health. Every meal links to its full recipe.',
    target: 'High protein + high fibre',
    tags: ['High-protein', 'High-fibre'],
    relatedCalculator: { name: 'Macro Calculator', href: '/calculators/macros/' },
    days: [
      day([{ type: 'Breakfast', slug: 'overnight-oats-protein' }, { type: 'Lunch', slug: 'quinoa-black-bean-bowl' }, { type: 'Dinner', slug: 'turkey-vegetable-stir-fry' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['pumpkinSeeds', 'apple', 'toast', 'almonds'])),
      day([{ type: 'Breakfast', slug: 'chia-pudding-berries' }, { type: 'Lunch', slug: 'tuna-white-bean-salad' }, { type: 'Dinner', slug: 'chickpea-spinach-curry' }, { type: 'Snack', slug: 'peanut-butter-energy-balls' }], ex(['greekYogurt', 'almonds', 'orange', 'toast', 'hummus'])),
      day([{ type: 'Breakfast', slug: 'greek-yogurt-protein-bowl' }, { type: 'Lunch', slug: 'lentil-vegetable-soup' }, { type: 'Dinner', slug: 'salmon-roasted-vegetables' }, { type: 'Snack', slug: 'greek-yogurt-protein-bowl' }], ex(['oatcakes', 'hummus', 'pear', 'walnuts'])),
      day([{ type: 'Breakfast', slug: 'overnight-oats-protein' }, { type: 'Lunch', slug: 'mediterranean-chickpea-salad' }, { type: 'Dinner', slug: 'sweet-potato-lentil-curry' }, { type: 'Snack', slug: 'peanut-butter-energy-balls' }], ex(['boiledEgg', 'berries', 'toast', 'apple'])),
      day([{ type: 'Breakfast', slug: 'avocado-egg-toast' }, { type: 'Lunch', slug: 'chicken-burrito-bowl' }, { type: 'Dinner', slug: 'tofu-vegetable-buddha-bowl' }, { type: 'Snack', slug: 'peanut-butter-energy-balls' }], ex(['greekYogurt', 'apple', 'almonds', 'oatcakes'])),
      day([{ type: 'Breakfast', slug: 'chia-pudding-berries' }, { type: 'Lunch', slug: 'quinoa-black-bean-bowl' }, { type: 'Dinner', slug: 'baked-cod-sweet-potato' }, { type: 'Snack', slug: 'greek-yogurt-protein-bowl' }], ex(['hummus', 'pumpkinSeeds', 'orange', 'walnuts'])),
      day([{ type: 'Breakfast', slug: 'banana-protein-pancakes' }, { type: 'Lunch', slug: 'lentil-vegetable-soup' }, { type: 'Dinner', slug: 'chickpea-spinach-curry' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['almonds', 'berries', 'toast', 'hummus', 'pear'])),
    ],
  },
  {
    slug: 'menopause-meal-plan',
    title: 'Menopause Meal Plan',
    h1: '7-Day Menopause Meal Plan',
    description: 'A 7-day menopause meal plan built around protein for muscle, calcium for bones and fibre for weight, with soy foods and everyday whole foods.',
    intro: 'This 7-day plan focuses on what matters most during perimenopause and menopause: enough protein to preserve muscle, calcium and vitamin D for bone health, and plenty of fibre for digestion and weight management. Soy foods appear regularly for their phytoestrogens. This is general nutrition guidance, not medical advice. Every meal links to its full recipe.',
    target: 'Protein, calcium and fibre focus',
    tags: ['High-protein', 'High-calcium'],
    relatedCalculator: { name: 'Protein Calculator', href: '/calculators/protein/' },
    days: [
      day([{ type: 'Breakfast', slug: 'greek-yogurt-protein-bowl' }, { type: 'Lunch', slug: 'tuna-white-bean-salad' }, { type: 'Dinner', slug: 'salmon-roasted-vegetables' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['almonds', 'berries', 'toast'])),
      day([{ type: 'Breakfast', slug: 'chia-pudding-berries' }, { type: 'Lunch', slug: 'greek-chicken-bowl' }, { type: 'Dinner', slug: 'tofu-vegetable-buddha-bowl' }, { type: 'Snack', slug: 'greek-yogurt-protein-bowl' }], ex(['milk', 'orange', 'cheese'])),
      day([{ type: 'Breakfast', slug: 'veggie-omelette' }, { type: 'Lunch', slug: 'lentil-vegetable-soup' }, { type: 'Dinner', slug: 'baked-cod-sweet-potato' }, { type: 'Snack', slug: 'peanut-butter-energy-balls' }], ex(['greekYogurt', 'walnuts', 'apple'])),
      day([{ type: 'Breakfast', slug: 'greek-yogurt-protein-bowl' }, { type: 'Lunch', slug: 'mediterranean-chickpea-salad' }, { type: 'Dinner', slug: 'teriyaki-salmon-rice' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['cheese', 'pear'])),
      day([{ type: 'Breakfast', slug: 'overnight-oats-protein' }, { type: 'Lunch', slug: 'lemon-herb-chicken-salad' }, { type: 'Dinner', slug: 'tofu-vegetable-buddha-bowl' }, { type: 'Snack', slug: 'greek-yogurt-protein-bowl' }], ex(['milk', 'pumpkinSeeds', 'berries'])),
      day([{ type: 'Breakfast', slug: 'chia-pudding-berries' }, { type: 'Lunch', slug: 'quinoa-black-bean-bowl' }, { type: 'Dinner', slug: 'salmon-roasted-vegetables' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['almonds', 'toast'])),
      day([{ type: 'Breakfast', slug: 'avocado-egg-toast' }, { type: 'Lunch', slug: 'chicken-vegetable-soup' }, { type: 'Dinner', slug: 'chickpea-spinach-curry' }, { type: 'Snack', slug: 'peanut-butter-energy-balls' }], ex(['cheese', 'walnuts', 'orange'])),
    ],
  },
  {
    slug: 'glp-1-meal-plan',
    title: 'GLP-1 Friendly Meal Plan',
    h1: '7-Day GLP-1 Friendly Meal Plan',
    description: 'A 7-day GLP-1 friendly meal plan with smaller, protein-dense and fibre-rich meals designed to make every bite count on a reduced appetite.',
    intro: 'This 7-day plan is built for a smaller appetite: protein-dense, fibre-rich, nutrient-packed meals in modest portions. Protein comes first to help preserve muscle, with fibre close behind for fullness and digestion. Greasy and heavy dishes are kept out. This is general nutrition guidance, not medical advice, and GLP-1 medications should be taken under medical supervision. Every meal links to its full recipe.',
    target: 'Protein-dense, smaller portions',
    tags: ['High-protein', 'Weight-loss'],
    relatedCalculator: { name: 'Protein Calculator', href: '/calculators/protein/' },
    days: [
      day([{ type: 'Breakfast', slug: 'egg-white-veggie-scramble' }, { type: 'Lunch', slug: 'lemon-herb-chicken-salad' }, { type: 'Dinner', slug: 'shrimp-garlic-zucchini-noodles' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['toast', 'avocadoHalf'])),
      day([{ type: 'Breakfast', slug: 'greek-yogurt-protein-bowl' }, { type: 'Lunch', slug: 'chicken-vegetable-soup' }, { type: 'Dinner', slug: 'turkey-vegetable-stir-fry' }, { type: 'Snack', slug: 'peanut-butter-energy-balls' }], ex(['apple', 'riceExtra', 'greekYogurt'])),
      day([{ type: 'Breakfast', slug: 'egg-white-veggie-scramble' }, { type: 'Lunch', slug: 'greek-chicken-bowl' }, { type: 'Dinner', slug: 'baked-cod-sweet-potato' }, { type: 'Snack', slug: 'greek-yogurt-protein-bowl' }], ex(['oatcakes', 'walnuts'])),
      day([{ type: 'Breakfast', slug: 'protein-berry-smoothie' }, { type: 'Lunch', slug: 'tuna-white-bean-salad' }, { type: 'Dinner', slug: 'shrimp-garlic-zucchini-noodles' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['orange', 'toast', 'oliveOil'])),
      day([{ type: 'Breakfast', slug: 'veggie-omelette' }, { type: 'Lunch', slug: 'chicken-vegetable-soup' }, { type: 'Dinner', slug: 'turkey-meatballs-tomato-sauce' }, { type: 'Snack', slug: 'peanut-butter-energy-balls' }], ex(['berries', 'oatcakes', 'riceExtra'])),
      day([{ type: 'Breakfast', slug: 'greek-yogurt-protein-bowl' }, { type: 'Lunch', slug: 'lemon-herb-chicken-salad' }, { type: 'Dinner', slug: 'salmon-roasted-vegetables' }, { type: 'Snack', slug: 'greek-yogurt-protein-bowl' }], ex(['pear', 'hummus'])),
      day([{ type: 'Breakfast', slug: 'egg-white-veggie-scramble' }, { type: 'Lunch', slug: 'lentil-vegetable-soup' }, { type: 'Dinner', slug: 'turkey-vegetable-stir-fry' }, { type: 'Snack', slug: 'cottage-cheese-fruit-bowl' }], ex(['berries', 'riceExtra', 'walnuts'])),
    ],
  },
];

export function getMealPlan(slug) {
  return mealPlans.find((p) => p.slug === slug);
}

// Compute totals for a day (meals + extras)
export function dayTotals(d) {
  const base = d.meals.reduce((t, m) => ({
    cal: t.cal + m.cal, protein: t.protein + m.protein, carbs: t.carbs + m.carbs, fat: t.fat + m.fat,
  }), { cal: 0, protein: 0, carbs: 0, fat: 0 });
  if (d.extras) {
    base.cal += d.extras.cal; base.protein += d.extras.protein;
    base.carbs += d.extras.carbs; base.fat += d.extras.fat;
  }
  return base;
}

// Average daily macros across the plan
export function planAverage(plan) {
  const totals = plan.days.map((d) => dayTotals(d));
  const sum = totals.reduce((t, d) => ({
    cal: t.cal + d.cal, protein: t.protein + d.protein, carbs: t.carbs + d.carbs, fat: t.fat + d.fat,
  }), { cal: 0, protein: 0, carbs: 0, fat: 0 });
  const n = plan.days.length;
  return {
    cal: Math.round(sum.cal / n), protein: Math.round(sum.protein / n),
    carbs: Math.round(sum.carbs / n), fat: Math.round(sum.fat / n),
  };
}
