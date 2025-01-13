import { questCourses } from "../JS/data/course/index.js";
import { InjectionHandler } from "../JS/handlers/injection.handler.js";
import { QuestReadyEvent } from "../index.js";

// Used to insert the courses (mainly used so the neccesary variables could be declared)
async function InsertCC(courses) {
  const coursesHolder = document.getElementById("coursesholder");
  coursesHolder.innerHTML = "";
  // Insert all the courses that match the searched course
  const injection = new InjectionHandler().container(coursesHolder);
  await injection.template("../templates/coursecard.html");
  for (const [key, value] of courses) {
    injection
      .insertProps({
        courseId: key,
        name: value.title,
        duration: value.durationYears + " Years",
        courseType: value.coursetype,
        nqfLevel: `NFQ Level ${value.nqfLevel}`,
        imageLink: `../images/project/${key}.jpg`,
        shortDescription: value.description,
      })
      .inject();
  }

  const coursecards = document.querySelectorAll(".course");
  const signupBox = document.getElementById("login-form-container");
  for (const coursecard of coursecards) {
    coursecard.addEventListener("click", async (event) => {
      if (getUser() == null) return;
      setTimeout(() => {
        // these are probaly being added and removed in a few
        // places, so adding a timeout to ensure they are added
        signupBox.classList.add("signup_box_active");
        signupBox.classList.add("blur");
      }, 0);

      document.body.style.overflow = "hidden";
      const courseId = coursecard.dataset.courseId;
      const content = document.getElementById("content");
      const injection = new InjectionHandler().container(content);
      await injection.template("courseview.html");
      const course = questCourses.get(Number(courseId));
      const startDate = new Date(course.startDate);
      const endDate = new Date(startDate.setFullYear(startDate.getFullYear() + course.durationYears));
      injection
        .insertProps({
          courseId,
          title: course.title,
          startDate: startDate.toDateString(),
          endDate: endDate.toDateString(),
          longDescription: course.longdescription,
          // will break if there are no lecturers or venues
          // but our data is assumed to have at least one lecturer and venue
          lecturers: Array.from(questLecturers.entries())
            .filter(([key, _]) => course.lecturers.includes(key))
            .map(([_, value]) => value.name)
            .join(", "),
          venues: Array.from(questVenues.entries())
            .filter(([key, _]) => course.venues.includes(key))
            .map(([_, value]) => value.name)
            .join(", "),
          credits: course.credits,
          imageLink: `/assets/images/course/${courseId}.jpg`,
        })
        .inject();
      console.log(questLecturers.entries());
      document.body.style.overflow = "hidden";

      const closeButton = document.getElementById("close-button");
      closeButton.addEventListener("click", async (event) => {
        const signup_box = document.querySelector(".signup_box");
        signup_box.classList.remove("signup_box_active");
        signup_box.classList.remove("blur");
        document.body.style.overflow = "";

        const openedCourse = document.querySelector(".courseview");
        if (openedCourse) openedCourse.remove();
      });  
    });
  }
}

document.addEventListener(QuestReadyEvent, () => {
  InsertCC(questCourses);
});
