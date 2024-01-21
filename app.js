const userList = document.getElementById('user-list');
const nameInput = document.getElementById('name-input');
const ageInput = document.getElementById('age-input');

const users = JSON.parse(localStorage.getItem('users')) || [];

function renderUserList() {
  userList.innerHTML = '';
  users.forEach((user, index) => {
    const userItem = document.createElement('li');
    userItem.className = 'user-item';
    userItem.innerHTML = `
      <span>${user.name}, ${user.age} yosh</span>
      <button onclick="editUser(${index})">edit</button>
      <button onclick="deleteUser(${index})">delate</button>
    `;
    userList.appendChild(userItem);
  });
}
function addUser() {
  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value);

  if (name !== '' && !isNaN(age)) {
    const newUser = { name, age };
    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));

    renderUserList();
    clearInputs();
  }
}

function editUser(index) {
  const editedName = prompt('Ismingizni kiriting:');
  const editedAge = parseInt(prompt('yoshingizni kiriting:'));

  if (editedName !== null && !isNaN(editedAge)) {
    users[index] = { name: editedName, age: editedAge };

    localStorage.setItem('users', JSON.stringify(users));

    renderUserList();
  }
}

function deleteUser(index) {
  const confirmDelete = confirm('rostan ham ochirmoqchimisz?');

  if (confirmDelete) {
    users.splice(index, 1);

    localStorage.setItem('users', JSON.stringify(users));

    renderUserList();
  }
}

function clearInputs() {
  nameInput.value = '';
  ageInput.value = '';
}

renderUserList();
