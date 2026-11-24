import React from "react";

// Lista de dados no formato <dl>: termo (dt) à esquerda e valor (dd) à direita.
// Usar <dl> é a forma semanticamente correta de representar pares
// "rótulo / valor" em HTML, como cargo, empresa e período.
// O campo `pending` exibe "A confirmar" em vez de inventar informação.
const DataList = ({ items }) => {
  return (
    <dl className="row data-list mb-0">
      {items.map((item) => (
        <React.Fragment key={item.term}>
          <dt className="col-sm-4 text-secondary fw-normal">{item.term}</dt>
          <dd className="col-sm-8 mb-2 mb-sm-1">
            {item.pending ? (
              <span className="pending-badge">A confirmar</span>
            ) : (
              item.value
            )}
          </dd>
        </React.Fragment>
      ))}
    </dl>
  );
};

export default DataList;
