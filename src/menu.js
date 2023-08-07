export function menuPage() {
  const main = document.querySelector('main');
  main.innerHTML = '';
  const starterTitle = document.createElement('h4');
  const mainsTitle = document.createElement('h4');
  const desertsTitle = document.createElement('h4');
  const starter1 = document.createElement('p');
  const starter2 = document.createElement('p');
  const starter3 = document.createElement('p');
  const main1 = document.createElement('p');
  const main2 = document.createElement('p');
  const main3 = document.createElement('p');
  const desert1 = document.createElement('p');
  const desert2 = document.createElement('p');
  const desert3 = document.createElement('p');

  starterTitle.textContent = 'Starters';
  starter1.innerHTML = '<strong>Fresh Garden Salad -</strong> A mix of crisp lettuce, cherry tomatoes, cucumber, and bell peppers served with a tangy balsamic vinaigrette.';
  starter2.innerHTML = '<strong>Zesty Quinoa Avocado Bites -</strong> Quinoa and avocado mixed with a hint of lime, cilantro, and diced red onions, served on a bed of baby spinach.';
  starter3.innerHTML = '<strong>Roasted Garlic Hummus Platter -</strong> Creamy homemade hummus served with a variety of colorful veggie sticks and whole wheat pita bread.';
  mainsTitle.innerHTML = 'Mains';
  main1.innerHTML = '<strong>Grilled Lemon Herb Chicken -</strong> Tender chicken breast marinated in a zesty lemon-herb blend, served with a side of steamed broccoli and quinoa.';
  main2.innerHTML = '<strong>Veggie Stir-Fry -</strong> Fresh seasonal vegetables sautéed in a light soy-ginger sauce, served over brown rice or cauliflower rice.';
  main3.innerHTML = '<strong>Baked Salmon with Dill Sauce -</strong> Succulent salmon fillet baked to perfection and topped with a creamy dill sauce, accompanied by roasted sweet potatoes and asparagus.';
  desertsTitle.innerHTML = 'Desserts';
  desert1.innerHTML = '<strong>Fresh Fruit Parfait -</strong> Layers of mixed berries, kiwi, and tropical fruits, topped with Greek yogurt and a sprinkle of granola for added crunch.'
  desert2.innerHTML = '<strong>Dark Chocolate-Dipped Strawberries -</strong> Juicy strawberries dipped in rich, dark chocolate, a guilt-free indulgence.';
  desert3.innerHTML = '<strong>Chia Seed Pudding -</strong> A delightful blend of chia seeds and almond milk, topped with fresh mango slices and a drizzle of honey.';

  const arr = [starterTitle, starter1, starter2, starter3, mainsTitle, main1, main2, main3, desertsTitle, desert1, desert2, desert3];

  arr.forEach(item => main.appendChild(item));

}