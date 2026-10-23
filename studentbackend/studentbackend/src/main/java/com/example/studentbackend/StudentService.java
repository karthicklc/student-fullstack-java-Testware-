package com.example.studentbackend;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class StudentService {
    private final StudentRepository repository;
    public StudentService(StudentRepository repository) {
        this.repository = repository;
    }
    public List<Student> getAllStudents() {
        return repository.findAll();
    }
    public Student getStudentById(Long id) {
        return repository.findById(id).orElseThrow(() ->new RuntimeException("Student not found with id " + id));
    }
    public Student addStudent(Student student) {
        student.setId(null);
        return repository.save(student);
    }
    public Student updateStudent(Long id, Student updatedStudent) {
        Student student = getStudentById(id);
        student.setName(updatedStudent.getName());
        student.setEmail(updatedStudent.getEmail());
        student.setDepartment(updatedStudent.getDepartment());
        student.setMarks(updatedStudent.getMarks());
        return repository.save(student);
    }
    public void deleteStudent(Long id) {
        Student student = getStudentById(id);
        repository.delete(student);
    }
}
