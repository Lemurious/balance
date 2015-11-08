import React from 'react';
import moment from 'moment'
import {palette} from './../../../theme.js'
import FloatingActionButton from 'material-ui/lib/floating-action-button'

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

var USED_BY_CATEGORY_STUB = {
  Housing: 800,
  Food: 320,
  Entertainment: 230,
  Clothing: 20,
  Transportation: 150,
  Gifts: 0
}

class Category {
  constructor(name) {
    this.name = name
  }
}

class Budget {
  constructor(total, used) {
    this.used = (used || 0)
    this.total = total
  }
}

class CategoryBudget extends Budget {
  constructor(categoryName, total, used) {
    super(total, used)
    this.category = new Category(categoryName)
  }

  data() {
    var exceeding = -1* Math.min(0, this.total - this.used)
    var rest = Math.max(0, this.total - this.used)
    return [this.category.name, this.used, rest, exceeding, 'fill: #e5e4e2' ]
  }
}

var Budgets = {
  total: new Budget(TOTAL_MONTHLY_INCOMING),
  byCategories: {},

  getCategoriesData: function() {
    var result = []
    for(var key in this.byCategories) {
      var budget = this.byCategories[key]
      result.push(budget.data())
    }
    return result
  }
}

for(var i in defaultCategoriesNames) {
  var name = defaultCategoriesNames[i]
  Budgets.byCategories[name] = new CategoryBudget(name, TOTAL_BY_CATEGORY_STUB[name], USED_BY_CATEGORY_STUB[name])
}

var BudgetsView = React.createClass({
  render: function () {
    return (
        <div className="budgets_view">
          <h2>{moment().format('MMMM YY')}</h2>
          <div id="budgets_chart"></div>
          <div className="button_add_category">
            <FloatingActionButton mini={true} secondary={true}>
              <span className="button_text">+</span>
            </FloatingActionButton>
          </div>
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
    var raw_data = [['', 'Used budget', 'Total budget', 'Exceeded budget', { role: 'style' }]].concat(Budgets.getCategoriesData())
    var data = new google.visualization.arrayToDataTable(raw_data);

    var options = {
      width: '50%',
      height: 400,
      legend: { position: 'none' },
      stacked: true,
      axes: {
        x: {
          0: { side: 'top', format: { pattern: '# €' }}
        }
      },
      vAxis: {format:'# $'},
      bars: 'horizontal'
      //colors: [palette.accent1Color, palette.accent2Color, palette.primary1Color]
    };
    //console.log(google.charts.Bar.convertOptions(options))
    var chart = new google.charts.Bar(
      document.getElementById("budgets_chart")
    );

    chart.draw(data, options);
  }
})

module.exports = BudgetsView
