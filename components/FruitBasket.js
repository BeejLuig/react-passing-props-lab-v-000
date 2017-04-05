const React = require('react');

const Filter = require('./Filter');
const FilteredFruitList = require('./FilteredFruitList');

const FruitBasket = (props) => {
  return (
    <div className="fruit-basket">
      <Filter
        handleChange={props.updateFilterCallback}
        filters={props.filters}
      />
      <FilteredFruitList
        filter={props.currentFilter}
        fruit={props.fruit}/>
    </div>
  );
}

FruitBasket.defaultProps = {
  fruit: [],
  currentFilter: null,
  updateFilterCallback: () => {},
  filters: []
}

module.exports = FruitBasket;
