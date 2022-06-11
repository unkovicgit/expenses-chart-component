import data from '../data/data.json';

const maxAmount = data
  .map((x) => x.amount)
  .reduce((curr, next) => (curr < next ? next : curr), -Infinity);

const currDay = 'wed';

data.forEach((item) => {
  const chartCol = document.createElement('div');
  chartCol.classList.add('chart__col');

  const chartLine = document.createElement('div');
  chartLine.classList.add('chart__line');
  chartLine.style.height = `${maxAmount * 2.86}px`;

  if (item.day === currDay) chartLine.classList.add('active');

  const chartInsd = document.createElement('div');
  chartInsd.classList.add('chart__insd');
  chartInsd.style.height = `${item.amount * 2.86}px`;
  chartLine.appendChild(chartInsd);

  const chartTooltip = document.createElement('p');
  chartTooltip.classList.add('chart__tooltip');
  chartTooltip.innerText = `$${item.amount}`;
  chartTooltip.style.bottom = `${item.amount * 2.86 + 10}px`;
  chartLine.appendChild(chartTooltip);

  const chartDay = document.createElement('p');
  chartDay.classList.add('chart__day');
  chartDay.innerText = item.day;

  chartCol.appendChild(chartLine);
  chartCol.appendChild(chartDay);

  document.querySelector('.chart__grid')?.appendChild(chartCol);
});
