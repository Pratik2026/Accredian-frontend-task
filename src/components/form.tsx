import { ChangeEvent, FormEvent, useState } from "react";
import {
  Button,
  Label,
  TextInput,
  Select,
  Textarea,
  Toast,
} from "flowbite-react";
import axios from "axios";
import { referralRoute } from "../utils/api_routes";
import { useCourseStore } from "../Store/courses";
import { MdMarkEmailRead } from "react-icons/md";

export function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    courseId: "",
    referredBy: "",
    message: "",
  });

  const [toast, setToast] = useState(false);
  const courses = useCourseStore((state) => state.courses);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(referralRoute, formData);
      console.log(response);
      setToast(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error("Server responded with an error:", error.response.data);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error setting up the request:", error.message);
        }
      }
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  return (
    <>
      {toast && (
        <Toast>
          <MdMarkEmailRead className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
          <div className="pl-4 text-sm font-normal">
            Mail sent successfully!
          </div>
        </Toast>
      )}
      <form className="flex max-w-lg flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="Enter the referee name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="referee@email.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-2 block">
          <Label htmlFor="courseId" value="Select course" />
        </div>
        <Select
          id="courseId"
          required
          value={formData.courseId}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select a course
          </option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </Select>
        <div className="mb-2 block">
          <Label htmlFor="referredBy" value="Referred by" />
        </div>
        <TextInput
          id="referredBy"
          type="text"
          placeholder="Enter the referername"
          required
          value={formData.referredBy}
          onChange={handleChange}
        />
        <div className="mb-2 block">
          <Label htmlFor="message" value="Your message" />
        </div>
        <Textarea
          id="message"
          placeholder="Leave a message..."
          required
          rows={3}
          value={formData.message}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}
