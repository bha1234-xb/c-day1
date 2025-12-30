fetch('http://localhost:3000/api/data')
    .then(res => res.json())
    .then(data => {
        const tbody = document.getElementById('data');
        data.forEach(d => {
            tbody.innerHTML += `
                <tr>
                    <td>${d.data_id}</td>
                    <td>${d.device_id}</td>
                    <td>${d.value}</td>
                    <td>${d.created_at}</td>
                </tr>
            `;
        });
    });
