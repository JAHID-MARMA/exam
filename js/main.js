// Main JavaScript file for Exam Management System

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Exam Management System loaded');
    
    // Add basic functionality here
    setupNavigation();
});

// Setup navigation functionality
function setupNavigation() {
    // Add active class to current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.backgroundColor = 'rgba(255,255,255,0.3)';
        }
    });
}

// Utility functions for the exam management system
const ExamSystem = {
    // Student management functions
    students: [],
    
    addStudent: function(student) {
        this.students.push(student);
        console.log('Student added:', student);
    },
    
    // Exam management functions
    exams: [],
    
    addExam: function(exam) {
        this.exams.push(exam);
        console.log('Exam added:', exam);
    },
    
    // Results management functions
    results: [],
    
    addResult: function(result) {
        this.results.push(result);
        console.log('Result added:', result);
    },
    
    // Report generation functions
    generateReport: function() {
        console.log('Generating report...');
        return {
            totalStudents: this.students.length,
            totalExams: this.exams.length,
            totalResults: this.results.length
        };
    }
};

// Make ExamSystem globally available
window.ExamSystem = ExamSystem;