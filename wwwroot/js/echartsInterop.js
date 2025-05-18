window.echartsInterop = {
    initChart: function (elementId, chartOptions) {
        const dom = document.getElementById(elementId);
        const chart = echarts.init(dom);
        chart.setOption(chartOptions);
    }
};