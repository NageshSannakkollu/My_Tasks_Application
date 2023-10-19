import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TagButton from './components/TagButton'
import TaskItem from './components/TaskItem'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here
class App extends Component {
  state = {
    tasksList: [],
    inputTask: '',
    taskType: tagsList[0].optionId,
  }

  addTask = event => {
    event.preventDefault()
    const {inputTask, taskType} = this.state
    const newTask = {
      name: inputTask,
      type: taskType,
      id: uuidv4(),
    }

    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, newTask],
      inputTask: '',
      taskType: '',
    }))
  }

  clickOnTagButton = optionId => {
    this.setState({taskType: optionId})
  }

  enterTaskName = event => {
    this.setState({inputTask: event.target.value})
  }

  onchangeTaskType = event => {
    this.setState({taskType: event.target.value})
  }

  render() {
    const {inputTask, taskType, tasksList} = this.state
    const tasksLength = tasksList.length

    return (
      <div className="app-container">
        <form className="form-container" onSubmit={this.addTask}>
          <h1 className="create-task-heading">Create a Task!</h1>
          <div className="input-container">
            <div>
              <label htmlFor="input-task">Task</label>
              <br />
              <input
                type="text"
                className="task-input"
                id="input-task"
                placeholder="Enter the task here"
                onChange={this.enterTaskName}
                value={inputTask}
              />
            </div>
            <div>
              <label htmlFor="tags-input">Tags</label>
              <br />
              <select
                id="tags-input"
                value={taskType}
                onChange={this.onchangeTaskType}
              >
                {tagsList.map(eachTag => (
                  <option key={eachTag.optionId} value={eachTag.optionId}>
                    {eachTag.displayText}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button type="submit" className="add-task-button">
            Add Task
          </button>
        </form>
        <div>
          <h1>Tags</h1>
          <ul className="list-of-tags">
            {tagsList.map(eachButtonTag => (
              <TagButton
                tagButtonDetails={eachButtonTag}
                key={eachButtonTag.optionId}
                clickOnTagButton={this.clickOnTagButton}
              />
            ))}
          </ul>
          <h1>Tasks</h1>
          {tasksLength > 0 ? (
            <ul className="tasks-list-container">
              {tasksList.map(task => (
                <TaskItem taskDetails={task} key={task.id} />
              ))}
            </ul>
          ) : (
            <div className="no-tasks-container">
              <p className="no-tasks">No Tasks Added Yet</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
