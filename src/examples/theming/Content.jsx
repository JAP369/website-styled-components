import React from 'react';
import styled from 'styled-components';

const Content = ({ className }) => {
  return (
    <section className={className}>
      <h3>section title</h3>
      <p>
        I'm baby try-hard cray subway tile coloring book literally vexillologist
        tacos bespoke farm-to-table. Before they sold out yuccie disrupt,
        biodiesel fashion axe enamel pin typewriter vaporware. Hot chicken
        intelligentsia unicorn mixtape, post-ironic occupy readymade man braid.
        Letterpress vaporware green juice tattooed. Shabby chic salvia pabst
        distillery lomo, ugh trust fund XOXO chambray disrupt. Offal put a bird
        on it pug, godard brooklyn synth hammock before they sold out. Try-hard
        keffiyeh literally, enamel pin tumeric normcore succulents direct trade
        adaptogen migas mustache aesthetic dreamcatcher snackwave.
      </p>
    </section>
  );
};

export default styled(Content)`
  text-transform: capitalize;
  padding: 2rem;
  ${(props) => `background:${props.theme.secondaryColor}`};
  ${(props) => `color:${props.theme.primaryColor}`};
`;
