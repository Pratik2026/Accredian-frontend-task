import { Button, Navbar, Dropdown } from "flowbite-react";
import logo from "../assets/logo.svg";
import { useCourseStore } from "../Store/courses";

export function Header() {
  const courses = useCourseStore((state) => state.courses);
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com" className="flex gap-4">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <Dropdown label="Courses" dismissOnClick={false}>
          {courses.map((course) => (
            <Dropdown.Item key={course.id} value={course.id}>
              {course.name}
            </Dropdown.Item>
          ))}
        </Dropdown>
      </Navbar.Brand>

      <div className="flex gap-4 items-center">
        <Navbar.Collapse>
          <Navbar.Link href="#">Refer & Earn</Navbar.Link>
          <Navbar.Link href="#">About us</Navbar.Link>
          <Navbar.Link href="#">Resources</Navbar.Link>
        </Navbar.Collapse>
        {window.innerWidth > 500 && (
          <>
            <Button className="ml-4">Login</Button>
            <Button>Try for free</Button>
          </>
        )}
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
