export function menuPage() {
  const main = document.querySelector('main');
  main.classList.remove('contact-grid');
  main.innerHTML = '';

  const arr = [];

  createMenuTitle('Starters');
  createMenuItem('Fresh Garden Salad', "A mix of crisp lettuce, cherry tomatoes, cucumber, and bell peppers served with a tangy balsamic vinaigrette.");
  createMenuItem('Zesty Quinoa Avocado Bites', "Quinoa and avocado mixed with a hint of lime, cilantro, and diced red onions, served on a bed of baby spinach.");
  createMenuItem('Roasted Garlic Hummus Platter', "Creamy homemade hummus served with a variety of colorful veggie sticks and whole wheat pita bread.");
  createMenuTitle('Mains');
  createMenuItem('Grilled Lemon Herb Chicken', "Tender chicken breast marinated in a zesty lemon-herb blend, served with a side of steamed broccoli and quinoa.");
  createMenuItem('Veggie Stir-Fry', "Fresh seasonal vegetables sautéed in a light soy-ginger sauce, served over brown rice or cauliflower rice.");
  createMenuItem('Baked Salmon with Dill Sauce', "Succulent salmon fillet baked to perfection and topped with a creamy dill sauce, accompanied by roasted sweet potatoes and asparagus.");
  createMenuTitle('Desserts');
  createMenuItem('Fresh Fruit Parfait', "Layers of mixed berries, kiwi, and tropical fruits, topped with Greek yogurt and a sprinkle of granola for added crunch.");
  createMenuItem('Dark Chocolate-Dipped Strawberries', "Juicy strawberries dipped in rich, dark chocolate, a guilt-free indulgence.");
  createMenuItem('Chia Seed Pudding', 'A delightful blend of chia seeds and almond milk, topped with fresh mango slices and a drizzle of honey.');

  function createMenuItem(Title, Description) {
    const menuItem = document.createElement('p');
    menuItem.innerHTML = `<strong>${Title} - </strong>${Description}`
    return arr.push(menuItem);
  }

  function createMenuTitle(title) {
    const titleItem = document.createElement('h4');
    titleItem.textContent = title;
    return arr.push(titleItem);
  }

  arr.forEach(item => main.appendChild(item));

}

