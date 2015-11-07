import React from 'react';
import LinearProgress from 'material-ui/lib/linear-progress'
import moment from 'moment'

var TOTAL_MONTHLY_INCOMING = 4000;

var defaultCategoriesNames = ["Housing", "Food", "Entertainment", "Clothing", "Transportation", "Gifts"]

var TOTAL_BY_CATEGORY_STUB = {
  Housing: 1000,
  Food: 650,
  Entertainment: 200,
  Clothing: 330,
  Transportation: 390,
  Gifts: 50
}

var getTotalByCategory = function(categoryName) {
  return TOTAL_BY_CATEGORY_STUB[categoryName]
}

class Category {
  constructor(name) {
    this.name = name
  }
}

class Budget {
  constructor(total) {
    this.used = 0
    this.total = total
  }
}

class CategoryBudget extends Budget {
  constructor(total, categoryName) {
    super(total)
    this.category = new Category(categoryName)
  }
}

var Budgets = {
  total: new Budget(TOTAL_MONTHLY_INCOMING)
}

for(var name in defaultCategoriesNames) {
  Budgets[name] = new CategoryBudget(getTotalByCategory(name), name)
}

var BudgetsView = React.createClass({
  render: function () {
    return (
        <div className="budgets_view">
          <h2>{moment().format('MMMM YY')}</h2>
          <label>Total</label>
          <LinearProgress mode="determinate" value={60} />
        </div>
      )
  }
})

module.exports = BudgetsView
