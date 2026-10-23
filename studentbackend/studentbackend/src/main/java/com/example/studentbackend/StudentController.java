package com.example.studentbackend;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.List;
//@CrossOrigin(
//    origins = "http://localhost:5173",
//    methods = {
//        RequestMethod.GET,
//        RequestMethod.POST,
//        RequestMethod.PUT,
//        RequestMethod.DELETE,
//        RequestMethod.OPTIONS
//    }
//)
@RestController
@RequestMapping("/api/students")
public class StudentController {
    private final StudentService service;
    public StudentController(StudentService service) {
        this.service = service;
    }
    @GetMapping
    public List<Student> getAllStudents() {
        return service.getAllStudents();
    }
    @GetMapping("/search")
    public List<Student> searchStudents(
            @RequestParam(defaultValue = "") String name) {
        return service.searchStudents(name);
    }
    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable Long id) {
        return service.getStudentById(id);
    }
    @PostMapping
    public Student addStudent(@Valid @RequestBody Student student) {
        return service.addStudent(student);
    }
    @PutMapping("/{id}")
    public Student updateStudent(
            @PathVariable Long id,
            @Valid @RequestBody Student student) {
        return service.updateStudent(id, student);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStudent(@PathVariable Long id) {
        service.deleteStudent(id);
        return ResponseEntity.noContent().build();
    }
}
