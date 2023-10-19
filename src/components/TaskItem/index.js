import './index.css'

const TaskItem = props => {
  const {taskDetails} = props
  const {name, type, id} = taskDetails

  return (
    <li className="tasks-container" key={id}>
      <p>{name}</p>
      <button type="button" className="tag-task-button">
        {type}
      </button>
    </li>
  )
}
export default TaskItem
