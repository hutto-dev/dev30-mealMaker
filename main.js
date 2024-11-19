const menu = {
  courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  addDishToCourse: function (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    if (courseName === "appetizers") {
      this.courses.appetizers.push(dish);
    } else if (courseName === "mains") {
      this.courses.mains.push(dish);
    } else if (courseName === "desserts") {
      this.courses.desserts.push(dish);
    }
  },
  getRandomDishFromCourse: function (courseName) {
    let dishes = [];
    if (courseName === "appetizers") {
      dishes = this.courses.appetizers;
    } else if (courseName === "mains") {
      dishes = this.courses.mains;
    } else if (courseName === "desserts") {
      dishes = this.courses.desserts;
    }

    const randomIndex = Math.floor(Math.random() * dishes.length);

    return dishes[randomIndex];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");

    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Meal: meal includes: Starter: ${appetizer.name} Main: ${
      main.name
    } Dessert: ${dessert.name}. Ttotal Price: $${totalPrice.toFixed(2)}`;
  },
};

menu.addDishToCourse("appetizers", "Fried Pickles", 7.99);
menu.addDishToCourse("appetizers", "Mozt Sticks", 6.99);
menu.addDishToCourse("appetizers", "Cheese Fries", 10.99);

menu.addDishToCourse("mains", "Cheeseburger", 19.99);
menu.addDishToCourse("mains", "Taco Salad", 22.99);
menu.addDishToCourse("mains", "Chicken Sandwich", 15.99);

menu.addDishToCourse("desserts", "Tiramisu", 6.5);
menu.addDishToCourse("desserts", "Chocolate Lava Cake", 5.99);
menu.addDishToCourse("desserts", "Fruit Sorbet", 6.0);


const meal = menu.generateRandomMeal();


console.log(meal);
