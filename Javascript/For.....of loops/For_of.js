const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffery', 'Juanita', 'Antonio']
    ['Yuma', 'Sakura', 'Jack']
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}

for (let row of seatingChart) {
    for (let Students of row) {
        console.log(student);
    }
}

for (let char of "hello world") {
    console.log(char);
} 
