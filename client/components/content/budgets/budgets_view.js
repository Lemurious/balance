import React from 'react';
import moment from 'moment'
import {palette} from './../../../theme.js'

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
          <div id="budgets_chart"></div>
        </div>
      )
  },

  componentDidMount: function(){
    this.drawCharts();
  },

  componentDidUpdate: function(){
    this.drawCharts();
  },

  drawCharts: function(){
    var data = new google.visualization.arrayToDataTable([
      ['', 'Used budget', 'Total budget'],
      ['Food', 8175000, 8008000],
      ['Housing', 3792000, 3694000],
      ['Sport', 2695000, 2896000],
      ['Gifts', 2099000, 1953000],
      ['Others', 1526000, 1517000]]
    );

    var options = {
      chartArea: {top: 200, width: '3%'},
      legend: { position: 'none' },
      isStacked: true,
      hAxis: {
        minValue: 0,
      },
      vAxis: {
      },
      bars: 'horizontal',
      height: 400,
      colors: [palette.accent1Color, palette.accent2Color]
    };

    var chart = new google.charts.Bar(
      document.getElementById("budgets_chart")
    );
    chart.draw(data, google.charts.Bar.convertOptions(options));
  }
})

module.exports = BudgetsView
