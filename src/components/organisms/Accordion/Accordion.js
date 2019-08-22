import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Row from 'components/molecules/Row/Row';
import symbols from 'constants/symbols';

const DescriptionList = styled.dl`
  width: 65vw;
  
  @media (max-width: 1366px) {
    width: 75vw;
  }
  
  @media (max-width: 1200px) {
    width: 80vw;
  }
`;

class Accordion extends Component {
  state = Object.assign(...symbols.map(symbol => ({ [symbol]: false })));

  toggleDescriptionDetails = symbol => () => {
    const { state: expanded } = this;
    this.setState({ [`${symbol}`]: !expanded[`${symbol}`] });
  };

  render() {
    const shortcuts = symbols;
    const { transactions } = this.props;
    const { state: expand } = this;

    return (
      <DescriptionList>
        {
          shortcuts.map(symbol => (
            <Row
              title={symbol}
              transactions={transactions.filter(transaction => transaction.symbol === symbol)}
              onClick={this.toggleDescriptionDetails(symbol)}
              expanded={expand[`${symbol}`]}
              key={symbol}
            />
          ))
        }
      </DescriptionList>
    );
  }
}

Accordion.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
  })).isRequired,
};

export default Accordion;
