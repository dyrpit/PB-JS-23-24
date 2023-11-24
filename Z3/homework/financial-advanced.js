const financialData = require("./financial.json");

const ALLOWED_FIELDS = {
  TYPE: "Type",
  COMPANY: "company",
  DATE: "date",
};

const year = 2014;

function getFiancialObject() {
  const allowedFields = Object.values(ALLOWED_FIELDS);

  const financialObject = {
    spendindsPerYear: getSpendingsPerYear,
    spendingsPerField: getSpendingsPer,
  };

  return financialObject;

  function getSpendingsPerYear(year) {
    return financialData.reduce((totalSpendings, spending) => {
      if (spending.detailsOfPayent.date.includes(year.toString())) {
        const currentCost = +spending.cost;
        totalSpendings += currentCost;
      }

      return +totalSpendings.toFixed(2);
    }, 0);
  }

  function getSpendingsPer(field, dateFilter) {
    if (!allowedFields.includes(field)) {
      return "Unsupported field: " + field;
    }

    return financialData.reduce((spendingObj, spending) => {
      const key = getKeyFromValue(field, spending, dateFilter);

      if (!spendingObj[key]) {
        spendingObj[key] = 0;
      }

      const currentCost = +spending.cost;
      const newTotalCost = +(spendingObj[key] + currentCost).toFixed(2);
      spendingObj[key] = newTotalCost;

      return spendingObj;
    }, {});
  }

  function getKeyFromValue(field, spending, dateFilter) {
    let key = spending.detailsOfPayent[field];

    if (dateFilter && field === ALLOWED_FIELDS.DATE) {
      key = getKeyFromDate(spending.detailsOfPayent[field], dateFilter);
    }

    return key;
  }

  function getKeyFromDate(date, dateFilter) {
    if (dateFilter === "month") {
      return getMonthKey(date);
    }

    if (dateFilter === "weekday") {
      return getWeekdayKey(date);
    }
  }

  function getMonthKey(date) {
    const MONTHS = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const monthIndex = +date.split("-")[1];
    return MONTHS[monthIndex - 1];
  }

  function getWeekdayKey(date) {
    const WEEK_DAYS = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];

    const [day, month, year] = date.split("-");
    const dateObject = new Date(+year, +month - 1, +day);
    return WEEK_DAYS[dateObject.getDay()];
  }
}

const financialReport = getFiancialObject();

const yearlySpendings = financialReport.spendindsPerYear(2014);
console.log("Yearly spendings for year " + year + ": " + yearlySpendings);

const spendingsPerCompany = financialReport.spendingsPerField(
  ALLOWED_FIELDS.COMPANY
);
console.log("Spendings per company: " + JSON.stringify(spendingsPerCompany));

const spendingsPerType = financialReport.spendingsPerField(ALLOWED_FIELDS.TYPE);
console.log("Spendings per type: " + JSON.stringify(spendingsPerType));

const spendingsPerMonth = financialReport.spendingsPerField(
  ALLOWED_FIELDS.DATE,
  "month"
);
console.log("Spendings per month " + JSON.stringify(spendingsPerMonth));

const spendingsPerWeekday = financialReport.spendingsPerField(
  ALLOWED_FIELDS.DATE,
  "weekday"
);
console.log("Spendings per weekday " + JSON.stringify(spendingsPerWeekday));
