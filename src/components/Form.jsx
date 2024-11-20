import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("Project 2");
  const [description, setDescription] = useState("Create a new app");
  const [isDone, setIsDone] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  console.log(props.tasks.length);

  function createRandomId() {
    const randomId = Math.floor(Math.random() * 99999) + "a";
    return randomId;
  }

  function handleSubmit(event) {
    console.log(event);

    event.preventDefault(); // previene el comportamiento del form por defecto que es recargar la página

    /*  if (name.length < 3) {
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 2000);
      return;
    } */

    const newTask = {
      _id: createRandomId(),
      description,
      name,
      isDone,
    };

    console.log(newTask);

    /* props.setTasks([...props.tasks, newTask]); */

    const tasksCopy = [...props.tasks]; // creamos una copia

    tasksCopy.push(newTask); // la modificamos

    props.setTasks(tasksCopy); // actualizamos el estado
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        onChange={(e) => {
          setName(e.target.value);
          /*   
       // ESTO DEBERÍA ESTAR EN UNA FUNCIÓN A PARTE, sería para mostrar un error mientras tecleamos
       if (name.length < 3) {
            setErrorMessage(true);
          }else{
            setErrorMessage(false)
          } */
        }}
        value={name}
        id="name"
        type="text"
      />
      {errorMessage && (
        <span style={{ color: "red" }}>
          El name debe ser mayor que 3 caracteres
        </span>
      )}
      <label htmlFor="description">Description:</label>
      <input
        id="description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
      />
      <label htmlFor="isDone">Is done:</label>
      <input
        id="isDone"
        type="checkbox"
        onChange={(e) => setIsDone(e.target.checked)}
        checked={isDone}
      />
      <button type="submit">Add task</button>
    </form>
  );
};

export default Form;
