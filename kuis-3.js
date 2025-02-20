const employees = [
  {
    name: "Fulan",
    email: "fulan@dicoding.com",
    joinYear: 2020,
  },
];

function addEmployee(name, email, joinYear) {
  /**
   * @TODO
   * lengkapi fungsi ini agar dapat menambahkan objek employee baru
   * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
   */

  const newEmployee = {
    name,
    email,
    joinYear,
  };
  employees.push(newEmployee);
}

addEmployee("Rahmat", "kulan@gmail.com", 2021);
console.log(employees);
