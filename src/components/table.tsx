import { Table } from "flowbite-react";
import { useCourseStore } from "../Store/courses";

export function BenefitsTable() {

    const courses = useCourseStore((state) => state.courses);

  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell className="bg-blue-200 text-[#1350A0] w-96">Programs</Table.HeadCell>
          <Table.HeadCell className="bg-blue-200 text-[#1350A0]">Referrer Bonus</Table.HeadCell>
          <Table.HeadCell className="bg-blue-200 text-[#1350A0]">Referee Bonus</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {courses.map((course) => (
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={course.id}>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {course.name}
            </Table.Cell>
            <Table.Cell>Rs {course.referrerBonus}</Table.Cell>
            <Table.Cell>Rs {course.refereeBonus}</Table.Cell>
          </Table.Row>))}
        </Table.Body>
      </Table>
    </div>
  );
}
