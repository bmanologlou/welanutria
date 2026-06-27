// Recipe database. Macros are per serving, calculated from USDA values.
// Each recipe: slug, title, description, mealType, tags, time, servings,
// ingredients (with metric + imperial), steps, macros, image (filename in /img/recipes/ or null).
// Adding a recipe = add an object here. The image field can stay null until a photo is added.

export const recipes = [
  {
    slug: 'grilled-chicken-quinoa-bowl',
    title: 'Grilled Chicken & Quinoa Bowl',
    description: 'A high-protein bowl of grilled chicken, fluffy quinoa and fresh vegetables. Simple, balanced and ready in under 30 minutes.',
    intro: 'This bowl is a weeknight staple for good reason: it hits a clean balance of lean protein, slow-release carbs and crisp vegetables, all in one dish. The grilled chicken brings around 45 grams of protein per serving to keep you full, while quinoa adds fibre and a nutty bite. It comes together in under half an hour, works just as well cold the next day, and is easy to scale up for meal prep.',
    mealType: 'Lunch',
    tags: ['High-protein', 'Balanced', 'Gluten-free'],
    time: 25,
    servings: 2,
    image: 'grilled-chicken-quinoa-bowl.webp',
    relatedArticle: { name: 'How much protein do you need a day?', href: '/blog/how-much-protein-per-day/' },
    ingredients: [
      { item: 'Chicken breast', metric: '300 g', imperial: '10.5 oz' },
      { item: 'Quinoa (dry)', metric: '120 g', imperial: '4.2 oz' },
      { item: 'Cherry tomatoes, halved', metric: '150 g', imperial: '5.3 oz' },
      { item: 'Cucumber, diced', metric: '120 g', imperial: '4.2 oz' },
      { item: 'Olive oil', metric: '1 tbsp', imperial: '1 tbsp' },
      { item: 'Lemon juice', metric: '1 tbsp', imperial: '1 tbsp' },
      { item: 'Fresh parsley, salt, pepper', metric: 'to taste', imperial: 'to taste' },
    ],
    steps: [
      'Rinse the quinoa, then cook in 240 ml of water: bring to a boil, cover and simmer for 15 minutes until the water is absorbed. Fluff with a fork.',
      'Season the chicken with salt and pepper. Grill or pan-fry over medium-high heat for 6 to 7 minutes per side until cooked through. Rest, then slice.',
      'Toss the tomatoes and cucumber with olive oil, lemon juice, salt and pepper.',
      'Divide the quinoa between two bowls, top with the sliced chicken and vegetables, and finish with fresh parsley.',
    ],
    macros: { cal: 480, protein: 45, carbs: 45, fat: 13 },
    tips: [
      'Cook a double batch of quinoa at the start of the week so the bowl comes together in minutes.',
      'Let the chicken rest for a few minutes before slicing to keep it juicy.',
      'Swap the vegetables for whatever you have: roasted peppers, spinach or avocado all work well.',
    ],
  },
  {
    slug: 'greek-yogurt-protein-bowl',
    title: 'Greek Yogurt Protein Bowl',
    description: 'A quick high-protein breakfast bowl with Greek yogurt, berries, nuts and seeds. Ready in 5 minutes, keeps you full for hours.',
    mealType: 'Breakfast',
    tags: ['High-protein', 'Vegetarian', 'Quick'],
    time: 5,
    servings: 1,
    image: 'greek-yogurt-protein-bowl.webp',
    ingredients: [
      { item: 'Greek yogurt (0% fat)', metric: '200 g', imperial: '7 oz' },
      { item: 'Mixed berries', metric: '80 g', imperial: '2.8 oz' },
      { item: 'Almonds, chopped', metric: '20 g', imperial: '0.7 oz' },
      { item: 'Chia seeds', metric: '1 tbsp', imperial: '1 tbsp' },
      { item: 'Honey (optional)', metric: '1 tsp', imperial: '1 tsp' },
    ],
    steps: [
      'Spoon the Greek yogurt into a bowl.',
      'Top with the berries, chopped almonds and chia seeds.',
      'Drizzle with honey if using, and serve immediately.',
    ],
    macros: { cal: 320, protein: 28, carbs: 26, fat: 13 },
  },
  {
    slug: 'salmon-roasted-vegetables',
    title: 'Baked Salmon with Roasted Vegetables',
    description: 'Omega-3 rich salmon baked with colourful roasted vegetables. A balanced, satisfying dinner that comes together on one tray.',
    mealType: 'Dinner',
    tags: ['High-protein', 'Balanced', 'Gluten-free'],
    time: 35,
    servings: 2,
    image: 'salmon-roasted-vegetables.webp',
    ingredients: [
      { item: 'Salmon fillets', metric: '2 x 150 g', imperial: '2 x 5.3 oz' },
      { item: 'Broccoli florets', metric: '200 g', imperial: '7 oz' },
      { item: 'Bell peppers, sliced', metric: '200 g', imperial: '7 oz' },
      { item: 'Courgette, sliced', metric: '150 g', imperial: '5.3 oz' },
      { item: 'Olive oil', metric: '2 tbsp', imperial: '2 tbsp' },
      { item: 'Garlic, lemon, salt, pepper', metric: 'to taste', imperial: 'to taste' },
    ],
    steps: [
      'Preheat the oven to 200°C (400°F).',
      'Toss the broccoli, peppers and courgette with 1 tbsp olive oil, salt and pepper. Spread on a baking tray and roast for 10 minutes.',
      'Push the vegetables aside, add the salmon fillets, drizzle with the remaining oil, lemon and garlic.',
      'Bake for a further 15 minutes until the salmon flakes easily. Serve.',
    ],
    macros: { cal: 440, protein: 38, carbs: 18, fat: 25 },
  },
  {
    slug: 'lentil-vegetable-soup',
    title: 'Hearty Lentil & Vegetable Soup',
    description: 'A high-fiber, plant-based soup packed with lentils and vegetables. Filling, low in calories and freezer-friendly.',
    mealType: 'Lunch',
    tags: ['Vegan', 'High-fiber', 'Low-calorie'],
    time: 40,
    servings: 4,
    image: 'lentil-vegetable-soup.webp',
    ingredients: [
      { item: 'Dried lentils', metric: '200 g', imperial: '7 oz' },
      { item: 'Carrots, diced', metric: '150 g', imperial: '5.3 oz' },
      { item: 'Celery, diced', metric: '100 g', imperial: '3.5 oz' },
      { item: 'Onion, diced', metric: '1 medium', imperial: '1 medium' },
      { item: 'Chopped tomatoes (tin)', metric: '400 g', imperial: '14 oz' },
      { item: 'Vegetable stock', metric: '1 litre', imperial: '34 fl oz' },
      { item: 'Olive oil, garlic, herbs', metric: 'to taste', imperial: 'to taste' },
    ],
    steps: [
      'Heat the olive oil in a large pot. Sauté the onion, carrots and celery for 5 minutes until softened.',
      'Add the garlic and cook for 1 minute, then stir in the lentils, chopped tomatoes and stock.',
      'Bring to a boil, then simmer for 25 to 30 minutes until the lentils are tender.',
      'Season with salt, pepper and herbs. Blend partly for a thicker texture if you like.',
    ],
    macros: { cal: 250, protein: 15, carbs: 40, fat: 3 },
  },
  {
    slug: 'overnight-oats-protein',
    title: 'High-Protein Overnight Oats',
    description: 'Make-ahead overnight oats with extra protein from Greek yogurt and seeds. Prep at night, grab and go in the morning.',
    mealType: 'Breakfast',
    tags: ['High-protein', 'Vegetarian', 'Make-ahead'],
    time: 5,
    servings: 1,
    image: 'overnight-oats-protein.webp',
    ingredients: [
      { item: 'Rolled oats', metric: '60 g', imperial: '2.1 oz' },
      { item: 'Greek yogurt (0% fat)', metric: '100 g', imperial: '3.5 oz' },
      { item: 'Milk', metric: '120 ml', imperial: '4 fl oz' },
      { item: 'Chia seeds', metric: '1 tbsp', imperial: '1 tbsp' },
      { item: 'Banana, sliced', metric: '1 small', imperial: '1 small' },
    ],
    steps: [
      'In a jar, combine the oats, Greek yogurt, milk and chia seeds. Stir well.',
      'Top with the sliced banana, seal and refrigerate overnight.',
      'Eat cold in the morning, or add a splash more milk if you prefer it looser.',
    ],
    macros: { cal: 410, protein: 24, carbs: 62, fat: 9 },
  },
];

export function getRecipe(slug) {
  return recipes.find((r) => r.slug === slug);
}

// All unique tags and meal types for filtering
export const allTags = [...new Set(recipes.flatMap((r) => r.tags))].sort();
export const allMealTypes = [...new Set(recipes.map((r) => r.mealType))];
