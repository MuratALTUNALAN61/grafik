var murat = {
    labels: ['Kategori 1', 'Kategori 2', 'Kategori 3', 'Kategori 4', 'Kategori 5','Kategori 6'],
    datasets: [{
        data: [10, 20, 15, 25, 20, 10],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#33FF99', '#8A2BE2','#F'],
    }]
};

// Grafik seçeneklerini tanımlayın
var secenekler = {
    responsive: true,           
    maintainAspectRatio: true,  
   
};

// Pasta dilimi grafiğini oluşturun
var pieChartCanvas = document.getElementById('pieChart');
var piechart = {
    type: 'pie',
    data: data,
    options: secenekler
};
var pieChart = new Chart(pieChartCanvas, piechart);
