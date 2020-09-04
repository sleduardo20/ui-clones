import React from 'react';

import {
  Container,
  Condition,
  Row,
  HeartIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
} from './styles';

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition>Novo</Condition>
      <Row>
        <h1>Camiseta Infantil Branca Básica Lisa Envio 24h Uteis</h1>
        <HeartIcon />
      </Row>
      <DispatchTag>Enviando normalmente</DispatchTag>
      <PriceCard>
        <PriceRow>
          <span className="symbol">R$</span>
          <span className="fraction">35</span>
          <span className="cents">99</span>
        </PriceRow>
        <InstallmentsInfo>
          em <span>3x de R$ 11,69 sem juros</span>
        </InstallmentsInfo>
      </PriceCard>

      <StockStatus> Estoque disponível</StockStatus>
      <MethodCard>
        <CheckIcon />
        <div>
          <span className="title">Frete grátis</span>
          <span className="details">
            Chegará <p>entre os dias 8 e 11 de setembro</p>
          </span>
          <a href="#" className="more">
            Ver mais opções
          </a>
        </div>
      </MethodCard>

      <Actions>
        <Button solid>Comprar agora</Button>
        <Button>Adicionar agora</Button>
      </Actions>
      <Benefits>
        <li>
          <ShieldIcon />
          <p>
            Compra Garantida, receba o produto que está esperando ou devolvemos
            o dinheiro.
          </p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;
