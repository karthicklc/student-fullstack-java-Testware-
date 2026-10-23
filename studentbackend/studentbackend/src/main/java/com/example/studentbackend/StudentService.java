package com.example.studentbackend;
import org.springframework.stereotype.Service;
import org.springframework.dao.DataIntegrityViolationException;
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
    public List<Student> searchStudents(String name) {
        if (name == null || name.isBlank()) {
            return getAllStudents();
        }
        return repository.findByNameContainingIgnoreCase(name.trim());
    }
    public Student getStudentById(Long id) {
        return repository.findById(id).orElseThrow(() -> new StudentNotFoundException(id));
    }
    public Student addStudent(Student student) {
        student.setId(null);
        checkDuplicateEmail(student.getEmail(), null);
        return repository.save(student);
    }
    public Student updateStudent(Long id, Student updatedStudent) {
        Student student = getStudentById(id);
        checkDuplicateEmail(updatedStudent.getEmail(), id);
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
    private void checkDuplicateEmail(String email, Long currentId) {
        if (email == null || email.isBlank()) {
            return;
        }
        repository.findAll().stream()
                .filter(student -> student.getEmail() != null)
                .filter(student -> student.getEmail().equalsIgnoreCase(email.trim()))
                .filter(student -> currentId == null
                        || !student.getId().equals(currentId))
                .findFirst()
                .ifPresent(student -> {
                    throw new DuplicateEmailException("Email is already registered");
                });
    }
}
