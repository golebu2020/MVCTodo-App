  //Model Section
      //If localSTorage has todos array then use it
      //otherwise use a default array
      let todos;

      const savedTodos = JSON.parse(localStorage.getItem('todos'));

      if (Array.isArray(savedTodos)){
        todos = savedTodos;
      }else{
        todos = [{
          title:'Get Groceries',
          dueDate: '2021-10-04',
          id: 'id1'
        },{
          title:'Wash Car',
          dueDate: '2021-02-03',
          id: 'id2'
        },{
          title:'Make Dinner',
          dueDate: '2021-03-04',
          id: 'id3'
        }];
          
      }
     //Create a Todo
 
      function createTodo(title, dueDate){
        const id = ' ' + new Date().getTime();

        todos.push({
          title: title,
          dueDate: dueDate,
          id : id
        });
        saveTodos(); 
      }

      //Delete Todo
      function removeTodo(idToDelete){
        todos = todos.filter(function (todo){
          //if the id of this todo matches idTOdelte return false
          //for everything else return true
          if (idToDelete === todo.id){
            return false;
          }else{
            return true;
          }
        });

        saveTodos();
      }

      function saveTodos(){
        localStorage.setItem('todos', JSON.stringify(todos));
      }

      //Controller Section

      function addTodo(){
        const input = document.getElementById('todo-title');
        const title = input.value;

        const datePicker = document.getElementById('date-picker');
        const dueDate= datePicker.value;

        createTodo(title, dueDate);  
        input.value ="";      
        render();
      }

      render();

      function deleteTodo(event){
        const deleteButton = event.target;
        const idToDelete = deleteButton.id;

        removeTodo(idToDelete);
        render();
      }


      //View Section
      function render(){
        document.querySelector(".todo-list-container").innerHTML = "";
        
        todos.forEach(function (todo) {
          const element = document.createElement('div');
          element.innerText = todo.title + " " + todo.dueDate;
          
          const deleteButton = document.createElement('button');
          deleteButton.innerText= "Delete";
          deleteButton.style = 'margin-left: 12px;';
          deleteButton.onclick = deleteTodo;
          deleteButton.id = todo.id;
          element.appendChild(deleteButton);
          
          document.querySelector(".todo-list-container").appendChild(element);
        });
      }

     
