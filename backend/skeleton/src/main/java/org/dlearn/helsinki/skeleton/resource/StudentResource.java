package org.dlearn.helsinki.skeleton.resource;

import java.util.ArrayList;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.dlearn.helsinki.skeleton.model.Student;

@Path("/students")
public class StudentResource {
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Student> getStudents(@PathParam("student_id") int student_id){
		ArrayList<Student> students = new ArrayList<Student>();
		students.add(new Student(student_id, "lastname", "firstname", "username", "password"));
		students.add(new Student(student_id+1, "lastname2", "firstname2", "username2", "password2"));
		return students;
	}

	@GET
	@Path("/{student_id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Student getStudentFromId(@PathParam("student_id") int student_id){
		return new Student(student_id, "lastname", "firstname", "username", "password");
	}
	
	@Path("/{student_id}/spidergraphs")
	public SpiderGraphResource getSpiderGraphResource(@PathParam("student_id") int student_id){
		return new SpiderGraphResource();
	}
}