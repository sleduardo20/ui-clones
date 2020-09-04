import React from 'react';

import {
  Container,
  Row,
  Panel,
  Collumn,
  Gallery,
  Section,
  Description,
} from './styles';

import tshirtImage from '../../assets/tshirt.png';
import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>
      <Panel>
        <Collumn>
          <Gallery>
            <img src={tshirtImage} alt="T-Shirt" />
          </Gallery>
          <Info />
        </Collumn>

        <Collumn>
          <ProductAction />

          <SellerInfo />
          <WarrantySection
            title="Garantia"
            link="Saiba mais sobre garantia"
            titleDescription="Compra Garantida com o Mercado Pago"
            description="Compra Garantida com o Mercado Pago"
            titleDescription2="Garantia do vendedor"
            description2="Garantia do vendedor: 1 meses"
          />
          <WarrantySection
            title="Mercado Pontos"
            link="Saiba mais sobre Mecado Pontos"
            titleDescription="Você está no nível 2"
            description="Com esta compra você sobe de nível e consegue novos benefícios!"
          />
          <WarrantySection
            title="Devoluções grátis"
            link="Saiba mais sobre devoluções"
            description="O produto chegou com algum problema ou você simplesmente não gostou? Você terá 30 dias para devolvê-lo grátis."
          />
        </Collumn>
      </Panel>
    </Container>
  );
};

interface WarrantyProps {
  title: string;
  titleDescription?: string;
  description: string;
  titleDescription2?: string;
  description2?: string;
  link: string;
}

const WarrantySection: React.FC<WarrantyProps> = ({
  title,
  link,
  titleDescription,
  description,
  description2,
  titleDescription2,
}) => (
  <Section>
    <h4>{title}</h4>
    <div>
      <span>
        <p className="title">{titleDescription}</p>
        <p className="description">{description}</p>
      </span>
      <span>
        <p className="title">{titleDescription2}</p>
        <p className="description">{description2}</p>
      </span>
    </div>

    <a href="#">{link}</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
      <br />
      <br />
      Itens inclusos: <br />
      - 1 Manual <br />
      - 1200 peças <br />
      - Caixa <br />
      - Caixa <br />
      - Caixa <br />
      - Caixa <br /> <br />
      Donec malesuada, ligula id volutpat rutrum, elit ligula consequat lorem,
      vitae commodo mi ex vitae lorem. Quisque vel gravida magna. Morbi et est a
      dolor consectetur mollis at ac dolor. Vestibulum eros mi, ornare
      ullamcorper nibh et, consequat condimentum mi. In ut ornare lacus. Duis
      lobortis risus et sapien posuere, ut lobortis nulla cursus. Pellentesque
      nec massa non sem pharetra aliquam vel vitae nisl. Aenean facilisis nibh
      orci, sit amet feugiat mi pharetra id.
    </p>
  </Description>
);

export default Product;
