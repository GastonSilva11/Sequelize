/**
 * El seeder no es más que un archivo que contiene una función que se encarga
 * de insertar datos (generalmente de prueba) en una base de datos.
 *
 * El nombre "seeder" es una convención y significa "semillero".
 *
 * Además, en este caso, se está usando una librería llamada Faker
 * (https://fakerjs.dev/) para facilitar la creación de datos ficticios como
 * nombres, apellidos, títulos, direcciones y demás textos.
 *
 * Suele ser común que en los seeders exista un `for` donde se define la
 * cantidad de registros de prueba que se insertarán en la base de datos.
 * En este ejemplo se están insertando 500 artículos con textos ficticios.
 *
 *
 */

const { fakerES: faker } = require("@faker-js/faker");
const { User } = require("../models");

module.exports = async () => {
  const users = [];

  for (let i = 0; i < 10; i++) {
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    users.push({
      firstname: firstname,
      lastname: lastname,
      email: faker.internet.email(),
      username: firstname + lastname + i,
      password: "1234",
    });
  }

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
