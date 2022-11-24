import s from "./style.module.css";

export function App() {
  return (
    <div className={s.main_container}>
      <div className={`row ${s.header}`}>
        <div className={`col-3`}>Logo</div>
        <div className={`col-9 ${s.income_input}`}>Revenu</div>
      </div>
      <div className={`row ${s.workspace}`}>
        <div className={`col-12  ${s.expense_input}`}>Input des dépenses</div>
        <div className={`col-11 col-md-6 col-lg-4 ${s.expense_list}`}>
          Historique
          <div className={`col-12 ${s.expense_total}`}>Dépenses total</div>
        </div>
      </div>
    </div>
  );
}
