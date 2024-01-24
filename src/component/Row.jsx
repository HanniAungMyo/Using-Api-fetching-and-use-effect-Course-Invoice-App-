import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";

const Row = ({ course: { id, title, short_name, fee } }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="row-id px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {id}
      </th>
      <td className="px-6 py-4 cell-editable row-title">{title}</td>
      <td className="px-6 py-4 cell-editable text-start row-short">
        {short_name}
      </td>
      <td className="px-6 py-4 cell-editable text-end row-fee">{fee}</td>
      <td className="px-6 py-4 flex gap-1 justify-end">
        <EditBtn id={id} />
        <DeleteBtn id={id} />
      </td>
    </tr>
  );
};

export default Row;
