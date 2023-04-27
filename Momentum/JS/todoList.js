const todoForm = document.querySelector("#todoForm");
const inputForm = todoForm.querySelector(":first-child");
const todoList = document.querySelector("#todoList");

let todo = [];  // 로컬스토리지에 배열형태로 저장할거임.

const todoStorageName = "todolist";

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();    // 부모 요소 제거 (연결 끊기)
  todo = todo.filter((item) => item.id !== parseInt(li.id));  // todo = 해당요소를 제거한 새로운 배열.
  saveTodo();
}

function saveTodo() {
  localStorage.setItem(todoStorageName, JSON.stringify(todo));
}

function createTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;  // span의 값인 투두리스트의 내용 입력
  const button = document.createElement("button");  // span, button을 자식으로 가져야 하므로 생성
  button.innerText = "❌";    // 버튼의 목적인 '제거'답게 값을 X 이모티콘으로 설정
  li.appendChild(span);    // span을 li에 넣어주기
  li.appendChild(button);  // button을 li에 넣어주기
  todoList.appendChild(li);    // 완성된 li를 html파일에 넣어주기 (실제로 구현되는 것)
  button.addEventListener("click", deleteTodo);
}


function handleTodoForm(event) {
  event.preventDefault();
  const todovalue = inputForm.value;
  inputForm.value = "";
  const newTodoobj = {
    text: todovalue,
    id: Date.now(),
  };
  todo.push(newTodoobj);
  createTodo(newTodoobj);
  saveTodo(newTodoobj);
}
todoForm.addEventListener("submit", handleTodoForm);

const savedTodo = localStorage.getItem(todoStorageName);
if (savedTodo) {
  const parsedTodo = JSON.parse(savedTodo);
  todo = parsedTodo;
  parsedTodo.forEach(createTodo);
}