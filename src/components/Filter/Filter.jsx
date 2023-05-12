import PropTypes from "prop-types";
import css from './Filter.module.css'

const Filter = ({ filter, onFilter }) => {
  return(
    <label className={css.lable}>
    Find contact by name
      <input
        className={css.input} 
        type="text"
        name="filter"
        value={filter}
        onChange={(e)=>onFilter(e.target.value)}
      />
    </label>
  )
}
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
}
export default Filter;