// ตัวแปรสำหรับการตรวจสอบคำตอบ
const answerField = document.getElementById('birthday-answer');
const checkAnswerButton = document.getElementById('check-answer-btn');
const errorMessage = document.getElementById('error-message');
const questionSection = document.getElementById('question-section');
const videoElement = document.getElementById('birthday-video');
const showImagesButton = document.getElementById('show-images-btn');
const content = document.getElementById('content');
const birthdayMessage = document.getElementById('birthday-message');
const videoSection = document.getElementById('video-section');

// คำถามและคำตอบที่ถูกต้อง
const correctAnswer = 'Natty';  // หรือคำที่ต้องการให้ตอบ

// เมื่อคลิกปุ่มตรวจคำตอบ
checkAnswerButton.addEventListener('click', function() {
    const userAnswer = answerField.value.trim();

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        // ถ้าคำตอบถูกต้อง, ซ่อนคำถามและแสดงคลิป
        questionSection.classList.add('hidden');
        videoSection.classList.remove('hidden');
        birthdayMessage.classList.remove('hidden');
    } else {
        // ถ้าคำตอบผิด, แสดงข้อความผิด
        errorMessage.classList.remove('hidden');
    }
});

// เมื่อคลิปวิดีโอเล่นจบ
videoElement.onended = function() {
    // แสดงปุ่มให้คลิก
    showImagesButton.classList.remove('hidden');
};

// เมื่อกดปุ่มจะแสดงรูปภาพและข้อความ
showImagesButton.addEventListener('click', function() {
    // แสดงเนื้อหาทั้งหมด (รูปภาพและข้อความ)
    content.classList.remove('hidden');
    
    // ซ่อนคลิปวิดีโอ
    videoElement.classList.add('hidden');

    // ซ่อนปุ่มหลังจากคลิก
    showImagesButton.classList.add('hidden');
    
    // เล่นเสียงประกอบ
    document.getElementById('sound-effect').play();
});
