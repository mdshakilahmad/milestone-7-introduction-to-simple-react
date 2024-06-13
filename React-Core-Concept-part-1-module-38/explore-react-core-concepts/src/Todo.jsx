/* 
export default function Todo(props) {
  props.task = "ami ghomabo";
  return <li>Tast: {props.task}</li>;
}
 */
/* 
export default function Todo({ task }) {
  task = "ami ghomabo";
  return <li>Task:{task}</li>;
}
 */
/* 
export default function Todo({ task, isDone }) {
  return <li>Task:{task}</li>;
}
 */

// =====================================================================================================================

// conditional rendering option 1 :
/* export default function Todo({ task, isDone }) {
  // if (isDone){} // shodhu isDone dileo hoto  === true na bolleo cholto
  if (isDone === true) {
    return <li>Finised: {task}</li>;
  } else {
    return <li> Work on : {task}</li>;
  }
}
 */
/* 
// conditional rendering option 2 :
export default function Todo({ task, isDone }) {
  if (isDone) {
    return <li>Finish {task}</li>;
  }
  return <li>Work on : {task}</li>;
}
 */
/* 
// conditional rendering option 3 : ternary operator
export default function Todo({ task, isDone }) {
  return (
    <li>
      {isDone ? "Finished" : "Work on"} : {task}
    </li>
  );
}
 */

/* 
// conditional rendering option 4 : &&
// অনেক সময় হয় যে  আমরা সধু যেই condition true হবে সেটা সধু দেখাতে চাই | আর যেটা false সেটা দেখাবেই না তাহলে এভাবে করবো && দিইয়ে |
export default function Todo({ task, isDone }) {
  return (
    <li>
      {task} {isDone && ": done"}
    </li>
  );
}
 */
/* 
// conditional rendering option 5 : ||
// অনেক সময় হয় যে আমরা সধু যেই condition false হবে সেটা সধু দেখাতে চাই | অর্থাৎ সত্য না হয় সেটা | আর যেটা true সেটা দেখাবেই না তাহলে এভাবে করবো || (or) অর দিবো |
export default function Todo({ task, isDone }) {
  return (
    <li>
      {task} {isDone || ": Do it"}
    </li>
  );
}
 */

// conditional rendering option 6 :
export default function Todo({ task, isDone }) {
  let listItem;
  if (isDone) {
    listItem = <li>Finished : {task}</li>;
  } else {
    listItem = <li>Work on : {task}</li>;
  }
  return listItem;
}
