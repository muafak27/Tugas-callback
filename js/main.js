$.ajax({
    url: 'https://jsonplaceholder.typicode.com/users',
    success: result => {
        let baris = '';
        result.forEach(data => {
            baris += `<tr>
                            
                            <td>${data.id}</td>
                            <td>${data.name}</td>
                            <td>${data.username}</td>
                            <td>${data.email}</td>
                            <td>${data.address.street}, ${data.address.suite}, ${data.address.city}</td>
                            <td>${data.company.name}</td>
                        </tr>`;

        });
        $('.tabeldata').html(baris);
    }
});