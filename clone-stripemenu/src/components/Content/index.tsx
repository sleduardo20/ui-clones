import React from 'react';

import { CompanyWrapper, DevelopersWrapper, ProductsWrapper } from './styles';

export const Company: React.FC = () => (
  <CompanyWrapper>
    <ul className="primary">
      <li>
        <span />
        Sobre a stripe
      </li>
      <li>
        <span />
        Clientes
      </li>
      <li>
        <span />
        Corporativo
      </li>
      <li>
        <span />
        Parceiros
      </li>
      <li>
        <span />
        Empregos
      </li>
      <li>
        <span />
        Meio ambiente
      </li>
      <li>
        <span />
        Notícias
      </li>
    </ul>
    <ul className="secondary">
      <li className="title">
        <span className="title-icon" />
        Do blog
      </li>
      <li>
        Payouts with no code required
        <span className="new-tag">Novo</span>
        <span className="arrow">{'>'}</span>
      </li>
      <li>
        Introducing the Billing customer portal
        <span className="arrow">{'>'}</span>
      </li>
      <li>
        Online bank transfers through FPX are now...
        <span className="arrow">{'>'}</span>
      </li>
    </ul>
  </CompanyWrapper>
);

export const Developers: React.FC = () => (
  <DevelopersWrapper>
    <div className="primary">
      <span className="documentation" />

      <div>
        <h3>Documentação</h3>
        <p>Comece a integrar os produtos e as ferramentas da Stripe</p>

        <div>
          <ul>
            <li>
              <h4>Comece já</h4>
            </li>
            <li>Checkout pré-integrado</li>
            <li>Bibliotecas e SDKs</li>
            <li>Plugins</li>
            <li>Exemplos de código</li>
          </ul>

          <ul>
            <li>
              <h4>Guias</h4>
            </li>
            <li>Aceite pagamentos online</li>
            <li>Gerencie assinaturas</li>
            <li>Envie repasses</li>
            <li>Implemente pagamentos presenciais</li>
          </ul>
        </div>
      </div>
    </div>

    <ul className="secondary">
      <li>
        <span className="api-reference" />
        Referência completa da API
      </li>
      <li>
        <span />
        Status da API
      </li>
      <li>
        <span />
        Código aberto
      </li>
    </ul>
  </DevelopersWrapper>
);

export const Products: React.FC = () => (
  <ProductsWrapper>
    <ul className="primary">
      <li>
        <span className="payments" />

        <div>
          <h3>Payments</h3>
          <p>Plataforma completa para pagamentos online</p>
        </div>
      </li>
      <li>
        <span className="billing" />

        <div>
          <h3>Billing</h3>
          <p>Plataforma completa para pagamentos online</p>
        </div>
      </li>
      <li>
        <span className="connect" />

        <div>
          <h3>Connect</h3>
          <p>Plataforma completa para pagamentos online</p>
        </div>
      </li>
    </ul>

    <ul className="secondary">
      <li>
        <span className="sigma" />

        <h3>Sigma</h3>
        <p>Análises e relatórios comerciais avançados</p>
      </li>
      <li>
        <span className="atlas" />

        <h3>Atlas</h3>
        <p>Registro de empresas para startups</p>
      </li>
      <li>
        <span className="radar" />

        <h3>Radar</h3>
        <p>Prevenção de fraudes com machine learning</p>
      </li>
      <li>
        <span className="issuing" />

        <h3>Issuing</h3>
        <p>Criação de cartões virtuais e físicos</p>
      </li>
      <li>
        <span className="terminal" />

        <h3>Terminal</h3>
        <p>Pagamentos pessoais programáveis</p>
      </li>
    </ul>
  </ProductsWrapper>
);
