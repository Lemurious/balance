import React from 'react';
import LinearProgress from 'material-ui/lib/linear-progress'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import {Pie} from 'react-chartjs';
import BudgetsView from './budgets/budgets_view.js';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import Dialog from 'material-ui/lib/dialog'
import TextField from 'material-ui/lib/text-field'
import format from '../../lib/format'
import moment from 'moment'

var Content = React.createClass({
  getInitialState: function() {
    return {
      newTransaction: {
        valueDate: "2015-09-17",
        amount: null,
        currency: "EUR",
        meta: {
          commentValue: null
        }
      }
    }
  },
  onShowNewTransaction: function() {
    this.refs.newTransactionDialog.show()
  },
  onTransactionSubmit: function() {
    this.refs.newTransactionDialog.dismiss()
  },
  onSaveCategory: function(e) {
    var cat_id_by_name = {
      "Restaurants": "7QhIjngJ0dKPrSt1",
      "Grocery shopping": "G1R9xGnFL79xHoTP",
      "Housing": "M2hTw26zbYLRAqpD",
      "Entertainment": "J0J2BLoj2RpO6CwA",
      "Transportation": "XEgao3Z6LLzxuLpf"
    }

    this.setState({
      newTransaction: {
        category: cat_id_by_name[e.target.value],
        currency: this.state.newTransaction.currency,
        valueDate: this.state.newTransaction.valueDate,
        amount: Number('-' + e.target.value),
        meta: {
          commentValue: this.state.newTransaction.meta.commentValue
        }
      }
    })
  },
  onSaveAmount: function(e) {
    this.setState({
      newTransaction: {
        category: this.state.newTransaction.category,
        currency: this.state.newTransaction.currency,
        valueDate: this.state.newTransaction.valueDate,
        amount: Number('-' + e.target.value),
        meta: {
          commentValue: this.state.newTransaction.meta.commentValue
        }
      }
    })
  },
  onSaveDescription: function(e) {
    this.setState({
      newTransaction: {
        category: this.state.newTransaction.category,
        currency: this.state.newTransaction.currency,
        valueDate: this.state.newTransaction.valueDate,
        amount: this.state.newTransaction.amount,
        meta: {
          commentValue: e.target.value
        }
      }
    })
  },
  render: function() {
    var pieData = [
      {
        value: 100,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Housing"
      },
      {
        value: 70,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Food"
      },
      {
        value: 50,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Clothing"
      },
      {
        value: 30,
        color: "#949494",
        highlight: "#C4C4C4",
        label: "Entertainment"
      },
      {
        value: 15,
        color: "#666666",
        highlight: "#7F7F7F",
        label: "Gifts"
      }
    ]
    if (this.state.newTransaction.amount && this.state.newTransaction.meta.commentValue) {
      this.props.transactions.unshift(this.state.newTransaction)
    }
    var transactions = this.props.transactions.slice(0, 5)
    var transactionList = transactions.map(function(item) {
      var secondaryTextClass = item.amount > 0 ? 'pos' : 'neg';
      return (
        <ListItem
          primaryText={moment(item.valueDate, "YYYY-MM-DD").format('DD.MM.YYYY')}
          secondaryText={
            <span>
              <span className={secondaryTextClass}>{format.currency(item.amount)} {item.currency} </span>
              <span>{item.meta ? item.meta.commentValue : item.bankDescription}</span>
            </span>
          } />
      );
    });
    var standardActions = [
      { text: 'Cancel' },
      { text: 'Submit', onTouchTap: this.onTransactionSubmit, ref: 'submit' }
    ]
    return (
      <div id="content">
        <div id="main-date">17.9.2015</div>
        <div id="budgets">
          <h1>Budgets</h1>
          <BudgetsView
            transactions={this.props.transactions}
            categories={this.props.categories} />
        </div>
        <div id="transactions">
          <h1>Transactions</h1>
          <h3>Transactions overview</h3>
          <div className="pie-wrapper">
            <Pie data={pieData} />
          </div>
          <h3>Latest Transactions</h3>
          <List>
            {transactionList}
          </List>
          <div className="button_add">
            <FloatingActionButton
              mini={true}
              secondary={true}
              onClick={this.onShowNewTransaction}>
              <span className="button_text">+</span>
            </FloatingActionButton>
          </div>
        </div>
        <Dialog
          title="New Transaction"
          actionFocus="submit"
          actions={standardActions}
          ref="newTransactionDialog">
          <TextField
            hintText="Recipient IBAN"
            underlineFocusStyle={{borderColor: 'red'}} />
          <TextField
            hintText="Category"
            underlineFocusStyle={{borderColor: 'red'}}
            onBlur={this.onSaveCategory} />
          <TextField
            hintText="Amount"
            underlineFocusStyle={{borderColor: 'red'}}
            onBlur={this.onSaveAmount} />
          <TextField
            hintText="Note"
            underlineFocusStyle={{borderColor: 'red'}}
            onBlur={this.onSaveDescription} />
        </Dialog>
      </div>
    )
  }
})

module.exports = Content
