import s from "./style.module.css";

export function ListItem({ item }) {
  return (
    <tr>
      <th>Faux nom</th>
      <td className={s.price}>Faux prix €</td>
    </tr>
  );
}
