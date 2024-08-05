<?php
// Include the database connection file
header("Access-Control-Allow-Origin: http://127.0.0.1:5500");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
require_once 'db_connection.php';

// Function to handle API response
function sendResponse($status, $message) {
    header('Content-Type: application/json');
    echo json_encode(['status' => $status, 'message' => $message]);
    exit;
}

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validate and sanitize input data
    $username = isset($_POST['username']) ? trim($_POST['username']) : null;
    $email = isset($_POST['email']) ? trim($_POST['email']) : null;
    $website_need = isset($_POST['bussinessNeed']) ? trim($_POST['bussinessNeed']) : null;
    $business_type = isset($_POST['businessType']) ? trim($_POST['businessType']) : null;
    $industry = isset($_POST['industry']) ? trim($_POST['industry']) : null;
    $timeframe = isset($_POST['timeline']) ? trim($_POST['timeline']) : null;
    $budget = isset($_POST['budget']) ? trim($_POST['budget']) : null;
    $hiring_decision = isset($_POST['hiringDecision']) ? trim($_POST['hiringDecision']) : null;

    // Validate required fields (example)
    if (empty($username) || empty($email)) {
        sendResponse('error', 'Username and Email are required fields.');
    }

    // Prepare an SQL statement for execution
    $stmt = $conn->prepare("INSERT INTO website_needs (username, email, website_need, business_type, industry, timeframe, budget, hiring_decision) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");

    // Bind variables to the parameter markers of the prepared statement
    $stmt->bind_param("ssssssss", $username, $email, $website_need, $business_type, $industry, $timeframe, $budget, $hiring_decision);

    // Execute the prepared statement
    if ($stmt->execute()) {
        sendResponse('success', 'Data inserted successfully.');
    } else {
        sendResponse('error', 'Failed to insert data: ' . $stmt->error);
    }

    // Close the statement
    $stmt->close();
} else {
    sendResponse('error', 'Invalid request method.');
}

// Close the database connection
$conn->close();
?>
