const React = require('react');

const FruitBasket = require('./FruitBasket');

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }

    this.fetchAll = this.fetchAll.bind(this);
    this.fetchFilters = this.fetchFilters.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchAll();
  }

  fetchAll() {
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({ fruit }));
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }

  handleFilterChange(e) {
    console.log('new filter: ', e.target.value);
    this.setState({ currentFilter: e.target.value });
  }

  render() {
    return (
      <FruitBasket
        fruit={this.state.fruit}
        currentFilter={this.state.currentFilter}
        filters={this.state.filters}
        updateFilterCallback={this.handleFilterChange}
      />
    );
  }
}

module.exports = App;
