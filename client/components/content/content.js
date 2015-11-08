import React from 'react';
import LinearProgress from 'material-ui/lib/linear-progress'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import {Pie} from 'react-chartjs';
import BudgetsView from './budgets/budgets_view.js';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import Dialog from 'material-ui/lib/dialog'
import TextField from 'material-ui/lib/text-field'

var Content = React.createClass({
  getInitialState: function() {
    return {
      newTransaction: {
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
  onSaveAmount: function(e) {
    this.setState({
      newTransaction: {
        currency: this.state.newTransaction.currency,
        amount: Number(e.target.value),
        meta: {
          commentValue: this.state.newTransaction.meta.commentValue
        }
      }
    })
  },
  onSaveDescription: function(e) {
    this.setState({
      newTransaction: {
        currency: this.state.newTransaction.currency,
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
          primaryText={item.meta ? item.meta.commentValue : item.bankDescription}
          secondaryText={
            <span className={secondaryTextClass}>
              {item.amount} {item.currency}
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
        <div id="history">
          <h1>History</h1>
          <div className="pie-wrapper">
            <Pie data={pieData} />
          </div>
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
            hintText="Recipient BIC"
            underlineFocusStyle={{borderColor: 'red'}} />
          <TextField
            hintText="Amount"
            underlineFocusStyle={{borderColor: 'red'}}
            onBlur={this.onSaveAmount} />
          <TextField
            hintText="Note"
            underlineFocusStyle={{borderColor: 'red'}}
            onBlur={this.onSaveDescription} />
        </Dialog>
        <div id="budgets">
          <h1>Budgets</h1>
          <BudgetsView transactions={this.props.transactions} categories={this.props.categories} />
        </div>
        <div id="goals">
          <h1>Goals</h1>
        </div>
      </div>
    )
  }
})

module.exports = Content
