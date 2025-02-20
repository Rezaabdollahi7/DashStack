import ReactApexChart from 'react-apexcharts'
import PropTypes from 'prop-types'

const RadialBar = ({
  series = [44, 55, 67],
  labels = ['Mens', 'Womens', 'Kids'],
  colors = ['#00a76f', '#ffab00', '#ff5630'],
  height = 350,
}) => {
  const options = {
    fill: {
      colors: colors,
    },
    chart: {
      height: height,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function () {
              return series.reduce((acc, cur) => acc + cur, 0).toString()
            },
          },
        },
      },
    },
    labels: labels,
  }

  return (
    <div>
      <div id='chart'>
        <ReactApexChart
          options={options}
          series={series}
          type='radialBar'
          height={height}
        />
      </div>

      <div className='flex items-center justify-center gap-3 border-t border-gray-200 pt-4'>
        {labels.map((label, i) => (
          <div className='flex items-baseline justify-center gap-1' key={i}>
            <span
              className='h-3 w-3 rounded-full'
              style={{ backgroundColor: colors[i] }}
            ></span>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
RadialBar.propTypes = {
  series: PropTypes.array,
  labels: PropTypes.array,
  colors: PropTypes.array,
  height: PropTypes.number,
}
export default RadialBar
