import React from "react";

// O título da página é exibido pelo componente PageSection.
// Aqui ficam apenas os parágrafos de apresentação.
const About = () => {
  return (
    <div className="d-flex flex-column about-copy">
      <p className="fs-5 text-secondary text-justify mb-3 lh-base">
        Sou Bruno Martins e estou construindo minha carreira na área de
        tecnologia. Atualmente trabalho como Analista de Suporte Júnior na STI3
        Sistemas, na área de Tecnologia da Informação e no suporte a sistemas —
        uma rotina que me coloca em contato direto com as aplicações que as
        pessoas usam e com os problemas reais do dia a dia.
      </p>
      <p className="fs-5 text-secondary text-justify mb-3 lh-base">
        Em paralelo, estudo na Fatec, onde venho aprofundando minha formação na
        área de tecnologia. Antes da Fatec, fiz o curso de Desenvolvimento de
        Sistemas no SENAI Jaú. A formação é a base que uso para entender o que
        vejo na prática: os conceitos de desenvolvimento, de banco de dados e de
        software que estão por trás dos sistemas que atendo.
      </p>
      <p className="fs-5 text-secondary text-justify mb-0 lh-base">
        Meu objetivo profissional é evoluir para o desenvolvimento de sistemas.
        O interesse por desenvolvimento de software vem da vontade de construir
        as aplicações, e não apenas dar suporte a elas. Por isso estudo, pratico
        e desenvolvo projetos próprios, buscando unir a experiência do suporte
        com a construção de soluções.
      </p>
    </div>
  );
};

export default About;
