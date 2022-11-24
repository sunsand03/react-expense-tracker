import s from "./style.module.css";

export function ExpenseTotal(props) {
  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Dépenses total</div>
        <div className={`col ${s.amount}`}>Faux prix €</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Argent restant</div>
        <div className={`col ${s.amount}`}>Faux prix €</div>
      </div>
    </div>
  );
}
