// Adds an event listener for DOMContentLoaded to ensure the HTML is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {

    // Gets the 2D rendering context for the canvas with the ID 'incidenceChart'
    const ctxIncidence = document.getElementById('incidenceChart').getContext('2d');

    // Initializes a new line chart
    const incidenceChart = new Chart(ctxIncidence, {
        
        // Sets the chart type to 'line'
        type: 'line',

        // Configuration for the chart's data
        data: {

            // Sets the labels for the x-axis (years in this case)
            labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],

            // Defines the dataset for the chart
            datasets: [{
                
                // Sets the label for the dataset
                label: 'Incidence Rates',

                // Sets the data points for the incidence rates over the years
                data: [15, 20, 25, 30, 35, 40, 50],

                // Specifies the line color
                borderColor: 'rgba(52, 152, 219, 1)',

                // Sets the fill color for the area below the line
                backgroundColor: 'rgba(52, 152, 219, 0.3)',

                // Enables filling of the area below the line
                fill: true,

                // Sets the line thickness
                borderWidth: 2,
            }]
        },

        // Configuration options for the chart
        options: {

            // Enables responsiveness for the chart to adjust to different screen sizes
            responsive: true,

            // Configures the axes of the chart
            scales: {

                // Configures the y-axis
                y: {

                    // Ensures the y-axis starts at zero
                    beginAtZero: true,

                    // Sets the title for the y-axis
                    title: {

                        // Enables display of the y-axis title
                        display: true,

                        // Text for the y-axis title
                        text: 'Rates per 100,000',

                        // Sets the color of the y-axis title
                        color: '#34495e',
                    },

                    // Configures the tick marks on the y-axis
                    ticks: {

                        // Sets the color of the y-axis tick marks
                        color: '#34495e',
                    }
                },

                // Configures the x-axis
                x: {

                    // Configures the tick marks on the x-axis
                    ticks: {

                        // Sets the color of the x-axis tick marks
                        color: '#34495e',
                    }
                }
            },

            // Configures plugins such as legends
            plugins: {

                // Configures the legend for the chart
                legend: {

                    // Configures the labels for the legend
                    labels: {

                        // Sets the color for the legend labels
                        color: '#34495e',
                    }
                }
            }
        }
    });

    // Gets the 2D rendering context for the canvas with the ID 'survivalChart'
    const ctxSurvival = document.getElementById('survivalChart').getContext('2d');

    // Initializes a new bar chart
    const survivalChart = new Chart(ctxSurvival, {

        // Sets the chart type to 'bar'
        type: 'bar',

        // Configuration for the chart's data
        data: {

            // Sets the labels for the x-axis (years)
            labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],

            // Defines the dataset for the bar chart
            datasets: [{

                // Sets the label for the dataset
                label: 'Survival Rates',

                // Sets the data points for the survival rates over the years
                data: [60, 55, 53, 50, 48, 45, 40],

                // Specifies the background color of the bars
                backgroundColor: 'rgba(231, 76, 60, 0.7)',

                // Specifies the border color for the bars
                borderColor: 'rgba(231, 76, 60, 1)',

                // Sets the border width for the bars
                borderWidth: 1,
            }]
        },

        // Configuration options for the chart
        options: {

            // Enables responsiveness for the chart to adjust to different screen sizes
            responsive: true,

            // Configures the axes of the chart
            scales: {

                // Configures the y-axis
                y: {

                    // Ensures the y-axis starts at zero
                    beginAtZero: true,

                    // Sets the title for the y-axis
                    title: {

                        // Enables display of the y-axis title
                        display: true,

                        // Text for the y-axis title
                        text: 'Percentage (%)',

                        // Sets the color of the y-axis title
                        color: '#34495e',
                    },

                    // Configures the tick marks on the y-axis
                    ticks: {

                        // Sets the color of the y-axis tick marks
                        color: '#34495e',
                    }
                },

                // Configures the x-axis
                x: {

                    // Configures the tick marks on the x-axis
                    ticks: {

                        // Sets the color of the x-axis tick marks
                        color: '#34495e',
                    }
                }
            },

            // Configures plugins such as legends
            plugins: {

                // Configures the legend for the chart
                legend: {

                    // Configures the labels for the legend
                    labels: {

                        // Sets the color for the legend labels
                        color: '#34495e',
                    }
                }
            }
        }
    });
});
