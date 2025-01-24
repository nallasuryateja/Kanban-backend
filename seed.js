// const { sequelize } = require("./src/config/db");
// const User = require("./src/models/user.model");
// const Column = require("./src/models/column.model");
// const Task = require("./src/models/task.model");

// const seedDatabase = async () => {
//   try {
//     // Sync the database (drop and recreate tables)
//     await sequelize.sync({ force: true });
//     console.log("Database synced successfully.");

//     // Insert dummy users
//     const users = await User.bulkCreate([
//       {
//         name: "John Doe",
//         avatar: "https://via.placeholder.com/150",
//         email: "john@example.com",
//       },
//       {
//         name: "Jane Smith",
//         avatar: "https://via.placeholder.com/150",
//         email: "jane@example.com",
//       },
//     ]);

//     console.log(
//       "Users inserted:",
//       users.map((user) => user.toJSON())
//     );

//     // Insert dummy columns
//     const columns = await Column.bulkCreate([
//       { name: "To Do" },
//       { name: "In Progress" },
//       { name: "Done" },
//     ]);

//     console.log(
//       "Columns inserted:",
//       columns.map((column) => column.toJSON())
//     );

//     // Insert dummy tasks
//     const tasks = await Task.bulkCreate([
//       {
//         title: "Task 1",
//         description: "This is task 1.",
//         due_date: new Date(),
//         column_id: columns[0].id, // Assign to "To Do"
//         assigned_user_id: users[0].id, // Assign to John
//       },
//       {
//         title: "Task 2",
//         description: "This is task 2.",
//         due_date: new Date(),
//         column_id: columns[1].id, // Assign to "In Progress"
//         assigned_user_id: users[1].id, // Assign to Jane
//       },
//       {
//         title: "Task 3",
//         description: "This is task 3.",
//         due_date: new Date(),
//         column_id: columns[2].id, // Assign to "Done"
//         assigned_user_id: users[0].id, // Assign to John
//       },
//     ]);

//     console.log(
//       "Tasks inserted:",
//       tasks.map((task) => task.toJSON())
//     );

//     console.log("Database seeded successfully.");
//   } catch (error) {
//     console.error("Error seeding database:", error);
//   } finally {
//     await sequelize.close();
//     console.log("Database connection closed.");
//   }
// };

// // Run the seeding function
// seedDatabase();

const { sequelize } = require("./src/config/db");
const User = require("./src/models/user.model");
const Column = require("./src/models/column.model");
const Task = require("./src/models/task.model");

const seedDatabase = async () => {
  try {
    // Sync the database (drop and recreate tables)
    await sequelize.sync({ force: true });
    console.log("Database synced successfully.");

    // Insert 10 dummy users
    const users = await User.bulkCreate([
      {
        name: "John Doe",
        avatar: "https://via.placeholder.com/150",
        email: "john@example.com",
      },
      {
        name: "Jane Smith",
        avatar: "https://via.placeholder.com/150",
        email: "jane@example.com",
      },
      {
        name: "Alice Brown",
        avatar: "https://via.placeholder.com/150",
        email: "alice@example.com",
      },
      {
        name: "Bob Johnson",
        avatar: "https://via.placeholder.com/150",
        email: "bob@example.com",
      },
      {
        name: "Charlie White",
        avatar: "https://via.placeholder.com/150",
        email: "charlie@example.com",
      },
      {
        name: "Diana Ross",
        avatar: "https://via.placeholder.com/150",
        email: "diana@example.com",
      },
      {
        name: "Eve Adams",
        avatar: "https://via.placeholder.com/150",
        email: "eve@example.com",
      },
      {
        name: "Franklin Stone",
        avatar: "https://via.placeholder.com/150",
        email: "franklin@example.com",
      },
      {
        name: "Grace Lee",
        avatar: "https://via.placeholder.com/150",
        email: "grace@example.com",
      },
      {
        name: "Hank Green",
        avatar: "https://via.placeholder.com/150",
        email: "hank@example.com",
      },
    ]);

    console.log(
      "Users inserted:",
      users.map((user) => user.toJSON())
    );

    // Insert 10 dummy columns
    const columns = await Column.bulkCreate([
      { name: "To Do" },
      { name: "In Progress" },
      { name: "Done" },
      { name: "Backlog" },
      { name: "Review" },
      { name: "Blocked" },
      { name: "Ready for Testing" },
      { name: "Under Discussion" },
      { name: "Ready to Deploy" },
      { name: "Completed" },
    ]);

    console.log(
      "Columns inserted:",
      columns.map((column) => column.toJSON())
    );

    // Insert 10 dummy tasks
    const tasks = await Task.bulkCreate([
      {
        title: "Task 1",
        description: "This is task 1.",
        due_date: new Date(),
        column_id: columns[0].id,
        assigned_user_id: users[0].id,
      },
      {
        title: "Task 2",
        description: "This is task 2.",
        due_date: new Date(),
        column_id: columns[1].id,
        assigned_user_id: users[1].id,
      },
      {
        title: "Task 3",
        description: "This is task 3.",
        due_date: new Date(),
        column_id: columns[2].id,
        assigned_user_id: users[2].id,
      },
      {
        title: "Task 4",
        description: "This is task 4.",
        due_date: new Date(),
        column_id: columns[3].id,
        assigned_user_id: users[3].id,
      },
      {
        title: "Task 5",
        description: "This is task 5.",
        due_date: new Date(),
        column_id: columns[4].id,
        assigned_user_id: users[4].id,
      },
      {
        title: "Task 6",
        description: "This is task 6.",
        due_date: new Date(),
        column_id: columns[5].id,
        assigned_user_id: users[5].id,
      },
      {
        title: "Task 7",
        description: "This is task 7.",
        due_date: new Date(),
        column_id: columns[6].id,
        assigned_user_id: users[6].id,
      },
      {
        title: "Task 8",
        description: "This is task 8.",
        due_date: new Date(),
        column_id: columns[7].id,
        assigned_user_id: users[7].id,
      },
      {
        title: "Task 9",
        description: "This is task 9.",
        due_date: new Date(),
        column_id: columns[8].id,
        assigned_user_id: users[8].id,
      },
      {
        title: "Task 10",
        description: "This is task 10.",
        due_date: new Date(),
        column_id: columns[9].id,
        assigned_user_id: users[9].id,
      },
    ]);

    console.log(
      "Tasks inserted:",
      tasks.map((task) => task.toJSON())
    );

    console.log("Database seeded successfully.");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await sequelize.close();
    console.log("Database connection closed.");
  }
};

// Run the seeding function
seedDatabase();
