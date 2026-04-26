async function loadEmployees() {
    try {
        const response = await fetch("http://localhost:3000/employees");
        const employees = await response.json();

        const tbody = document.querySelector("#employeesTable tbody");
        tbody.innerHTML = "";

        employees.forEach(emp => {
            const row = `
                <tr>
                    <td>${emp.Id}</td>
                    <td>${emp.FirstName}</td>
                    <td>${emp.Lastname}</td>
                    <td>${emp.Department}</td>
                </tr>
            `;
            tbody.innerHTML += row;
        });

    } catch (error) {
        console.error("Erreur lors du chargement :", error);
    }
}

loadEmployees();
