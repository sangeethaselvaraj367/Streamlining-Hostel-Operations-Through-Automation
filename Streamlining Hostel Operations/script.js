function submitAttendance(event) {
        event.preventDefault(); // Prevent default form submission
    
        // Get form data
        const name = document.getElementById('name').value;
        const rollNo = document.getElementById('rollNo').value;
        const attendanceDate = document.getElementById('attendanceDate').value;
        const attendanceStatus = document.getElementById('attendanceStatus').value;
        const remarks = document.getElementById('remarks').value;
    
        // Do something with the form data (e.g., save to localStorage, send to server)
        console.log("Name:", name);
        console.log("Roll Number:", rollNo);
        console.log("Attendance Date:", attendanceDate);
        console.log("Attendance Status:", attendanceStatus);
        console.log("Remarks:", remarks);
    
        // Optionally, you can save the data to localStorage or send it to the server
        // Example: Save to localStorage
        const attendanceData = JSON.parse(localStorage.getItem("attendanceData")) || [];
        const newEntry = { name, rollNo, date: attendanceDate, status: attendanceStatus, remarks };
        attendanceData.push(newEntry);
        localStorage.setItem("attendanceData", JSON.stringify(attendanceData));
    
        // Reset the form
        document.getElementById('attendanceForm').reset();
    
        // Optionally, provide feedback to the user
        alert("Attendance submitted successfully!");
    }