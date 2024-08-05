<?php

// Remove unnecessary line
// echo $GET;
// die();

class NovelModel {
    public $image;
    public $link;

    public function __construct($image, $link) {
        $this->image = $image;
        $this->link = $link;
    }
}

// Sample data
$novels = [
    new NovelModel("https://datasensegroup.co/assets/novel_images/ab.jpg", "https://play.google.com/store/apps/details?id=com.aarafrao.amerbail"),
    new NovelModel("https://datasensegroup.co/assets/novel_images/ah.jpg", "https://play.google.com/store/apps/details?id=com.aarafrao.aabehayat"),
    new NovelModel("https://datasensegroup.co/assets/novel_images/alf.jpg", "https://play.google.com/store/apps/details?id=com.aarafrao22.alif"),
    new NovelModel("https://datasensegroup.co/assets/novel_images/basil.jpg", "https://play.google.com/store/apps/details?id=com.aarafrao22.basil"),
    new NovelModel("https://datasensegroup.co/assets/novel_images/halim.jpg", "https://play.google.com/store/apps/details?id=com.aarafrao22.haalim"),
    new NovelModel("https://datasensegroup.co/assets/novel_images/jkp.jpg", "https://play.google.com/store/apps/details?id=com.aarafrao.jannat"),
    new NovelModel("https://datasensegroup.co/assets/novel_images/knkr.jpg", "https://play.google.com/store/apps/details?id=com.aaraf.kankar"),
    new NovelModel("https://datasensegroup.co/assets/novel_images/lhsl.jpg", "https://play.google.com/store/apps/details?id=com.aarafrao22.lahasil"),
    new NovelModel("https://datasensegroup.co/assets/novel_images/mala.jpg", "https://play.google.com/store/apps/details?id=com.aaraf.maalanovel"),
    new NovelModel("https://datasensegroup.co/assets/novel_images/nml.jpg", "https://play.google.com/store/apps/details?id=com.aarafrao.namal"),
    new NovelModel("https://datasensegroup.co/assets/novel_images/mushf.jpg", "https://play.google.com/store/apps/details?id=com.aarafrao22.mushaf"),
    new NovelModel("https://datasensegroup.co/assets/novel_images/pk.jpg", "https://play.google.com/store/apps/details?id=com.aarafrao.peerekamil"),
    new NovelModel("https://datasensegroup.co/assets/novel_images/yaram.jpg", "https://play.google.com/store/apps/details?id=com.aarafrao.yaramnovel")
    // Add more NovelModel instances as needed
];

// Shuffle the novels array
shuffle($novels);

// Define the API endpoint
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['endpoint']) && $_GET['endpoint'] === 'novels') {
    // Convert the list of NovelModel instances to associative arrays
    $novel_list = array_map(function($novel) {
        return ['image' => $novel->image, 'link' => $novel->link];
    }, $novels);

    // Set the response header to indicate JSON content
    header('Content-Type: application/json');

    // Return the JSON-encoded list of novels
    echo json_encode($novel_list);
} else {
    // Return an error response for unsupported endpoints
    http_response_code(404);
    echo json_encode(['error' => 'Endpoint not found']);
}
?>
