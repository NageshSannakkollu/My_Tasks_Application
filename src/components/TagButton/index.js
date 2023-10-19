import './index.css'

const TagButton = props => {
  const {tagButtonDetails, clickOnTagButton} = props
  const {displayText, optionId} = tagButtonDetails

  const clickOnTag = () => {
    clickOnTagButton(optionId)
  }

  return (
    <li className="tags-list-container">
      <button type="button" className="tag-button" onClick={clickOnTag}>
        {displayText}
      </button>
    </li>
  )
}

export default TagButton
