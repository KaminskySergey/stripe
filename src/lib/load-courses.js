import axios from "axios"

export async function loadCourses() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:3000/api/course')
    const data = await res.json()
 
  return data
  }

  export async function loadCourseById({id}) {
    const allCourses = await loadCourses();
    
    const course = allCourses.find((course) => Number(course.id) === Number(id));
    
  
    if (!course) {
      throw new Error(`Course with ID ${id} not found`);
    }
  
    return course;
  }