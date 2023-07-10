// import { loadCourses } from "@/lib/load-courses";

// export default async function handler(req, res) {
//     const { id } = req.query;
  
//     try {
//       const course = await loadCourseById(id);
//       res.status(200).json(course);
//     } catch (error) {
//       console.error(`Error fetching course with ID ${id}:`, error);
//       res.status(500).json({ message: "Internal Server Error" });
//     }
//   }